"use client";

import { useState } from "react";

import type { Language, PortfolioContent } from "../../data/content";
import { DownloadIcon } from "../ui/Icons";

type HeaderProps = {
  activeSection: string;
  content: PortfolioContent;
  language: Language;
  onLanguageChange: (language: Language) => void;
  onNavigate: (sectionId: string) => void;
};

export function Header({ activeSection, content, language, onLanguageChange, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const switchLanguage = (nextLanguage: Language) => {
    onLanguageChange(nextLanguage);
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Khánh Đoan — Home">
        <span>KĐ</span>
        <strong>Khánh Đoan</strong>
      </a>

      <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Main navigation">
        {content.nav.map((item, index) => {
          const sectionId = content.navIds[index];
          return (
            <a
              key={item}
              href={`#${sectionId}`}
              className={activeSection === sectionId ? "active" : ""}
              aria-current={activeSection === sectionId ? "page" : undefined}
              onClick={() => {
                onNavigate(sectionId);
                setMenuOpen(false);
              }}
            >
              {item}
            </a>
          );
        })}
      </nav>

      <div className="header-actions">
        <div className="language-switch" data-language={language} role="group" aria-label="Language selector">
          <span className="language-switch-indicator" aria-hidden="true" />
          <button type="button" className={language === "vi" ? "active" : ""} aria-pressed={language === "vi"} onClick={() => switchLanguage("vi")}>VI</button>
          <button type="button" className={language === "en" ? "active" : ""} aria-pressed={language === "en"} onClick={() => switchLanguage("en")}>EN</button>
        </div>
        <button className="cv-button" type="button" title={content.cvSoon} aria-label={`${content.download} — ${content.cvSoon}`}>
          {content.download}<DownloadIcon />
        </button>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? content.closeMenu : content.menu}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
