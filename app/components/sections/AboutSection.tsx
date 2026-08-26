import type { PortfolioContent } from "../../data/content";

export function AboutSection({ content }: { content: PortfolioContent }) {
  return (
    <section className="about section-shell" id="about">
      <div className="about-label">
        <p className="kicker">{content.aboutKicker}</p>
        <div className="portrait-placeholder" aria-hidden="true">
          <span>KHÁNH<br />ĐOAN</span>
          <i>PORTRAIT<br />TO BE ADDED</i>
        </div>
      </div>
      <div className="about-copy">
        <h2>{content.aboutTitle}</h2>
        <p>{content.aboutText}</p>
        <div className="principles">
          {content.principles.map((principle, index) => (
            <span key={principle}><i>0{index + 1}</i>{principle}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
