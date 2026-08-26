"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type FocusEvent as ReactFocusEvent,
  type PointerEvent as ReactPointerEvent,
  type WheelEvent as ReactWheelEvent,
} from "react";

type UseProjectCarouselOptions = {
  enabled: boolean;
  itemCount: number;
};

export function useProjectCarousel({ enabled, itemCount }: UseProjectCarouselOptions) {
  const [activeIndex, setActiveIndex] = useState(itemCount);
  const [focusedIndex, setFocusedIndex] = useState(itemCount);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const scrollFrameRef = useRef<number | null>(null);
  const dragRef = useRef({ pointerId: null as number | null, startX: 0, startScrollLeft: 0, moved: false });
  const wheelTimerRef = useRef<number | null>(null);
  const resumeTimerRef = useRef<number | null>(null);
  const suppressClickRef = useRef(false);
  const hoveredRef = useRef(false);
  const interactingRef = useRef(false);

  function normalizeLoopPosition() {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const firstMiddleCard = carousel.querySelector<HTMLElement>(`[data-carousel-index="${itemCount}"]`);
    const firstTrailingCard = carousel.querySelector<HTMLElement>(`[data-carousel-index="${itemCount * 2}"]`);
    const track = carousel.querySelector<HTMLElement>(".project-carousel-track");
    if (!firstMiddleCard || !firstTrailingCard || !track) return;

    const gap = Number.parseFloat(getComputedStyle(track).gap) || 12;
    const step = firstMiddleCard.offsetWidth + gap;
    const cycleWidth = firstTrailingCard.offsetLeft - firstMiddleCard.offsetLeft;
    const middleStart = firstMiddleCard.offsetLeft - (carousel.clientWidth - firstMiddleCard.offsetWidth) / 2;
    const trailingStart = firstTrailingCard.offsetLeft - (carousel.clientWidth - firstTrailingCard.offsetWidth) / 2;
    let shift = 0;

    if (carousel.scrollLeft < middleStart - (step / 2)) shift = cycleWidth;
    else if (carousel.scrollLeft >= trailingStart - (step / 2)) shift = -cycleWidth;

    if (shift !== 0) {
      carousel.scrollLeft += shift;
      if (dragRef.current.pointerId !== null) dragRef.current.startScrollLeft += shift;
    }
  }

  function updateVisualFocus() {
    const carousel = carouselRef.current;
    if (!carousel) return null;
    const carouselCenter = carousel.getBoundingClientRect().left + carousel.clientWidth / 2;
    const cards = [...carousel.querySelectorAll<HTMLElement>("[data-carousel-index]")];
    const track = carousel.querySelector<HTMLElement>(".project-carousel-track");
    const gap = Number.parseFloat(track ? getComputedStyle(track).gap : "") || 12;

    cards.forEach((card) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const normalizedDistance = Math.abs(cardCenter - carouselCenter) / (card.offsetWidth + gap);
      const scale = normalizedDistance <= 1
        ? 1 - (.15 * normalizedDistance)
        : Math.max(.72, .85 - (.13 * (normalizedDistance - 1)));
      const opacity = normalizedDistance <= 1
        ? 1 - (.28 * normalizedDistance)
        : Math.max(.42, .72 - (.3 * (normalizedDistance - 1)));
      const saturation = normalizedDistance <= 1
        ? 1 - (.12 * normalizedDistance)
        : Math.max(.72, .88 - (.16 * (normalizedDistance - 1)));
      card.style.setProperty("--carousel-live-scale", scale.toFixed(4));
      card.style.setProperty("--carousel-live-opacity", opacity.toFixed(4));
      card.style.setProperty("--carousel-live-saturation", saturation.toFixed(4));
    });

    const closestCard = cards.reduce<HTMLElement | null>((closest, card) => {
      if (!closest) return card;
      const cardCenter = card.getBoundingClientRect().left + card.offsetWidth / 2;
      const closestCenter = closest.getBoundingClientRect().left + closest.offsetWidth / 2;
      return Math.abs(cardCenter - carouselCenter) < Math.abs(closestCenter - carouselCenter) ? card : closest;
    }, null);
    const nextIndex = Number(closestCard?.dataset.carouselIndex);
    if (Number.isFinite(nextIndex)) {
      setFocusedIndex((current) => current === nextIndex ? current : nextIndex);
      return nextIndex;
    }
    return null;
  }

  function snapToClosestCard() {
    const nextIndex = updateVisualFocus();
    if (nextIndex !== null) setActiveIndex(nextIndex);
  }

  function resumeAfterInteraction() {
    if (resumeTimerRef.current !== null) window.clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = window.setTimeout(() => {
      if (!hoveredRef.current) setPaused(false);
      setInteracting(false);
      interactingRef.current = false;
    }, 560);
  }

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    const carousel = carouselRef.current;
    if (!carousel) return;
    if (resumeTimerRef.current !== null) window.clearTimeout(resumeTimerRef.current);
    if (animationRef.current !== null) {
      window.cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    setPaused(true);
    setInteracting(true);
    interactingRef.current = true;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: carousel.scrollLeft,
      moved: false,
    };
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    const carousel = carouselRef.current;
    if (!carousel || drag.pointerId !== event.pointerId) return;
    const distance = event.clientX - drag.startX;
    if (Math.abs(distance) > 4 && !drag.moved) {
      drag.moved = true;
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    if (drag.moved) {
      event.preventDefault();
      carousel.scrollLeft = drag.startScrollLeft - distance;
      normalizeLoopPosition();
    }
  }

  function handlePointerEnd(event: ReactPointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    if (drag.pointerId !== event.pointerId) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    dragRef.current.pointerId = null;
    if (drag.moved) {
      suppressClickRef.current = true;
      snapToClosestCard();
      window.setTimeout(() => { suppressClickRef.current = false; }, 0);
    }
    resumeAfterInteraction();
  }

  function handleWheel(event: ReactWheelEvent<HTMLDivElement>) {
    if (Math.abs(event.deltaX) < 1) return;
    if (resumeTimerRef.current !== null) window.clearTimeout(resumeTimerRef.current);
    setPaused(true);
    setInteracting(true);
    interactingRef.current = true;
    if (wheelTimerRef.current !== null) window.clearTimeout(wheelTimerRef.current);
    wheelTimerRef.current = window.setTimeout(() => {
      snapToClosestCard();
      resumeAfterInteraction();
    }, 140);
  }

  function handleScroll() {
    if (scrollFrameRef.current !== null) return;
    scrollFrameRef.current = window.requestAnimationFrame(() => {
      scrollFrameRef.current = null;
      if (interactingRef.current) normalizeLoopPosition();
      updateVisualFocus();
    });
  }

  function handleMouseEnter() {
    hoveredRef.current = true;
    if (resumeTimerRef.current !== null) window.clearTimeout(resumeTimerRef.current);
    setPaused(true);
  }

  function handleMouseLeave() {
    hoveredRef.current = false;
    if (dragRef.current.pointerId === null) setPaused(false);
  }

  function handleFocusCapture() {
    if (resumeTimerRef.current !== null) window.clearTimeout(resumeTimerRef.current);
    setPaused(true);
  }

  function handleBlurCapture(event: ReactFocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null) && !hoveredRef.current) {
      setPaused(false);
    }
  }

  useEffect(() => {
    if (!enabled || paused) return;
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => current + 1);
    }, 2000);
    return () => window.clearInterval(intervalId);
  }, [enabled, paused]);

  useEffect(() => () => {
    if (wheelTimerRef.current !== null) window.clearTimeout(wheelTimerRef.current);
    if (resumeTimerRef.current !== null) window.clearTimeout(resumeTimerRef.current);
    if (scrollFrameRef.current !== null) window.cancelAnimationFrame(scrollFrameRef.current);
  }, []);

  useLayoutEffect(() => {
    if (!enabled) return;

    const centerActiveCard = () => {
      const carousel = carouselRef.current;
      const activeCard = carousel?.querySelector<HTMLElement>(`[data-carousel-index="${activeIndex}"]`);
      if (!carousel || !activeCard) return;
      const targetLeft = activeCard.offsetLeft - (carousel.clientWidth - activeCard.offsetWidth) / 2;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const shouldJump = reducedMotion || (activeIndex === itemCount && carousel.scrollLeft === 0);
      const resetLoopPosition = () => {
        const firstMiddleCard = carousel.querySelector<HTMLElement>(`[data-carousel-index="${itemCount}"]`);
        const firstTrailingCard = carousel.querySelector<HTMLElement>(`[data-carousel-index="${itemCount * 2}"]`);
        if (firstMiddleCard && firstTrailingCard) {
          carousel.scrollLeft -= firstTrailingCard.offsetLeft - firstMiddleCard.offsetLeft;
          updateVisualFocus();
        }
        setActiveIndex(itemCount);
        setFocusedIndex(itemCount);
      };

      if (animationRef.current !== null) {
        window.cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }

      if (shouldJump) {
        carousel.scrollLeft = targetLeft;
        updateVisualFocus();
        if (activeIndex === itemCount * 2) resetLoopPosition();
        return;
      }

      const startLeft = carousel.scrollLeft;
      const distance = targetLeft - startLeft;
      const startTime = performance.now();
      const animate = (time: number) => {
        const progress = Math.min((time - startTime) / 500, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        carousel.scrollLeft = startLeft + distance * easedProgress;
        if (progress < 1) {
          animationRef.current = window.requestAnimationFrame(animate);
        } else {
          animationRef.current = null;
          if (activeIndex === itemCount * 2) resetLoopPosition();
        }
      };
      animationRef.current = window.requestAnimationFrame(animate);
    };

    const frameId = window.requestAnimationFrame(centerActiveCard);
    const centerAfterResize = () => {
      const carousel = carouselRef.current;
      const activeCard = carousel?.querySelector<HTMLElement>(`[data-carousel-index="${activeIndex}"]`);
      if (carousel && activeCard) {
        carousel.scrollLeft = activeCard.offsetLeft - (carousel.clientWidth - activeCard.offsetWidth) / 2;
      }
    };
    window.addEventListener("resize", centerAfterResize);
    return () => {
      window.cancelAnimationFrame(frameId);
      if (animationRef.current !== null) {
        window.cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      window.removeEventListener("resize", centerAfterResize);
    };
  }, [activeIndex, enabled, itemCount]);

  return {
    activeIndex,
    focusedIndex,
    interacting,
    setActiveIndex,
    suppressClickRef,
    carouselProps: {
      ref: carouselRef,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerEnd,
      onPointerCancel: handlePointerEnd,
      onWheel: handleWheel,
      onScroll: handleScroll,
      onFocusCapture: handleFocusCapture,
      onBlurCapture: handleBlurCapture,
    },
  };
}

export type ProjectCarouselController = ReturnType<typeof useProjectCarousel>;
