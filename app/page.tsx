import { PortfolioClient } from "./components/PortfolioClient";
import { getCaseStudiesForRender } from "./lib/cases";

export default function Home() {
  const previewMode = process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_CASE_PREVIEW === "1";
  const caseStudies = getCaseStudiesForRender({ preview: previewMode });

  return <PortfolioClient caseStudies={caseStudies} previewMode={previewMode} />;
}
