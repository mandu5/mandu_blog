"use client";
import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js and TypeScript",
    image: "/assets/images/project1.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    link: "https://example.com",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my work and skills",
    image: "/assets/images/project2.jpg",
    tags: ["React", "Next.js", "Tailwind CSS"],
    link: "https://example.com",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <>
      <h1 className="py-16 text-heading mb-8">작업</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <div className="relative h-48 w-full">
              <Image src={project.image} alt={project.title} fill className="object-cover" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-subheading mb-2">{project.title}</h2>
              <p className="text-body text-gray-600 mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
