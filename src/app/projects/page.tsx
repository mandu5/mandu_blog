"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { PROJECTS_DATA } from "@/constants";
import Projects from "@/components/Projects/Projects";

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <section className="mb-16 animate-fade-in">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
              {t("projects.title")}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
              {t("projects.subtitle")}
            </p>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-primary-mint mb-2">{PROJECTS_DATA.length}</div>
              <div className="text-white/80">{t("projects.totalProjects")}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-primary-mint mb-2">5+</div>
              <div className="text-white/80">{t("projects.technologies")}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-primary-mint mb-2">100%</div>
              <div className="text-white/80">{t("projects.successRate")}</div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <Projects />
        </section>
      </div>
    </div>
  );
}
