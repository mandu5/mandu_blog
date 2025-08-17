import { PROJECTS_DATA } from "@/constants";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Projects</h1>
          <p className="text-xl text-white/80">Showcase of my latest projects in AI and web development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden text-white border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{project.organization}</span>
                </div>

                <p className="text-sm opacity-80 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-white/20 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs opacity-60">{project.period}</span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-white/20 rounded-lg text-sm hover:bg-white/30 transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
