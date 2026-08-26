import type { Expertise } from "./types";

export const expertise: Expertise[] = [
  {
    id: "paid-media-strategy",
    kind: "core",
    title: { vi: "Chiến lược Paid Media", en: "Paid Media Strategy" },
    description: {
      vi: "Lập kế hoạch, phân vai kênh, phân bổ ngân sách và vận hành chiến dịch đa nền tảng hoặc always-on.",
      en: "Plans channel roles, allocates budgets, and runs multi-platform or always-on campaigns.",
    },
    subskills: [
      { vi: "Lập kế hoạch vai trò kênh", en: "Channel planning" },
      { vi: "Phân bổ ngân sách", en: "Budget allocation" },
      { vi: "Lập kế hoạch đối tượng và mục tiêu", en: "Audience and objective planning" },
      { vi: "Triển khai đa nền tảng", en: "Multi-platform execution" },
      { vi: "Nhịp thử nghiệm creative", en: "Creative testing cadence" },
    ],
    proofs: [
      {
        caseId: 1,
        text: {
          vi: "Case 01 · Chiến dịch đa nền tảng quy mô lớn",
          en: "Case 01 · Large-scale multi-platform campaign",
        },
      },
      {
        caseId: 6,
        text: {
          vi: "Case 06 · Always-on và hợp tác hơn 5 năm",
          en: "Case 06 · Always-on delivery and a 5+ year partnership",
        },
      },
    ],
    evidenceCaseIds: [4, 7, 9, 10],
  },
  {
    id: "lead-generation-funnel",
    kind: "core",
    title: { vi: "Tạo Lead & Tối ưu Funnel", en: "Lead Generation & Funnel Optimization" },
    description: {
      vi: "Thiết kế và tối ưu luồng thu lead qua Messenger, website, landing page và Zalo, theo dõi riêng từng điểm chạm.",
      en: "Designs and optimizes lead journeys across Messenger, websites, landing pages, and Zalo, with each touchpoint measured separately.",
    },
    subskills: [
      { vi: "Lập kế hoạch funnel", en: "Funnel planning" },
      { vi: "Phân khúc đối tượng", en: "Audience segmentation" },
      { vi: "Chuyển đổi qua tin nhắn và website", en: "Message and website conversion" },
      { vi: "Điều phối landing page", en: "Landing page coordination" },
      { vi: "Vòng phản hồi chất lượng lead", en: "Lead-quality feedback loop" },
    ],
    proofs: [
      {
        caseId: 2,
        text: {
          vi: "Case 02 · 7.705 lượt đăng ký website",
          en: "Case 02 · 7,705 website registrations",
        },
      },
      {
        caseId: 3,
        text: {
          vi: "Case 03 · Hội thoại được đối chiếu với đơn hàng",
          en: "Case 03 · Conversations matched against purchases",
        },
      },
    ],
    evidenceCaseIds: [5, 8, 11, 13, 15, 16],
  },
  {
    id: "performance-analysis",
    kind: "core",
    title: { vi: "Phân tích & Tối ưu Hiệu suất", en: "Performance Analysis & Optimization" },
    description: {
      vi: "Đọc dữ liệu theo mục tiêu, tìm nguyên nhân, kiểm soát chất lượng tín hiệu và chuyển insight thành quyết định tối ưu.",
      en: "Interprets objective-level data, diagnoses root causes, controls signal quality, and turns insights into optimization decisions.",
    },
    subskills: [
      { vi: "Phân rã KPI", en: "KPI decomposition" },
      { vi: "So sánh funnel", en: "Funnel comparison" },
      { vi: "Theo dõi doanh thu và ROAS", en: "Revenue and ROAS tracking" },
      { vi: "Chẩn đoán chất lượng tệp", en: "Audience-quality diagnosis" },
      { vi: "Báo cáo và insight hành động", en: "Reporting and actionable insight" },
    ],
    proofs: [
      {
        caseId: 3,
        text: {
          vi: "Case 03 · Theo dõi doanh thu và ROAS",
          en: "Case 03 · Revenue and ROAS tracking",
        },
      },
      {
        caseId: 12,
        text: {
          vi: "Case 12 · Chẩn đoán và làm sạch tín hiệu tệp",
          en: "Case 12 · Audience-signal diagnosis and cleanup",
        },
      },
    ],
    evidenceCaseIds: [8, 14],
  },
  {
    id: "account-integrated-management",
    kind: "core",
    title: {
      vi: "Quản lý Account & Chiến dịch Tích hợp",
      en: "Account & Integrated Campaign Management",
    },
    description: {
      vi: "Quản lý đầu mối khách hàng, thống nhất KPI và điều phối ngân sách, nội dung, landing page, production, phê duyệt và báo cáo.",
      en: "Manages client communication and KPI alignment while coordinating budgets, content, landing pages, production, approvals, and reporting.",
    },
    subskills: [
      { vi: "Giao tiếp khách hàng", en: "Client communication" },
      { vi: "Điều phối phạm vi và ngân sách", en: "Scope and budget coordination" },
      { vi: "Triển khai liên chức năng", en: "Cross-functional delivery" },
      { vi: "Điều phối nội dung và production", en: "Content and production coordination" },
      { vi: "Tiến độ, phê duyệt và báo cáo", en: "Progress, approval, and reporting" },
    ],
    proofs: [
      {
        caseId: 1,
        text: {
          vi: "Case 01 · Điều phối khách hàng và team đa nền tảng",
          en: "Case 01 · Multi-platform client and delivery coordination",
        },
      },
      {
        caseId: 2,
        text: {
          vi: "Case 02 · Paid media, landing page và lead tracking",
          en: "Case 02 · Paid media, landing pages, and lead tracking",
        },
      },
      {
        caseId: 6,
        text: {
          vi: "Case 06 · Quản lý mô hình always-on dài hạn",
          en: "Case 06 · Long-term always-on account management",
        },
      },
    ],
    evidenceCaseIds: [4, 5, 7, 9, 11, 15, 16],
  },
  {
    id: "brand-content-creative",
    kind: "supporting",
    title: {
      vi: "Thương hiệu, Nội dung & Sản xuất Sáng tạo",
      en: "Brand, Content & Creative Production",
    },
    description: {
      vi: "Hỗ trợ performance và account bằng khả năng xây dựng nhận diện, copywriting, content planning, design và video production.",
      en: "Supports performance and account work through brand identity, copywriting, content planning, design, and video production.",
    },
    subskills: [
      { vi: "Nhận diện thương hiệu", en: "Brand identity" },
      { vi: "Copywriting và định hướng nội dung", en: "Copywriting and content direction" },
      { vi: "Thiết kế đồ họa", en: "Graphic design" },
      { vi: "Sản xuất nội dung đa định dạng", en: "Multi-format content production" },
      { vi: "Quay và dựng video", en: "Filming and video editing" },
    ],
    proofs: [],
    evidenceCaseIds: [17, 18, 19],
  },
];
