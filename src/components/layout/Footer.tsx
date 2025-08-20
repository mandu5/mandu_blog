"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { SOCIAL_LINKS } from "@/constants";

export default function Footer() {
  const pathname = usePathname();
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="relative bg-gradient-to-t from-primary-navy to-primary-mint dark:from-background-dark dark:to-background-dark">
      {/* Wave Animation */}
      <div className="absolute top-0 left-0 w-full h-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-white/10 animate-wave"></div>
        <div
          className="absolute top-2 left-0 w-full h-full bg-white/5 animate-wave-reverse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <div className="text-white/80 text-sm">© 2024 MANDU. All rights reserved.</div>
            <div className="text-white/60 text-xs mt-2">AI Engineer & Machine Learning Developer</div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="w-6 h-6 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                />
              </Link>
            ))}
          </div>

          {/* Theme & Language Toggles */}
          <div className="flex justify-center md:justify-end space-x-4">
            {/* Language Toggle - Show on all pages */}
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all duration-300"
            >
              {language === "ko" ? "EN" : "KO"}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all duration-300 flex items-center space-x-2"
            >
              <span>{theme === "dark" ? "☀️" : "🌙"}</span>
              <span>{theme === "dark" ? "Light" : "Dark"}</span>
            </button>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="text-center text-white/60 text-xs"></div>
        </div>
      </div>

      {/* Additional Wave Elements */}
      <div className="absolute bottom-0 left-0 w-full h-8 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-full bg-primary-mint/20 animate-wave"></div>
        <div
          className="absolute bottom-1 left-0 w-full h-full bg-primary-mint/10 animate-wave-reverse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>
    </footer>
  );
}
