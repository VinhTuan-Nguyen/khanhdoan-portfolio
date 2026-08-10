"use client";

import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type WheelEvent as ReactWheelEvent,
} from "react";

type Language = "vi" | "en";
type Category = "All" | "Ads" | "Content" | "Design" | "Campaign Planning" | "Social Media";

type LocalizedText = {
  vi: string;
  en: string;
};

type Project = {
  id: number;
  category: Exclude<Category, "All">;
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

const copy = {
  vi: {
    nav: ["Trang chủ", "Công việc", "Giới thiệu", "Kinh nghiệm", "Liên hệ"],
    navIds: ["home", "work", "about", "experience", "contact"],
    download: "Tải CV",
    cvSoon: "CV đang cập nhật",
    menu: "Mở menu",
    closeMenu: "Đóng menu",
    heroLabel: "FULL-STACK MARKETER · CHUYÊN SÂU PERFORMANCE ADS",
    heroTitleA: "Marketing toàn diện,",
    heroTitleB: "tối ưu bằng tư duy hiệu suất.",
    heroDescription:
      "Tôi là Khánh Đoan, một full-stack marketer với 3 năm kinh nghiệm trong design, content, campaign planning và digital advertising. Thế mạnh chuyên sâu của tôi là Performance Ads, với ngân sách quản lý hơn 600 triệu đồng mỗi tháng trên Meta, TikTok, Google và YouTube.",
    viewWork: "Xem công việc",
    scroll: "Cuộn để khám phá",
    livePanel: "PERFORMANCE SNAPSHOT",
    monthlySpend: "Ngân sách / tháng",
    monthlySpendValue: "600M",
    monthlySpendCurrency: "VND",
    platforms: "Nền tảng",
    optimization: "Tối ưu liên tục",
    testing: "Testing",
    active: "Đang hoạt động",
    stats: ["năm kinh nghiệm", "ngân sách / tháng", "nền tảng quảng cáo", "tư duy marketing"],
    statsValues: ["3+", "600M+", "04", "360°"],
    statDescriptions: [
      "3 năm kinh nghiệm thực chiến trong môi trường agency và nhiều nhóm ngành.",
      "Hơn 600 triệu đồng ngân sách quảng cáo được quản lý và tối ưu mỗi tháng.",
      "Triển khai trên Meta, TikTok, Google và YouTube.",
      "Kết nối chiến lược, sáng tạo, dữ liệu và hiệu suất trong một góc nhìn tổng thể.",
    ],
    expertiseKicker: "NĂNG LỰC CỐT LÕI",
    expertiseTitle: "Creative đủ gần. Data đủ sâu.",
    expertiseIntro:
      "Tôi kết nối toàn bộ hành trình marketing — từ cách một ý tưởng được tạo ra đến cách nó tạo ra kết quả.",
    expertise: [
      ["01", "Performance Ads", "Lập kế hoạch, triển khai, theo dõi và tối ưu quảng cáo theo mục tiêu kinh doanh."],
      ["02", "Campaign Strategy", "Chuyển mục tiêu kinh doanh thành audience, thông điệp, funnel, kênh và ngân sách."],
      ["03", "Creative Collaboration", "Phối hợp cùng content và design, đọc hiệu quả creative và đề xuất hướng thử nghiệm."],
      ["04", "Reporting & Insights", "Phân tích biến động, làm rõ nguyên nhân và biến insight thành hành động tiếp theo."],
    ],
    workKicker: "SELECTED WORK · 2023—2026",
    workTitle: "Công việc nổi bật",
    workIntro:
      "Một số dự án tiêu biểu trong Ads, Content, Design và Campaign Planning. Ads được ưu tiên vì đây là chuyên môn chính của tôi.",
    all: "Tất cả",
    filters: ["Tất cả", "Ads", "Content", "Design", "Campaign Planning", "Social Media"],
    viewProject: "Xem dự án",
    confidential: "Một số dữ liệu đã được ẩn để đảm bảo bảo mật.",
    caseInProgress: "Case study đang hoàn thiện",
    aboutKicker: "GIỚI THIỆU",
    aboutTitle: "Kết nối khả năng thực thi sáng tạo với tư duy hiệu suất.",
    aboutText:
      "Làm việc tại agency giúp tôi tiếp xúc với nhiều thương hiệu, ngành hàng và mục tiêu khác nhau. Tôi có thể tham gia từ ý tưởng, content, design và planning đến triển khai, theo dõi và tối ưu quảng cáo. Performance Ads là năng lực chuyên sâu nhất của tôi: đọc dữ liệu, tìm nguyên nhân, thử nghiệm có hệ thống và biến insight thành hành động.",
    principles: ["Data-informed", "Ownership", "Giao tiếp rõ ràng", "Continuous testing"],
    experienceKicker: "KINH NGHIỆM",
    experienceTitle: "Hành trình từ sáng tạo đến hiệu suất",
    experienceScrollLabel: "Cuộn để theo dõi hành trình",
    experiences: [
      {
        start: "04/2025",
        end: "Hiện tại",
        company: "LANA Digital",
        role: "Optimizer & Account Executive",
        text: "Lập kế hoạch, triển khai và tối ưu quảng cáo cho nhiều thương hiệu trên Meta, Google, YouTube và TikTok, với ngân sách quản lý hơn 600 triệu đồng mỗi tháng. Bên cạnh tối ưu hiệu suất, mình còn tiếp nhận brief, làm rõ mục tiêu, đề xuất media plan, điều phối các bộ phận và báo cáo kết quả cho khách hàng.",
        tags: ["Paid Media", "Budget & Scaling", "A/B Testing", "Client Coordination"],
      },
      {
        start: "02/2025",
        end: "04/2025",
        company: "Lạc’s Beauty Center",
        role: "Marketing Executive",
        text: "Nghiên cứu thị trường, xây dựng kế hoạch khuyến mãi và sản xuất nội dung cho Facebook, TikTok. Công việc bao gồm viết nội dung, thiết kế, quay dựng video, đồng thời quản lý gian hàng Shopee, xử lý đơn hàng và hỗ trợ khách hàng.",
        tags: ["Campaign Planning", "Content & Design", "Video Production", "E-commerce"],
      },
      {
        start: "08/2023",
        end: "Hiện tại",
        company: "Freelance",
        role: "Digital Marketer & Graphic Designer",
        text: "Thực hiện các dự án marketing tự do, từ lập kế hoạch và sản xuất nội dung đến thiết kế banner, poster và ấn phẩm truyền thông. Bên cạnh đó, mình còn lên kế hoạch và triển khai quảng cáo Facebook theo mục tiêu của từng dự án.",
        tags: ["Content Planning", "Graphic Design", "Facebook Ads", "Freelance Projects"],
      },
      {
        start: "05/2023",
        end: "08/2023",
        company: "Công ty Cổ phần Đầu tư S4S",
        role: "Marketing Intern",
        text: "Lên kế hoạch, sản xuất và quản lý nội dung trên mạng xã hội nhằm tăng tương tác và nhận diện thương hiệu. Đồng thời thiết kế banner, bài đăng và một số hạng mục nhận diện phù hợp với mục tiêu truyền thông.",
        tags: ["Content Management", "Social Media", "Graphic Design", "Brand Identity"],
      },
    ],
    contactKicker: "SẴN SÀNG CHO CƠ HỘI MỚI",
    contactTitle: "Cùng tạo ra kết quả tốt hơn.",
    contactText:
      "Nếu bạn đang tìm kiếm một marketer có thể nhìn tổng thể nhưng vẫn đi sâu vào hiệu quả quảng cáo, tôi rất sẵn lòng kết nối.",
    email: "Gửi email",
    linkedin: "Xem LinkedIn",
    pendingContact: "Thông tin liên hệ sẽ được bổ sung trước khi publish.",
    footer: "Full-stack Marketer, chuyên sâu Performance Ads",
    close: "Đóng",
    overview: "Tổng quan",
    myRole: "Vai trò",
    approach: "Cách tiếp cận",
    results: "Kết quả",
    period: "Thời gian",
  },
  en: {
    nav: ["Home", "Work", "About", "Experience", "Contact"],
    navIds: ["home", "work", "about", "experience", "contact"],
    download: "Download CV",
    cvSoon: "CV coming soon",
    menu: "Open menu",
    closeMenu: "Close menu",
    heroLabel: "FULL-STACK MARKETER · PERFORMANCE ADS SPECIALIST",
    heroTitleA: "Full-stack marketing",
    heroTitleB: "with a performance edge.",
    heroDescription:
      "I’m Khánh Đoan, a full-stack marketer with 3 years of experience across design, content, campaign planning, and digital advertising. My strongest expertise is Performance Ads, managing more than USD 23,000 in monthly media spend across Meta, TikTok, Google, and YouTube.",
    viewWork: "View my work",
    scroll: "Scroll to explore",
    livePanel: "PERFORMANCE SNAPSHOT",
    monthlySpend: "Monthly spend",
    monthlySpendValue: "$23K",
    monthlySpendCurrency: "USD",
    platforms: "Platforms",
    optimization: "Always optimizing",
    testing: "Testing",
    active: "Active",
    stats: ["years of experience", "monthly ad spend", "advertising platforms", "marketing mindset"],
    statsValues: ["3+", "$23K+", "04", "360°"],
    statDescriptions: [
      "3 years of hands-on agency experience across multiple industries.",
      "More than USD 23,000 in paid-media spend managed and optimized each month.",
      "Campaign execution across Meta, TikTok, Google, and YouTube.",
      "A full-funnel view connecting strategy, creative, data, and performance.",
    ],
    expertiseKicker: "CORE EXPERTISE",
    expertiseTitle: "Close to creative. Deep in data.",
    expertiseIntro:
      "I connect the full marketing journey — from how an idea is made to how it drives measurable results.",
    expertise: [
      ["01", "Performance Ads", "Planning, launching, monitoring, and optimizing paid campaigns around business goals."],
      ["02", "Campaign Strategy", "Translating business goals into audiences, messaging, funnels, channel roles, and budgets."],
      ["03", "Creative Collaboration", "Collaborating with content and design teams, reading creative performance, and proposing test directions."],
      ["04", "Reporting & Insights", "Explaining performance changes, identifying causes, and turning insights into the next actions."],
    ],
    workKicker: "SELECTED WORK · 2023—2026",
    workTitle: "Featured Work",
    workIntro:
      "Selected projects across Ads, Content, Design, and Campaign Planning. Ads comes first because it is my core specialization.",
    all: "All",
    filters: ["All", "Ads", "Content", "Design", "Campaign Planning", "Social Media"],
    viewProject: "View project",
    confidential: "Some data has been hidden for confidentiality.",
    caseInProgress: "Case study in progress",
    aboutKicker: "ABOUT",
    aboutTitle: "I connect creative execution with performance thinking.",
    aboutText:
      "Working in an agency environment has exposed me to different brands, industries, and business objectives. I can contribute from ideation, content, design, and planning to campaign execution, monitoring, and optimization. Performance Ads is my strongest expertise: reading data, identifying causes, testing systematically, and turning insights into action.",
    principles: ["Data-informed", "Ownership", "Clear communication", "Continuous testing"],
    experienceKicker: "EXPERIENCE",
    experienceTitle: "A journey from creativity to performance",
    experienceScrollLabel: "Scroll to trace the journey",
    experiences: [
      {
        start: "04/2025",
        end: "Present",
        company: "LANA Digital",
        role: "Optimizer & Account Executive",
        text: "Planning, executing, and optimizing paid campaigns for multiple brands across Meta, Google, YouTube, and TikTok, with more than VND 600 million in monthly media spend. Alongside performance optimization, I handle client briefs, clarify objectives, propose media plans, coordinate internal teams, and deliver campaign reports.",
        tags: ["Paid Media", "Budget & Scaling", "A/B Testing", "Client Coordination"],
      },
      {
        start: "02/2025",
        end: "04/2025",
        company: "Lạc’s Beauty Center",
        role: "Marketing Executive",
        text: "Conducted market research, developed promotional plans, and produced content for Facebook and TikTok. Responsibilities included copywriting, design, video production, Shopee store management, order processing, and customer support.",
        tags: ["Campaign Planning", "Content & Design", "Video Production", "E-commerce"],
      },
      {
        start: "08/2023",
        end: "Present",
        company: "Freelance",
        role: "Digital Marketer & Graphic Designer",
        text: "Working on freelance marketing projects across content planning, content production, and visual design, including banners, posters, and social media assets. I also plan and manage Facebook advertising campaigns based on each project’s objectives.",
        tags: ["Content Planning", "Graphic Design", "Facebook Ads", "Freelance Projects"],
      },
      {
        start: "05/2023",
        end: "08/2023",
        company: "Công ty Cổ phần Đầu tư S4S",
        role: "Marketing Intern",
        text: "Planned, produced, and managed social media content to improve engagement and brand awareness. I also designed banners, social posts, and selected brand identity materials aligned with communication goals.",
        tags: ["Content Management", "Social Media", "Graphic Design", "Brand Identity"],
      },
    ],
    contactKicker: "OPEN TO NEW OPPORTUNITIES",
    contactTitle: "Let’s create better results together.",
    contactText:
      "If you’re looking for a marketer who can see the bigger picture while going deep into advertising performance, I’d be happy to connect.",
    email: "Send an email",
    linkedin: "View LinkedIn",
    pendingContact: "Contact details will be added before publication.",
    footer: "Full-stack Marketer specializing in Performance Ads",
    close: "Close",
    overview: "Overview",
    myRole: "My role",
    approach: "Approach",
    results: "Results",
    period: "Period",
  },
};

const projects: Project[] = [
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

const categoryMap: Record<string, Category> = {
  "Tất cả": "All",
  All: "All",
  Ads: "Ads",
  Content: "Content",
  Design: "Design",
  "Campaign Planning": "Campaign Planning",
  "Social Media": "Social Media",
};

const statTargets = [3, 600, 4, 360] as const;

function SiteCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const supportsCustomCursor = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!cursor || !supportsCustomCursor.matches) return;

    const root = document.documentElement;
    const interactiveSelector = "a, button, input, textarea, select, label, [role='button'], [tabindex]";

    const onPointerMove = (event: PointerEvent) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      cursor.classList.add("is-visible");

      const target = event.target instanceof Element ? event.target : null;
      cursor.classList.toggle("is-interactive", Boolean(target?.closest(interactiveSelector)));
    };
    const onPointerDown = () => cursor.classList.add("is-pressed");
    const onPointerUp = () => cursor.classList.remove("is-pressed");
    const onPointerLeave = () => cursor.classList.remove("is-visible", "is-pressed");

    root.classList.add("custom-cursor-ready");
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    document.addEventListener("mouseleave", onPointerLeave);
    window.addEventListener("blur", onPointerLeave);

    return () => {
      root.classList.remove("custom-cursor-ready");
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("mouseleave", onPointerLeave);
      window.removeEventListener("blur", onPointerLeave);
    };
  }, []);

  return (
    <div ref={cursorRef} className="site-cursor" aria-hidden="true">
      <span className="site-cursor-halo" />
      <svg className="site-cursor-pointer" viewBox="0 0 24 28" fill="none" focusable="false">
        <path d="M2.5 2.25 20.5 12l-8.1 2.65 4.45 8.55-4.2 2.15-4.4-8.45-5.75 6.15V2.25Z" />
      </svg>
    </div>
  );
}

function ArrowDownRightIcon() {
  return (
    <svg className="action-icon" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false">
      <path d="M4 4h10v10M14 4 4 14" />
    </svg>
  );
}

function ProjectArrowIcon() {
  return (
    <svg className="project-link-icon" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false">
      <path d="M4 14 14 4M6 4h8v8" />
    </svg>
  );
}

function LanaLogo() {
  return (
    <svg className="company-logo" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="1" y="1" width="22" height="22" rx="6" />
      <path d="M7.5 6.5v11h8.8M11 6.5v7.2h5.3" />
    </svg>
  );
}

function ExperienceMilestoneLogo({ company }: { company: string }) {
  if (company.startsWith("LANA")) return <LanaLogo />;

  const label = company.startsWith("Lạc")
    ? "LẠC"
    : company === "Freelance"
      ? "Freelance"
      : "S4S";

  return <span className="milestone-monogram" aria-hidden="true">{label}</span>;
}

function getRoadmapMilestoneThresholds(path: SVGPathElement) {
  const totalLength = path.getTotalLength();
  const milestonePoints = [
    { x: 64, y: 125 },
    { x: 36, y: 375 },
    { x: 64, y: 625 },
    { x: 36, y: 875 },
  ];
  const samples = 1200;

  return milestonePoints.map((target) => {
    let closestLength = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    for (let index = 0; index <= samples; index += 1) {
      const length = totalLength * (index / samples);
      const point = path.getPointAtLength(length);
      const distance = Math.hypot(point.x - target.x, point.y - target.y);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestLength = length;
      }
    }

    return closestLength / totalLength;
  });
}

function DownloadIcon() {
  return (
    <svg className="action-icon" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false">
      <path d="M9 2.5v9M5.5 8 9 11.5 12.5 8M3 14.5h12" />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg className="scroll-icon" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false">
      <path d="M9 2.5v12M5 10.5 9 14.5l4-4" />
    </svg>
  );
}

function formatStatValue(index: number, value: number, language: Language) {
  if (index === 0) return `${value}+`;
  if (index === 1) {
    if (language === "en") return `$${Math.round((value / 600) * 23)}K+`;
    return `${value}M+`;
  }
  if (index === 2) return value.toString().padStart(2, "0");
  return `${value}°`;
}

function placeStatTooltip(stat: HTMLElement) {
  const tooltip = stat.querySelector<HTMLElement>(".stat-tooltip");
  if (!tooltip) return;

  const headerBottom = document.querySelector<HTMLElement>(".site-header")?.getBoundingClientRect().bottom ?? 0;
  const availableAbove = stat.getBoundingClientRect().top - headerBottom;
  const requiredAbove = tooltip.offsetHeight + 18;
  stat.dataset.tooltipPlacement = availableAbove >= requiredAbove ? "top" : "bottom";
}

function AnimatedSpend({ language }: { language: Language }) {
  const target = language === "vi" ? 600 : 23;
  const [value, setValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frameId = 0;

    frameId = window.requestAnimationFrame(() => {
      setIsVisible(true);

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setValue(target);
        return;
      }

      const duration = 950;
      const startTime = window.performance.now();

      const update = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * eased));

        if (progress < 1) frameId = window.requestAnimationFrame(update);
      };

      frameId = window.requestAnimationFrame(update);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [target]);

  const formattedValue = language === "vi" ? `${value}M` : `$${value}K`;
  const accessibleValue = language === "vi" ? "600M+" : "$23K+";

  return (
    <strong className={isVisible ? "board-spend is-visible" : "board-spend"} aria-label={accessibleValue}>
      <span aria-hidden="true">{formattedValue}</span><sup aria-hidden="true">+</sup>
    </strong>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("vi");
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(projects.length);
  const [focusedCarouselIndex, setFocusedCarouselIndex] = useState(projects.length);
  const [carouselPaused, setCarouselPaused] = useState(false);
  const [carouselInteracting, setCarouselInteracting] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [numbersVisible, setNumbersVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState<number[]>(statTargets.map(() => 0));
  const [expertiseVisible, setExpertiseVisible] = useState(false);
  const [activeExperienceIndex, setActiveExperienceIndex] = useState(-1);
  const numbersRef = useRef<HTMLElement | null>(null);
  const expertiseRef = useRef<HTMLElement | null>(null);
  const experienceRoadmapRef = useRef<HTMLDivElement | null>(null);
  const activeExperienceIndexRef = useRef(-1);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const carouselAnimationRef = useRef<number | null>(null);
  const carouselScrollFrameRef = useRef<number | null>(null);
  const carouselDragRef = useRef({ pointerId: null as number | null, startX: 0, startScrollLeft: 0, moved: false });
  const carouselWheelTimerRef = useRef<number | null>(null);
  const carouselResumeTimerRef = useRef<number | null>(null);
  const suppressCarouselClickRef = useRef(false);
  const carouselHoveredRef = useRef(false);
  const carouselInteractingRef = useRef(false);
  const t = copy[language];
  const roadmapExperiences = t.experiences;
  const [heroDescriptionLead, heroDescriptionTail] = t.heroDescription.split("Khánh Đoan");

  useEffect(() => {
    let frameId = 0;
    const sectionIds = copy.vi.navIds;

    const updateActiveSection = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        const headerHeight = document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 0;
        const activationLine = window.scrollY + headerHeight + 12;
        const atPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
        setShowBackToTop(window.scrollY > Math.max(360, window.innerHeight * .55));

        if (atPageEnd) {
          setActiveSection(sectionIds[sectionIds.length - 1]);
          return;
        }

        const current = sectionIds.reduce((active, id) => {
          const section = document.getElementById(id);
          return section && section.offsetTop <= activationLine ? id : active;
        }, sectionIds[0]);

        setActiveSection(current);
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const saved = window.localStorage.getItem("kd-language") as Language | null;
    if (saved !== "vi" && saved !== "en") return;

    const frameId = window.requestAnimationFrame(() => setLanguage(saved));
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    const roadmap = experienceRoadmapRef.current;
    if (!roadmap) return;

    let frameId = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const progressPath = roadmap.querySelector<SVGPathElement>(".roadmap-path-progress");
    const pathLength = progressPath?.getTotalLength() ?? 1;
    const thresholds = progressPath
      ? getRoadmapMilestoneThresholds(progressPath)
      : [0.125, 0.375, 0.625, 0.875];

    if (progressPath) {
      progressPath.style.strokeDasharray = `${pathLength}`;
      progressPath.style.strokeDashoffset = `${pathLength}`;
    }

    const updateRoadmap = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        if (reducedMotion.matches) {
          roadmap.style.setProperty("--roadmap-progress", "1");
          if (progressPath) progressPath.style.strokeDashoffset = "0";
          activeExperienceIndexRef.current = thresholds.length - 1;
          setActiveExperienceIndex(thresholds.length - 1);
          return;
        }

        const rect = roadmap.getBoundingClientRect();
        const revealLine = window.innerHeight * 0.72;
        const finishLine = window.innerHeight * 0.28;
        const travelDistance = Math.max(rect.height + revealLine - finishLine, 1);
        const progress = Math.min(Math.max((revealLine - rect.top) / travelDistance, 0), 1);
        const nextActiveIndex = thresholds.reduce(
          (active, threshold, index) => progress >= threshold ? index : active,
          -1,
        );

        roadmap.style.setProperty("--roadmap-progress", progress.toFixed(4));
        if (progressPath) {
          progressPath.style.strokeDashoffset = `${pathLength * (1 - progress)}`;
        }

        const viewportHeight = window.innerHeight;
        const fadeDistance = Math.max(viewportHeight * 0.42, 280);
        const steps = roadmap.querySelectorAll<HTMLElement>(".roadmap-step");

        steps.forEach((step, index) => {
          const card = step.querySelector<HTMLElement>(".experience-card");
          const cardTop = card?.getBoundingClientRect().top ?? step.getBoundingClientRect().top;
          const visibility = Math.min(Math.max((viewportHeight - cardTop) / fadeDistance, 0), 1);
          const isCurrent = index === nextActiveIndex;
          const isPast = index < nextActiveIndex;
          const opacity = isCurrent ? 1 : isPast ? 0.72 : 0.08 + visibility * 0.82;
          const scale = isCurrent ? 1.015 : isPast ? 0.985 : 0.94 + visibility * 0.055;
          const shift = isCurrent || isPast ? 0 : (1 - visibility) * 42;
          const milestoneOpacity = index <= nextActiveIndex ? 1 : 0.18 + visibility * 0.58;
          const milestoneScale = index <= nextActiveIndex ? 1 : 0.72 + visibility * 0.22;

          step.style.setProperty("--step-opacity", opacity.toFixed(3));
          step.style.setProperty("--step-scale", scale.toFixed(3));
          step.style.setProperty("--step-shift", `${shift.toFixed(2)}px`);
          step.style.setProperty("--milestone-opacity", milestoneOpacity.toFixed(3));
          step.style.setProperty("--milestone-scale", milestoneScale.toFixed(3));
        });

        if (nextActiveIndex !== activeExperienceIndexRef.current) {
          activeExperienceIndexRef.current = nextActiveIndex;
          setActiveExperienceIndex(nextActiveIndex);
        }
      });
    };

    const resizeObserver = new ResizeObserver(updateRoadmap);
    resizeObserver.observe(roadmap);
    updateRoadmap();
    window.addEventListener("scroll", updateRoadmap, { passive: true });
    window.addEventListener("resize", updateRoadmap);
    reducedMotion.addEventListener("change", updateRoadmap);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", updateRoadmap);
      window.removeEventListener("resize", updateRoadmap);
      reducedMotion.removeEventListener("change", updateRoadmap);
    };
  }, []);

  useEffect(() => {
    window.localStorage.setItem("kd-language", language);
    document.documentElement.lang = language;
    document.title = language === "vi"
      ? "Khánh Đoan — Full-stack Marketer & Chuyên gia Performance Ads"
      : "Khánh Đoan — Full-stack Marketer & Performance Ads Specialist";

    const description = language === "vi"
      ? "Portfolio của Khánh Đoan — full-stack marketer với 3 năm kinh nghiệm, chuyên sâu Performance Ads và quản lý hơn 600 triệu đồng ngân sách quảng cáo mỗi tháng."
      : "Portfolio of Khánh Đoan, a full-stack marketer with 3 years of experience specializing in Performance Ads and managing more than USD 23,000 in monthly media spend.";
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [language]);

  useEffect(() => {
    const section = numbersRef.current;
    if (!section) return;

    let frameId = 0;
    let hasStarted = false;

    const startAnimation = () => {
      if (hasStarted) return;
      hasStarted = true;
      setNumbersVisible(false);
      setAnimatedStats(statTargets.map(() => 0));

      frameId = window.requestAnimationFrame(() => {
        setNumbersVisible(true);

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setAnimatedStats([...statTargets]);
          return;
        }

        const duration = 1350;
        const stagger = 110;
        const startTime = window.performance.now();

        const update = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const nextValues = statTargets.map((target, index) => {
            const progress = Math.min(Math.max((elapsed - index * stagger) / duration, 0), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            return Math.round(target * eased);
          });

          setAnimatedStats(nextValues);

          if (elapsed < duration + stagger * (statTargets.length - 1)) {
            frameId = window.requestAnimationFrame(update);
          }
        };

        frameId = window.requestAnimationFrame(update);
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameId);
    };
  }, [language]);

  useEffect(() => {
    const section = expertiseRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setExpertiseVisible(true);
        observer.disconnect();
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frameId = 0;

    const updateOpenTooltips = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        document.querySelectorAll<HTMLElement>(".stat:hover, .stat:focus-within").forEach(placeStatTooltip);
      });
    };

    window.addEventListener("scroll", updateOpenTooltips, { passive: true });
    window.addEventListener("resize", updateOpenTooltips);
    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateOpenTooltips);
      window.removeEventListener("resize", updateOpenTooltips);
    };
  }, []);

  useEffect(() => {
    if (!selectedProject) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProject]);

  useEffect(() => {
    if (activeFilter !== "All" || carouselPaused) return;
    const intervalId = window.setInterval(() => {
      setActiveCarouselIndex((current) => current + 1);
    }, 2000);
    return () => window.clearInterval(intervalId);
  }, [activeFilter, carouselPaused]);

  useEffect(() => () => {
    if (carouselWheelTimerRef.current !== null) window.clearTimeout(carouselWheelTimerRef.current);
    if (carouselResumeTimerRef.current !== null) window.clearTimeout(carouselResumeTimerRef.current);
    if (carouselScrollFrameRef.current !== null) window.cancelAnimationFrame(carouselScrollFrameRef.current);
  }, []);

  useLayoutEffect(() => {
    if (activeFilter !== "All") return;

    const centerActiveCard = () => {
      const carousel = carouselRef.current;
      const activeCard = carousel?.querySelector<HTMLElement>(`[data-carousel-index="${activeCarouselIndex}"]`);
      if (!carousel || !activeCard) return;
      const targetLeft = activeCard.offsetLeft - (carousel.clientWidth - activeCard.offsetWidth) / 2;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const shouldJump = reducedMotion || (activeCarouselIndex === projects.length && carousel.scrollLeft === 0);
      const resetLoopPosition = () => {
        const firstMiddleCard = carousel.querySelector<HTMLElement>(`[data-carousel-index="${projects.length}"]`);
        const firstTrailingCard = carousel.querySelector<HTMLElement>(`[data-carousel-index="${projects.length * 2}"]`);
        if (firstMiddleCard && firstTrailingCard) {
          carousel.scrollLeft -= firstTrailingCard.offsetLeft - firstMiddleCard.offsetLeft;
          updateCarouselVisualFocus();
        }
        setActiveCarouselIndex(projects.length);
        setFocusedCarouselIndex(projects.length);
      };

      if (carouselAnimationRef.current !== null) {
        window.cancelAnimationFrame(carouselAnimationRef.current);
        carouselAnimationRef.current = null;
      }

      if (shouldJump) {
        carousel.scrollLeft = targetLeft;
        updateCarouselVisualFocus();
        if (activeCarouselIndex === projects.length * 2) resetLoopPosition();
        return;
      }

      const startLeft = carousel.scrollLeft;
      const distance = targetLeft - startLeft;
      const startTime = performance.now();
      const animate = (time: number) => {
        const progress = Math.min((time - startTime) / 500, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        carousel.scrollLeft = startLeft + distance * easedProgress;
        if (progress < 1) {
          carouselAnimationRef.current = window.requestAnimationFrame(animate);
        } else {
          carouselAnimationRef.current = null;
          if (activeCarouselIndex === projects.length * 2) resetLoopPosition();
        }
      };
      carouselAnimationRef.current = window.requestAnimationFrame(animate);
    };

    const frameId = window.requestAnimationFrame(centerActiveCard);
    const centerAfterResize = () => {
      const carousel = carouselRef.current;
      const activeCard = carousel?.querySelector<HTMLElement>(`[data-carousel-index="${activeCarouselIndex}"]`);
      if (carousel && activeCard) {
        carousel.scrollLeft = activeCard.offsetLeft - (carousel.clientWidth - activeCard.offsetWidth) / 2;
      }
    };
    window.addEventListener("resize", centerAfterResize);
    return () => {
      window.cancelAnimationFrame(frameId);
      if (carouselAnimationRef.current !== null) {
        window.cancelAnimationFrame(carouselAnimationRef.current);
        carouselAnimationRef.current = null;
      }
      window.removeEventListener("resize", centerAfterResize);
    };
  }, [activeCarouselIndex, activeFilter]);

  const filteredProjects = useMemo(
    () => projects.filter((project) => activeFilter === "All" || project.category === activeFilter),
    [activeFilter],
  );

  const switchLanguage = (next: Language) => {
    setLanguage(next);
    setMenuOpen(false);
  };

  const normalizeCarouselLoopPosition = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const firstMiddleCard = carousel.querySelector<HTMLElement>(`[data-carousel-index="${projects.length}"]`);
    const firstTrailingCard = carousel.querySelector<HTMLElement>(`[data-carousel-index="${projects.length * 2}"]`);
    const track = carousel.querySelector<HTMLElement>(".project-carousel-track");
    if (!firstMiddleCard || !firstTrailingCard || !track) return;

    const gap = Number.parseFloat(getComputedStyle(track).gap) || 12;
    const step = firstMiddleCard.offsetWidth + gap;
    const cycleWidth = firstTrailingCard.offsetLeft - firstMiddleCard.offsetLeft;
    const middleStart = firstMiddleCard.offsetLeft - (carousel.clientWidth - firstMiddleCard.offsetWidth) / 2;
    const trailingStart = firstTrailingCard.offsetLeft - (carousel.clientWidth - firstTrailingCard.offsetWidth) / 2;
    let shift = 0;

    if (carousel.scrollLeft < middleStart - (step / 2)) shift = cycleWidth;
    else if (carousel.scrollLeft >= trailingStart - (step / 2)) shift = -cycleWidth;

    if (shift !== 0) {
      carousel.scrollLeft += shift;
      if (carouselDragRef.current.pointerId !== null) carouselDragRef.current.startScrollLeft += shift;
    }
  };

  const updateCarouselVisualFocus = () => {
    const carousel = carouselRef.current;
    if (!carousel) return null;
    const carouselCenter = carousel.getBoundingClientRect().left + carousel.clientWidth / 2;
    const cards = [...carousel.querySelectorAll<HTMLElement>("[data-carousel-index]")];
    const gap = Number.parseFloat(getComputedStyle(carousel.querySelector<HTMLElement>(".project-carousel-track")!).gap) || 12;

    cards.forEach((card) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const normalizedDistance = Math.abs(cardCenter - carouselCenter) / (card.offsetWidth + gap);
      const scale = normalizedDistance <= 1
        ? 1 - (.15 * normalizedDistance)
        : Math.max(.72, .85 - (.13 * (normalizedDistance - 1)));
      const opacity = normalizedDistance <= 1
        ? 1 - (.28 * normalizedDistance)
        : Math.max(.42, .72 - (.3 * (normalizedDistance - 1)));
      const saturation = normalizedDistance <= 1
        ? 1 - (.12 * normalizedDistance)
        : Math.max(.72, .88 - (.16 * (normalizedDistance - 1)));
      card.style.setProperty("--carousel-live-scale", scale.toFixed(4));
      card.style.setProperty("--carousel-live-opacity", opacity.toFixed(4));
      card.style.setProperty("--carousel-live-saturation", saturation.toFixed(4));
    });

    const closestCard = cards.reduce<HTMLElement | null>((closest, card) => {
      if (!closest) return card;
      const cardCenter = card.getBoundingClientRect().left + card.offsetWidth / 2;
      const closestCenter = closest.getBoundingClientRect().left + closest.offsetWidth / 2;
      return Math.abs(cardCenter - carouselCenter) < Math.abs(closestCenter - carouselCenter) ? card : closest;
    }, null);
    const nextIndex = Number(closestCard?.dataset.carouselIndex);
    if (Number.isFinite(nextIndex)) {
      setFocusedCarouselIndex((current) => current === nextIndex ? current : nextIndex);
      return nextIndex;
    }
    return null;
  };

  const handleCarouselScroll = () => {
    if (carouselScrollFrameRef.current !== null) return;
    carouselScrollFrameRef.current = window.requestAnimationFrame(() => {
      carouselScrollFrameRef.current = null;
      if (carouselInteractingRef.current) normalizeCarouselLoopPosition();
      updateCarouselVisualFocus();
    });
  };

  const snapCarouselToClosestCard = () => {
    const nextIndex = updateCarouselVisualFocus();
    if (nextIndex !== null) setActiveCarouselIndex(nextIndex);
  };

  const resumeCarouselAfterInteraction = () => {
    if (carouselResumeTimerRef.current !== null) window.clearTimeout(carouselResumeTimerRef.current);
    carouselResumeTimerRef.current = window.setTimeout(() => {
      if (!carouselHoveredRef.current) setCarouselPaused(false);
      setCarouselInteracting(false);
      carouselInteractingRef.current = false;
    }, 560);
  };

  const handleCarouselPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    const carousel = carouselRef.current;
    if (!carousel) return;
    if (carouselResumeTimerRef.current !== null) window.clearTimeout(carouselResumeTimerRef.current);
    if (carouselAnimationRef.current !== null) {
      window.cancelAnimationFrame(carouselAnimationRef.current);
      carouselAnimationRef.current = null;
    }
    setCarouselPaused(true);
    setCarouselInteracting(true);
    carouselInteractingRef.current = true;
    carouselDragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: carousel.scrollLeft,
      moved: false,
    };
  };

  const handleCarouselPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = carouselDragRef.current;
    const carousel = carouselRef.current;
    if (!carousel || drag.pointerId !== event.pointerId) return;
    const distance = event.clientX - drag.startX;
    if (Math.abs(distance) > 4 && !drag.moved) {
      drag.moved = true;
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    if (drag.moved) {
      event.preventDefault();
      carousel.scrollLeft = drag.startScrollLeft - distance;
      normalizeCarouselLoopPosition();
    }
  };

  const handleCarouselPointerEnd = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = carouselDragRef.current;
    if (drag.pointerId !== event.pointerId) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    carouselDragRef.current.pointerId = null;
    if (drag.moved) {
      suppressCarouselClickRef.current = true;
      snapCarouselToClosestCard();
      window.setTimeout(() => { suppressCarouselClickRef.current = false; }, 0);
    }
    resumeCarouselAfterInteraction();
  };

  const handleCarouselWheel = (event: ReactWheelEvent<HTMLDivElement>) => {
    if (Math.abs(event.deltaX) < 1) return;
    if (carouselResumeTimerRef.current !== null) window.clearTimeout(carouselResumeTimerRef.current);
    setCarouselPaused(true);
    setCarouselInteracting(true);
    carouselInteractingRef.current = true;
    if (carouselWheelTimerRef.current !== null) window.clearTimeout(carouselWheelTimerRef.current);
    carouselWheelTimerRef.current = window.setTimeout(() => {
      snapCarouselToClosestCard();
      resumeCarouselAfterInteraction();
    }, 140);
  };

  const renderProjectCard = (project: Project, index: number, key: string, carouselIndex?: number, duplicate = false) => {
    const isCarouselCard = carouselIndex !== undefined;
    const distanceFromActive = isCarouselCard ? Math.abs(carouselIndex - focusedCarouselIndex) : 0;
    const carouselClass = !isCarouselCard
      ? ""
      : distanceFromActive === 0
        ? " carousel-card-active"
        : distanceFromActive === 1
          ? " carousel-card-adjacent"
          : " carousel-card-distant";

    return (
    <article
      className={`project-card project-${project.tone}${carouselClass}`}
      key={key}
      data-carousel-index={carouselIndex}
      aria-hidden={duplicate ? true : undefined}
    >
      <button
        className="project-hitbox"
        type="button"
        tabIndex={duplicate ? -1 : 0}
        onFocus={() => {
          if (isCarouselCard) setActiveCarouselIndex(carouselIndex);
        }}
        onClick={() => {
          if (suppressCarouselClickRef.current) return;
          if (isCarouselCard) setActiveCarouselIndex(carouselIndex);
          setSelectedProject(project);
        }}
        aria-label={`${t.viewProject}: ${project.title[language]}`}
        aria-current={isCarouselCard && carouselIndex === focusedCarouselIndex ? "true" : undefined}
      />
      <div className="project-visual">
        <span className="project-number">0{index + 1}</span>
        <div className="visual-orbit" aria-hidden="true"><i /><i /><i /></div>
        <strong>{project.metric}</strong>
        <span className="visual-label">PERFORMANCE / CREATIVE</span>
      </div>
      <div className="project-content">
        <p className="project-eyebrow">{project.eyebrow[language]}</p>
        <h3>{project.title[language]}</h3>
        <p>{project.description[language]}</p>
        <div className="project-meta">
          <span>{project.role[language]}</span>
          <span>{project.period[language]}</span>
        </div>
        <span className="project-link">{t.viewProject}<ProjectArrowIcon /></span>
      </div>
    </article>
    );
  };

  return (
    <main>
      <SiteCursor />
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Khánh Đoan — Home">
          <span>KĐ</span>
          <strong>Khánh Đoan</strong>
        </a>

        <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Main navigation">
          {t.nav.map((item, index) => (
            <a
              key={item}
              href={`#${t.navIds[index]}`}
              className={activeSection === t.navIds[index] ? "active" : ""}
              aria-current={activeSection === t.navIds[index] ? "page" : undefined}
              onClick={() => {
                setActiveSection(t.navIds[index]);
                setMenuOpen(false);
              }}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <div className="language-switch" data-language={language} role="group" aria-label="Language selector">
            <span className="language-switch-indicator" aria-hidden="true" />
            <button type="button" className={language === "vi" ? "active" : ""} aria-pressed={language === "vi"} onClick={() => switchLanguage("vi")}>VI</button>
            <button type="button" className={language === "en" ? "active" : ""} aria-pressed={language === "en"} onClick={() => switchLanguage("en")}>EN</button>
          </div>
          <button className="cv-button" type="button" title={t.cvSoon} aria-label={`${t.download} — ${t.cvSoon}`}>
            {t.download}<DownloadIcon />
          </button>
          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t.closeMenu : t.menu}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <p className="kicker reveal">{t.heroLabel}</p>
          <h1 className="reveal reveal-delay-1">
            {t.heroTitleA}<br />
            <em>{t.heroTitleB}</em>
          </h1>
          <p className="hero-description reveal reveal-delay-2">
            {heroDescriptionLead}<strong className="hero-name">Khánh Đoan</strong>{heroDescriptionTail}
          </p>
          <div className="hero-actions reveal reveal-delay-3">
            <a className="primary-button" href="#work">{t.viewWork}<ArrowDownRightIcon /></a>
            <button className="text-button" type="button" title={t.cvSoon}>{t.download}<DownloadIcon /></button>
          </div>
        </div>

        <div className="performance-board-reveal reveal reveal-delay-2">
          <div className="performance-board-stage">
            <div className="performance-board" aria-label={t.livePanel}>
            <div className="board-head">
              <span>{t.livePanel}</span>
              <span className="status"><i /> {t.active}</span>
            </div>
            <div className="board-main">
              <p>{t.monthlySpend}</p>
              <AnimatedSpend key={language} language={language} />
              <span className="board-currency">{t.monthlySpendCurrency}</span>
            </div>
            <div className="mini-chart" aria-hidden="true">
              <span style={{ height: "28%" }} />
              <span style={{ height: "43%" }} />
              <span style={{ height: "36%" }} />
              <span style={{ height: "58%" }} />
              <span style={{ height: "52%" }} />
              <span style={{ height: "72%" }} />
              <span style={{ height: "64%" }} />
              <span style={{ height: "88%" }} />
            </div>
              <div className="board-grid">
                <div><span>{t.platforms}</span><strong>04</strong><small>META · TIKTOK · GOOGLE · YOUTUBE</small></div>
                <div><span>{t.testing}</span><strong>∞</strong><small>{t.optimization.toUpperCase()}</small></div>
              </div>
            </div>
          </div>
        </div>

        <a className="scroll-cue" href="#numbers"><ArrowDownIcon />{t.scroll}</a>
      </section>

      <section className="numbers" id="numbers" aria-label="Key numbers" ref={numbersRef}>
        <div className="section-shell numbers-grid">
          {t.stats.map((label, index) => (
            <div
              className={numbersVisible ? "stat is-visible" : "stat"}
              key={label}
              aria-label={`${t.statsValues[index]} ${label}`}
              onMouseEnter={(event) => placeStatTooltip(event.currentTarget)}
              onFocusCapture={(event) => placeStatTooltip(event.currentTarget)}
            >
              <strong aria-hidden="true">
                <span>{formatStatValue(index, animatedStats[index], language)}</span>
              </strong>
              <span>{label}</span>
              <button
                className="stat-info-trigger"
                type="button"
                aria-label={`${t.statsValues[index]} ${label}`}
                aria-describedby={`stat-tooltip-${index}`}
              >
                i
              </button>
              <div className="stat-tooltip" id={`stat-tooltip-${index}`} role="tooltip">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{t.statDescriptions[index]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className={expertiseVisible ? "expertise section-shell is-visible" : "expertise section-shell"}
        id="expertise"
        ref={expertiseRef}
      >
        <div className="section-heading">
          <div>
            <p className="kicker">{t.expertiseKicker}</p>
            <h2>{t.expertiseTitle}</h2>
          </div>
          <p>{t.expertiseIntro}</p>
        </div>

        <div className="expertise-list">
          {t.expertise.map(([number, title, description]) => (
            <article className="expertise-row" key={number}>
              <span className="index">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="row-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-shell">
          <div className="section-heading work-heading">
            <div>
              <p className="kicker">{t.workKicker}</p>
              <h2>{t.workTitle}</h2>
            </div>
            <p>{t.workIntro}</p>
          </div>

          <div className="filters" role="group" aria-label="Project filters">
            {t.filters.map((label) => {
              const value = categoryMap[label];
              return (
                <button
                  type="button"
                  key={label}
                  className={activeFilter === value ? "active" : ""}
                  onClick={() => setActiveFilter(value)}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {activeFilter === "All" ? (
            <div
              className={`project-carousel project-layout-enter${carouselInteracting ? " is-interacting" : ""}`}
              key="project-carousel"
              ref={carouselRef}
              onMouseEnter={() => {
                carouselHoveredRef.current = true;
                if (carouselResumeTimerRef.current !== null) window.clearTimeout(carouselResumeTimerRef.current);
                setCarouselPaused(true);
              }}
              onMouseLeave={() => {
                carouselHoveredRef.current = false;
                if (carouselDragRef.current.pointerId === null) setCarouselPaused(false);
              }}
              onPointerDown={handleCarouselPointerDown}
              onPointerMove={handleCarouselPointerMove}
              onPointerUp={handleCarouselPointerEnd}
              onPointerCancel={handleCarouselPointerEnd}
              onWheel={handleCarouselWheel}
              onScroll={handleCarouselScroll}
              onFocusCapture={() => {
                if (carouselResumeTimerRef.current !== null) window.clearTimeout(carouselResumeTimerRef.current);
                setCarouselPaused(true);
              }}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null) && !carouselHoveredRef.current) {
                  setCarouselPaused(false);
                }
              }}
            >
              <div className="project-carousel-track">
                {[0, 1, 2].map((setIndex) => projects.map((project, index) => (
                  renderProjectCard(
                    project,
                    index,
                    `carousel-${setIndex}-${project.id}`,
                    (setIndex * projects.length) + index,
                    setIndex !== 1,
                  )
                )))}
              </div>
            </div>
          ) : (
            <div className="project-grid project-layout-enter" key={`project-grid-${activeFilter}`}>
              {filteredProjects.map((project, index) => renderProjectCard(project, index, `grid-${project.id}`))}
            </div>
          )}

          <p className="confidential-note"><span>ⓘ</span>{t.confidential}</p>
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="about-label">
          <p className="kicker">{t.aboutKicker}</p>
          <div className="portrait-placeholder" aria-hidden="true">
            <span>KHÁNH<br />ĐOAN</span>
            <i>PORTRAIT<br />TO BE ADDED</i>
          </div>
        </div>
        <div className="about-copy">
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutText}</p>
          <div className="principles">
            {t.principles.map((principle, index) => (
              <span key={principle}><i>0{index + 1}</i>{principle}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="section-shell experience-intro">
          <div>
            <p className="kicker">{t.experienceKicker}</p>
            <h2>{t.experienceTitle}</h2>
            <div className="roadmap-scroll-cue" aria-hidden="true">
              <span>{t.experienceScrollLabel}</span>
              <i><ArrowDownIcon /></i>
            </div>
          </div>
        </div>

        <div
          className="section-shell experience-roadmap"
          ref={experienceRoadmapRef}
          role="list"
          aria-label={t.experienceTitle}
        >
          <svg className="roadmap-line" viewBox="0 0 100 1000" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="roadmap-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#84b3ce" />
                <stop offset="0.48" stopColor="#7da8bc" />
                <stop offset="1" stopColor="#16587b" />
              </linearGradient>
            </defs>
            <path
              className="roadmap-path roadmap-path-progress"
              d="M50 0 C50 60 64 70 64 125 C64 220 36 280 36 375 C36 470 64 530 64 625 C64 720 36 780 36 875 C36 940 50 965 50 1000"
              pathLength="1"
            />
          </svg>
          {roadmapExperiences.map((experience, index) => {
            const isRevealed = index <= activeExperienceIndex;
            const isActive = index === activeExperienceIndex;
            const brandClass = experience.company.startsWith("LANA")
              ? "lana"
              : experience.company.startsWith("Lạc")
                ? "lac"
                : experience.company === "Freelance"
                  ? "freelance"
                  : "s4s";

            return (
              <div
                className={`roadmap-step roadmap-step-${index % 2 === 0 ? "left" : "right"}${isRevealed ? " is-revealed" : ""}${isActive ? " is-active" : ""}`}
                key={`${experience.start}-${experience.role}`}
                role="listitem"
              >
                <div className={`roadmap-milestone milestone-${brandClass}`} aria-hidden="true">
                  <span className="milestone-ring" />
                  <span className="milestone-logo"><ExperienceMilestoneLogo company={experience.company} /></span>
                </div>

                <article className="experience-card" aria-current={isActive ? "step" : undefined}>
                <div className="experience-date">
                  <span>{experience.start}</span>
                  <i>→</i>
                  <span>{experience.end}</span>
                </div>
                <div className="experience-body">
                  <div>
                    <p className="company-name">
                      {experience.company}
                    </p>
                    <h3>{experience.role}</h3>
                  </div>
                  <p>{experience.text}</p>
                  <div className="experience-tags">
                    {experience.tags.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
              </article>
              </div>
            );
          })}
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <p className="kicker">{t.contactKicker}</p>
        <h2>{t.contactTitle}</h2>
        <div className="contact-bottom">
          <p>{t.contactText}</p>
          <div className="contact-actions">
            <button type="button" title={t.pendingContact}>{t.email}<span>↗</span></button>
            <button type="button" title={t.pendingContact}>{t.linkedin}<span>↗</span></button>
          </div>
        </div>
        <p className="pending-note">{t.pendingContact}</p>
      </section>

      <footer>
        <div className="section-shell footer-inner">
          <div><strong>Khánh Đoan</strong><span>{t.footer}</span></div>
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

      {selectedProject && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => {
          if (event.currentTarget === event.target) setSelectedProject(null);
        }}>
          <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="case-title">
            <button className="modal-close" type="button" onClick={() => setSelectedProject(null)} aria-label={t.close}>×</button>
            <div className={`modal-visual project-${selectedProject.tone}`}>
              <span>{selectedProject.eyebrow[language]}</span>
              <strong>{selectedProject.metric}</strong>
              <i>KD / CASE STUDY</i>
            </div>
            <div className="modal-content">
              <p className="kicker">{t.caseInProgress}</p>
              <h2 id="case-title">{selectedProject.title[language]}</h2>
              <div className="modal-meta">
                <div><span>{t.myRole}</span><strong>{selectedProject.role[language]}</strong></div>
                <div><span>{t.period}</span><strong>{selectedProject.period[language]}</strong></div>
              </div>
              <div className="case-block"><span>01 · {t.overview}</span><p>{selectedProject.overview[language]}</p></div>
              <div className="case-block"><span>02 · {t.approach}</span><p>{selectedProject.approach[language]}</p></div>
              <div className="case-block"><span>03 · {t.results}</span><p>{selectedProject.result[language]}</p></div>
              <p className="modal-note">ⓘ {t.confidential}</p>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
