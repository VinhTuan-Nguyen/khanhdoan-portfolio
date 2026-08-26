"use client";

import type { PortfolioContent } from "../../data/content";
import { useExperienceRoadmap } from "../../hooks/useExperienceRoadmap";
import { ArrowDownIcon } from "../ui/Icons";

function LanaLogo() {
  return (
    <svg className="company-logo" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="1" y="1" width="22" height="22" rx="6" />
      <path d="M7.5 6.5v11h8.8M11 6.5v7.2h5.3" />
    </svg>
  );
}

function ExperienceMilestoneLogo({ company }: { company: string }) {
  if (company.startsWith("LANA")) return <LanaLogo />;

  const label = company.startsWith("Lạc")
    ? "LẠC"
    : company === "Freelance"
      ? "Freelance"
      : "S4S";

  return <span className="milestone-monogram" aria-hidden="true">{label}</span>;
}

export function ExperienceSection({ content }: { content: PortfolioContent }) {
  const { roadmapRef, activeIndex } = useExperienceRoadmap();

  return (
    <section className="experience" id="experience">
      <div className="section-shell experience-intro">
        <div>
          <p className="kicker">{content.experienceKicker}</p>
          <h2>{content.experienceTitle}</h2>
          <div className="roadmap-scroll-cue" aria-hidden="true">
            <span>{content.experienceScrollLabel}</span>
            <i><ArrowDownIcon /></i>
          </div>
        </div>
      </div>

      <div
        className="section-shell experience-roadmap"
        ref={roadmapRef}
        role="list"
        aria-label={content.experienceTitle}
      >
        <svg className="roadmap-line" viewBox="0 0 100 1000" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="roadmap-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#84b3ce" />
              <stop offset="0.48" stopColor="#7da8bc" />
              <stop offset="1" stopColor="#16587b" />
            </linearGradient>
          </defs>
          <path
            className="roadmap-path roadmap-path-progress"
            d="M50 0 C50 60 64 70 64 125 C64 220 36 280 36 375 C36 470 64 530 64 625 C64 720 36 780 36 875 C36 940 50 965 50 1000"
            pathLength="1"
          />
        </svg>
        {content.experiences.map((experience, index) => {
          const isRevealed = index <= activeIndex;
          const isActive = index === activeIndex;
          const brandClass = experience.company.startsWith("LANA")
            ? "lana"
            : experience.company.startsWith("Lạc")
              ? "lac"
              : experience.company === "Freelance"
                ? "freelance"
                : "s4s";

          return (
            <div
              className={`roadmap-step roadmap-step-${index % 2 === 0 ? "left" : "right"}${isRevealed ? " is-revealed" : ""}${isActive ? " is-active" : ""}`}
              key={`${experience.start}-${experience.role}`}
              role="listitem"
            >
              <div className={`roadmap-milestone milestone-${brandClass}`} aria-hidden="true">
                <span className="milestone-ring" />
                <span className="milestone-logo"><ExperienceMilestoneLogo company={experience.company} /></span>
              </div>

              <article className="experience-card" aria-current={isActive ? "step" : undefined}>
                <div className="experience-date">
                  <span>{experience.start}</span>
                  <i>→</i>
                  <span>{experience.end}</span>
                </div>
                <div className="experience-body">
                  <div>
                    <p className="company-name">{experience.company}</p>
                    <h3>{experience.role}</h3>
                  </div>
                  <p>{experience.text}</p>
                  <div className="experience-tags">
                    {experience.tags.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
