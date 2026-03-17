import React, { useEffect, useRef, useState } from "react";
import { skills } from "../../data/skills";
import * as Icons from "lucide-react";

const Skills = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillCategories: Record<string, (typeof skills)[number][]> = {
    "Frontend Development": skills.filter((s) =>
      [
        "React.js",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "TailwindCSS",
      ].includes(s.name),
    ),

    "Backend Development": skills.filter((s) =>
      ["Node.js", "Express.js", "Spring Boot", "PHP"].includes(s.name),
    ),

    Database: skills.filter((s) => ["MongoDB", "MySQL"].includes(s.name)),

    "Tools & Design": skills.filter((s) =>
      ["Git & GitHub", "Figma"].includes(s.name),
    ),
  };

  // Get proficiency percentage
  const getProficiencyLevel = (level: string): number => {
    const levels: Record<string, number> = {
      Expert: 95,
      Advanced: 80,
      Intermediate: 65,
    };

    return levels[level] ?? 50;
  };

  // Get level color
  const getLevelColor = (level: string): string => {
    const colors: Record<string, string> = {
      Expert: "text-[#E5D3C5] bg-[#E5D3C5]/10 border-[#E5D3C5]/20",
      Advanced: "text-[#D4A574] bg-[#D4A574]/10 border-[#D4A574]/20",
      Intermediate: "text-[#C9A882] bg-[#C9A882]/10 border-[#C9A882]/20",
    };

    return colors[level] || "text-gray-400 bg-gray-500/10 border-gray-500/20";
  };

  return (
    <section
      id="skills"
      className="relative py-10 md:py-10 bg-gradient-to-br from-[#1a1512] via-[#0a0806] to-[#1a1512] overflow-hidden"
    >
      {/* Same background as Hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E5D3C5]/20 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "700ms" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A882]/10 rounded-full blur-[150px] animate-pulse"
          style={{ animationDelay: "1000ms" }}
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(229,211,197,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(229,211,197,.04)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] animate-pulse" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,211,197,0.08),transparent_50%)] animate-pulse" />

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0806] via-[#0a0806]/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 relative group cursor-pointer mb-6">
            <div className="absolute inset-0 bg-[#E5D3C5]/20 rounded-full blur-xl transition-all duration-500" />
            <div className="relative flex items-center gap-2 bg-gradient-to-r from-[#E5D3C5]/10 via-[#D4A574]/10 to-[#C9A882]/10 border border-[#E5D3C5]/30 rounded-full px-3 py-1.5 backdrop-blur-md">
              <Icons.Sparkles className="w-4 h-4 text-[#E5D3C5]" />
              <span
                className="text-xs text-white font-semibold uppercase tracking-wider"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                My Expertise
              </span>
            </div>
          </div>

          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-3"
            style={{
              fontFamily:
                "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif",
            }}
          >
            Skills & <span className="text-[#E5D3C5]">Technologies</span>
          </h2>
          <p
            className="text-base lg:text-lg text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            A comprehensive overview of my technical skills and proficiency
            levels
          </p>
        </div>

        {/* Skills categories - All in one row on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
          {Object.entries(skillCategories).map(
            ([category, categorySkills], categoryIndex) => (
              <div
                key={category}
                className={`relative group h-full flex flex-col transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${categoryIndex * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#E5D3C5]/5 via-[#D4A574]/5 to-[#C9A882]/5 rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />

                <div className="relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm border border-white/10 rounded-xl lg:rounded-2xl p-5 lg:p-6 hover:border-[#E5D3C5]/30 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[#E5D3C5]/10 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
                    <div className="w-1 h-8 bg-gradient-to-b from-[#E5D3C5]/50 to-[#D4A574]/50 rounded-full"></div>
                    <h3
                      className="text-lg lg:text-xl font-bold text-white"
                      style={{
                        fontFamily:
                          "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif",
                      }}
                    >
                      {category}
                    </h3>
                  </div>

                  {/* Skills list */}
                  <div className="space-y-4 lg:space-y-5 flex-1">
                    {categorySkills.map((skill, skillIndex) => {
                      const IconComponent = skill.icon;
                      const proficiency = getProficiencyLevel(skill.level);

                      return (
                        <div
                          key={skill.id}
                          className={`space-y-2 transition-all duration-500 ${
                            isVisible
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-95"
                          }`}
                          style={{
                            transitionDelay: `${categoryIndex * 100 + skillIndex * 50}ms`,
                          }}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2 lg:gap-3 min-w-0 flex-1">
                              <div className="p-2 bg-white/5 rounded-lg flex-shrink-0">
                                <IconComponent className="w-4 h-4 text-[#E5D3C5]" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div
                                  className="text-sm font-semibold text-white truncate"
                                  style={{
                                    fontFamily:
                                      "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif",
                                  }}
                                >
                                  {skill.name}
                                </div>
                                <div
                                  className="text-xs text-gray-400"
                                  style={{
                                    fontFamily: "Inter, system-ui, sans-serif",
                                  }}
                                >
                                  {skill.experience}
                                </div>
                              </div>
                            </div>

                            <span
                              className={`text-[10px] lg:text-xs px-2 py-1 rounded-full border whitespace-nowrap font-medium flex-shrink-0 ${getLevelColor(skill.level)}`}
                              style={{
                                fontFamily: "Inter, system-ui, sans-serif",
                              }}
                            >
                              {skill.level}
                            </span>
                          </div>

                          <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div
                              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#E5D3C5]/70 to-[#D4A574]/70 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${proficiency}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0806] via-[#0a0806]/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default Skills;
