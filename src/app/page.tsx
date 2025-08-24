"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();

  const sections = [
    {
      id: "links",
      title: t("navigation.links"),
      description: "Contact / Social / Programming",
      href: "/links",
    },
    {
      id: "about",
      title: t("navigation.about"),
      description: "Resume / Experience / Skills",
      href: "/about",
    },
    {
      id: "projects",
      title: t("navigation.projects"),
      description: "Portfolio / Work / Achievements",
      href: "/projects",
    },
    {
      id: "blog",
      title: t("navigation.blog"),
      description: "Articles / Thoughts / Learning",
      href: "/blog",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-light tracking-tight">Mandu</h1>
            <div className="w-24 h-px bg-gray-300 dark:bg-gray-700 mx-auto"></div>
            <p className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-400">AI Engineer</p>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16">
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">Scroll down to navigate</p>
            <div className="w-px h-16 bg-gray-300 dark:bg-gray-700 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Navigation Sections */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8">
          {sections.map((section) => (
            <div key={section.id} className="mb-20 last:mb-0">
              <Link href={section.href} className="block group">
                <div className="border-b border-gray-200 dark:border-gray-800 pb-8 transition-all duration-300 group-hover:border-gray-400 dark:group-hover:border-gray-600">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h2 className="text-4xl md:text-5xl font-light mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                        {section.title}
                      </h2>
                      <p className="text-lg text-gray-600 dark:text-gray-400 font-light">{section.description}</p>
                    </div>
                    <div className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity">→</div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="space-y-4">
            <p className="text-sm text-gray-500 dark:text-gray-500">Get in touch</p>
            <div className="space-y-2">
              <p className="text-lg">
                <a
                  href="mailto:mandu00005@gmail.com"
                  className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  mandu00005@gmail.com
                </a>
              </p>
              <p className="text-lg">
                <a
                  href="https://github.com/mandu5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  github
                </a>
              </p>
              <p className="text-lg">
                <a
                  href="https://www.linkedin.com/in/mandu5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  linkedin
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
