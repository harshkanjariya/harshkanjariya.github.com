import { Link } from "react-router-dom";
import { Project } from "../../utils/types.ts";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 flex flex-col"
    >
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none"></div>

      <div className="p-6 flex flex-col h-full">
        {/* Logo Section */}
        <div className="flex justify-center mb-4">
          {project.logo && !imageError ? (
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <img
                src={project.logo}
                alt={`${project.name} logo`}
                onError={() => setImageError(true)}
                className="relative w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-2 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ) : (
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
              {project.name.charAt(0)}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="font-bold text-gray-800 text-lg sm:text-xl text-center mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {project.name}
          </h3>
          <p className="text-gray-600 text-sm sm:text-base text-center mb-5 line-clamp-3 flex-1">
            {project.description}
          </p>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-1 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs rounded-full bg-blue-50 text-blue-600 border border-blue-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* View Details indicator */}
          <div className="flex justify-center mt-auto">
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:text-purple-600 transition-colors duration-300">
              View Details
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
