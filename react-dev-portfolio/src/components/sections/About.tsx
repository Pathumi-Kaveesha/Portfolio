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
      className="relative py-20 md:py-28 bg-gradient-to-br from-[#1a1512] via-[#0a0806] to-[#1a1512] overflow-hidden"
    >
      <RadialGradientBackground variant="about" />

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

      {/* Top fade to blend with hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0806] via-[#0a0806]/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24"
        >
          <div
            className={`flex flex-col gap-8 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="flex flex-col gap-6">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
                style={{
                  fontFamily:
                    "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif",
                }}
              >
                Crafting Digital{" "}
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-[#E5D3C5] via-[#D4A574] to-[#C9A882] bg-[length:200%_auto]"
                  style={{ animation: "gradient-x 4s ease infinite" }}
                >
                  Experiences
                </span>{" "}
                That Matter
              </h2>

              <div className="flex flex-col gap-4">
                {PERSONAL_INFO.bio.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base lg:text-lg text-gray-300 leading-relaxed"
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <button
              onClick={() => window.open(PERSONAL_INFO.resume, "_blank")}
              className="inline-flex items-center gap-2 bg-[#E5D3C5]/10 hover:bg-[#E5D3C5]/20 border border-[#E5D3C5]/30 hover:border-[#E5D3C5]/50 text-[#E5D3C5] hover:text-white rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-300 w-fit group"
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
            className={`grid grid-cols-2 gap-3 lg:gap-4 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="col-span-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E5D3C5]/10 via-[#D4A574]/10 to-[#C9A882]/10 rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-[#E5D3C5]/20 rounded-xl lg:rounded-2xl p-5 lg:p-6 hover:border-[#E5D3C5]/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#E5D3C5]/20 group-hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#E5D3C5]/10 rounded-xl">
                    <Code2 className="w-6 h-6 text-[#E5D3C5]" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-lg lg:text-xl font-bold text-white mb-2"
                      style={{
                        fontFamily:
                          "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif",
                      }}
                    >
                      Expertise
                    </h3>
                    <p
                      className="text-sm lg:text-base text-gray-300 leading-relaxed"
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#E5D3C5]/10 via-[#D4A574]/10 to-[#C9A882]/10 rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-[#E5D3C5]/20 rounded-xl lg:rounded-2xl p-5 lg:p-6 hover:border-[#E5D3C5]/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#E5D3C5]/20 group-hover:-translate-y-1 h-full">
                <div className="p-3 bg-[#E5D3C5]/10 rounded-xl w-fit mb-4">
                  <Sparkles className="w-5 h-5 text-[#E5D3C5]" />
                </div>
                <h3
                  className="text-base lg:text-lg font-bold text-white mb-2"
                  style={{
                    fontFamily:
                      "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif",
                  }}
                >
                  Clean Code
                </h3>
                <p
                  className="text-sm lg:text-base text-gray-300 leading-relaxed"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  Writing maintainable code that scales.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E5D3C5]/10 via-[#D4A574]/10 to-[#C9A882]/10 rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-[#E5D3C5]/20 rounded-xl lg:rounded-2xl p-5 lg:p-6 hover:border-[#E5D3C5]/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#E5D3C5]/20 group-hover:-translate-y-1 h-full">
                <div className="p-3 bg-[#E5D3C5]/10 rounded-xl w-fit mb-4">
                  <Zap className="w-5 h-5 text-[#E5D3C5]" />
                </div>
                <h3
                  className="text-base lg:text-lg font-bold text-white mb-2"
                  style={{
                    fontFamily:
                      "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif",
                  }}
                >
                  Performance
                </h3>
                <p
                  className="text-sm lg:text-base text-gray-300 leading-relaxed"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  Optimizing for speed in every project.
                </p>
              </div>
            </div>

            <div className="col-span-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E5D3C5]/10 via-[#D4A574]/10 to-[#C9A882]/10 rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-[#E5D3C5]/20 rounded-xl lg:rounded-2xl p-5 lg:p-6 hover:border-[#E5D3C5]/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#E5D3C5]/20 group-hover:-translate-y-1">
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div
                      className="text-2xl md:text-3xl lg:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#E5D3C5] via-[#D4A574] to-[#C9A882] bg-[length:200%_auto] mb-2"
                      style={{
                        animation: "gradient-x 4s ease infinite",
                        fontFamily:
                          "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif",
                      }}
                    >
                      24/7
                    </div>
                    <div
                      className="text-xs md:text-sm text-gray-300 font-medium"
                      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                    >
                      Support Available
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center">
                    <div
                      className="text-2xl md:text-3xl lg:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#E5D3C5] via-[#D4A574] to-[#C9A882] bg-[length:200%_auto] mb-2"
                      style={{
                        animation: "gradient-x 4s ease infinite",
                        animationDelay: "0.5s",
                        fontFamily:
                          "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif",
                      }}
                    >
                      Fast
                    </div>
                    <div
                      className="text-xs md:text-sm text-gray-300 font-medium"
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
              className="text-3xl lg:text-4xl font-bold text-white mb-3"
              style={{
                fontFamily:
                  "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif",
              }}
            >
              Tech Stack &{" "}
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#E5D3C5] via-[#D4A574] to-[#C9A882] bg-[length:200%_auto]"
                style={{ animation: "gradient-x 4s ease infinite" }}
              >
                Expertise
              </span>
            </h3>
            <p
              className="text-gray-300 text-base lg:text-lg"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              Technologies I work with to build amazing products
            </p>
          </div>

          <div className="relative w-full max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
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
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E5D3C5]/10 via-[#D4A574]/10 to-[#C9A882]/10 rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                  <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-[#E5D3C5]/20 rounded-xl lg:rounded-2xl p-6 lg:p-8 flex flex-col items-center justify-center gap-4 hover:border-[#E5D3C5]/50 transition-all duration-500 group-hover:scale-110 group-hover:z-10 group-hover:shadow-2xl group-hover:shadow-[#E5D3C5]/20 group-hover:-translate-y-1">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#E5D3C5] blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                      <skill.icon className="text-4xl lg:text-5xl text-gray-400 group-hover:text-[#E5D3C5] relative z-10 transition-all duration-500 group-hover:scale-125" />
                    </div>

                    <div
                      className="text-sm lg:text-base text-gray-300 group-hover:text-white font-semibold text-center transition-colors duration-500"
                      style={{
                        fontFamily:
                          "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif",
                      }}
                    >
                      {skill.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0806] via-[#0a0806]/50 to-transparent pointer-events-none" />

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default About;
