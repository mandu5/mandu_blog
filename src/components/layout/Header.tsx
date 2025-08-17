"use client";

import { useState } from "react";
import Link from "next/link";
import { NAVIGATION_LINKS } from "@/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getHeaderStyles = () => {
    return "fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20";
  };

  const getNavLinkStyles = (isActive: boolean = false) => {
    const baseStyles = "px-4 py-2 rounded-lg font-medium transition-all duration-300";
    const activeStyles = "bg-white/20 text-white";
    const inactiveStyles = "text-white/80 hover:bg-white/10 hover:text-white";

    return `${baseStyles} ${isActive ? activeStyles : inactiveStyles}`;
  };

  return (
    <header className={getHeaderStyles()}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white hover:text-white/80 transition-colors">
            MANDU
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {NAVIGATION_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={getNavLinkStyles()}>
                {link.label}
              </Link>
            ))}

            {/* Get in Touch Button */}
            <Link
              href="/links"
              className="ml-4 px-6 py-2 bg-white/20 text-white rounded-lg font-medium hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              Get in touch
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 mt-1 ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 mt-1 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={getNavLinkStyles()}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Get in Touch Button */}
              <Link
                href="/links"
                className="mt-4 px-6 py-2 bg-white/20 text-white rounded-lg font-medium hover:bg-white/30 transition-all duration-300 border border-white/30 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in touch
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
