import React, { useState, useEffect } from "react";
import { projects, categories } from "../../data/projects";
import { Zap, ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "../ui/ProjectCard";

export type Category = "All" | "Full Stack" | "Frontend" | "Backend";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  metrics: string;
  githubUrl: string;
}

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [isVisible, setIsVisible] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(
    new Set(),
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProjects: Project[] =
    activeCategory === "All"
      ? projects.filter((project) => project.id !== 7)
      : projects.filter((project) => project.category.includes(activeCategory));

  // Determine cards per view based on screen size
  const getCardsPerView = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  useEffect(() => {
    setIsVisible(true);

    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Reset to first card when category changes
    setCurrentIndex(0);
  }, [activeCategory]);

  const toggleDescription = (projectId: number) => {
    setExpandedProjects((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  const maxIndex = Math.max(0, filteredProjects.length - cardsPerView);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  return (
    <>
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .project-card {
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .project-card:hover {
          transform: translateY(-6px);
        }

        .project-image {
          transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .project-card:hover .project-image {
          transform: scale(1.08);
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .carousel-track {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      <section
        id="projects"
        className="relative min-h-screen py-20 bg-gradient-to-br from-gray-950 via-black to-gray-900 overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/15 rounded-full blur-[120px] animate-pulse"
            style={{ animationDelay: "700ms" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[150px] animate-pulse"
            style={{ animationDelay: "1000ms" }}
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 relative group cursor-default">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse" />
              <div className="relative flex items-center gap-2 bg-gradient-to-r from-primary/20 via-emerald-500/20 to-green-500/20 border-2 border-primary/40 rounded-full px-4 py-2 backdrop-blur-md shadow-2xl shadow-primary/20">
                <Zap className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm text-white tracking-wider font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-emerald-300">
                  MY WORK
                </span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              <span className="inline-block relative">
                <span
                  className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-50 to-white bg-[length:200%_auto]"
                  style={{ animation: "gradient-x 4s ease infinite" }}
                >
                  Featured
                </span>
              </span>{" "}
              <span className="inline-block relative group cursor-default">
                <span
                  className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary via-emerald-400 to-green-400 bg-[length:200%_auto]"
                  style={{
                    animation: "gradient-x 4s ease infinite",
                    animationDelay: "0.5s",
                  }}
                >
                  Projects
                </span>
                <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-primary via-emerald-400 to-green-400 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                  Projects
                </span>
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Building digital experiences with modern tech
            </p>
          </div>

          {/* Category Filter */}
          <div
            className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "100ms" }}
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category as Category)}
                  className={`relative px-5 py-2.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-500 transform hover:scale-105 ${
                    isActive
                      ? "bg-gradient-to-r from-primary to-emerald-400 text-black shadow-2xl shadow-primary/50"
                      : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10 hover:border-primary/30"
                  }`}
                >
                  {category}
                  {isActive && (
                    <div className="absolute inset-0 rounded-xl bg-primary blur-xl opacity-50 -z-10 animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Carousel */}
          <div
            className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Navigation Arrows */}
            {filteredProjects.length > cardsPerView && (
              <>
                <button
                  onClick={goToPrevious}
                  disabled={!canGoPrevious}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 p-3 md:p-4 rounded-full transition-all duration-300 backdrop-blur-md shadow-2xl shadow-black/50 group ${
                    canGoPrevious
                      ? "bg-black/80 hover:bg-primary border border-white/20 hover:border-primary hover:scale-110 cursor-pointer"
                      : "bg-black/40 border border-white/10 cursor-not-allowed opacity-50"
                  }`}
                  aria-label="Previous projects"
                >
                  <ChevronLeft
                    className={`w-5 h-5 md:w-6 md:h-6 transition-colors ${canGoPrevious ? "text-white group-hover:text-black" : "text-gray-600"}`}
                  />
                </button>

                <button
                  onClick={goToNext}
                  disabled={!canGoNext}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 p-3 md:p-4 rounded-full transition-all duration-300 backdrop-blur-md shadow-2xl shadow-black/50 group ${
                    canGoNext
                      ? "bg-black/80 hover:bg-primary border border-white/20 hover:border-primary hover:scale-110 cursor-pointer"
                      : "bg-black/40 border border-white/10 cursor-not-allowed opacity-50"
                  }`}
                  aria-label="Next projects"
                >
                  <ChevronRight
                    className={`w-5 h-5 md:w-6 md:h-6 transition-colors ${canGoNext ? "text-white group-hover:text-black" : "text-gray-600"}`}
                  />
                </button>
              </>
            )}

            {/* Cards Container */}
            <div className="overflow-hidden">
              <div
                className="carousel-track flex gap-6"
                style={{
                  transform: `translateX(-${currentIndex * (100 / cardsPerView + 24 / cardsPerView)}%)`,
                }}
              >
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="flex-shrink-0"
                    style={{
                      width: `calc(${100 / cardsPerView}% - ${(24 * (cardsPerView - 1)) / cardsPerView}px)`,
                    }}
                  >
                    <ProjectCard
                      project={project}
                      expandedProjects={expandedProjects}
                      toggleDescription={toggleDescription}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            {filteredProjects.length > cardsPerView && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? "w-8 h-2 bg-primary"
                        : "w-2 h-2 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Counter */}
          <div className="text-center mt-10">
            <p className="text-gray-400 font-medium">
              Showing{" "}
              <span className="text-primary font-bold text-lg">
                {Math.min(currentIndex + cardsPerView, filteredProjects.length)}
              </span>{" "}
              of{" "}
              <span className="text-primary font-bold text-lg">
                {filteredProjects.length}
              </span>{" "}
              project{filteredProjects.length !== 1 ? "s" : ""}
              {activeCategory !== "All" && (
                <span className="text-primary ml-2">in {activeCategory}</span>
              )}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
