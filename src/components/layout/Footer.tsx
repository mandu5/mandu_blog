"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { SOCIAL_LINKS } from "@/constants";

const Footer = () => {
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-600 dark:text-gray-400 text-sm">© 2024 mandu5. {t("footer.rights")}</div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                aria-label={social.name}
              >
                <Image src={social.icon} alt={social.name} width={20} height={20} />
              </a>
            ))}
          </div>

          {/* Toggle Buttons */}
          <div className="flex items-center gap-2">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md"
              title={language === "ko" ? "Switch to English" : "한국어로 전환"}
            >
              <span className="text-sm font-medium">{language === "ko" ? "EN" : "KO"}</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md"
              title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            >
              {theme === "light" ? (
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
