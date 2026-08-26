"use client";

import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { ExpertiseSection } from "./components/sections/ExpertiseSection";
import { HeroSection } from "./components/sections/HeroSection";
import { NumbersSection } from "./components/sections/NumbersSection";
import { WorkSection } from "./components/sections/WorkSection";
import { SiteCursor } from "./components/ui/SiteCursor";
import { copy } from "./data/content";
import { useActiveSection } from "./hooks/useActiveSection";
import { useLanguage } from "./hooks/useLanguage";

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const content = copy[language];
  const { activeSection, setActiveSection, showBackToTop } = useActiveSection(copy.vi.navIds);

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
      <ExpertiseSection content={content} />
      <WorkSection content={content} language={language} />
      <AboutSection content={content} />
      <ExperienceSection content={content} />
      <ContactSection content={content} />
      <Footer content={content} language={language} showBackToTop={showBackToTop} />
    </main>
  );
}
