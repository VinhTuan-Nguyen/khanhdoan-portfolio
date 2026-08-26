"use client";

import type { CaseStudy } from "../data/types";
import { copy } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";
import { useLanguage } from "../hooks/useLanguage";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { ExpertiseSection } from "./sections/ExpertiseSection";
import { HeroSection } from "./sections/HeroSection";
import { NumbersSection } from "./sections/NumbersSection";
import { WorkSection } from "./sections/WorkSection";
import { SiteCursor } from "./ui/SiteCursor";

type PortfolioClientProps = {
  caseStudies: CaseStudy[];
  previewMode: boolean;
};

export function PortfolioClient({ caseStudies, previewMode }: PortfolioClientProps) {
  const { language, setLanguage } = useLanguage();
  const content = copy[language];
  const { activeSection, setActiveSection, showBackToTop } = useActiveSection(copy.vi.navIds);
  const visibleCaseIds = caseStudies.map((item) => item.id);

  return (
    <main>
      <SiteCursor />
      <Header
        activeSection={activeSection}
        content={content}
        language={language}
        onLanguageChange={setLanguage}
        onNavigate={setActiveSection}
      />
      <HeroSection content={content} language={language} />
      <NumbersSection content={content} language={language} />
      <AboutSection content={content} />
      <ExpertiseSection content={content} language={language} visibleCaseIds={visibleCaseIds} />
      <WorkSection
        caseStudies={caseStudies}
        content={content}
        language={language}
        previewMode={previewMode}
      />
      <ExperienceSection content={content} />
      <ContactSection content={content} />
      <Footer content={content} language={language} showBackToTop={showBackToTop} />
    </main>
  );
}
