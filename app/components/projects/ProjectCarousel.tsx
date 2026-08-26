import type { Language, PortfolioContent } from "../../data/content";
import { projects, type Project } from "../../data/projects";
import type { ProjectCarouselController } from "../../hooks/useProjectCarousel";
import { ProjectCard } from "./ProjectCard";

type ProjectCarouselProps = {
  content: PortfolioContent;
  controller: ProjectCarouselController;
  language: Language;
  onSelect: (project: Project, carouselIndex?: number) => void;
};

export function ProjectCarousel({ content, controller, language, onSelect }: ProjectCarouselProps) {
  return (
    <div
      className={`project-carousel project-layout-enter${controller.interacting ? " is-interacting" : ""}`}
      {...controller.carouselProps}
    >
      <div className="project-carousel-track">
        {[0, 1, 2].map((setIndex) => projects.map((project, index) => {
          const carouselIndex = (setIndex * projects.length) + index;
          return (
            <ProjectCard
              key={`carousel-${setIndex}-${project.id}`}
              project={project}
              displayIndex={index}
              carouselIndex={carouselIndex}
              duplicate={setIndex !== 1}
              focusedCarouselIndex={controller.focusedIndex}
              language={language}
              viewProjectLabel={content.viewProject}
              onActivateCarouselCard={controller.setActiveIndex}
              onSelect={onSelect}
            />
          );
        }))}
      </div>
    </div>
  );
}
