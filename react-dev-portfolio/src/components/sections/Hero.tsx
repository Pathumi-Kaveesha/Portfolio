import { Star } from "lucide-react";
import { PERSONAL_INFO, STATS } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-900">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "700ms" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[150px] animate-pulse"
          style={{ animationDelay: "1000ms" }}
        />
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] animate-pulse" />

      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)] animate-pulse" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left space-y-8">
            {/* Badge with shimmer effect */}
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 relative group cursor-pointer">
                {/* Multi-layer glow */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
                  style={{ animation: "shimmer 2s infinite" }}
                />
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse" />

                {/* Badge content */}
                <div className="relative flex items-center gap-2 bg-gradient-to-r from-primary/20 via-emerald-500/20 to-green-500/20 border-2 border-primary/40 rounded-full px-4 py-2 backdrop-blur-md shadow-2xl shadow-primary/20">
                  <Star
                    className="w-3.5 h-3.5 text-primary fill-primary flex-shrink-0 animate-spin"
                    style={{ animationDuration: "3s" }}
                  />
                  <span
                    className="text-xs md:text-sm text-white tracking-[1.2px] font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-emerald-300 bg-[length:200%_auto] whitespace-nowrap"
                    style={{
                      animation: "gradient-x 3s ease infinite",
                      fontFamily: "Inter, system-ui, sans-serif",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* Heading with gradient animation */}
            <FadeIn delay={100}>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight"
                style={{
                  fontFamily:
                    "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif",
                }}
              >
                <span className="inline-block relative">
                  <span
                    className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-50 to-white bg-[length:200%_auto]"
                    style={{ animation: "gradient-x 4s ease infinite" }}
                  >
                    Pathumi Kaveesha's
                  </span>
                  {/* Text shadow layers */}
                  <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-white/50 via-gray-50/50 to-white/50 blur-sm">
                    Pathumi Kaveesha's
                  </span>
                </span>
                <br />
                <span className="inline-block relative mt-2 group cursor-default">
                  <span
                    className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary via-emerald-400 to-green-400 bg-[length:200%_auto]"
                    style={{
                      animation: "gradient-x 4s ease infinite",
                      animationDelay: "0.5s",
                    }}
                  >
                    Portfolio
                  </span>
                  {/* Intense glow effect */}
                  <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-primary via-emerald-400 to-green-400 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                    Portfolio
                  </span>
                  {/* Animated underline */}
                  <div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-emerald-400 to-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"
                    style={{ animation: "gradient-x 3s ease infinite" }}
                  />
                </span>
              </h1>
            </FadeIn>

            {/* Paragraph with slide-in effect */}
            <FadeIn delay={200}>
              <p
                className="text-lg md:text-xl lg:text-xl text-gray-300 max-w-[600px] leading-relaxed font-light tracking-wide relative group"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                <span className="relative inline-block transform transition-all duration-500 group-hover:translate-x-2 group-hover:text-white">
                  Building modern, scalable web applications with{" "}
                  <span
                    className="font-semibold text-primary relative inline-block"
                    style={{ animation: "gradient-x 3s ease infinite" }}
                  >
                    Next.js
                    <span className="absolute inset-0 blur-lg bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                  ,{" "}
                  <span className="font-semibold text-emerald-400 relative inline-block">
                    TypeScript
                    <span className="absolute inset-0 blur-lg bg-emerald-400/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                  ,{" "}
                  <span className="font-semibold text-green-400 relative inline-block">
                    Express
                    <span className="absolute inset-0 blur-lg bg-green-400/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>{" "}
                  framework, and cutting-edge technologies. Transforming ideas
                  into exceptional digital experiences.
                </span>
              </p>
            </FadeIn>

            {/* Button with advanced hover effects */}
            <FadeIn delay={300}>
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative inline-flex items-center overflow-hidden mt-4"
              >
                {/* Multiple animated border gradients */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-primary via-emerald-500 to-green-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"
                  style={{ animation: "gradient-xy 4s ease infinite" }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-green-500 via-primary to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-70 blur-xl transition-all duration-500"
                  style={{
                    animation: "gradient-xy 4s ease infinite",
                    animationDelay: "0.5s",
                  }}
                />

                {/* Button glow */}
                <div className="absolute inset-0 bg-primary/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 animate-pulse" />

                {/* Button content */}
                <div
                  className="relative bg-gradient-to-r from-white to-gray-50 text-[#0a0a0a] rounded-2xl px-7 py-3.5 text-sm md:text-base font-black uppercase tracking-wider border-2 border-white group-hover:border-primary group-hover:from-primary group-hover:to-emerald-400 group-hover:text-white transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/40 transform group-hover:scale-110 group-hover:-translate-y-1"
                  style={{
                    fontFamily:
                      "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif",
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get in Touch
                    <span className="inline-block transform group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                  </span>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 skew-x-12" />

                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                </div>

                {/* Ripple effects */}
                <div
                  className="absolute inset-0 rounded-2xl group-hover:animate-ping opacity-0 group-hover:opacity-10 bg-primary"
                  style={{ animationDuration: "1.5s" }}
                />
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 bg-primary animate-pulse" />
              </button>
            </FadeIn>

            {/* Stats Section with modern cards */}
            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-full mt-8 sm:mt-10 md:mt-12">
                {STATS.map((stat, index) => (
                  <div key={index} className="relative group text-left w-full">
                    {/* Animated background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-emerald-500/10 to-green-500/10 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />

                    {/* Stat card */}
                    <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-primary/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 min-h-[100px] sm:min-h-[110px] md:min-h-[120px] lg:min-h-[130px] flex flex-col justify-between transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/20 group-hover:-translate-y-1 overflow-hidden">
                      {/* Corner accent */}
                      <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-2xl sm:rounded-bl-3xl rounded-tr-lg sm:rounded-tr-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Value with gradient animation */}
                      <div
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-1.5 sm:mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary via-emerald-400 to-green-400 bg-[length:200%_auto] tabular-nums leading-none break-all"
                        style={{
                          animation: "gradient-x 4s ease infinite",
                          animationDelay: `${index * 0.2}s`,
                          fontFamily:
                            "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif",
                          wordBreak: "keep-all",
                          overflowWrap: "normal",
                        }}
                      >
                        {stat.value}
                      </div>

                      {/* Label */}
                      <p
                        className="text-[10px] sm:text-xs md:text-sm text-gray-300 leading-tight font-medium tracking-wide group-hover:text-white transition-colors duration-300 mt-auto"
                        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                      >
                        {stat.label}
                      </p>

                      {/* Bottom accent line */}
                      <div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-emerald-400 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-full"
                        style={{ animation: "gradient-x 3s ease infinite" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Decorative animated elements */}
            <div className="absolute -left-20 top-1/2 w-60 h-60 bg-gradient-to-br from-primary/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute -right-20 bottom-1/4 w-48 h-48 bg-gradient-to-br from-green-500/20 to-primary/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "500ms" }}
            />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent" />

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 0%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          50% { transform: translateY(-100px) translateX(50px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
