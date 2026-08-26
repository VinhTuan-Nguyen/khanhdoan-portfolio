import type { Language, PortfolioContent } from "../../data/content";

type FooterProps = {
  content: PortfolioContent;
  language: Language;
  showBackToTop: boolean;
};

export function Footer({ content, language, showBackToTop }: FooterProps) {
  return (
    <footer>
      <div className="section-shell footer-inner">
        <div><strong>Khánh Đoan</strong><span>{content.footer}</span></div>
        <span>© 2026 · HO CHI MINH CITY, VN</span>
        <a
          className={showBackToTop ? "back-to-top is-visible" : "back-to-top"}
          href="#home"
          aria-label={language === "vi" ? "Trở về đầu trang" : "Back to top"}
          aria-hidden={!showBackToTop}
          tabIndex={showBackToTop ? 0 : -1}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 19V5M6.5 10.5 12 5l5.5 5.5" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
