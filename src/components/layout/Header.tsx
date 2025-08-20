"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { NAVIGATION_LINKS } from "@/constants";

export default function Header() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/10 backdrop-blur-md border-b border-white/20 dark:bg-background-dark/10 dark:border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold text-white group-hover:text-primary-mint transition-colors duration-300">
              MANDU
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                    isActive ? "text-primary-mint" : "text-white hover:text-primary-mint"
                  }`}
                >
                  {t(link.label)}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-mint animate-slide-up"></div>
                  )}
                  <div className="absolute inset-0 bg-primary-mint/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-white hover:text-primary-mint hover:bg-white/10 transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                    isActive
                      ? "text-primary-mint bg-primary-mint/10"
                      : "text-white hover:text-primary-mint hover:bg-white/10"
                  }`}
                >
                  {t(link.label)}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
