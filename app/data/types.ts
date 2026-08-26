export type Language = "vi" | "en";

export type LocalizedText = {
  vi: string;
  en: string;
};

export type DisciplineTag =
  | "Ads"
  | "Account"
  | "Copywriting"
  | "Design"
  | "Video Editing";

export type CapabilityId =
  | "paid-media-strategy"
  | "lead-generation-funnel"
  | "performance-analysis"
  | "account-integrated-management"
  | "brand-content-creative";

export type DataStatus = "draft" | "needs-verification" | "approved";
export type PresentationTier = "flagship" | "evidence-only" | "hidden";

export type VerifiedMetric = {
  label: LocalizedText;
  value: string;
  verified: boolean;
};

export type CaseAsset = {
  src: string;
  type: "image" | "video";
  alt: LocalizedText;
  platform?: string;
  poster?: string;
  captions?: string;
};

export type CaseDetail = {
  overview: LocalizedText;
  strategy: LocalizedText;
  results: LocalizedText;
  accountScope?: LocalizedText;
  insight?: LocalizedText;
};

export type CaseStudy = {
  id: number;
  slug: string;
  disciplineTags: DisciplineTag[];
  capabilityIds: CapabilityId[];
  presentationTier: PresentationTier;
  featuredRank?: number;
  industry: LocalizedText;
  title: LocalizedText;
  cardDescription: LocalizedText;
  evidenceSummary: LocalizedText;
  roles: LocalizedText;
  roleTags: string[];
  dataPeriod?: LocalizedText;
  collaborationDuration?: LocalizedText;
  engagement?: LocalizedText;
  platforms: string[];
  metrics: VerifiedMetric[];
  detail?: CaseDetail;
  coverVariant: CapabilityId;
  coverImage?: string;
  assets: CaseAsset[];
  confidential: boolean;
  dataStatus: DataStatus;
};

export type ExpertiseProof = {
  caseId: number;
  text: LocalizedText;
};

export type Expertise = {
  id: CapabilityId;
  kind: "core" | "supporting";
  title: LocalizedText;
  description: LocalizedText;
  subskills: LocalizedText[];
  proofs: ExpertiseProof[];
  evidenceCaseIds: number[];
};
