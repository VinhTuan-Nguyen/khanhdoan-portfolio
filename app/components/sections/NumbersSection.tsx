"use client";

import type { Language, PortfolioContent } from "../../data/content";
import { placeStatTooltip, useAnimatedStats } from "../../hooks/useAnimatedStats";

function formatStatValue(index: number, value: number, language: Language) {
  if (index === 0) return `${value}+`;
  if (index === 1) {
    if (language === "en") return `$${Math.round((value / 600) * 23)}K+`;
    return `${value}M+`;
  }
  if (index === 2) return value.toString().padStart(2, "0");
  return `${value}°`;
}

type NumbersSectionProps = {
  content: PortfolioContent;
  language: Language;
};

export function NumbersSection({ content, language }: NumbersSectionProps) {
  const { sectionRef, isVisible, values } = useAnimatedStats(language);

  return (
    <section className="numbers" id="numbers" aria-label="Key numbers" ref={sectionRef}>
      <div className="section-shell numbers-grid">
        {content.stats.map((label, index) => (
          <div
            className={isVisible ? "stat is-visible" : "stat"}
            key={label}
            aria-label={`${content.statsValues[index]} ${label}`}
            onMouseEnter={(event) => placeStatTooltip(event.currentTarget)}
            onFocusCapture={(event) => placeStatTooltip(event.currentTarget)}
          >
            <strong aria-hidden="true">
              <span>{formatStatValue(index, values[index], language)}</span>
            </strong>
            <span>{label}</span>
            <button
              className="stat-info-trigger"
              type="button"
              aria-label={`${content.statsValues[index]} ${label}`}
              aria-describedby={`stat-tooltip-${index}`}
            >
              i
            </button>
            <div className="stat-tooltip" id={`stat-tooltip-${index}`} role="tooltip">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{content.statDescriptions[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
