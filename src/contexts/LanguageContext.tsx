"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Language } from "@/types";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isLoaded: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

const TRANSLATIONS = {
  ko: {
    // Home page
    "home.title": "MANDU",
    "home.subtitle": "AI Engineer / Developer / Problem Solver",
    "home.viewResume": "이력서 보기",
    "home.viewProjects": "프로젝트 보기",
    "home.aboutDescription": "머신러닝 개발자로서의 경력과 기술을 확인하세요",
    "home.projectsDescription": "혁신적인 AI 프로젝트들과 기술적 성과를 살펴보세요",
    "home.blogDescription": "AI와 기술에 대한 인사이트와 경험을 공유합니다",
    "home.linksDescription": "다양한 플랫폼과 소셜 미디어에서 저를 만나보세요",
    "home.contactDescription": "프로젝트 협업이나 문의사항이 있으시면 연락주세요",

    // About page
    "about.title": "About Me",
    "about.subtitle": "AI Engineer & Machine Learning Developer with passion for innovation",
    "about.summary": "Professional Summary",
    "about.summaryText":
      "Experienced AI Engineer specializing in machine learning, deep learning, and full-stack development. Passionate about creating innovative solutions that solve real-world problems through cutting-edge technology.",
    "about.skills": "Technical Skills",
    "about.education": "Education",
    "about.experience": "Experience",
    "about.certificates": "Certificates & Programs",
    "about.awards": "Awards & Achievements",

    // Projects
    "projects.subtitle": "Showcase of innovative AI projects and technical achievements",
    "projects.totalProjects": "Total Projects",
    "projects.technologies": "Technologies",
    "projects.successRate": "Completion Rate",
    "projects.period": "Period",
    "projects.role": "Role",

    // Navigation
    "navigation.home": "홈",
    "navigation.links": "링크",
    "navigation.about": "소개",
    "navigation.projects": "프로젝트",
    "navigation.blog": "블로그",
    "navigation.contact": "연락처",

    // Profile sections
    "profile.contact": "대표 연락처/링크",
    "profile.programming": "프로그래밍",
    "profile.games": "게임",
    "profile.education": "학력",
    "profile.certificates": "자격증 및 프로그램",
    "profile.experience": "경력",
    "profile.awards": "수상 및 출전",
    "profile.otherActivities": "기타 활동",

    // Links sections
    "links.links": "링크",
    "links.games": "게임",
    "links.contact": "연락처 및 링크",
    "links.sns": "SNS",
    "links.programming": "프로그래밍",

    // Projects
    "projects.title": "프로젝트",
    "projects.viewGithub": "GitHub에서 보기 →",
    "projects.viewProject": "프로젝트 보기 →",

    // Blog
    "blog.title": "블로그",
    "blog.overview": "개요",
    "blog.articles": "아티클",
    "blog.activities": "2개의 활동",
    "blog.activitiesCount": "2 activities in 2024",
    "blog.less": "Less",
    "blog.more": "더보기",
    "blog.popularArticles": "인기 아티클",
    "blog.recentArticles": "최신 아티클",
    "blog.searchPlaceholder": "아티클을 검색해보세요",
    "blog.sortLatest": "최신순",
    "blog.sortPopular": "인기순",
    "blog.sortOldest": "오래된순",
    "blog.noResults": "검색 결과가 없습니다.",
    "blog.showMore": "더보기",
    "blog.showLess": "접기",

    // Footer
    "footer.language": "KO",
    "footer.rights": "All rights reserved.",

    // Common
    "common.email": "이메일",
    "common.github": "GitHub",
    "common.linkedin": "LinkedIn",
    "common.blog": "블로그",
    "common.solvedAc": "solved.ac",
    "common.baekjoon": "Baekjoon OJ",
    "common.codeforces": "Codeforces",
    "common.atcoder": "AtCoder",
    "common.topcoder": "Topcoder",
    "common.leetcode": "LeetCode",
    "common.hackerrank": "HackerRank",
    "common.maplestory": "메이플스토리 M (스카니아)",

    // Education
    "education.psu.institution": "펜실베니아 주립대학교",
    "education.psu.degree": "소프트웨어 공학 학사",
    "education.psu.location": "펜실베니아, 미국",
    "education.xjtlu.institution": "시안 교통-리버풀 대학교",
    "education.xjtlu.degree": "컴퓨터 과학 기술 공학사",
    "education.xjtlu.location": "쑤저우, 장쑤성, 중국",
    "education.indus.institution": "인더스 국제학교 방갈로르",
    "education.indus.degree": "고등학교 졸업장, 국제 바칼로레아",
    "education.indus.location": "방갈로르, 인도",

    // Career
    "career.rok.company": "대한민국 국방부",
    "career.rok.position": "UI/UX 디자이너",
    "career.rok.achievement1":
      "코드 최소화, 지연 로딩, 이미지 압축을 사용하여 웹사이트 구조를 재설계하여 페이지 로드 시간을 40% 단축했습니다.",
    "career.rok.achievement2": "사용자 유지율과 참여도를 향상시키는 완전 반응형 UI 디자인을 구현했습니다.",

    // Awards
    "awards.lg.name": "LG 에이머스",
    "awards.lg.description": "LG AI 연구원 - 1,400명 참가자 중 상위 5.5%에 랭크된 이상 탐지 경진대회",

    // Certificates
    "certificates.google.title": "구글 머신러닝 부트캠프",
    "certificates.google.issuer": "구글 개발자 그룹",
    "certificates.google.desc1":
      "고급 특성 엔지니어링과 하이퍼파라미터 튜닝을 통해 중고차 가격 예측 회귀 모델을 개발하여 정확도를 33% 향상시켰습니다.",
    "certificates.google.desc2":
      "Python과 TensorFlow를 사용하여 금융 어드바이저 모델을 배포하여 1초 미만의 응답 시간으로 확장 가능한 프로덕션 API 통합을 달성했습니다.",
    "certificates.google.desc3":
      "scikit-learn, XGBoost, LightGBM을 활용하여 실제 데이터셋에서 데이터 기반 의사결정을 추진했습니다.",
    "certificates.deeplearning.title": "딥러닝 전문화 과정",
    "certificates.deeplearning.issuer": "DeepLearning.ai",
    "certificates.kakao.title": "카카오 엔터프라이즈 군 AI-SW 과정",
    "certificates.kakao.issuer": "카카오",
    "certificates.ibm.title": "IBM 데이터 사이언스 전문화 과정",
    "certificates.ibm.issuer": "IBM",
    "certificates.neordinary.title": "Ne(O)rdinary 해커톤",
    "certificates.neordinary.issuer": "CMC 10기 앱런칭 동아리, 소프트스퀘어드",
    "certificates.neordinary.desc1":
      "소규모 극장을 위한 일정 공유 플랫폼을 개발하여 사용자 선호도 충돌을 해결하고 연극 일정 접근성을 개선했습니다.",

    // Projects
    "projects.financial.title": "금융 어드바이저 챗봇",
    "projects.financial.organization": "구글 머신러닝 부트캠프",
    "projects.financial.description":
      "고급 언어 모델을 사용하여 개인화된 투자 추천을 제공하는 AI 기반 금융 자문 시스템을 개발했습니다. 효율적인 파인튜닝 기법과 양자화 방법을 구현하여 모델 성능을 최적화하고 계산 오버헤드를 줄였습니다.",
    "projects.jaksim.title": "작심친구",
    "projects.jaksim.organization": "소프트스퀘어드",
    "projects.jaksim.description":
      "그룹 자기계발 챌린지를 위한 크로스 플랫폼 React Native 애플리케이션의 프론트엔드 개발을 주도했습니다. 고급 데이터 시각화와 사용자 인증 시스템을 구현하여 사용자 경험과 참여 지표를 향상시켰습니다.",
  },
  en: {
    // Home page
    "home.title": "MANDU",
    "home.subtitle": "AI Engineer / Developer / Problem Solver",
    "home.viewResume": "View Resume",
    "home.viewProjects": "View Projects",
    "home.aboutDescription": "Explore my career and skills as a machine learning developer",
    "home.projectsDescription": "Discover innovative AI projects and technical achievements",
    "home.blogDescription": "Share insights and experiences about AI and technology",
    "home.linksDescription": "Connect with me across various platforms and social media",
    "home.contactDescription": "Get in touch for project collaboration or inquiries",

    // About page
    "about.title": "About Me",
    "about.subtitle": "AI Engineer & Machine Learning Developer with passion for innovation",
    "about.summary": "Professional Summary",
    "about.summaryText":
      "Experienced AI Engineer specializing in machine learning, deep learning, and full-stack development. Passionate about creating innovative solutions that solve real-world problems through cutting-edge technology.",
    "about.skills": "Technical Skills",
    "about.education": "Education",
    "about.experience": "Experience",
    "about.certificates": "Certificates & Programs",
    "about.awards": "Awards & Achievements",

    // Projects
    "projects.subtitle": "Showcase of innovative AI projects and technical achievements",
    "projects.totalProjects": "Total Projects",
    "projects.technologies": "Technologies",
    "projects.successRate": "Completion Rate",
    "projects.period": "Period",
    "projects.role": "Role",

    // Navigation
    "navigation.home": "Home",
    "navigation.links": "Links",
    "navigation.about": "About",
    "navigation.projects": "Projects",
    "navigation.blog": "Blog",
    "navigation.contact": "Contact",

    // Profile sections
    "profile.contact": "Contact & Links",
    "profile.programming": "Programming",
    "profile.games": "Games",
    "profile.education": "Education",
    "profile.certificates": "Certificates & Programs",
    "profile.experience": "Experience",
    "profile.awards": "Awards & Achievements",
    "profile.otherActivities": "Other Activities",

    // Links sections
    "links.links": "Links",
    "links.games": "Games",
    "links.contact": "Contact & Links",
    "links.sns": "SNS",
    "links.programming": "Programming",

    // Projects
    "projects.title": "Projects",
    "projects.viewGithub": "View on Github →",
    "projects.viewProject": "View Project →",

    // Blog
    "blog.title": "Blog",
    "blog.overview": "Overview",
    "blog.articles": "Articles",
    "blog.activities": "2 activities",
    "blog.activitiesCount": "2 activities in 2024",
    "blog.less": "Less",
    "blog.more": "More",
    "blog.popularArticles": "Popular Articles",
    "blog.recentArticles": "Recent Articles",
    "blog.searchPlaceholder": "Search articles...",
    "blog.sortLatest": "Latest",
    "blog.sortPopular": "Popular",
    "blog.sortOldest": "Oldest",
    "blog.noResults": "No results found.",
    "blog.showMore": "More",
    "blog.showLess": "Less",

    // Footer
    "footer.language": "EN",
    "footer.rights": "All rights reserved.",

    // Common
    "common.email": "Email",
    "common.github": "GitHub",
    "common.linkedin": "LinkedIn",
    "common.blog": "Blog",
    "common.solvedAc": "solved.ac",
    "common.baekjoon": "Baekjoon OJ",
    "common.codeforces": "Codeforces",
    "common.atcoder": "AtCoder",
    "common.topcoder": "Topcoder",
    "common.leetcode": "LeetCode",
    "common.hackerrank": "HackerRank",
    "common.maplestory": "Maplestory M (Scania)",

    // Education
    "education.psu.institution": "Pennsylvania State University",
    "education.psu.degree": "B.S. in Software Engineering",
    "education.psu.location": "Pennsylvania, United States",
    "education.xjtlu.institution": "Xi'an Jiaotong Liverpool University",
    "education.xjtlu.degree": "B.E. in Computer Science and Technology",
    "education.xjtlu.location": "Suzhou, Jiangsu, China",
    "education.indus.institution": "Indus International School Bangalore",
    "education.indus.degree": "High School Diploma, International Baccalaureate",
    "education.indus.location": "Bangalore, India",

    // Career
    "career.rok.company": "R.O.K, MND",
    "career.rok.position": "UI/UX Designer",
    "career.rok.achievement1":
      "Re-architected website structure using code minification, lazy loading, and image compression to reduce page load times by 40%.",
    "career.rok.achievement2": "Implemented fully responsive UI designs that improved user retention and engagement.",

    // Awards
    "awards.lg.name": "LG AImers",
    "awards.lg.description":
      "LG AI Research - Ranked in the top 5.5% among 1,400 participants in an Anomaly Detection competition",

    // Certificates
    "certificates.google.title": "Google Machine Learning Bootcamp",
    "certificates.google.issuer": "Google Developers Group",
    "certificates.google.desc1":
      "Engineered a regression model for used car price prediction, increasing accuracy by 33% through advanced feature engineering and hyperparameter tuning.",
    "certificates.google.desc2":
      "Deployed a financial advisor model using Python and TensorFlow achieving scalable production API integration with sub-second response times.",
    "certificates.google.desc3":
      "Utilized scikit-learn, XGBoost, and LightGBM to drive data-driven decision-making on real-world datasets.",
    "certificates.deeplearning.title": "Deep Learning Specialization",
    "certificates.deeplearning.issuer": "DeepLearning.ai",
    "certificates.kakao.title": "Kakao Enterprise Military AI-SW Course",
    "certificates.kakao.issuer": "Kakao",
    "certificates.ibm.title": "IBM Data Science Specialization",
    "certificates.ibm.issuer": "IBM",
    "certificates.neordinary.title": "Ne(O)rdinary Hackathon",
    "certificates.neordinary.issuer": "CMC 10th App Launching Club, SoftSquared",
    "certificates.neordinary.desc1":
      "Developed a schedule-sharing platform for small theaters, resolving conflicting user preferences and improving access to play schedules.",

    // Projects
    "projects.financial.title": "Financial Advisor Chatbot",
    "projects.financial.organization": "Google Machine Learning Bootcamp",
    "projects.financial.description":
      "Developed an AI-driven financial advisory system using advanced language models to deliver personalized investment recommendations. Implemented efficient fine-tuning techniques and quantization methods to optimize model performance and reduce computational overhead.",
    "projects.jaksim.title": "JakSimFriend",
    "projects.jaksim.organization": "SoftSquared",
    "projects.jaksim.description":
      "Led front-end development of a cross-platform React Native application for group self-improvement challenges. Implemented advanced data visualization and user authentication systems to enhance user experience and engagement metrics.",
  },
} as const;

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // SSR 안전성을 위한 체크
    if (typeof window === "undefined") return;

    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "ko" || savedLanguage === "en")) {
      setLanguage(savedLanguage);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }
  }, [language, isLoaded]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ko" ? "en" : "ko"));
  };

  const t = (key: string): string => {
    const translation = TRANSLATIONS[language][key as keyof (typeof TRANSLATIONS)[typeof language]];
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isLoaded }}>{children}</LanguageContext.Provider>
  );
};
