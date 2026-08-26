/* eslint-disable @next/next/no-img-element */

import type { Language, PortfolioContent } from "../../data/content";
import type { CaseStudy } from "../../data/types";
import { getPublicAssetUrl } from "../../lib/assets";
import { ProjectArrowIcon } from "../ui/Icons";

type CaseCardProps = {
  caseStudy: CaseStudy;
  content: PortfolioContent;
  language: Language;
  onSelect: (caseStudy: CaseStudy) => void;
  previewMode: boolean;
};

export function CaseCard({ caseStudy, content, language, onSelect, previewMode }: CaseCardProps) {
  const metrics = caseStudy.metrics.filter((metric) => metric.verified || previewMode).slice(0, 2);
  const caseNumber = String(caseStudy.id).padStart(2, "0");

  return (
    <article
      className={`case-card case-card-${caseStudy.coverVariant}`}
      data-case-tier="flagship"
      data-has-cover={caseStudy.coverImage ? "true" : "false"}
      id={`case-${caseNumber}`}
    >
      <button
        className="case-card-hitbox"
        type="button"
        onClick={() => onSelect(caseStudy)}
        aria-label={`${content.viewProject}: ${caseStudy.title[language]}`}
      />

      {caseStudy.coverImage && (
        <div className="case-card-media">
          <img
            alt={`${caseStudy.industry[language]} — ${caseStudy.title[language]}`}
            loading="lazy"
            src={getPublicAssetUrl(caseStudy.coverImage)}
          />
        </div>
      )}

      <div className="case-card-content">
        <div className="case-card-topline">
          <span>CASE {caseNumber}</span>
          <span>{caseStudy.industry[language]}</span>
        </div>

        <div className="discipline-tags" aria-label={caseStudy.disciplineTags.join(", ")}>
          {caseStudy.disciplineTags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>

        <h3>{caseStudy.title[language]}</h3>
        <p className="case-card-description">{caseStudy.cardDescription[language]}</p>

        {metrics.length > 0 && (
          <dl className="case-card-metrics">
            {metrics.map((metric) => (
              <div data-metric-status={metric.verified ? "verified" : "pending"} key={metric.label.en}>
                <dt>{metric.label[language]}</dt>
                <dd>{metric.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="case-role-tags">
          {caseStudy.roleTags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>

        <span className="case-card-link">{content.viewProject}<ProjectArrowIcon /></span>
      </div>
    </article>
  );
}
