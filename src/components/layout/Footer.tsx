"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export default function Footer() {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Get in Touch and Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500 dark:text-gray-500">Get in touch:</span>
            <div className="flex items-center space-x-3">
              <a
                href="mailto:mandu00005@gmail.com"
                className="text-2xl hover:scale-110 transition-transform"
                title="Email"
              >
                📧
              </a>
              <a
                href="https://github.com/mandu5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:scale-110 transition-transform"
                title="GitHub"
              >
                🐙
              </a>
              <a
                href="https://www.linkedin.com/in/mandu5/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:scale-110 transition-transform"
                title="LinkedIn"
              >
                💼
              </a>
            </div>
          </div>

          {/* Language and Theme Toggles */}
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

        {/* Copyright */}
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 text-center">
          <div className="text-sm text-gray-500 dark:text-gray-500">© 2024 Mandu. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
