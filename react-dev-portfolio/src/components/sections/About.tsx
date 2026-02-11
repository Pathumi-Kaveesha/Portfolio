import React, { useEffect, useRef, useState } from "react";
import { Download, Code2, Sparkles, Zap } from "lucide-react";
import {
  SiMongodb,
  SiNextdotjs,
  SiExpress,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { PERSONAL_INFO } from "../../utils/constants";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef(null);

  const skills = [
    { name: "React.js", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Express.js", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
  ];

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="relative py-2 md:py-22 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden"
    >
      <RadialGradientBackground variant="about" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32"
        >
          <div
            className={`flex flex-col gap-10 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="flex flex-col gap-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/20 bg-primary/5 rounded-full w-fit">
                <Code2 className="w-4 h-4 text-primary" />
                <span
                  className="text-sm text-primary font-semibold"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  Full-Stack Developer
                </span>
                <Sparkles className="w-4 h-4 text-primary" />
              </div>

              <h2
                className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
                style={{
                  fontFamily:
                    "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif",
                }}
              >
                Crafting Digital{" "}
                <span className="text-primary">Experiences</span> That Matter
              </h2>

              <div className="flex flex-col gap-4">
                {PERSONAL_INFO.bio.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base text-gray-400 leading-relaxed"
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <button
              onClick={() => window.open(PERSONAL_INFO.resume, "_blank")}
              className="inline-flex items-center gap-2 bg-primary/70 hover:bg-primary/50 text-white rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 w-fit group shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30"
              style={{
                fontFamily:
                  "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif",
              }}
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
              Download Resume
            </button>
          </div>

          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="col-span-2 relative group">
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-lg font-bold text-white mb-2"
                      style={{
                        fontFamily:
                          "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif",
                      }}
                    >
                      Expertise
                    </h3>
                    <p
                      className="text-sm text-gray-400 leading-relaxed"
                      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                    >
                      Specialized in building scalable web applications with
                      modern technologies and best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h3
                  className="text-base font-bold text-white mb-2"
                  style={{
                    fontFamily:
                      "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif",
                  }}
                >
                  Clean Code
                </h3>
                <p
                  className="text-sm text-gray-400 leading-relaxed"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  Writing maintainable code that scales.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h3
                  className="text-base font-bold text-white mb-2"
                  style={{
                    fontFamily:
                      "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif",
                  }}
                >
                  Performance
                </h3>
                <p
                  className="text-sm text-gray-400 leading-relaxed"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  Optimizing for speed in every project.
                </p>
              </div>
            </div>

            <div className="col-span-2 relative group">
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div
                      className="text-3xl font-black text-primary mb-1"
                      style={{
                        fontFamily:
                          "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif",
                      }}
                    >
                      24/7
                    </div>
                    <div
                      className="text-xs text-gray-400 font-medium"
                      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                    >
                      Support Available
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-3xl font-black text-primary mb-1"
                      style={{
                        fontFamily:
                          "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif",
                      }}
                    >
                      Fast
                    </div>
                    <div
                      className="text-xs text-gray-400 font-medium"
                      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                    >
                      Delivery Time
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={skillsRef}
          className={`flex flex-col items-center gap-12 transition-all duration-1000 ease-out ${
            skillsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }`}
        >
          <div className="text-center">
            <h3
              className="text-3xl font-bold text-white mb-3"
              style={{
                fontFamily:
                  "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif",
              }}
            >
              Tech Stack & <span className="text-primary">Expertise</span>
            </h3>
            <p
              className="text-gray-400 text-base"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              Technologies I work with to build amazing products
            </p>
          </div>

          <div className="relative w-full max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${
                    skillsVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-all duration-500 group-hover:scale-110 group-hover:z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-green-500/10 rounded-2xl transition-all duration-500" />

                    <div className="relative">
                      <div className="absolute inset-0 bg-primary blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                      <skill.icon className="text-5xl text-gray-400 group-hover:text-primary relative z-10 transition-all duration-500 group-hover:scale-125" />
                    </div>

                    <div
                      className="text-sm text-gray-500 group-hover:text-white font-semibold text-center transition-colors duration-500"
                      style={{
                        fontFamily:
                          "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif",
                      }}
                    >
                      {skill.name}
                    </div>

                    <div className="absolute -inset-[1px] bg-gradient-to-br from-primary to-green-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
