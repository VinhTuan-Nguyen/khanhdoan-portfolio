"use client";

import { useEffect, useRef, useState } from "react";

import { statTargets, type Language } from "../data/content";

export function placeStatTooltip(stat: HTMLElement) {
  const tooltip = stat.querySelector<HTMLElement>(".stat-tooltip");
  if (!tooltip) return;

  const headerBottom = document.querySelector<HTMLElement>(".site-header")?.getBoundingClientRect().bottom ?? 0;
  const availableAbove = stat.getBoundingClientRect().top - headerBottom;
  const requiredAbove = tooltip.offsetHeight + 18;
  stat.dataset.tooltipPlacement = availableAbove >= requiredAbove ? "top" : "bottom";
}

export function useAnimatedStats(language: Language) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [values, setValues] = useState<number[]>(statTargets.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frameId = 0;
    let hasStarted = false;

    const startAnimation = () => {
      if (hasStarted) return;
      hasStarted = true;
      setIsVisible(false);
      setValues(statTargets.map(() => 0));

      frameId = window.requestAnimationFrame(() => {
        setIsVisible(true);

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setValues([...statTargets]);
          return;
        }

        const duration = 1350;
        const stagger = 110;
        const startTime = window.performance.now();

        const update = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const nextValues = statTargets.map((target, index) => {
            const progress = Math.min(Math.max((elapsed - index * stagger) / duration, 0), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            return Math.round(target * eased);
          });

          setValues(nextValues);

          if (elapsed < duration + stagger * (statTargets.length - 1)) {
            frameId = window.requestAnimationFrame(update);
          }
        };

        frameId = window.requestAnimationFrame(update);
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameId);
    };
  }, [language]);

  useEffect(() => {
    let frameId = 0;

    const updateOpenTooltips = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        document.querySelectorAll<HTMLElement>(".stat:hover, .stat:focus-within").forEach(placeStatTooltip);
      });
    };

    window.addEventListener("scroll", updateOpenTooltips, { passive: true });
    window.addEventListener("resize", updateOpenTooltips);
    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateOpenTooltips);
      window.removeEventListener("resize", updateOpenTooltips);
    };
  }, []);

  return { sectionRef, isVisible, values };
}
