"use client";

import { useCallback, useMemo, useState } from "react";

import type { Language, PortfolioContent } from "../../data/content";
import type { CaseStudy } from "../../data/types";
import { AdditionalEvidence } from "../cases/AdditionalEvidence";
import { CaseCard } from "../cases/CaseCard";
import { CaseDetailModal } from "../cases/CaseDetailModal";

type WorkSectionProps = {
  caseStudies: CaseStudy[];
  content: PortfolioContent;
  language: Language;
  previewMode: boolean;
};

export function WorkSection({ caseStudies, content, language, previewMode }: WorkSectionProps) {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const flagshipCases = useMemo(
    () => caseStudies
      .filter((item) => item.presentationTier === "flagship")
      .sort((left, right) => (left.featuredRank ?? 99) - (right.featuredRank ?? 99)),
    [caseStudies],
  );
  const evidenceCases = useMemo(
    () => caseStudies
      .filter((item) => item.presentationTier === "evidence-only")
      .sort((left, right) => left.id - right.id),
    [caseStudies],
  );
  const closeCase = useCallback(() => setSelectedCase(null), []);

  return (
    <>
      <section className="work case-studies" id="work">
        <div className="section-shell">
          <div className="section-heading work-heading">
            <div>
              <p className="kicker">{content.workKicker}</p>
              <h2>{content.workTitle}</h2>
            </div>
            <p>{content.workIntro}</p>
          </div>

          {previewMode && <p className="case-preview-notice"><span>PREVIEW</span>{content.previewNotice}</p>}

          {flagshipCases.length > 0 ? (
            <div className="selected-case-grid">
              {flagshipCases.map((caseStudy) => (
                <CaseCard
                  caseStudy={caseStudy}
                  content={content}
                  key={caseStudy.id}
                  language={language}
                  onSelect={setSelectedCase}
                  previewMode={previewMode}
                />
              ))}
            </div>
          ) : (
            <div className="case-empty-state" role="status">
              <span>CASE STUDIES</span>
              <p>{content.noPublishedCases}</p>
            </div>
          )}

          <AdditionalEvidence caseStudies={evidenceCases} content={content} language={language} />
          <p className="confidential-note"><span>ⓘ</span>{content.confidential}</p>
        </div>
      </section>

      {selectedCase?.detail && (
        <CaseDetailModal
          caseStudy={selectedCase}
          content={content}
          language={language}
          onClose={closeCase}
          previewMode={previewMode}
        />
      )}
    </>
  );
}
