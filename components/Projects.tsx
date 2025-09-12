import React from "react";
import SectionWrapper from "./SectionWrapper";
import { PROJECTS_DATA } from "../constants";
import type { Project } from "../types";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const getImageUrl = (githubUrl: string) => {
    try {
      const url = new URL(githubUrl);
      const pathParts = url.pathname.split("/").filter(Boolean);
      if (pathParts.length >= 2) {
        const user = pathParts[0];
        const repo = pathParts[1];
        return `https://opengraph.githubassets.com/1/${user}/${repo}`;
      }
    } catch (error) {
      console.error("Invalid GitHub URL:", githubUrl);
    }
    return "https://via.placeholder.com/400x200/1e293b/34d399?text=Project"; // Fallback
  };

  return (
    <div className="group perspective-[1000px]">
      <div className="bg-slate-800/50 rounded-lg shadow-xl border border-slate-700 overflow-hidden flex flex-col h-full transition-all duration-500 group-hover:border-emerald-500 group-hover:shadow-emerald-500/20 group-hover:shadow-2xl transform-gpu group-hover:-translate-y-2 group-hover:rotate-x-3 group-hover:rotate-y-2">
        <div className="overflow-hidden">
          <img
            src={project.thumbnail}
            alt={`${project.title} thumbnail`}
            className="w-full h-48 object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-slate-100">
              {project.title}
            </h3>
            {project.status && (
              <span className="bg-yellow-500/20 text-yellow-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                {project.status}
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="bg-slate-700 text-emerald-300 text-xs font-medium px-2.5 py-1 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>
          <ul className="list-disc list-inside space-y-2 text-slate-400 text-sm flex-grow">
            {project.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
        <div className="p-6 bg-slate-800 mt-auto flex items-center space-x-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 flex items-center space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
          )}
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 flex items-center space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.874 6 7.5 6h5c.626 0 .988-.27 1.256-.579A6.012 6.012 0 0115.668 8.027c.21.324.332.68.332 1.053 0 .793-.332 1.55-.95 2.122-.618.572-1.436.95-2.382.95H8.382c-.946 0-1.764-.378-2.382-.95C5.364 10.63 5.032 9.873 5.032 9.08c0-.373.122-.729.332-1.053zM12 11a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
