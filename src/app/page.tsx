"use client";

import { useState } from "react";
import Link from "next/link";
import BuildingIllustrations from "@/components/ui/BuildingIllustrations";

export default function HomePage() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [collapsedBuildings, setCollapsedBuildings] = useState<string[]>([]);

  const sections = [
    {
      id: "about",
      title: "About",
      icon: "👁️",
      color: "from-blue-400 to-cyan-400",
    },
    {
      id: "projects",
      title: "Projects",
      icon: "🎤",
      color: "from-purple-400 to-pink-400",
    },
    {
      id: "blog",
      title: "Blog",
      icon: "📺",
      color: "from-green-400 to-teal-400",
    },
    {
      id: "links",
      title: "Links",
      icon: "🏛️",
      color: "from-orange-400 to-red-400",
    },
    {
      id: "contact",
      title: "Contact",
      icon: "🔭",
      color: "from-indigo-400 to-blue-400",
    },
  ];

  const handleBuildingClick = (sectionId: string) => {
    setCollapsedBuildings((prev) => [...prev, sectionId]);
    setTimeout(() => {
      setCollapsedBuildings((prev) => prev.filter((id) => id !== sectionId));
    }, 3000);
  };

  return (
    <main className="h-screen relative overflow-hidden">
      {/* Hero Section with Cityscape */}
      <section className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4 pt-32">
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 animate-fade-in-up">MANDU</h1>
          <p className="text-base md:text-lg opacity-90 animate-fade-in-up-delayed">
            AI Engineer / Developer / Problem Solver
          </p>
        </div>

        {/* Interactive Cityscape */}
        <div className="relative w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center">
          {/* Water with Waves */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cyan-400/40 to-transparent animate-wave"></div>

          {/* Moving Vehicles */}
          <div className="absolute bottom-16 left-0 w-full">
            {/* Airplane */}
            <div className="absolute top-8 left-0 w-6 h-1.5 bg-white/60 rounded-full animate-plane-fly">
              <div className="absolute -top-0.5 left-0.5 w-0.5 h-0.5 bg-white/40 rounded-full"></div>
              <div className="absolute -top-0.5 right-0.5 w-0.5 h-0.5 bg-white/40 rounded-full"></div>
            </div>

            {/* Boat */}
            <div className="absolute bottom-6 left-1/4 w-10 h-5 bg-white/80 rounded-full animate-boat-float">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-white/60"></div>
            </div>

            {/* Car */}
            <div className="absolute bottom-0 left-0 w-6 h-3 bg-yellow-400 rounded-full animate-car-move">
              <div className="absolute -top-0.5 left-0.5 w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
              <div className="absolute -top-0.5 right-0.5 w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
            </div>
          </div>

          {/* Cityscape Buildings */}
          <div className="relative h-64 flex items-end justify-center space-x-10">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  hoveredSection === section.id ? "transform scale-110" : ""
                } ${collapsedBuildings.includes(section.id) ? "animate-building-collapse" : ""}`}
                onMouseEnter={() => setHoveredSection(section.id)}
                onMouseLeave={() => setHoveredSection(null)}
                onClick={() => handleBuildingClick(section.id)}
              >
                {/* Speech Bubble */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-lg px-2 py-0.5 text-xs font-medium border border-white/30 animate-fade-in-up">
                  {section.title}
                </div>

                {/* Building with Illustrations */}
                <div
                  className={`relative transition-all duration-500 ${
                    hoveredSection === section.id ? "animate-building-hover" : ""
                  }`}
                >
                  {/* Main Building */}
                  <div
                    className={`w-16 h-32 rounded-t-lg relative shadow-lg ${
                      section.id === "about"
                        ? "bg-gradient-to-b from-gray-600 to-gray-800"
                        : section.id === "projects"
                        ? "bg-gradient-to-b from-purple-600 to-purple-800"
                        : section.id === "blog"
                        ? "bg-gradient-to-b from-orange-600 to-orange-800"
                        : section.id === "links"
                        ? "bg-gradient-to-b from-green-600 to-green-800"
                        : "bg-gradient-to-b from-blue-600 to-blue-800"
                    }`}
                  >
                    {/* Windows */}
                    <div className="grid grid-cols-2 gap-0.5 p-1.5">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-1.5 h-1.5 bg-white/60 rounded-sm animate-pulse"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        ></div>
                      ))}
                    </div>

                    {/* Special Illustrations */}
                    <BuildingIllustrations sectionId={section.id} />
                  </div>

                  {/* Building Shadow */}
                  <div className="w-16 h-3 bg-black/20 rounded-full transform -translate-y-1"></div>
                </div>

                {/* Click Effect */}
                {collapsedBuildings.includes(section.id) && (
                  <div className="absolute inset-0 bg-red-500/50 rounded-lg animate-pulse"></div>
                )}
              </div>
            ))}
          </div>

          {/* Ground/Path */}
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-yellow-200/30 to-transparent"></div>
        </div>

        {/* Navigation Links */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`/${section.id}`}
              className="px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium hover:bg-white/30 transition-all duration-300 border border-white/30 hover:scale-105 text-xs"
            >
              {section.title}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
