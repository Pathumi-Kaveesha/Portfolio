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
      Expert: "text-[#8DFF69] bg-[#8DFF69]/20 border-[#8DFF69]/30",
      Advanced: "text-cyan-400 bg-cyan-500/20 border-cyan-500/30",
      Intermediate: "text-emerald-400 bg-emerald-500/20 border-emerald-500/30",
    };

    return colors[level] || "text-gray-400 bg-gray-500/20 border-gray-500/30";
  };

  return (
    <section id="skills" className="relative py-5 bg-black overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <Icons.Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              My Expertise
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency
            levels
          </p>
        </div>

        {/* Skills categories */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {Object.entries(skillCategories).map(
            ([category, categorySkills], categoryIndex) => (
              <div
                key={category}
                className={`relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-700 group h-full flex flex-col ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${categoryIndex * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="w-1 h-8 bg-linear-to-b from-primary/30 to-primary/10 rounded-full"></div>
                  <h3 className="text-xl font-medium text-white">{category}</h3>
                </div>

                {/* Skills list - flex-1 makes it fill available space */}
                <div className="space-y-5 flex-1">
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
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-white/5 rounded-lg">
                              <IconComponent className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-white">
                                {skill.name}
                              </div>
                              <div className="text-xs text-white/50">
                                {skill.experience}
                              </div>
                            </div>
                          </div>

                          <span
                            className={`text-xs px-2 py-1 rounded-full border whitespace-nowrap ${getLevelColor(skill.level)}`}
                          >
                            {skill.level}
                          </span>
                        </div>

                        <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className="absolute top-0 left-0 h-full bg-linear-to-r from-primary/10 to-primary/80 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${proficiency}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Hover Flow Effect */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/5 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
