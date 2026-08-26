"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "home");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    let frameId = 0;

    const updateActiveSection = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        const headerHeight = document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 0;
        const activationLine = window.scrollY + headerHeight + 12;
        const atPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
        setShowBackToTop(window.scrollY > Math.max(360, window.innerHeight * .55));

        if (atPageEnd) {
          setActiveSection(sectionIds[sectionIds.length - 1] ?? "home");
          return;
        }

        const current = sectionIds.reduce((active, id) => {
          const section = document.getElementById(id);
          return section && section.offsetTop <= activationLine ? id : active;
        }, sectionIds[0] ?? "home");

        setActiveSection(current);
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sectionIds]);

  return { activeSection, setActiveSection, showBackToTop };
}
