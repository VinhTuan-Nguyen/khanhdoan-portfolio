"use client";

import { useEffect } from "react";

import type { Language, PortfolioContent } from "../../data/content";
import type { Project } from "../../data/projects";

type ProjectModalProps = {
  content: PortfolioContent;
  language: Language;
  onClose: () => void;
  project: Project;
};

export function ProjectModal({ content, language, onClose, project }: ProjectModalProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => {
      if (event.currentTarget === event.target) onClose();
    }}>
      <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="case-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label={content.close}>×</button>
        <div className={`modal-visual project-${project.tone}`}>
          <span>{project.eyebrow[language]}</span>
          <strong>{project.metric}</strong>
          <i>KD / CASE STUDY</i>
        </div>
        <div className="modal-content">
          <p className="kicker">{content.caseInProgress}</p>
          <h2 id="case-title">{project.title[language]}</h2>
          <div className="modal-meta">
            <div><span>{content.myRole}</span><strong>{project.role[language]}</strong></div>
            <div><span>{content.period}</span><strong>{project.period[language]}</strong></div>
          </div>
          <div className="case-block"><span>01 · {content.overview}</span><p>{project.overview[language]}</p></div>
          <div className="case-block"><span>02 · {content.approach}</span><p>{project.approach[language]}</p></div>
          <div className="case-block"><span>03 · {content.results}</span><p>{project.result[language]}</p></div>
          <p className="modal-note">ⓘ {content.confidential}</p>
        </div>
      </section>
    </div>
  );
}
