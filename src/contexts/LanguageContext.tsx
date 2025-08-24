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
