export type ProjectCategory = "Ads" | "Content" | "Design" | "Campaign Planning" | "Social Media";

type LocalizedText = {
  vi: string;
  en: string;
};

export type Project = {
  id: number;
  category: ProjectCategory;
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  role: LocalizedText;
  period: LocalizedText;
  metric: string;
  tone: string;
  overview: LocalizedText;
  approach: LocalizedText;
  result: LocalizedText;
};

export const projects: Project[] = [
  {
    id: 1,
    category: "Ads",
    eyebrow: { vi: "E-COMMERCE · META ADS", en: "E-COMMERCE · META ADS" },
    title: { vi: "Tăng trưởng hiệu suất đa nhóm sản phẩm", en: "Multi-product performance growth" },
    description: {
      vi: "Tái cấu trúc chiến dịch và phân bổ ngân sách theo tín hiệu hiệu quả.",
      en: "Restructuring campaigns and reallocating budget around performance signals.",
    },
    role: { vi: "Media planning · Optimization", en: "Media planning · Optimization" },
    period: { vi: "Case bảo mật", en: "Confidential case" },
    metric: "ROAS ↗",
    tone: "lime",
    overview: {
      vi: "Một chiến dịch e-commerce đa nhóm sản phẩm trên Meta, tập trung cân bằng tăng trưởng doanh thu và hiệu quả chi phí.",
      en: "A multi-product Meta e-commerce campaign focused on balancing revenue growth with cost efficiency.",
    },
    approach: {
      vi: "Phân nhóm audience theo mức độ ý định, chuẩn hóa naming, thiết kế lại luồng testing và chuyển ngân sách về các cụm có tín hiệu bền vững.",
      en: "Segmented audiences by intent, standardized naming, rebuilt the testing flow, and shifted budget toward consistently strong clusters.",
    },
    result: {
      vi: "Hiệu quả ROAS được cải thiện trong khi vẫn duy trì quy mô phân phối. Số liệu chi tiết sẽ được bổ sung sau khi duyệt bảo mật.",
      en: "ROAS improved while delivery scale was maintained. Detailed figures will be added after confidentiality review.",
    },
  },
  {
    id: 2,
    category: "Ads",
    eyebrow: { vi: "LEAD GENERATION · MULTI-CHANNEL", en: "LEAD GENERATION · MULTI-CHANNEL" },
    title: { vi: "Hệ thống thu lead theo tín hiệu chất lượng", en: "Quality-led lead generation system" },
    description: {
      vi: "Kết nối audience, creative và dữ liệu lead để tối ưu sâu hơn CPL.",
      en: "Connecting audience, creative, and lead data to optimize beyond CPL.",
    },
    role: { vi: "Strategy · Testing · Reporting", en: "Strategy · Testing · Reporting" },
    period: { vi: "Case bảo mật", en: "Confidential case" },
    metric: "CPL ↓",
    tone: "blue",
    overview: {
      vi: "Chiến dịch lead generation cần cải thiện cả chi phí đầu vào lẫn chất lượng lead chuyển về đội ngũ tư vấn.",
      en: "A lead generation campaign that needed to improve both acquisition cost and the quality of leads sent to sales.",
    },
    approach: {
      vi: "Đọc dữ liệu theo source và nhóm creative, loại tín hiệu nhiễu, xây test matrix và điều chỉnh phân bổ theo chất lượng lead thực tế.",
      en: "Read data by source and creative group, removed noisy signals, built a test matrix, and reallocated spend around actual lead quality.",
    },
    result: {
      vi: "CPL giảm và chất lượng đầu vào ổn định hơn qua các vòng tối ưu. KPI cụ thể được ẩn để đảm bảo bảo mật.",
      en: "CPL decreased and lead quality became more consistent across optimization cycles. Specific KPIs are hidden for confidentiality.",
    },
  },
  {
    id: 3,
    category: "Ads",
    eyebrow: { vi: "AWARENESS · YOUTUBE / TIKTOK", en: "AWARENESS · YOUTUBE / TIKTOK" },
    title: { vi: "Độ phủ đa nền tảng cho chiến dịch ra mắt", en: "Cross-platform reach for a new launch" },
    description: {
      vi: "Phân vai kênh và creative để mở rộng reach đúng tệp mục tiêu.",
      en: "Defining channel and creative roles to expand reach within the right audience.",
    },
    role: { vi: "Channel planning · Optimization", en: "Channel planning · Optimization" },
    period: { vi: "Case bảo mật", en: "Confidential case" },
    metric: "VTR ↗",
    tone: "orange",
    overview: {
      vi: "Chiến dịch nhận diện đa nền tảng cho một sản phẩm mới, với yêu cầu vừa tạo độ phủ vừa duy trì chất lượng lượt xem.",
      en: "A multi-platform awareness campaign for a new product, balancing broad reach with quality video views.",
    },
    approach: {
      vi: "Xác định vai trò YouTube và TikTok theo từng phase, đọc retention của video và luân chuyển creative theo fatigue signal.",
      en: "Defined YouTube and TikTok roles by phase, read video retention, and rotated creatives around fatigue signals.",
    },
    result: {
      vi: "Độ phủ và VTR cải thiện qua các vòng creative rotation. Số liệu chi tiết đang chờ xác nhận để công bố.",
      en: "Reach and VTR improved through creative rotation cycles. Detailed figures are pending publication approval.",
    },
  },
  {
    id: 4,
    category: "Content",
    eyebrow: { vi: "CONTENT · ALWAYS-ON", en: "CONTENT · ALWAYS-ON" },
    title: { vi: "Hệ thống nội dung từ insight đến chuyển đổi", en: "An insight-to-conversion content system" },
    description: {
      vi: "Xây content pillars và thông điệp theo từng giai đoạn hành trình khách hàng.",
      en: "Building content pillars and messaging for each stage of the customer journey.",
    },
    role: { vi: "Content plan · Copy · Idea", en: "Content plan · Copy · Idea" },
    period: { vi: "Dự án chọn lọc", en: "Selected project" },
    metric: "ENG. ↗",
    tone: "violet",
    overview: {
      vi: "Hệ thống nội dung always-on cho kênh social cần nhất quán thương hiệu và hỗ trợ mục tiêu kinh doanh.",
      en: "An always-on social content system designed for brand consistency and business support.",
    },
    approach: {
      vi: "Xây content pillars từ insight, xác định vai trò từng format và liên kết kế hoạch nội dung với lịch campaign.",
      en: "Built insight-led content pillars, defined each format’s role, and connected the content plan to the campaign calendar.",
    },
    result: {
      vi: "Tạo được hệ thống sản xuất rõ ràng và nền tảng đo lường theo nhóm nội dung. Kết quả định lượng sẽ được bổ sung.",
      en: "Created a clearer production system and measurement framework by content group. Quantitative results will be added.",
    },
  },
  {
    id: 5,
    category: "Design",
    eyebrow: { vi: "DESIGN · CAMPAIGN ASSETS", en: "DESIGN · CAMPAIGN ASSETS" },
    title: { vi: "Visual system linh hoạt cho paid media", en: "A flexible visual system for paid media" },
    description: {
      vi: "Thiết kế hướng tới độ rõ thông điệp và khả năng biến thể khi testing.",
      en: "Designing for message clarity and fast variations during testing.",
    },
    role: { vi: "Visual direction · Execution", en: "Visual direction · Execution" },
    period: { vi: "Dự án chọn lọc", en: "Selected project" },
    metric: "CTR ↗",
    tone: "rose",
    overview: {
      vi: "Bộ visual phục vụ paid media cần giữ nhận diện nhưng đủ linh hoạt để tạo nhiều biến thể testing.",
      en: "A paid-media visual kit that needed to protect brand identity while supporting many test variations.",
    },
    approach: {
      vi: "Chuẩn hóa hierarchy, xây layout module và tạo biến thể theo hook, benefit, CTA thay vì thay đổi ngẫu nhiên.",
      en: "Standardized hierarchy, built modular layouts, and varied hook, benefit, and CTA instead of making random changes.",
    },
    result: {
      vi: "Quy trình tạo creative nhanh hơn và insight từ testing rõ ràng hơn. Kết quả cụ thể sẽ được cập nhật.",
      en: "Creative production became faster and test learnings became clearer. Specific results will be updated.",
    },
  },
  {
    id: 6,
    category: "Campaign Planning",
    eyebrow: { vi: "PLANNING · INTEGRATED CAMPAIGN", en: "PLANNING · INTEGRATED CAMPAIGN" },
    title: { vi: "Từ business brief đến hệ thống triển khai", en: "From business brief to execution system" },
    description: {
      vi: "Chuyển insight thành concept, phase, channel role và hệ thống đầu việc.",
      en: "Turning insight into a concept, phases, channel roles, and a clear action system.",
    },
    role: { vi: "Planning · Idea · Channel plan", en: "Planning · Idea · Channel plan" },
    period: { vi: "Dự án chọn lọc", en: "Selected project" },
    metric: "360°",
    tone: "cyan",
    overview: {
      vi: "Kế hoạch campaign tích hợp cần biến một business brief rộng thành hướng triển khai rõ và khả thi.",
      en: "An integrated campaign plan that needed to turn a broad business brief into a clear, workable direction.",
    },
    approach: {
      vi: "Làm rõ audience tension, phát triển concept, chia campaign phase và xác định vai trò của paid, owned và creative deliverables.",
      en: "Clarified the audience tension, developed the concept, divided campaign phases, and defined paid, owned, and creative roles.",
    },
    result: {
      vi: "Tạo được framework triển khai thống nhất cho content, design và media. Kết quả thực tế sẽ được bổ sung.",
      en: "Created one execution framework across content, design, and media. Actual results will be added.",
    },
  },
];
