"use client";

import { useCallback, useMemo, useState } from "react";

import { categoryMap, type Category, type Language, type PortfolioContent } from "../../data/content";
import { projects, type Project } from "../../data/projects";
import { useProjectCarousel } from "../../hooks/useProjectCarousel";
import { ProjectCard } from "../projects/ProjectCard";
import { ProjectCarousel } from "../projects/ProjectCarousel";
import { ProjectModal } from "../projects/ProjectModal";

type WorkSectionProps = {
  content: PortfolioContent;
  language: Language;
};

export function WorkSection({ content, language }: WorkSectionProps) {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const carousel = useProjectCarousel({
    enabled: activeFilter === "All",
    itemCount: projects.length,
  });
  const filteredProjects = useMemo(
    () => projects.filter((project) => activeFilter === "All" || project.category === activeFilter),
    [activeFilter],
  );

  const selectProject = (project: Project, carouselIndex?: number) => {
    if (carousel.suppressClickRef.current) return;
    if (carouselIndex !== undefined) carousel.setActiveIndex(carouselIndex);
    setSelectedProject(project);
  };
  const closeProject = useCallback(() => setSelectedProject(null), []);

  return (
    <>
      <section className="work" id="work">
        <div className="section-shell">
          <div className="section-heading work-heading">
            <div>
              <p className="kicker">{content.workKicker}</p>
              <h2>{content.workTitle}</h2>
            </div>
            <p>{content.workIntro}</p>
          </div>

          <div className="filters" role="group" aria-label="Project filters">
            {content.filters.map((label) => {
              const value = categoryMap[label];
              return (
                <button
                  type="button"
                  key={label}
                  className={activeFilter === value ? "active" : ""}
                  onClick={() => setActiveFilter(value)}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {activeFilter === "All" ? (
            <ProjectCarousel
              content={content}
              controller={carousel}
              language={language}
              onSelect={selectProject}
            />
          ) : (
            <div className="project-grid project-layout-enter" key={`project-grid-${activeFilter}`}>
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={`grid-${project.id}`}
                  project={project}
                  displayIndex={index}
                  language={language}
                  viewProjectLabel={content.viewProject}
                  onSelect={selectProject}
                />
              ))}
            </div>
          )}

          <p className="confidential-note"><span>ⓘ</span>{content.confidential}</p>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          content={content}
          language={language}
          onClose={closeProject}
          project={selectedProject}
        />
      )}
    </>
  );
}
