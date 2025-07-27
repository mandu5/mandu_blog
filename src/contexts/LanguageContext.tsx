"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "ko" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

const translations = {
  ko: {
    "home.greeting": "안녕하세요, 저는",
    "home.name": "영민",
    "home.title": "AI 엔지니어입니다",
    "home.location": "대한민국에서 왔습니다",
    "nav.links": "링크",
    "nav.profile": "프로필",
    "nav.projects": "작업",
    "nav.blog": "블로그",
    "about.profile": "프로필",
    "about.games": "게임",
    "about.contact": "대표 연락처/링크",
    "about.services": "서비스",
    "about.programming": "프로그래밍",
    "about.design": "디자인",
    "cv.education": "학력",
    "cv.certificates": "자격증 및 프로그램",
    "cv.experience": "경력",
    "cv.projects": "프로젝트",
    "cv.awards": "수상 및 출전",
  },
  en: {
    "home.greeting": "Hi, I'm",
    "home.name": "Youngmin",
    "home.title": "AI Engineer",
    "home.location": "from South Korea",
    "nav.links": "Links",
    "nav.profile": "Profile",
    "nav.projects": "Projects",
    "nav.blog": "Blog",
    "about.profile": "Profile",
    "about.games": "Games",
    "about.contact": "Contact & Links",
    "about.services": "Services",
    "about.programming": "Programming",
    "about.design": "Design",
    "cv.education": "Education",
    "cv.certificates": "Certificates & Programs",
    "cv.experience": "Experience",
    "cv.projects": "Projects",
    "cv.awards": "Awards & Achievements",
  },
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ko" ? "en" : "ko"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key;
  };

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>;
};
