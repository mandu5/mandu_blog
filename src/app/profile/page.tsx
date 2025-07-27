// src/app/cv/page.tsx
import React from "react";
import { educationData, careerData, awardsData, certificatesData, projectsData } from "@/constants";

// 재사용 가능한 Section 컴포넌트
const CVSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    {children}
  </section>
);

const CVPage = () => (
  <div className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="min-h-screen pt-20">
      <h1 className="text-3xl font-bold mb-8 text-left">Profile</h1>

      <CVSection title="Education">
        <ul>
          {educationData.map((edu) => (
            <li key={edu.title} className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-lg">{edu.title}</div>
                  <div className="text-gray-600">{edu.subtitle}</div>
                  {edu.location && <div className="text-gray-500 text-sm">{edu.location}</div>}
                </div>
                <span className="text-gray-400 text-sm whitespace-nowrap">{edu.period}</span>
              </div>
            </li>
          ))}
        </ul>
      </CVSection>

      <CVSection title="Certificates & Programs">
        <ul>
          {certificatesData.map((cert) => (
            <li key={cert.title} className="mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-lg">{cert.title}</div>
                  <div className="text-gray-600">{cert.subtitle}</div>
                </div>
                <span className="text-gray-400 text-sm whitespace-nowrap">{cert.period}</span>
              </div>
              {cert.description && cert.description.length > 0 && (
                <ul className="list-disc ml-6 text-gray-700 mt-2">
                  {cert.description.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </CVSection>

      <CVSection title="Experience">
        <ul>
          {careerData.map((job) => (
            <li key={job.title} className="mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-bold text-lg">{job.title}</span>
                  {job.subtitle && <div className="text-gray-600 text-sm">{job.subtitle}</div>}
                </div>
                <span className="text-gray-400 text-sm whitespace-nowrap">{job.period}</span>
              </div>
              {job.description && (
                <ul className="list-disc ml-6 text-gray-700 mt-2">
                  {job.description.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </CVSection>

      <CVSection title="Projects">
        <ul>
          {projectsData.map((project) => (
            <li key={project.title} className="mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-lg">{project.title}</div>
                  <div className="text-gray-600">{project.name}</div>
                  {project.period && <div className="text-gray-500 text-sm">{project.period}</div>}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline text-sm"
                >
                  {project.link.includes("github.com") ? "Github" : "Link"}
                </a>
              </div>
              <div className="text-gray-700 mt-2">{project.description}</div>
            </li>
          ))}
        </ul>
      </CVSection>

      <CVSection title="Awards & Achievements">
        <ul>
          {awardsData.map((award) => (
            <li key={award.name} className="mb-2 flex justify-between items-center">
              <div>
                <span className="font-bold">{award.name}</span>
                <div className="text-gray-700 text-sm">{award.desc}</div>
              </div>
              <span className="text-gray-400 text-sm whitespace-nowrap">{award.date}</span>
            </li>
          ))}
        </ul>
      </CVSection>
    </div>
  </div>
);

export default CVPage;
