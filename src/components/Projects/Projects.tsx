"use client";
import React from "react";
import Image from "next/image";
import { PROJECTS_DATA } from "@/constants";
import { Project } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useLanguage();

  const getThemeStyles = () => {
    const themeStyles = {
      primary: "border-blue-200 dark:border-blue-700",
      secondary: "border-green-200 dark:border-green-700",
      accent: "border-purple-200 dark:border-purple-700",
    };
    return themeStyles[project.theme] || themeStyles.primary;
  };

  const getLinkText = () => {
    return project.link.includes("github.com") ? t("projects.viewGithub") : t("projects.viewProject");
  };

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col border ${getThemeStyles()}`}
    >
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-subheading text-gray-900 dark:text-gray-100">{project.title}</h2>
          <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">{project.period}</span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.organization}</p>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
        >
          {getLinkText()}
        </a>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <h1 className="py-16 text-heading mb-8">{t("projects.title")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
