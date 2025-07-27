"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { NAVIGATION_LINKS } from "@/constants";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHeaderStyles = () => {
    const baseStyles = "fixed top-0 left-0 right-0 z-50";
    const scrolledStyles = isScrolled
      ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800"
      : "bg-white/90 dark:bg-gray-900/90";

    return `${baseStyles} ${scrolledStyles}`;
  };

  const getNavLinkStyles = (isActive: boolean) => {
    const baseStyles = "text-body";
    const activeStyles = isActive
      ? "text-blue-600 dark:text-blue-400 font-bold"
      : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100";

    return `${baseStyles} ${activeStyles}`;
  };

  return (
    <header className={getHeaderStyles()} role="banner">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-heading font-bold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="Go to Home"
          >
            mandu5
          </Link>

          {/* Navigation Links - 모바일에서는 숨김 */}
          <nav className="hidden md:flex space-x-8" aria-label="Main Navigation">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={getNavLinkStyles(isActive)}
                  aria-current={isActive ? "page" : undefined}
                >
                  {t(link.labelKey)}
                </Link>
              );
            })}
          </nav>

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
    </header>
  );
};

export default Header;
