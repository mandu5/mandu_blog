"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { SOCIAL_LINKS } from "@/constants";

export default function Footer() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Only show language toggle on blog pages
  const isBlogPage = pathname?.startsWith("/blog");

  return (
    <footer className="bg-white/10 backdrop-blur-sm border-t border-white/20 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-white/70">© {currentYear} Mandu. All rights reserved</div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors duration-300"
                aria-label={link.name}
              >
                <Image src={link.icon} alt={link.name} width={20} height={20} className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Language and Theme Toggles */}
          <div className="flex items-center space-x-2">
            {/* Language Toggle - Only show on blog pages */}
            {isBlogPage && (
              <button
                onClick={toggleLanguage}
                className="px-3 py-1 bg-white/20 text-white rounded-lg text-sm font-medium hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                {language === "ko" ? "EN" : "KO"}
              </button>
            )}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
