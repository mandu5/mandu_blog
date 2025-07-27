"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const HomePage = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-screen relative overflow-hidden">
          <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
            <h1 className="sm:text-xl sm:leading-snug text-center py-4 px-8 mx-5">
              {t("home.greeting")} <span className="font-semibold mx-2">{t("home.name")}</span>
              <br />
              {t("home.title")} {t("home.location")} 🇰🇷
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
