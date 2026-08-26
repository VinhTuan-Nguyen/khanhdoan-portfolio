"use client";

import { useEffect, useState } from "react";

import type { Language, PortfolioContent } from "../../data/content";
import { ArrowDownIcon, ArrowDownRightIcon, DownloadIcon } from "../ui/Icons";

function AnimatedSpend() {
  const target = 600;
  const [value, setValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frameId = 0;

    frameId = window.requestAnimationFrame(() => {
      setIsVisible(true);

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setValue(target);
        return;
      }

      const duration = 950;
      const startTime = window.performance.now();

      const update = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * eased));

        if (progress < 1) frameId = window.requestAnimationFrame(update);
      };

      frameId = window.requestAnimationFrame(update);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [target]);

  const formattedValue = `${value}M`;
  const accessibleValue = "VND 600M+";

  return (
    <strong className={isVisible ? "board-spend is-visible" : "board-spend"} aria-label={accessibleValue}>
      <span aria-hidden="true">{formattedValue}</span><sup aria-hidden="true">+</sup>
    </strong>
  );
}

type HeroSectionProps = {
  content: PortfolioContent;
  language: Language;
};

export function HeroSection({ content, language }: HeroSectionProps) {
  const [descriptionLead, descriptionTail] = content.heroDescription.split("Khánh Đoan");

  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy">
        <p className="kicker reveal">{content.heroLabel}</p>
        <h1 className="reveal reveal-delay-1">
          {content.heroTitleA}<br />
          <em>{content.heroTitleB}</em>
        </h1>
        <p className="hero-description reveal reveal-delay-2">
          {descriptionLead}<strong className="hero-name">Khánh Đoan</strong>{descriptionTail}
        </p>
        <div className="hero-actions reveal reveal-delay-3">
          <a className="primary-button" href="#work">{content.viewWork}<ArrowDownRightIcon /></a>
          <button className="text-button" type="button" title={content.cvSoon}>{content.download}<DownloadIcon /></button>
        </div>
      </div>

      <div className="performance-board-reveal reveal reveal-delay-2">
        <div className="performance-board-stage">
          <div className="performance-board" aria-label={content.livePanel}>
            <div className="board-head">
              <span>{content.livePanel}</span>
              <span className="status"><i /> {content.active}</span>
            </div>
            <div className="board-main">
              <p>{content.monthlySpend}</p>
              <AnimatedSpend key={language} />
              <span className="board-currency">{content.monthlySpendCurrency}</span>
            </div>
            <div className="mini-chart" aria-hidden="true">
              <span style={{ height: "28%" }} />
              <span style={{ height: "43%" }} />
              <span style={{ height: "36%" }} />
              <span style={{ height: "58%" }} />
              <span style={{ height: "52%" }} />
              <span style={{ height: "72%" }} />
              <span style={{ height: "64%" }} />
              <span style={{ height: "88%" }} />
            </div>
            <div className="board-grid">
              <div><span>{content.platforms}</span><strong>04</strong><small>META · TIKTOK · GOOGLE · YOUTUBE</small></div>
              <div><span>{content.testing}</span><strong>∞</strong><small>{content.optimization.toUpperCase()}</small></div>
            </div>
          </div>
        </div>
      </div>

      <a className="scroll-cue" href="#numbers"><ArrowDownIcon />{content.scroll}</a>
    </section>
  );
}
