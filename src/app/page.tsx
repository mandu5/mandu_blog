"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PROJECTS_DATA } from "@/constants";
import BuildingIllustrations from "@/components/ui/BuildingIllustrations";

export default function HomePage() {
  const { t } = useLanguage();
  const [hoveredBuilding, setHoveredBuilding] = useState<string | null>(null);
  const [collapsedBuildings, setCollapsedBuildings] = useState<Set<string>>(new Set());

  const sections = [
    {
      id: "about",
      title: t("navigation.about"),
      description: t("home.aboutDescription"),
      icon: "👁️",
      href: "/about",
    },
    {
      id: "projects",
      title: t("navigation.projects"),
      description: t("home.projectsDescription"),
      icon: "🎤",
      href: "/projects",
    },
    {
      id: "blog",
      title: t("navigation.blog"),
      description: t("home.blogDescription"),
      icon: "📺",
      href: "/blog",
    },
    {
      id: "links",
      title: t("navigation.links"),
      description: t("home.linksDescription"),
      icon: "🏛️",
      href: "/links",
    },
    {
      id: "contact",
      title: t("navigation.contact"),
      description: t("home.contactDescription"),
      icon: "🔭",
      href: "/links",
    },
  ];

  const handleBuildingClick = (buildingId: string) => {
    setCollapsedBuildings((prev) => {
      const newSet = new Set(prev);
      newSet.add(buildingId);
      return newSet;
    });

    // Rebuild after 2 seconds
    setTimeout(() => {
      setCollapsedBuildings((prev) => {
        const newSet = new Set(prev);
        newSet.delete(buildingId);
        return newSet;
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* City Skyline Background */}
      <div className="fixed inset-0 z-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-primary-navy to-primary-mint dark:from-background-dark dark:via-background-dark dark:to-background-dark" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Clouds */}
          <div
            className="absolute top-20 left-10 w-20 h-12 bg-white/10 rounded-full animate-float"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="absolute top-40 right-20 w-16 h-10 bg-white/10 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-60 left-1/4 w-24 h-14 bg-white/10 rounded-full animate-float"
            style={{ animationDelay: "4s" }}
          ></div>

          {/* Moving Vehicles */}
          <div className="absolute bottom-20 left-0 w-16 h-8 bg-primary-mint/20 rounded-full animate-car-move"></div>
          <div
            className="absolute bottom-32 left-0 w-20 h-6 bg-primary-mint/20 rounded-full animate-boat-move"
            style={{ animationDelay: "5s" }}
          ></div>
          <div
            className="absolute bottom-40 left-0 w-12 h-4 bg-primary-mint/20 rounded-full animate-plane-move"
            style={{ animationDelay: "10s" }}
          ></div>

          {/* Water Waves */}
          <div className="absolute bottom-0 left-0 w-full h-8 bg-primary-mint/10 animate-wave"></div>
          <div
            className="absolute bottom-2 left-0 w-full h-6 bg-primary-mint/5 animate-wave-reverse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">{t("home.title")}</h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            AI Engineer / Developer
          </p>

          {/* Tech Stack Indicators */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            {["Machine Learning", "TypeScript", "Python", "React", "Next.js"].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/20"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Link
              href="/about"
              className="px-8 py-3 bg-primary-mint text-primary-navy font-semibold rounded-lg hover:bg-primary-mint/90 transition-all duration-300 transform hover:scale-105"
            >
              {t("home.viewResume")}
            </Link>
            <Link
              href="/projects"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              {t("home.viewProjects")}
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Interactive Cityscape */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div key={section.id} className="relative group" style={{ animationDelay: `${index * 0.2}s` }}>
                <Link href={section.href}>
                  <div
                    className={`relative p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-500 cursor-pointer ${
                      collapsedBuildings.has(section.id)
                        ? "animate-building-collapse"
                        : hoveredBuilding === section.id
                        ? "animate-building-hover"
                        : "hover:animate-building-hover"
                    } ${collapsedBuildings.has(section.id) ? "pointer-events-none" : ""}`}
                    onMouseEnter={() => setHoveredBuilding(section.id)}
                    onMouseLeave={() => setHoveredBuilding(null)}
                    onClick={() => handleBuildingClick(section.id)}
                  >
                    {/* Building Illustration */}
                    <div className="mb-6 flex justify-center">
                      <BuildingIllustrations
                        sectionId={section.id}
                        className={`${collapsedBuildings.has(section.id) ? "animate-building-collapse" : ""} ${
                          hoveredBuilding === section.id ? "animate-building-hover" : ""
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-3">{section.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{section.description}</p>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-mint/20 to-primary-navy/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Link>

                {/* Speech Bubble */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium text-primary-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {section.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Water Waves */}
        <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-full bg-primary-mint/20 animate-wave"></div>
          <div
            className="absolute bottom-2 left-0 w-full h-full bg-primary-mint/10 animate-wave-reverse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </section>
    </div>
  );
}
