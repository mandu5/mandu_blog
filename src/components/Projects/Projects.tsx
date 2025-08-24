"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { PROJECTS_DATA } from "@/constants";

interface ProjectCardProps {
  project: any;
}

function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <div className="border-b border-gray-200 dark:border-gray-800 pb-12 last:border-b-0">
      {/* Project Header */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <h3 className="text-2xl font-light text-gray-900 dark:text-white">{t(project.title)}</h3>
          <span className="text-gray-500 dark:text-gray-500 font-light text-sm">{t(project.organization)}</span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">{t(project.description)}</p>
      </div>

      {/* Project Content */}
      <div>
        {/* Technologies */}
        <div className="flex flex-wrap gap-3 mb-6">
          {project.tags.map((tag: string, tagIndex: number) => (
            <span
              key={tagIndex}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-light border border-gray-200 dark:border-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm font-light">
            <span className="text-gray-400 dark:text-gray-600 mr-3">•</span>
            <span>
              {t("projects.period")}: {project.period}
            </span>
          </div>
          {project.role && (
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm font-light">
              <span className="text-gray-400 dark:text-gray-600 mr-3">•</span>
              <span>
                {t("projects.role")}: {project.role}
              </span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-light"
          >
            {t("projects.viewProject")} →
          </a>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-light"
            >
              {t("projects.viewGithub")} →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="space-y-0">
      {PROJECTS_DATA.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
