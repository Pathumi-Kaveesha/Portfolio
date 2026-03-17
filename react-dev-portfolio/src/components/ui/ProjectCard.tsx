import React from "react";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import type { Project } from "../sections/Projects";

interface ProjectCardProps {
  project: Project;
  expandedProjects: Set<number>;
  toggleDescription: (projectId: number) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  expandedProjects,
  toggleDescription,
}) => {
  return (
    <div className="project-card group relative">
      {/* Subtle Glow - Updated to Hero colors */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E5D3C5]/20 via-[#D4A574]/20 to-[#C9A882]/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-700" />

      <div className="relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-[#E5D3C5]/20 rounded-2xl overflow-hidden group-hover:border-[#E5D3C5]/50 transition-all duration-500">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="project-image w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:via-black/60 transition-all duration-500" />

          {/* Action Buttons - Bottom Right */}
          <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-black/80 hover:bg-[#E5D3C5] rounded-xl transition-all duration-300 hover:scale-110 border border-white/20 hover:border-[#E5D3C5] backdrop-blur-md shadow-lg group/btn"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4 text-white group-hover/btn:text-black transition-colors duration-300" />
            </a>
            {project.id === 1 && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-black/80 hover:bg-[#D4A574] rounded-xl transition-all duration-300 hover:scale-110 border border-white/20 hover:border-[#D4A574] backdrop-blur-md shadow-lg group/btn"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4 text-white group-hover/btn:text-black transition-colors duration-300" />
              </a>
            )}
          </div>

          {/* Category Badge */}
          <div className="absolute top-3 right-3 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-[#E5D3C5]/40 rounded-full group-hover:bg-black/80 group-hover:border-[#E5D3C5] transition-all duration-300">
            <span className="text-sm font-bold text-[#E5D3C5]">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          {/* Title */}
          <h3 className="text-2xl font-black text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#E5D3C5] group-hover:to-[#D4A574] transition-all duration-500 line-clamp-2">
            {project.title}
          </h3>

          {/* Description */}
          <div>
            <p
              className={`text-base text-gray-400 leading-relaxed transition-all duration-300 ${
                expandedProjects.has(project.id) ? "" : "line-clamp-2"
              }`}
            >
              {project.description}
            </p>
            {project.description.length > 100 && (
              <button
                onClick={() => toggleDescription(project.id)}
                className="mt-1.5 flex items-center gap-1 text-sm text-[#E5D3C5] hover:text-[#D4A574] transition-colors duration-300 font-semibold"
              >
                {expandedProjects.has(project.id) ? (
                  <>
                    <span>Show less</span>
                    <ChevronUp className="w-3.5 h-3.5" />
                  </>
                ) : (
                  <>
                    <span>Read more</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            )}
          </div>

          {/* Metrics */}
          <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#E5D3C5]/10 to-[#D4A574]/10 border border-[#E5D3C5]/20 rounded-lg">
            <div className="relative">
              <div className="w-1.5 h-1.5 bg-[#E5D3C5] rounded-full animate-pulse" />
              <div className="absolute inset-0 w-1.5 h-1.5 bg-[#E5D3C5] rounded-full animate-ping" />
            </div>
            <p className="text-sm text-[#E5D3C5] font-semibold line-clamp-1">
              {project.metrics}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 text-sm font-medium bg-white/5 text-gray-300 rounded-lg border border-white/10 hover:border-[#E5D3C5]/30 hover:text-[#E5D3C5] transition-all duration-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3 py-1.5 text-sm font-medium bg-[#E5D3C5]/10 text-[#E5D3C5] rounded-lg border border-[#E5D3C5]/30">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#E5D3C5] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
      </div>
    </div>
  );
};

export default ProjectCard;
