"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export default function Footer() {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-gray-500 dark:text-gray-500">© 2024 Mandu. All rights reserved.</div>

          {/* Theme & Language Toggles */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {language === "ko" ? "EN" : "KO"}
            </button>

            <div className="w-px h-4 bg-gray-300 dark:bg-gray-700"></div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </div>
        </div>

        {/* Site Info */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-600">Designed and developed by Mandu.</p>
        </div>
      </div>
    </footer>
  );
}
