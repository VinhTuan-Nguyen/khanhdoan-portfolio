import type { Language } from "../../data/content";
import type { Project } from "../../data/projects";
import { ProjectArrowIcon } from "../ui/Icons";

type ProjectCardProps = {
  carouselIndex?: number;
  displayIndex: number;
  duplicate?: boolean;
  focusedCarouselIndex?: number;
  language: Language;
  onActivateCarouselCard?: (index: number) => void;
  onSelect: (project: Project, carouselIndex?: number) => void;
  project: Project;
  viewProjectLabel: string;
};

export function ProjectCard({
  carouselIndex,
  displayIndex,
  duplicate = false,
  focusedCarouselIndex,
  language,
  onActivateCarouselCard,
  onSelect,
  project,
  viewProjectLabel,
}: ProjectCardProps) {
  const isCarouselCard = carouselIndex !== undefined;
  const distanceFromActive = isCarouselCard && focusedCarouselIndex !== undefined
    ? Math.abs(carouselIndex - focusedCarouselIndex)
    : 0;
  const carouselClass = !isCarouselCard
    ? ""
    : distanceFromActive === 0
      ? " carousel-card-active"
      : distanceFromActive === 1
        ? " carousel-card-adjacent"
        : " carousel-card-distant";

  return (
    <article
      className={`project-card project-${project.tone}${carouselClass}`}
      data-carousel-index={carouselIndex}
      aria-hidden={duplicate ? true : undefined}
    >
      <button
        className="project-hitbox"
        type="button"
        tabIndex={duplicate ? -1 : 0}
        onFocus={() => {
          if (isCarouselCard) onActivateCarouselCard?.(carouselIndex);
        }}
        onClick={() => onSelect(project, carouselIndex)}
        aria-label={`${viewProjectLabel}: ${project.title[language]}`}
        aria-current={isCarouselCard && carouselIndex === focusedCarouselIndex ? "true" : undefined}
      />
      <div className="project-visual">
        <span className="project-number">0{displayIndex + 1}</span>
        <div className="visual-orbit" aria-hidden="true"><i /><i /><i /></div>
        <strong>{project.metric}</strong>
        <span className="visual-label">PERFORMANCE / CREATIVE</span>
      </div>
      <div className="project-content">
        <p className="project-eyebrow">{project.eyebrow[language]}</p>
        <h3>{project.title[language]}</h3>
        <p>{project.description[language]}</p>
        <div className="project-meta">
          <span>{project.role[language]}</span>
          <span>{project.period[language]}</span>
        </div>
        <span className="project-link">{viewProjectLabel}<ProjectArrowIcon /></span>
      </div>
    </article>
  );
}
