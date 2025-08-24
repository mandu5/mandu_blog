"use client";

export default function HomePage() {
  const timelineData = [
    {
      id: "education-1",
      type: "education",
      title: "B.S. in Software Engineering",
      organization: "Pennsylvania State University",
      period: "2024 - 2026",
      description: "Currently pursuing software engineering degree",
      icon: "🎓",
    },
    {
      id: "education-2",
      type: "education",
      title: "B.E. in Computer Science and Technology",
      organization: "Xi'an Jiaotong Liverpool University",
      period: "2020 - 2022",
      description: "Computer science and technology degree",
      icon: "🎓",
    },
    {
      id: "education-3",
      type: "education",
      title: "High School Diploma, International Baccalaureate",
      organization: "Indus International School Bangalore",
      period: "2011 - 2019",
      description: "International Baccalaureate program",
      icon: "🎓",
    },
    {
      id: "experience-1",
      type: "experience",
      title: "UI/UX Designer",
      organization: "R.O.K, MND",
      period: "08/2022 - 01/2024",
      description:
        "Re-architected website structure using code minification, lazy loading, and image compression to reduce page load times by 40%.",
      icon: "💼",
    },
    {
      id: "certificate-1",
      type: "certificate",
      title: "Google Machine Learning Bootcamp",
      organization: "Google Developers Group",
      period: "06/2024 - 10/2024",
      description: "Engineered regression models and deployed financial advisor systems",
      icon: "📜",
    },
    {
      id: "certificate-2",
      type: "certificate",
      title: "Deep Learning Specialization",
      organization: "Coursera",
      period: "05/2024 - 08/2024",
      description: "Comprehensive deep learning course covering neural networks and advanced techniques",
      icon: "📜",
    },
    {
      id: "certificate-3",
      type: "certificate",
      title: "Kakao AI Bootcamp",
      organization: "Kakao",
      period: "09/2024 - 11/2024",
      description: "Advanced AI and machine learning bootcamp",
      icon: "📜",
    },
    {
      id: "certificate-4",
      type: "certificate",
      title: "IBM Data Science Professional",
      organization: "IBM",
      period: "08/2023 - 10/2023",
      description: "Professional data science certification program",
      icon: "📜",
    },
    {
      id: "certificate-5",
      type: "certificate",
      title: "Neordinary AI Course",
      organization: "Neordinary",
      period: "04/2022 - 05/2022",
      description: "AI and machine learning fundamentals course",
      icon: "📜",
    },
    {
      id: "award-1",
      type: "award",
      title: "LG AImers",
      organization: "LG AI Research",
      period: "06/2024 - 08/2024",
      description: "Ranked in the top 5.5% among 1,400 participants in Anomaly Detection competition",
      icon: "🏆",
    },
  ];

  // Helper functions
  const extractYearsAndMonths = (period: string) => {
    // Handle month/year format like "06/2024 - 10/2024"
    const monthYearMatches = period.match(/(\d{2})\/(\d{4})\s*-\s*(\d{2})\/(\d{4})/);
    if (monthYearMatches) {
      const startMonth = parseInt(monthYearMatches[1]);
      const startYear = parseInt(monthYearMatches[2]);
      const endMonth = parseInt(monthYearMatches[3]);
      const endYear = parseInt(monthYearMatches[4]);
      const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);
      return { start: startYear + (startMonth - 1) / 12, end: endYear + (endMonth - 1) / 12, totalMonths };
    }

    // Handle year format like "2024 - 2026" or "2020 - 2022"
    const yearMatches = period.match(/(\d{4})/g);
    if (!yearMatches) return { start: 2024, end: 2024, totalMonths: 0 };

    if (yearMatches.length >= 2) {
      const start = parseInt(yearMatches[0]);
      const end = parseInt(yearMatches[1]);
      return { start, end, totalMonths: (end - start) * 12 };
    }

    // Handle single year like "2024"
    const year = parseInt(yearMatches[0]);
    return { start: year, end: year, totalMonths: 0 };
  };

  const getCompressedPosition = (year: number) => {
    if (year <= 2019) return ((year - 2010) / 9) * 10; // 2011-2019: 10% (고등학교만)
    if (year <= 2020) return 10 + ((year - 2019) / 1) * 2; // 2019-2020: 2% (빈 구간)
    if (year <= 2022) return 12 + ((year - 2020) / 2) * 8; // 2020-2022: 8% (대학교)
    if (year <= 2023) return 20 + ((year - 2022) / 1) * 5; // 2022-2023: 5% (경험 + 자격증)
    if (year <= 2024) return 25 + ((year - 2023) / 1) * 15; // 2023-2024: 15% (많은 활동들)
    if (year <= 2025) return 40 + ((year - 2024) / 1) * 25; // 2024-2025: 25% (현재)
    return 65 + ((year - 2025) / 1) * 35; // 2025-2026: 35% (미래)
  };

  const getColor = (type: string) => {
    switch (type) {
      case "education":
        return {
          bg: "bg-gradient-to-r from-blue-400/90 to-blue-500/90",
          border: "border-blue-300/30",
          text: "text-blue-900",
        };
      case "experience":
        return {
          bg: "bg-gradient-to-r from-emerald-400/90 to-emerald-500/90",
          border: "border-emerald-300/30",
          text: "text-emerald-900",
        };
      case "certificate":
        return {
          bg: "bg-gradient-to-r from-purple-400/90 to-purple-500/90",
          border: "border-purple-300/30",
          text: "text-purple-900",
        };
      case "award":
        return {
          bg: "bg-gradient-to-r from-amber-400/90 to-amber-500/90",
          border: "border-amber-300/30",
          text: "text-amber-900",
        };
      default:
        return {
          bg: "bg-gradient-to-r from-gray-400/90 to-gray-500/90",
          border: "border-gray-300/30",
          text: "text-gray-900",
        };
    }
  };

  // Process timeline data
  const processedData = timelineData
    .map((item) => {
      const { start, end, totalMonths } = extractYearsAndMonths(item.period);
      const startPosition = getCompressedPosition(start);
      const endPosition = getCompressedPosition(end);
      const width = Math.max(endPosition - startPosition, 3);
      const duration = Math.floor(end - start);
      const isInProgress = end >= 2025.67; // 2025년 8월 기준 (8/12 = 0.67)
      return { ...item, start, end, startPosition, width, duration, totalMonths, isInProgress };
    })
    .sort((a, b) => a.start - b.start);

  // Group items by category with anti-overlap lanes
  const categoryGroups = ["education", "experience", "certificate", "award"]
    .map((category) => {
      const categoryItems = processedData.filter((item) => item.type === category);
      if (categoryItems.length === 0) return null;

      const lanes: number[] = [];
      const itemsWithLanes = categoryItems.map((item) => {
        let laneIndex = 0;
        for (; laneIndex < lanes.length; laneIndex += 1) {
          if (item.startPosition >= lanes[laneIndex]) break;
        }
        if (laneIndex === lanes.length) lanes.push(item.startPosition + item.width);
        else lanes[laneIndex] = item.startPosition + item.width;
        return { ...item, laneIndex };
      });

      return {
        category,
        items: itemsWithLanes,
        maxLanes: Math.max(1, Math.min(2, Math.max(...itemsWithLanes.map((i) => i.laneIndex)) + 1)),
        laneHeight: 40,
      };
    })
    .filter(Boolean);

  const categoryNames: Record<string, { en: string; ko: string; icon: string }> = {
    education: { en: "Education", ko: "교육", icon: "🎓" },
    experience: { en: "Experience", ko: "경험", icon: "💼" },
    certificate: { en: "Certificates", ko: "자격증", icon: "📜" },
    award: { en: "Awards", ko: "수상", icon: "🏆" },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8 text-center relative">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-light tracking-tight">Mandu</h1>
            <div className="w-24 h-px bg-gray-300 dark:bg-gray-700 mx-auto"></div>
            <p className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-400">AI Engineer</p>

            {/* Scroll Down Indicator - positioned right below AI Engineer */}
            <div className="mt-8 animate-bounce flex justify-center">
              <button
                onClick={() => document.getElementById("timeline-section")?.scrollIntoView({ behavior: "smooth" })}
                className="flex flex-col items-center text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300"
              >
                <span className="text-sm font-light">Scroll to view timeline</span>
                <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section id="timeline-section" className="py-10">
        <div className="max-w-6xl mx-auto px-8">
          {/* Simplified Timeline */}
          <div className="relative">
            {/* Scrollable Container (horizontal only; no vertical scroll) */}
            <div className="overflow-x-auto overflow-y-hidden pb-8" id="timeline-scroll">
              <div className="relative" style={{ minWidth: "2000px" }}>
                {/* Year Scale - naturally scrolls with content */}
                <div
                  className="relative mb-4 px-8"
                  id="year-scale"
                  style={{ width: "calc(100% - 4rem)", minHeight: "32px" }}
                >
                  {/* Background line for better visual connection */}
                  <div className="absolute left-0 right-0 top-4 h-px bg-gray-200 dark:bg-gray-700"></div>

                  {/* Position years exactly where timeline items appear */}
                  <div
                    className="absolute -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 font-medium"
                    style={{ left: "1.11%", top: "0px" }}
                  >
                    2011
                  </div>
                  <div
                    className="absolute -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 font-medium"
                    style={{ left: "10%", top: "0px" }}
                  >
                    2019
                  </div>
                  <div
                    className="absolute -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 font-medium"
                    style={{ left: "12%", top: "0px" }}
                  >
                    2020
                  </div>
                  <div
                    className="absolute -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 font-medium"
                    style={{ left: "20%", top: "0px" }}
                  >
                    2022
                  </div>
                  <div
                    className="absolute -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 font-medium"
                    style={{ left: "25%", top: "0px" }}
                  >
                    2023
                  </div>
                  <div
                    className="absolute -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 font-medium"
                    style={{ left: "40%", top: "0px" }}
                  >
                    2024
                  </div>
                  <div
                    className="absolute -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 font-medium"
                    style={{ left: "65%", top: "0px" }}
                  >
                    2025
                  </div>
                  <div
                    className="absolute -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 font-medium"
                    style={{ left: "100%", top: "0px" }}
                  >
                    2026
                  </div>
                </div>

                {/* Timeline Rows */}
                <div className="min-w-max space-y-4 overflow-visible">
                  {categoryGroups.map((group) => {
                    if (!group) return null;

                    const colors = getColor(group.category);

                    return (
                      <div key={group.category} className="relative mb-4">
                        {/* Category Header and Timeline in one line */}
                        <div className="flex items-center space-x-4 mb-1">
                          <div className="text-xl flex-shrink-0">{categoryNames[group.category].icon}</div>
                          <h3 className="text-lg font-light text-gray-900 dark:text-white flex-shrink-0">
                            {categoryNames[group.category].en}
                          </h3>
                          <div className="flex-1 h-px bg-transparent"></div>
                        </div>

                        {/* Timeline bars on same line as category */}
                        <div className="relative" style={{ height: `${group.maxLanes * group.laneHeight}px` }}>
                          {/* Background timeline line */}
                          <div className="absolute left-0 right-0 top-6 h-px bg-gray-200 dark:bg-gray-700"></div>
                          {/* Vertical grid lines at major years */}
                          <div className="absolute inset-x-0 top-0 h-full pointer-events-none">
                            <div
                              className="absolute top-0 bottom-0 w-px bg-gray-200/50 dark:bg-gray-700/50"
                              style={{ left: "12%" }}
                            ></div>
                            <div
                              className="absolute top-0 bottom-0 w-px bg-gray-200/50 dark:bg-gray-700/50"
                              style={{ left: "26.67%" }}
                            ></div>
                            <div
                              className="absolute top-0 bottom-0 w-px bg-gray-200/50 dark:bg-gray-700/50"
                              style={{ left: "41.33%" }}
                            ></div>
                            <div
                              className="absolute top-0 bottom-0 w-px bg-gray-200/50 dark:bg-gray-700/50"
                              style={{ left: "56%" }}
                            ></div>
                            <div
                              className="absolute top-0 bottom-0 w-px bg-gray-200/50 dark:bg-gray-700/50"
                              style={{ left: "70.67%" }}
                            ></div>
                            <div
                              className="absolute top-0 bottom-0 w-px bg-gray-200/50 dark:bg-gray-700/50"
                              style={{ left: "85.33%" }}
                            ></div>
                            <div
                              className="absolute top-0 bottom-0 w-px bg-gray-200/50 dark:bg-gray-700/50"
                              style={{ left: "100%" }}
                            ></div>
                          </div>

                          {/* Items - Only duration bars */}
                          {group.items.map((item) => (
                            <div
                              key={item.id}
                              className="absolute group cursor-pointer"
                              style={{
                                left: `${item.startPosition}%`,
                                width: `${item.width}%`,
                                top: `${item.laneIndex * group.laneHeight}px`,
                              }}
                            >
                              {/* Duration bar - main element */}
                              <div
                                className={`h-6 ${colors.bg} ${colors.border} rounded-md shadow-sm relative hover:shadow-md transition-all duration-200`}
                              >
                                {/* Duration label inside bar */}
                                <div className="absolute inset-0 flex items-center justify-center px-1">
                                  <span className="text-white text-[10px] font-medium truncate">
                                    {item.width >= 8 ? (
                                      // 바가 충분히 넓으면 제목과 기간을 함께 표시
                                      <span className="flex flex-col items-center">
                                        <span className="text-[8px] opacity-90">{item.title.split(" ")[0]}</span>
                                        <span>
                                          {item.isInProgress
                                            ? "In Progress"
                                            : item.duration >= 1
                                            ? `${item.duration}Y`
                                            : `${item.totalMonths}M`}
                                        </span>
                                      </span>
                                    ) : // 바가 좁으면 기간만 표시
                                    item.isInProgress ? (
                                      "In Progress"
                                    ) : item.duration >= 1 ? (
                                      `${item.duration}Y`
                                    ) : (
                                      `${item.totalMonths}M`
                                    )}
                                  </span>
                                </div>
                              </div>

                              {/* Hover/Touch Details Card - positioned to avoid overflow */}
                              <div className="absolute top-10 left-0 w-80 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform scale-95 group-hover:scale-100">
                                <div className="flex items-start space-x-3">
                                  <div className="text-xl flex-shrink-0">{item.icon}</div>
                                  <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                                      {item.title}
                                    </h4>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{item.organization}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed mb-3">
                                      {item.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                      <span className="text-xs text-gray-400 dark:text-gray-600 font-medium">
                                        {item.period}
                                      </span>
                                      <div className={`w-3 h-3 ${colors.bg} rounded-full`}></div>
                                    </div>
                                  </div>
                                </div>

                                {/* Arrow pointing to the bar */}
                                <div className="absolute -top-2 left-4 w-4 h-4 bg-white dark:bg-gray-900 border-l border-t border-gray-200 dark:border-gray-700 transform rotate-45"></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="text-center mt-2">
              <p className="text-xs text-gray-400 dark:text-gray-600">← Scroll horizontally to view timeline →</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
