"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "링크" },
  { href: "/cv", label: "이력" },
  { href: "/projects", label: "작업" },
  { href: "/blog", label: "블로그" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-white/90"
      }`}
      role="banner"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-heading font-bold transition-colors duration-200 text-gray-900 hover:text-blue-600"
            aria-label="홈으로 이동"
          >
            mandu5
          </Link>
          <nav className="flex space-x-8" aria-label="메인 네비게이션">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-body transition-colors duration-200 ${
                  pathname === link.href ? "text-blue-600 font-bold" : "text-gray-600 hover:text-gray-800"
                }`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
