"use client";

import { useEffect, useRef, useState } from "react";

import type { Language, PortfolioContent } from "../../data/content";
import { expertise } from "../../data/expertise";

type ExpertiseSectionProps = {
  content: PortfolioContent;
  language: Language;
  visibleCaseIds?: number[];
};

export function ExpertiseSection({ content, language, visibleCaseIds }: ExpertiseSectionProps) {
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

      <div className="expertise-pillars">
        {expertise.map((item, index) => {
          const proofs = item.proofs.filter((proof) => !visibleCaseIds || visibleCaseIds.includes(proof.caseId));
          const availableEvidence = item.evidenceCaseIds.filter((id) => !visibleCaseIds || visibleCaseIds.includes(id));

          return (
            <article
              className={`expertise-pillar expertise-pillar-${item.kind}`}
              data-expertise-kind={item.kind}
              key={item.id}
            >
              <div className="expertise-pillar-heading">
                <span className="expertise-index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  {item.kind === "supporting" && <p>{content.supportingCapability}</p>}
                  <h3>{item.title[language]}</h3>
                  <p>{item.description[language]}</p>
                </div>
              </div>

              <div className="expertise-pillar-body">
                <div>
                  <span className="expertise-label">{content.expertiseSkillsLabel}</span>
                  <ul className="expertise-skills">
                    {item.subskills.map((skill) => <li key={skill.en}>{skill[language]}</li>)}
                  </ul>
                </div>

                <div>
                  <span className="expertise-label">{content.expertiseProofLabel}</span>
                  {proofs.length > 0 ? (
                    <div className="expertise-proofs">
                      {proofs.map((proof) => (
                        <a href={`#case-${String(proof.caseId).padStart(2, "0")}`} key={proof.caseId}>
                          <span>{proof.text[language]}</span><i aria-hidden="true">↘</i>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="expertise-pending">{content.evidencePreparing}</p>
                  )}
                  {availableEvidence.length > 0 && (
                    <p className="expertise-evidence-count">
                      +{availableEvidence.length} {language === "vi" ? "dẫn chứng bổ sung" : "additional evidence items"}
                    </p>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
