"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { PROJECTS_DATA } from "@/constants";
import Projects from "@/components/Projects/Projects";

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20 pb-16 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 dark:text-white mb-6">{t("projects.title")}</h1>
            <div className="w-24 h-px bg-gray-300 dark:bg-gray-700 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
              {t("projects.subtitle")}
            </p>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 border-b border-gray-200 dark:border-gray-800 pb-12">
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900 dark:text-white mb-2">{PROJECTS_DATA.length}</div>
              <div className="text-gray-600 dark:text-gray-400 font-light">{t("projects.totalProjects")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900 dark:text-white mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-400 font-light">{t("projects.technologies")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900 dark:text-white mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-400 font-light">{t("projects.successRate")}</div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section>
          <Projects />
        </section>
      </div>
    </div>
  );
}
