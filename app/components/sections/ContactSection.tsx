import type { PortfolioContent } from "../../data/content";

export function ContactSection({ content }: { content: PortfolioContent }) {
  return (
    <section className="contact section-shell" id="contact">
      <p className="kicker">{content.contactKicker}</p>
      <h2>{content.contactTitle}</h2>
      <div className="contact-bottom">
        <p>{content.contactText}</p>
        <div className="contact-actions">
          <button type="button" title={content.pendingContact}>{content.email}<span>↗</span></button>
          <button type="button" title={content.pendingContact}>{content.linkedin}<span>↗</span></button>
        </div>
      </div>
      <p className="pending-note">{content.pendingContact}</p>
    </section>
  );
}
