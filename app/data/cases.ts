import type {
  CaseStudy
} from "./types";

const needsVerification = "needs-verification" as const;

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: "fertilizer-multi-channel-reach",
    disciplineTags: [
      "Ads",
      "Account"
    ],
    capabilityIds: [
      "paid-media-strategy",
      "account-integrated-management"
    ],
    presentationTier: "flagship",
    featuredRank: 3,
    industry: {
      vi: "Phân bón", en: "Fertilizer"
    },
    title: {
      vi: "Chiến dịch phủ sóng đa kênh", en: "Multi-channel Brand Reach"
    },
    cardDescription: {
      vi: "Điều phối Meta, TikTok và Google/YouTube trong kỳ phân tích 45 ngày, với khoảng 854,6 triệu đồng chi tiêu quảng cáo và hơn 110,4 triệu lượt hiển thị.",
      en: "Coordinated Meta, TikTok, and Google/YouTube across a 45-day analysis period, managing approximately VND 854.6M in media spend and more than 110.4M impressions.",
    },
    evidenceSummary: {
      vi: "Đa nền tảng · 854,6 triệu đồng media spend · hơn 110,4 triệu lượt hiển thị",
      en: "Multi-platform · VND 854.6M media spend · 110.4M+ impressions",
    },
    roles: {
      vi: "Lập kế hoạch, đa nền tảng và điều phối",
      en: "Planning, multi-platform execution, and coordination",
    },
    roleTags: [
      "Planning",
      "Multi-platform",
      "Coordination"
    ],
    dataPeriod: {
      vi: "45 ngày", en: "45 days"
    },
    collaborationDuration: {
      vi: "3 tháng", en: "3 months"
    },
    platforms: [
      "Meta",
      "TikTok",
      "Google",
      "YouTube"
    ],
    metrics: [
      {
        label: {
          vi: "Chi tiêu quảng cáo", en: "Media spend"
        }, value: "VND 854.6M", verified: false
      },
      {
        label: {
          vi: "Lượt hiển thị", en: "Impressions"
        }, value: "110.4M+", verified: false
      },
    ],
    detail: {
      overview: {
        vi: "Chiến dịch xây dựng độ phủ lớn cho ngành phân bón trên Meta, TikTok và Google/YouTube. Các nền tảng được phân bổ theo vai trò riêng để vừa mở rộng nhận biết, vừa duy trì tương tác và hội thoại với khách hàng tiềm năng.",
        en: "A large-scale awareness campaign for the fertilizer category across Meta, TikTok, and Google/YouTube. Each platform played a distinct role in expanding reach while sustaining engagement and qualified conversations.",
      },
      strategy: {
        vi: "Phân bổ Meta cho Reach, Impressions và Messaging; TikTok cho Reach và Video Views; Google cho GDN cùng các định dạng YouTube Skippable, Bumper và Non-skippable. Theo dõi tần suất, CPM và độ phủ chéo để điều chỉnh ngân sách giữa các nền tảng.",
        en: "Assigned Meta to Reach, Impressions, and Messaging; TikTok to Reach and Video Views; and Google to GDN plus Skippable, Bumper, and Non-skippable YouTube formats. Monitored frequency, CPM, and cross-platform reach to rebalance spend.",
      },
      results: {
        vi: "Tổng chi tiêu quảng cáo đạt 854,6 triệu đồng, tạo hơn 110,4 triệu lượt hiển thị. Riêng Meta ghi nhận 12,66 triệu người tiếp cận, 71,67 triệu lượt hiển thị, 3,13 triệu lượt tương tác và 2.110 cuộc hội thoại; TikTok tạo 31,23 triệu lượt xem video; Google/YouTube tạo hơn 7,08 triệu lượt hiển thị và 3,01 triệu lượt xem công khai.",
        en: "VND 854.6M in media spend generated more than 110.4M impressions. Meta alone reached 12.66M people, delivered 71.67M impressions, 3.13M engagements, and 2,110 conversations; TikTok generated 31.23M video views; Google/YouTube added 7.08M impressions and 3.01M public views.",
      },
      accountScope: {
        vi: "Điều phối đầu mối giữa khách hàng và team triển khai; theo dõi mục tiêu, ngân sách, lịch nội dung, kịch bản, tiến độ sản xuất và báo cáo. Tổng quy mô gói hợp tác khoảng 1,5 tỷ đồng trong 3 tháng; số liệu 854,6 triệu đồng là chi tiêu quảng cáo trong kỳ 45 ngày.",
        en: "Served as the client–delivery team contact, coordinating objectives, budget, content schedules, scripts, production timelines, and reporting. The broader three-month engagement was approximately VND 1.5B; VND 854.6M represents media spend for the selected 45 days.",
      },
      insight: {
        vi: "Phân vai kênh rõ ràng và theo dõi tần suất, CPM theo nền tảng giúp điều phối ngân sách mà không làm lẫn mục tiêu.",
        en: "Clear channel roles and platform-level frequency and CPM monitoring enable budget reallocation without mixing objectives.",
      },
    },
    coverVariant: "paid-media-strategy",
    assets: [],
    confidential: true,
    dataStatus: needsVerification,
  },
  {
    id: 2,
    slug: "nutrition-course-registrations",
    disciplineTags: [
      "Ads",
      "Account"
    ],
    capabilityIds: [
      "lead-generation-funnel",
      "account-integrated-management"
    ],
    presentationTier: "flagship",
    featuredRank: 2,
    industry: {
      vi: "Khóa học dinh dưỡng", en: "Nutrition Education"
    },
    title: {
      vi: "Tăng đăng ký khóa học", en: "Course Registration Growth"
    },
    cardDescription: {
      vi: "Tạo 7.705 lượt đăng ký website trên Meta với CPA trung bình 64,3 nghìn đồng, đồng thời mở rộng traffic qua TikTok và Google cho sản phẩm khóa học giá trị cao.",
      en: "Generated 7,705 website registrations on Meta at an average CPA of VND 64.3K, while expanding traffic through TikTok and Google for a high-value nutrition course.",
    },
    evidenceSummary: {
      vi: "7.705 đăng ký website · CPA 64.309 đồng · Meta, TikTok và Google",
      en: "7,705 website registrations · VND 64,309 CPA · Meta, TikTok, and Google",
    },
    roles: {
      vi: "Lập kế hoạch paid media, tối ưu funnel và quản lý account",
      en: "Paid media planning, funnel optimization, and account management",
    },
    roleTags: [
      "Lead Generation",
      "Funnel Optimization",
      "Account Management"
    ],
    dataPeriod: {
      vi: "Meta 12 tháng · TikTok 3 tháng · Google 2 tháng",
      en: "Meta 12 months · TikTok 3 months · Google 2 months",
    },
    collaborationDuration: {
      vi: "Hơn 2 năm", en: "More than 2 years"
    },
    platforms: [
      "Meta",
      "TikTok",
      "Google"
    ],
    metrics: [
      {
        label: {
          vi: "Đăng ký website", en: "Website registrations"
        }, value: "7,705", verified: false
      },
      {
        label: {
          vi: "CPA trung bình", en: "Average CPA"
        }, value: "VND 64,309", verified: false
      },
    ],
    detail: {
      overview: {
        vi: "Hệ thống thu lead cho khóa học dinh dưỡng có giá trị khoảng 20–40 triệu đồng, yêu cầu cân bằng giữa quy mô đăng ký, chất lượng traffic và khả năng nuôi dưỡng người học trước khi tư vấn.",
        en: "A lead-generation system for nutrition courses valued at approximately VND 20–40M, requiring a balance between registration volume, traffic quality, and lead nurturing before consultation.",
      },
      strategy: {
        vi: "Meta tập trung chuyển đổi đăng ký trên website; TikTok mở rộng traffic và Landing Page Views; Google bổ sung nhu cầu chủ động qua tìm kiếm và hệ sinh thái hiển thị. Đánh giá theo từng nền tảng thay vì gộp chung để tránh làm sai lệch hiệu quả funnel.",
        en: "Meta focused on website registration conversion; TikTok expanded traffic and Landing Page Views; Google captured active demand through search and display. Performance was assessed by platform to avoid distorting the funnel picture.",
      },
      results: {
        vi: "Meta tạo 7.705 lượt đăng ký với 495,5 triệu đồng chi tiêu và CPA trung bình 64.309 đồng. TikTok tạo 108.454 Landing Page Views, CTR khoảng 16,49% và tỷ lệ Click-to-LPV 87,3%; Google ghi nhận 313.753 lượt hiển thị và 16.006 lượt nhấp.",
        en: "Meta generated 7,705 registrations from VND 495.5M in spend at an average CPA of VND 64,309. TikTok delivered 108,454 Landing Page Views, a 16.49% CTR, and an 87.3% Click-to-LPV rate; Google added 313,753 impressions and 16,006 clicks.",
      },
      accountScope: {
        vi: "Quản lý đầu mối khách hàng, thống nhất KPI và media plan; điều phối ngân sách, landing page, nội dung quảng cáo và quy trình theo dõi lead. Ngân sách quảng cáo dao động khoảng 40–100 triệu đồng mỗi tháng, chưa bao gồm chi phí quản lý và sản xuất nội dung.",
        en: "Managed the client relationship, aligned KPIs and the media plan, and coordinated budget allocation, landing pages, ad content, and lead tracking. Monthly media spend ranged from approximately VND 40–100M, excluding management and content production costs.",
      },
      insight: {
        vi: "Đánh giá riêng từng nền tảng giữ cho bức tranh funnel chính xác khi mục tiêu và kỳ dữ liệu khác nhau.",
        en: "Platform-level evaluation keeps the funnel picture accurate when objectives and data periods differ.",
      },
    },
    coverVariant: "lead-generation-funnel",
    assets: [],
    confidential: true,
    dataStatus: needsVerification,
  },
  {
    id: 3,
    slug: "water-tanks-messages-to-sales",
    disciplineTags: [
      "Ads",
      "Account"
    ],
    capabilityIds: [
      "lead-generation-funnel",
      "performance-analysis"
    ],
    presentationTier: "flagship",
    featuredRank: 1,
    industry: {
      vi: "Bồn nước & bể phốt", en: "Water Tanks & Septic Systems"
    },
    title: {
      vi: "Tối ưu tin nhắn và doanh thu", en: "Messages That Drive Sales"
    },
    cardDescription: {
      vi: "Tạo 24.762 cuộc hội thoại với chi phí trung bình khoảng 2,9 nghìn đồng, đồng thời ghi nhận 725 đơn hàng và ROAS 5,35 trong kỳ phân tích 6 tháng.",
      en: "Generated 24,762 conversations at an average cost of approximately VND 2.9K, while recording 725 purchases and a 5.35 ROAS across the six-month analysis period.",
    },
    evidenceSummary: {
      vi: "24.762 cuộc hội thoại · 725 lượt mua · ROAS 5,35",
      en: "24,762 conversations · 725 purchases · 5.35 ROAS",
    },
    roles: {
      vi: "Tối ưu Meta Ads và theo dõi doanh thu sau hội thoại",
      en: "Meta Ads optimization and post-conversation revenue tracking",
    },
    roleTags: [
      "Meta Ads",
      "Message Optimization",
      "Revenue Tracking"
    ],
    dataPeriod: {
      vi: "6 tháng", en: "6 months"
    },
    collaborationDuration: {
      vi: "Khoảng 20 tháng", en: "Approximately 20 months"
    },
    platforms: [
      "Meta"
    ],
    metrics: [
      {
        label: {
          vi: "Lượt mua", en: "Purchases"
        }, value: "725", verified: false
      },
      {
        label: {
          vi: "ROAS", en: "ROAS"
        }, value: "5.35", verified: false
      },
    ],
    detail: {
      overview: {
        vi: "Chiến dịch tập trung tạo tin nhắn cho nhóm sản phẩm bồn nước và bể phốt. Dữ liệu mua hàng được kết nối bổ sung từ chiến dịch chuyển đổi để đánh giá chất lượng hội thoại bằng doanh thu, không chỉ bằng chi phí tin nhắn.",
        en: "The campaign focused on message generation for water tanks and septic systems. Purchase data from conversion activity was connected to evaluate conversation quality through revenue, not message cost alone.",
      },
      strategy: {
        vi: "Phân nhóm theo nhu cầu sản phẩm và khu vực, duy trì creative có tỷ lệ phản hồi tốt, đồng thời đối chiếu tin nhắn với lượt mua để ưu tiên nhóm quảng cáo tạo giá trị kinh doanh thực tế.",
        en: "Segmented audiences by product need and location, retained creatives with strong response rates, and matched conversations against purchases to prioritize ad groups creating measurable business value.",
      },
      results: {
        vi: "73,0 triệu đồng chi tiêu tạo 24.762 cuộc hội thoại, tương đương khoảng 2.949 đồng mỗi cuộc. Hệ thống ghi nhận 725 lượt mua, doanh thu 390,7 triệu đồng, ROAS 5,35 và CTR 5,14%.",
        en: "VND 73.0M in spend generated 24,762 conversations at approximately VND 2,949 each. The account recorded 725 purchases, VND 390.7M in revenue, a 5.35 ROAS, and a 5.14% CTR.",
      },
      accountScope: {
        vi: "Tiếp nhận yêu cầu, phối hợp nội dung và theo dõi chất lượng tin nhắn, kết quả mua hàng; tổng hợp báo cáo và đề xuất điều chỉnh theo nhu cầu thị trường. Ngân sách quảng cáo khoảng 10–15 triệu đồng mỗi tháng.",
        en: "Handled client requirements, coordinated content, monitored message quality and purchases, and translated results into reporting and market-led recommendations. Monthly media spend was approximately VND 10–15M.",
      },
      insight: {
        vi: "Đánh giá lead bằng đơn hàng và doanh thu giúp tránh tối ưu cho hội thoại rẻ nhưng kém giá trị.",
        en: "Evaluating leads through purchases and revenue prevents optimization toward cheap but low-value conversations.",
      },
    },
    coverVariant: "performance-analysis",
    assets: [],
    confidential: true,
    dataStatus: needsVerification,
  },
  {
    id: 4,
    slug: "personalized-fragrance-launch",
    disciplineTags: [
      "Ads",
      "Account"
    ],
    capabilityIds: [
      "paid-media-strategy",
      "account-integrated-management"
    ],
    presentationTier: "evidence-only",
    industry: {
      vi: "Nước hoa cá nhân hóa", en: "Personalized Fragrance"
    },
    title: {
      vi: "Ra mắt sản phẩm đa kênh", en: "Multi-channel Product Launch"
    },
    cardDescription: {
      vi: "Triển khai gói ra mắt 250 triệu đồng trong 3 tháng; riêng kỳ phân tích 2 tháng, Meta và TikTok tạo hơn 3,5 triệu lượt xem/tiếp cận cùng nhiều tín hiệu tương tác và tăng trưởng cộng đồng.",
      en: "Delivered a VND 250M three-month launch; during the selected two-month period, Meta and TikTok generated more than 3.5M views/reach signals alongside meaningful engagement and community growth.",
    },
    evidenceSummary: {
      vi: "Ra mắt đa kênh · Meta và TikTok · kỳ phân tích 2 tháng",
      en: "Multi-channel launch · Meta and TikTok · two-month analysis period",
    },
    roles: {
      vi: "Launch Strategy · Meta Ads · TikTok Ads", en: "Launch Strategy · Meta Ads · TikTok Ads"
    },
    roleTags: [
      "Launch Strategy",
      "Meta Ads",
      "TikTok Ads"
    ],
    platforms: [
      "Meta",
      "TikTok"
    ],
    metrics: [],
    coverVariant: "paid-media-strategy",
    assets: [], confidential: true, dataStatus: needsVerification,
  },
  {
    id: 5,
    slug: "skills-education-lead-generation",
    disciplineTags: [
      "Ads",
      "Account"
    ],
    capabilityIds: [
      "lead-generation-funnel",
      "account-integrated-management"
    ],
    presentationTier: "evidence-only",
    industry: {
      vi: "Đào tạo kỹ năng", en: "Skills Education"
    },
    title: {
      vi: "Thu hút học viên tiềm năng", en: "Student Lead Generation"
    },
    cardDescription: {
      vi: "Meta tạo 5.736 cuộc hội thoại với CPA trung bình 29,9 nghìn đồng; TikTok bổ sung 2,77 triệu lượt xem và hơn 105 nghìn lượt nhấp.",
      en: "Meta generated 5,736 conversations at an average CPA of VND 29.9K, while TikTok added 2.77M views and more than 105K clicks.",
    },
    evidenceSummary: {
      vi: "5.736 cuộc hội thoại · Funnel và landing page", en: "5,736 conversations · Funnel and landing-page coordination"
    },
    roles: {
      vi: "Lead Generation · Funnel Strategy · Landing Page", en: "Lead Generation · Funnel Strategy · Landing Page"
    },
    roleTags: [
      "Lead Generation",
      "Funnel Strategy",
      "Landing Page"
    ],
    platforms: [
      "Meta",
      "TikTok"
    ], metrics: [], coverVariant: "lead-generation-funnel", assets: [], confidential: true, dataStatus: needsVerification,
  },
  {
    id: 6,
    slug: "pet-food-always-on-awareness",
    disciplineTags: [
      "Ads",
      "Account"
    ],
    capabilityIds: [
      "paid-media-strategy",
      "account-integrated-management"
    ],
    presentationTier: "flagship",
    featuredRank: 4,
    industry: {
      vi: "Thức ăn thú cưng", en: "Pet Food"
    },
    title: {
      vi: "Mở rộng độ phủ thương hiệu", en: "Always-on Brand Awareness"
    },
    cardDescription: {
      vi: "Trong kỳ 6 tháng, Meta tạo hơn 603 nghìn lượt tương tác, còn TikTok tạo 9,94 triệu lượt hiển thị và 8,08 triệu lượt xem với CPM khoảng 4,4 nghìn đồng.",
      en: "Across six months, Meta generated more than 603K engagements, while TikTok delivered 9.94M impressions and 8.08M views at an average CPM of approximately VND 4.4K.",
    },
    evidenceSummary: {
      vi: "603.802 tương tác Meta · 9,94 triệu lượt hiển thị TikTok · hợp tác hơn 5 năm",
      en: "603,802 Meta engagements · 9.94M TikTok impressions · 5+ year partnership",
    },
    roles: {
      vi: "Quản lý paid media, testing creative và điều phối account",
      en: "Paid media management, creative testing, and account coordination",
    },
    roleTags: [
      "Always-on Media",
      "Creative Testing",
      "Account Management"
    ],
    dataPeriod: {
      vi: "6 tháng", en: "6 months"
    },
    collaborationDuration: {
      vi: "Hơn 5 năm", en: "More than 5 years"
    },
    platforms: [
      "Meta",
      "TikTok"
    ],
    metrics: [
      {
        label: {
          vi: "Tương tác Meta", en: "Meta engagements"
        }, value: "603,802", verified: false
      },
      {
        label: {
          vi: "Hiển thị TikTok", en: "TikTok impressions"
        }, value: "9.94M", verified: false
      },
    ],
    detail: {
      overview: {
        vi: "Hoạt động always-on cho ngành thức ăn thú cưng, kết hợp tương tác trên Meta với độ phủ và lượt xem trên TikTok nhằm duy trì hiện diện thương hiệu trong thời gian dài.",
        en: "An always-on program for the pet food category, combining Meta engagement with TikTok reach and video views to sustain long-term brand presence.",
      },
      strategy: {
        vi: "Xây dựng nhịp testing creative đều đặn; Meta ưu tiên tương tác, video view và link click về TikTok Shop, trong khi TikTok đảm nhiệm độ phủ. Theo dõi tần suất và chi phí phân phối để làm mới nội dung đúng thời điểm.",
        en: "Maintained a steady creative-testing cadence; Meta prioritized engagement, video views, and clicks to TikTok Shop, while TikTok carried reach. Frequency and delivery cost guided timely creative refreshes.",
      },
      results: {
        vi: "Meta tạo 603.802 lượt tương tác, CTR 5,29% và 2,34 triệu lượt hiển thị. TikTok tạo 9,94 triệu lượt hiển thị, 8,08 triệu lượt xem, tiếp cận 2,10 triệu người và CPM trung bình 4.366 đồng.",
        en: "Meta generated 603,802 engagements, a 5.29% CTR, and 2.34M impressions. TikTok delivered 9.94M impressions, 8.08M views, reached 2.10M people, and achieved an average CPM of VND 4,366.",
      },
      accountScope: {
        vi: "Điều phối đầu mối khách hàng, paid media, nội dung và creative; theo dõi ngân sách, tiến độ và báo cáo trong phạm vi dự án khoảng 80–90 triệu đồng mỗi tháng. Chi tiêu quảng cáo trực tiếp khoảng 12–18 triệu đồng mỗi tháng.",
        en: "Coordinated the client relationship, paid media, content, and creative delivery while tracking budget, progress, and reporting across an approximately VND 80–90M monthly project scope. Direct media spend was around VND 12–18M per month.",
      },
      insight: {
        vi: "Trong mô hình always-on, tần suất và chi phí phân phối là tín hiệu để làm mới creative đúng lúc.",
        en: "In an always-on model, frequency and delivery cost signal when creatives need refreshing.",
      },
    },
    coverVariant: "account-integrated-management",
    assets: [], confidential: true, dataStatus: needsVerification,
  },
  {
    id: 7,
    slug: "buffet-local-customer-growth",
    disciplineTags: [
      "Ads",
      "Account"
    ], capabilityIds: [
      "paid-media-strategy",
      "account-integrated-management"
    ], presentationTier: "evidence-only",
    industry: {
      vi: "Nhà hàng buffet", en: "Buffet Restaurant"
    }, title: {
      vi: "Tăng khách hàng địa phương", en: "Local Customer Acquisition"
    },
    cardDescription: {
      vi: "Meta tạo 1.498 cuộc hội thoại từ 12,1 triệu đồng; TikTok bổ sung 310 nghìn lượt hiển thị cho các đợt truyền thông địa phương.", en: "Meta generated 1,498 conversations from VND 12.1M in spend; TikTok added 310K impressions across local campaign flights."
    },
    evidenceSummary: {
      vi: "1.498 cuộc hội thoại · Local Ads", en: "1,498 conversations · Local Ads"
    },
    roles: {
      vi: "Local Ads · Message Optimization · Coordination", en: "Local Ads · Message Optimization · Coordination"
    }, roleTags: [
      "Local Ads",
      "Message Optimization",
      "Coordination"
    ],
    platforms: [
      "Meta",
      "TikTok"
    ], metrics: [], coverVariant: "paid-media-strategy", assets: [], confidential: true, dataStatus: needsVerification,
  },
  {
    id: 8,
    slug: "real-estate-dual-lead-flows",
    disciplineTags: [
      "Ads"
    ], capabilityIds: [
      "lead-generation-funnel",
      "performance-analysis"
    ], presentationTier: "evidence-only",
    industry: {
      vi: "Bất động sản", en: "Real Estate"
    }, title: {
      vi: "Tăng lead qua hai điểm chạm", en: "Two-path Lead Generation"
    },
    cardDescription: {
      vi: "Khoảng 60,2 triệu đồng chi tiêu tạo 1.282 cuộc hội thoại và 311 lượt đăng ký website, giúp so sánh trực tiếp hai luồng thu lead.", en: "Approximately VND 60.2M in spend generated 1,282 conversations and 311 website registrations, enabling direct funnel comparison."
    },
    evidenceSummary: {
      vi: "1.282 hội thoại + 311 đăng ký website · Funnel comparison", en: "1,282 conversations + 311 website registrations · Funnel comparison"
    },
    roles: {
      vi: "Lead Generation · Meta Ads · Funnel Comparison", en: "Lead Generation · Meta Ads · Funnel Comparison"
    }, roleTags: [
      "Lead Generation",
      "Meta Ads",
      "Funnel Comparison"
    ],
    platforms: [
      "Meta"
    ], metrics: [], coverVariant: "performance-analysis", assets: [], confidential: true, dataStatus: needsVerification,
  },
  {
    id: 9,
    slug: "jewelry-customer-acquisition",
    disciplineTags: [
      "Ads",
      "Account"
    ], capabilityIds: [
      "paid-media-strategy",
      "account-integrated-management"
    ], presentationTier: "evidence-only",
    industry: {
      vi: "Tiệm vàng", en: "Jewelry Retail"
    }, title: {
      vi: "Tăng khách hàng quan tâm", en: "Jewelry Customer Acquisition"
    },
    cardDescription: {
      vi: "Khoảng 20,7 triệu đồng media tạo 417 cuộc hội thoại trên Meta, traffic và livestream trên TikTok trong một tháng.", en: "Approximately VND 20.7M in media generated 417 Meta conversations alongside TikTok traffic and livestream activity within one month."
    },
    evidenceSummary: {
      vi: "417 hội thoại · Meta Ads và TikTok Livestream", en: "417 conversations · Meta Ads and TikTok Livestream"
    },
    roles: {
      vi: "Account Management · Meta Ads · TikTok Livestream", en: "Account Management · Meta Ads · TikTok Livestream"
    }, roleTags: [
      "Account Management",
      "Meta Ads",
      "TikTok Livestream"
    ],
    platforms: [
      "Meta",
      "TikTok"
    ], metrics: [], coverVariant: "account-integrated-management", assets: [], confidential: true, dataStatus: needsVerification,
  },
  {
    id: 10,
    slug: "restaurant-local-engagement",
    disciplineTags: [
      "Ads"
    ], capabilityIds: [
      "paid-media-strategy"
    ], presentationTier: "evidence-only",
    industry: {
      vi: "Nhà hàng", en: "Restaurant"
    }, title: {
      vi: "Tăng nhận biết và tương tác", en: "Local Awareness & Engagement"
    },
    cardDescription: {
      vi: "Trong 6 tháng, 54,2 triệu đồng chi tiêu tạo 45.723 lượt tương tác và ghi nhận 834 cuộc hội thoại hỗ trợ nhu cầu địa phương.", en: "Across six months, VND 54.2M in spend generated 45,723 engagements alongside 834 conversations supporting local demand."
    },
    evidenceSummary: {
      vi: "45.723 tương tác · 834 hội thoại", en: "45,723 engagements · 834 conversations"
    },
    roles: {
      vi: "Meta Ads · Engagement · Local Reach", en: "Meta Ads · Engagement · Local Reach"
    }, roleTags: [
      "Meta Ads",
      "Engagement",
      "Local Reach"
    ],
    platforms: [
      "Meta"
    ], metrics: [], coverVariant: "paid-media-strategy", assets: [], confidential: true, dataStatus: needsVerification,
  },
  {
    id: 11,
    slug: "preschool-enrollment-campaign",
    disciplineTags: [
      "Ads",
      "Account"
    ], capabilityIds: [
      "lead-generation-funnel",
      "account-integrated-management"
    ], presentationTier: "evidence-only",
    industry: {
      vi: "Mầm non tư thục", en: "Private Preschool"
    }, title: {
      vi: "Tuyển sinh qua Meta Ads", en: "Preschool Enrollment Campaign"
    },
    cardDescription: {
      vi: "Trong 2 tháng, các nhóm tuyển sinh tạo 559 cuộc hội thoại, đi cùng hoạt động điều phối nội dung và lịch quay.", en: "Across two months, enrollment campaigns generated 559 conversations, supported by content and filming coordination."
    },
    evidenceSummary: {
      vi: "559 hội thoại · Tuyển sinh và production coordination", en: "559 conversations · Enrollment and production coordination"
    },
    roles: {
      vi: "Enrollment Ads · Account Management · Production", en: "Enrollment Ads · Account Management · Production"
    }, roleTags: [
      "Enrollment Ads",
      "Account Management",
      "Production"
    ],
    platforms: [
      "Meta"
    ], metrics: [], coverVariant: "lead-generation-funnel", assets: [], confidential: true, dataStatus: needsVerification,
  },
  {
    id: 12,
    slug: "yoga-inquiry-generation",
    disciplineTags: [
      "Ads"
    ],
    capabilityIds: [
      "performance-analysis"
    ],
    presentationTier: "flagship",
    featuredRank: 5,
    industry: {
      vi: "Yoga", en: "Yoga"
    },
    title: {
      vi: "Tăng lượng khách hàng tư vấn", en: "Yoga Inquiry Generation"
    },
    cardDescription: {
      vi: "Tạo 423 cuộc hội thoại trong 4 tháng với CPA trung bình khoảng 44 nghìn đồng, đồng thời tái cấu trúc tệp để giảm ảnh hưởng từ lịch sử tương tác ảo.",
      en: "Generated 423 conversations across four months at an average CPA of approximately VND 44K, while restructuring audiences to reduce low-quality historical engagement.",
    },
    evidenceSummary: {
      vi: "423 hội thoại · CPA 43.965 đồng · làm sạch tín hiệu tệp", en: "423 conversations · VND 43,965 CPA · audience-signal cleanup"
    },
    roles: {
      vi: "Tối ưu Meta Ads và kiểm soát chất lượng tệp", en: "Meta Ads optimization and audience quality control"
    },
    roleTags: [
      "Audience Cleanup",
      "Message Ads",
      "Quality Control"
    ],
    dataPeriod: {
      vi: "4 tháng", en: "4 months"
    }, collaborationDuration: {
      vi: "4 tháng", en: "4 months"
    },
    platforms: [
      "Meta"
    ],
    metrics: [
      {
        label: {
          vi: "Cuộc hội thoại", en: "Conversations"
        }, value: "423", verified: false
      },
      {
        label: {
          vi: "CPA trung bình", en: "Average CPA"
        }, value: "VND 43,965", verified: false
      },
    ],
    detail: {
      overview: {
        vi: "Fanpage có lịch sử tương tác kém chất lượng, khiến các tín hiệu bề mặt dễ làm sai hướng tối ưu. Mục tiêu là tạo hội thoại thực tế cho lớp yoga trong khi kiểm soát chất lượng tệp.", en: "The page carried a history of low-quality engagement, making surface signals unreliable for optimization. The objective was to generate genuine yoga inquiries while improving audience quality control."
      },
      strategy: {
        vi: "Tách nhóm nghi ngờ, siết khu vực và độ mới của tệp, loại trừ các cụm tương tác chất lượng thấp và đánh giá bằng nội dung hội thoại thay vì chỉ nhìn CPA. Creative được kiểm tra theo khả năng thu hút đúng nhu cầu học.", en: "Isolated suspicious segments, tightened geography and recency, excluded low-quality engagement clusters, and evaluated conversation quality rather than CPA alone. Creatives were tested for their ability to attract genuine learning intent."
      },
      results: {
        vi: "18,6 triệu đồng chi tiêu tạo 423 cuộc hội thoại với CPA trung bình 43.965 đồng. Chiến dịch tiếp cận 67.489 người, tạo 375.133 lượt hiển thị, CTR 3,80% và 3.530 lượt nhấp liên kết.", en: "VND 18.6M in spend generated 423 conversations at an average CPA of VND 43,965. The campaign reached 67,489 people, delivered 375,133 impressions, achieved a 3.80% CTR, and generated 3,530 link clicks."
      },
      insight: {
        vi: "CPA thấp không đủ khi tín hiệu tệp bị nhiễu; chất lượng hội thoại và lịch sử tương tác phải được đánh giá cùng nhau.", en: "Low CPA is insufficient when audience signals are contaminated; conversation quality and engagement history must be evaluated together."
      },
    },
    coverVariant: "performance-analysis", assets: [], confidential: true, dataStatus: needsVerification,
  },
  {
    id: 13,
    slug: "automotive-customer-inquiries",
    disciplineTags: [
      "Ads"
    ], capabilityIds: [
      "lead-generation-funnel"
    ], presentationTier: "evidence-only",
    industry: {
      vi: "Ô tô", en: "Automotive"
    }, title: {
      vi: "Thu hút khách hàng tiềm năng", en: "Automotive Lead Generation"
    },
    cardDescription: {
      vi: "Trong 2 tháng, 17,9 triệu đồng chi tiêu tạo 253 cuộc hội thoại và tiếp cận hơn 295 nghìn người.", en: "Across two months, VND 17.9M in spend generated 253 conversations and reached more than 295K people."
    },
    evidenceSummary: {
      vi: "253 hội thoại · Ngành ô tô", en: "253 conversations · Automotive"
    },
    roles: {
      vi: "Meta Ads · Message Generation · Reporting", en: "Meta Ads · Message Generation · Reporting"
    }, roleTags: [
      "Meta Ads",
      "Message Generation",
      "Reporting"
    ],
    platforms: [
      "Meta"
    ], metrics: [], coverVariant: "lead-generation-funnel", assets: [], confidential: true, dataStatus: needsVerification,
  },
  {
    id: 14,
    slug: "automotive-messages-engagement",
    disciplineTags: [
      "Ads"
    ], capabilityIds: [
      "performance-analysis"
    ], presentationTier: "evidence-only",
    industry: {
      vi: "Ô tô", en: "Automotive"
    }, title: {
      vi: "Kết hợp tin nhắn và tương tác", en: "Messages & Engagement"
    },
    cardDescription: {
      vi: "Gần 10 triệu đồng chi tiêu tạo 197 cuộc hội thoại và 1.679 lượt tương tác, với từng mục tiêu được báo cáo riêng.", en: "Nearly VND 10M in spend generated 197 conversations and 1,679 engagements, with each objective reported separately."
    },
    evidenceSummary: {
      vi: "Messages và Engagement được báo cáo tách biệt", en: "Messages and Engagement reported separately"
    },
    roles: {
      vi: "Meta Ads · Messages · Engagement", en: "Meta Ads · Messages · Engagement"
    }, roleTags: [
      "Meta Ads",
      "Messages",
      "Engagement"
    ],
    platforms: [
      "Meta"
    ], metrics: [], coverVariant: "performance-analysis", assets: [], confidential: true, dataStatus: needsVerification,
  },
  {
    id: 15,
    slug: "construction-customer-inquiries",
    disciplineTags: [
      "Ads",
      "Account"
    ], capabilityIds: [
      "lead-generation-funnel",
      "account-integrated-management"
    ], presentationTier: "evidence-only",
    industry: {
      vi: "Xây dựng", en: "Construction"
    }, title: {
      vi: "Thu hút khách hàng tiềm năng", en: "Construction Lead Generation"
    },
    cardDescription: {
      vi: "Kết nối Meta Ads, nội dung fanpage và landing page trong một luồng thu lead; kỳ một tháng tạo 51 cuộc hội thoại.", en: "Connected Meta Ads, Facebook content, and a landing page into one lead journey; the one-month period generated 51 conversations."
    },
    evidenceSummary: {
      vi: "Ads–Content–Landing page · 51 hội thoại", en: "Ads–Content–Landing page · 51 conversations"
    },
    roles: {
      vi: "Account Management · Meta Ads · Landing Page", en: "Account Management · Meta Ads · Landing Page"
    }, roleTags: [
      "Account Management",
      "Meta Ads",
      "Landing Page"
    ],
    platforms: [
      "Meta",
      "Landing Page"
    ], metrics: [], coverVariant: "account-integrated-management", assets: [], confidential: true, dataStatus: needsVerification,
  },
  {
    id: 16,
    slug: "korean-education-enrollment",
    disciplineTags: [
      "Ads",
      "Account"
    ], capabilityIds: [
      "lead-generation-funnel",
      "account-integrated-management"
    ], presentationTier: "hidden",
    industry: {
      vi: "Giáo dục Hàn ngữ", en: "Korean Education"
    }, title: {
      vi: "Tuyển sinh đa nền tảng", en: "Multi-channel Enrollment"
    },
    cardDescription: {
      vi: "Kết hợp Facebook Messages và TikTok Click-to-Zalo trong một đợt tuyển sinh; kết quả chi tiết chờ dashboard xác thực.", en: "Combined Facebook Messages and TikTok Click-to-Zalo for enrollment; detailed results await dashboard verification."
    },
    evidenceSummary: {
      vi: "Facebook-to-Messenger và TikTok-to-Zalo", en: "Facebook-to-Messenger and TikTok-to-Zalo"
    },
    roles: {
      vi: "Account · Paid Media · Production Coordination", en: "Account · Paid Media · Production Coordination"
    }, roleTags: [
      "Account",
      "Enrollment Ads",
      "Production"
    ],
    platforms: [
      "Meta",
      "TikTok",
      "Zalo"
    ], metrics: [], coverVariant: "lead-generation-funnel", assets: [], confidential: true, dataStatus: needsVerification,
  },
  {
    id: 17,
    slug: "business-services-brand-identity",
    disciplineTags: [
      "Copywriting",
      "Design"
    ], capabilityIds: [
      "brand-content-creative"
    ], presentationTier: "evidence-only",
    industry: {
      vi: "Dịch vụ doanh nghiệp", en: "Business Services"
    }, title: {
      vi: "Xây dựng bộ nhận diện", en: "Brand Identity System"
    },
    cardDescription: {
      vi: "Phát triển hệ thống nhận diện từ logo, guideline và banner đến tài liệu bán hàng, biển chỉ dẫn và nội dung thương hiệu.", en: "Developed an identity system spanning the logo, guidelines, banners, sales materials, wayfinding, and brand copy."
    },
    evidenceSummary: {
      vi: "Brand identity · Graphic Design · Copywriting", en: "Brand identity · Graphic Design · Copywriting"
    },
    roles: {
      vi: "Brand Identity · Graphic Design · Copywriting", en: "Brand Identity · Graphic Design · Copywriting"
    }, roleTags: [
      "Brand Identity",
      "Graphic Design",
      "Copywriting"
    ],
    platforms: [
      "Online",
      "Offline"
    ], metrics: [], coverVariant: "brand-content-creative", assets: [], confidential: true, dataStatus: needsVerification,
  },
  {
    id: 18,
    slug: "marketing-services-brand-content",
    disciplineTags: [
      "Copywriting",
      "Design"
    ], capabilityIds: [
      "brand-content-creative"
    ], presentationTier: "evidence-only",
    industry: {
      vi: "Dịch vụ marketing", en: "Marketing Services"
    }, title: {
      vi: "Xây dựng logo và nội dung", en: "Logo & Content System"
    },
    cardDescription: {
      vi: "Xây dựng logo và hệ thống nội dung nền tảng để thương hiệu trình bày dịch vụ nhất quán trên fanpage.", en: "Developed a logo and foundational content system to keep service communication consistent across the fanpage."
    },
    evidenceSummary: {
      vi: "Logo Design · Copywriting · Content Direction", en: "Logo Design · Copywriting · Content Direction"
    },
    roles: {
      vi: "Logo Design · Copywriting · Content Direction", en: "Logo Design · Copywriting · Content Direction"
    }, roleTags: [
      "Logo Design",
      "Copywriting",
      "Content Direction"
    ],
    platforms: [
      "Facebook"
    ], metrics: [], coverVariant: "brand-content-creative", assets: [], confidential: true, dataStatus: needsVerification,
  },
  {
    id: 19,
    slug: "dermatology-multi-format-content",
    disciplineTags: [
      "Copywriting",
      "Design",
      "Video Editing"
    ], capabilityIds: [
      "brand-content-creative"
    ], presentationTier: "evidence-only",
    industry: {
      vi: "Phòng khám da liễu", en: "Dermatology Clinic"
    }, title: {
      vi: "Nội dung đa định dạng", en: "Multi-format Content"
    },
    cardDescription: {
      vi: "Lên kế hoạch, viết nội dung, thiết kế và sản xuất video để duy trì hệ thống truyền thông đồng bộ cho nhiều nhóm nhu cầu.", en: "Planned, wrote, designed, and produced video content to maintain a consistent communication system across audience needs."
    },
    evidenceSummary: {
      vi: "Content Planning · Copywriting · Video Production", en: "Content Planning · Copywriting · Video Production"
    },
    roles: {
      vi: "Content Planning · Copywriting · Video Production", en: "Content Planning · Copywriting · Video Production"
    }, roleTags: [
      "Content Planning",
      "Copywriting",
      "Video Production"
    ],
    platforms: [
      "Facebook",
      "TikTok"
    ], metrics: [], coverVariant: "brand-content-creative", assets: [], confidential: true, dataStatus: needsVerification,
  },
];
