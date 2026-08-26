/* eslint-disable @next/next/no-img-element */

"use client";

import { useEffect, useRef, useState } from "react";

import type { Language, PortfolioContent } from "../../data/content";
import type { CaseAsset } from "../../data/types";
import { getPublicAssetUrl } from "../../lib/assets";

type CaseAssetCarouselProps = {
  assets: CaseAsset[];
  caseId: number;
  content: PortfolioContent;
  language: Language;
};

export function CaseAssetCarousel({ assets, caseId, content, language }: CaseAssetCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || assets.length < 2) return;
    let touchStartX: number | null = null;

    const onTouchStart = (event: TouchEvent) => {
      touchStartX = event.changedTouches[0]?.clientX ?? null;
    };
    const onTouchEnd = (event: TouchEvent) => {
      if (touchStartX === null) return;
      const distance = (event.changedTouches[0]?.clientX ?? touchStartX) - touchStartX;
      if (Math.abs(distance) > 48) {
        const direction = distance > 0 ? -1 : 1;
        setActiveIndex((current) => (current + direction + assets.length) % assets.length);
      }
      touchStartX = null;
    };

    stage.addEventListener("touchstart", onTouchStart, { passive: true });
    stage.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      stage.removeEventListener("touchstart", onTouchStart);
      stage.removeEventListener("touchend", onTouchEnd);
    };
  }, [assets.length]);

  if (assets.length === 0) return null;

  const move = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + assets.length) % assets.length);
  };
  const activeAsset = assets[activeIndex];

  return (
    <div
      className="case-assets"
      role="group"
      aria-label={`${caseId} — ${activeIndex + 1}/${assets.length}`}
    >
      <div className="case-asset-stage" ref={stageRef}>
        {activeAsset.type === "video" ? (
          <video
            controls
            key={activeAsset.src}
            poster={activeAsset.poster ? getPublicAssetUrl(activeAsset.poster) : undefined}
            preload="metadata"
          >
            <source src={getPublicAssetUrl(activeAsset.src)} />
            <track
              default
              kind="captions"
              label={language === "vi" ? "Phụ đề" : "Captions"}
              src={activeAsset.captions ? getPublicAssetUrl(activeAsset.captions) : "data:text/vtt,WEBVTT"}
              srcLang={language}
            />
          </video>
        ) : (
          <img
            alt={activeAsset.alt[language]}
            key={activeAsset.src}
            loading="lazy"
            src={getPublicAssetUrl(activeAsset.src)}
          />
        )}
        {activeAsset.platform && <span className="case-asset-platform">{activeAsset.platform}</span>}
      </div>

      {assets.length > 1 && (
        <div className="case-asset-controls">
          <button
            type="button"
            onClick={() => move(-1)}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") move(-1);
              if (event.key === "ArrowRight") move(1);
            }}
            aria-label={content.previousAsset}
          >←</button>
          <div className="case-asset-dots" aria-label={`${activeIndex + 1}/${assets.length}`}>
            {assets.map((asset, index) => (
              <button
                type="button"
                aria-label={`${index + 1}/${assets.length}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={index === activeIndex ? "active" : ""}
                key={`${asset.src}-${index}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          <span>{activeIndex + 1}/{assets.length}</span>
          <button
            type="button"
            onClick={() => move(1)}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") move(-1);
              if (event.key === "ArrowRight") move(1);
            }}
            aria-label={content.nextAsset}
          >→</button>
        </div>
      )}
    </div>
  );
}
