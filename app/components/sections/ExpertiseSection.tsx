"use client";

import { useEffect, useRef, useState } from "react";

import type { PortfolioContent } from "../../data/content";

export function ExpertiseSection({ content }: { content: PortfolioContent }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={isVisible ? "expertise section-shell is-visible" : "expertise section-shell"}
      id="expertise"
      ref={sectionRef}
    >
      <div className="section-heading">
        <div>
          <p className="kicker">{content.expertiseKicker}</p>
          <h2>{content.expertiseTitle}</h2>
        </div>
        <p>{content.expertiseIntro}</p>
      </div>

      <div className="expertise-list">
        {content.expertise.map(([number, title, description]) => (
          <article className="expertise-row" key={number}>
            <span className="index">{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <span className="row-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}
