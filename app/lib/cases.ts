import { caseStudies } from "../data/cases";
import { expertise } from "../data/expertise";
import type { CaseStudy, LocalizedText } from "../data/types";

const INTERNAL_MARKERS = ["🟨", "[___]", "⇔", "để chỗ"];

function hasLocalizedText(value: LocalizedText | undefined) {
  return Boolean(value?.vi.trim() && value?.en.trim());
}

function collectPublicText(item: CaseStudy) {
  return [
    item.slug,
    item.industry.vi,
    item.industry.en,
    item.title.vi,
    item.title.en,
    item.cardDescription.vi,
    item.cardDescription.en,
    item.evidenceSummary.vi,
    item.evidenceSummary.en,
    item.roles.vi,
    item.roles.en,
    item.detail?.overview.vi,
    item.detail?.overview.en,
    item.detail?.strategy.vi,
    item.detail?.strategy.en,
    item.detail?.results.vi,
    item.detail?.results.en,
    item.detail?.accountScope?.vi,
    item.detail?.accountScope?.en,
    item.detail?.insight?.vi,
    item.detail?.insight?.en,
  ].filter(Boolean).join(" ");
}

export function validateCaseStudies() {
  const ids = caseStudies.map((item) => item.id);
  const expectedIds = Array.from({ length: 19 }, (_, index) => index + 1);

  if (ids.length !== expectedIds.length || expectedIds.some((id) => !ids.includes(id))) {
    throw new Error("Case data must contain each ID from 01 through 19 exactly once.");
  }

  if (new Set(ids).size !== ids.length) throw new Error("Case IDs must be unique.");

  const slugs = caseStudies.map((item) => item.slug);
  if (new Set(slugs).size !== slugs.length) throw new Error("Case slugs must be unique.");

  for (const item of caseStudies) {
    if (item.roleTags.length > 3) throw new Error(`Case ${item.id} has more than three role tags.`);
    if (!hasLocalizedText(item.industry) || !hasLocalizedText(item.title)) {
      throw new Error(`Case ${item.id} is missing localized identity fields.`);
    }
    if (!hasLocalizedText(item.cardDescription) || !hasLocalizedText(item.evidenceSummary)) {
      throw new Error(`Case ${item.id} is missing localized summary fields.`);
    }
    if (item.detail?.accountScope && !item.disciplineTags.includes("Account")) {
      throw new Error(`Case ${item.id} has Account Scope without the Account discipline tag.`);
    }
    if (INTERNAL_MARKERS.some((marker) => collectPublicText(item).includes(marker))) {
      throw new Error(`Case ${item.id} contains an internal brief marker.`);
    }
    if (item.dataStatus === "approved" && item.presentationTier === "flagship") {
      if (!item.coverImage || !item.detail) throw new Error(`Approved flagship Case ${item.id} is missing cover or detail data.`);
      if (/^https?:/i.test(item.coverImage)) throw new Error(`Approved flagship Case ${item.id} must use a local cover asset.`);
      if (item.metrics.some((metric) => !metric.verified)) {
        throw new Error(`Approved flagship Case ${item.id} contains an unverified metric.`);
      }
    }
    for (const asset of item.assets) {
      if (!hasLocalizedText(asset.alt)) throw new Error(`Case ${item.id} has an asset without localized alt text.`);
      if (item.dataStatus === "approved" && /^https?:/i.test(asset.src)) {
        throw new Error(`Approved Case ${item.id} must use local asset files.`);
      }
      if (item.dataStatus === "approved" && asset.type === "video" && (!asset.poster || !asset.captions)) {
        throw new Error(`Approved video in Case ${item.id} requires a poster and captions.`);
      }
    }
  }

  const ranks = caseStudies
    .filter((item) => item.presentationTier === "flagship")
    .map((item) => item.featuredRank)
    .filter((rank): rank is number => rank !== undefined);
  if (new Set(ranks).size !== ranks.length) throw new Error("Flagship ranks must be unique.");

  for (const item of expertise) {
    for (const id of [...item.proofs.map((proof) => proof.caseId), ...item.evidenceCaseIds]) {
      if (!ids.includes(id)) throw new Error(`Expertise ${item.id} references missing Case ${id}.`);
    }
  }
}

validateCaseStudies();

export function getCaseStudiesForRender({ preview }: { preview: boolean }) {
  if (preview) return caseStudies.filter((item) => item.presentationTier !== "hidden");

  const published = caseStudies.filter((item) => {
    if (item.dataStatus !== "approved" || item.presentationTier === "hidden") return false;
    if (item.presentationTier === "flagship") return Boolean(item.coverImage && item.detail);
    return true;
  });

  const publishedFlagships = published.filter((item) => item.presentationTier === "flagship");
  if (publishedFlagships.length > 6) {
    throw new Error("A published portfolio cannot contain more than six flagship cases.");
  }

  return published;
}
