import type { Language, PortfolioContent } from "../../data/content";
import { expertise } from "../../data/expertise";
import type { CaseStudy } from "../../data/types";

type AdditionalEvidenceProps = {
  caseStudies: CaseStudy[];
  content: PortfolioContent;
  language: Language;
};

export function AdditionalEvidence({ caseStudies, content, language }: AdditionalEvidenceProps) {
  return (
    <section className="additional-evidence" id="additional-evidence" aria-labelledby="additional-evidence-title">
      <div className="evidence-heading">
        <div>
          <p className="kicker">{content.evidenceKicker}</p>
          <h3 id="additional-evidence-title">{content.evidenceTitle}</h3>
        </div>
        <p>{content.evidenceIntro}</p>
      </div>

      {caseStudies.length > 0 ? (
        <div className="evidence-list">
          {caseStudies.map((caseStudy) => {
          const primaryCapability = expertise.find((item) => item.id === caseStudy.capabilityIds[0]);
          const caseNumber = String(caseStudy.id).padStart(2, "0");

          return (
            <article className="evidence-item" data-evidence-case={caseNumber} id={`case-${caseNumber}`} key={caseStudy.id}>
              <span className="evidence-number">{caseNumber}</span>
              <div className="evidence-copy">
                <p>{caseStudy.industry[language]}</p>
                <h4>{caseStudy.title[language]}</h4>
                <span>{caseStudy.evidenceSummary[language]}</span>
              </div>
              <div className="evidence-meta">
                {primaryCapability && <span>{primaryCapability.title[language]}</span>}
                <small>{caseStudy.roleTags.join(" · ")}</small>
              </div>
            </article>
          );
          })}
        </div>
      ) : (
        <div className="evidence-empty-state"><p>{content.noPublishedCases}</p></div>
      )}
    </section>
  );
}
