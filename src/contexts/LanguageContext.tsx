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
    "home.greeting": "안녕하세요, 저는",
    "home.name": "영민",
    "home.title": "AI 엔지니어입니다",
    "home.location": "대한민국에서 왔습니다",

    // Navigation
    "nav.links": "링크",
    "nav.profile": "프로필",
    "nav.projects": "작업",
    "nav.blog": "블로그",

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
    "home.greeting": "Hi, I'm",
    "home.name": "Youngmin",
    "home.title": "Software Engineer",
    "home.location": "from South Korea",

    // Navigation
    "nav.links": "Links",
    "nav.profile": "Profile",
    "nav.projects": "Projects",
    "nav.blog": "Blog",

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
