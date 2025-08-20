"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { PROJECTS_DATA } from "@/constants";

interface ProjectCardProps {
  project: any;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <div
      className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 group"
      style={{ animationDelay: `${0.8 + index * 0.1}s` }}
    >
      {/* Project Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-primary-mint transition-colors duration-300">
            {project.title}
          </h3>
          <span className="px-3 py-1 bg-primary-mint/20 text-primary-mint rounded-full text-xs font-medium">
            {project.organization}
          </span>
        </div>

        <p className="text-white/80 text-sm leading-relaxed mb-4">{project.description}</p>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string, tagIndex: number) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-white/10 text-white/90 rounded-full text-xs font-medium border border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-white/70 text-sm">
            <span className="w-4 h-4 bg-primary-mint/20 rounded-full flex items-center justify-center mr-3">
              <span className="w-2 h-2 bg-primary-mint rounded-full"></span>
            </span>
            <span>
              {t("projects.period")}: {project.period}
            </span>
          </div>
          {project.role && (
            <div className="flex items-center text-white/70 text-sm">
              <span className="w-4 h-4 bg-primary-mint/20 rounded-full flex items-center justify-center mr-3">
                <span className="w-2 h-2 bg-primary-mint rounded-full"></span>
              </span>
              <span>
                {t("projects.role")}: {project.role}
              </span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-primary-mint text-primary-navy font-medium rounded-lg hover:bg-primary-mint/90 transition-all duration-300 transform hover:scale-105"
          >
            {t("projects.viewProject")}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              {t("projects.viewGithub")}
              <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {PROJECTS_DATA.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
