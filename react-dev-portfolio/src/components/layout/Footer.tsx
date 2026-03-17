import React from "react";
import { Github, Linkedin, Mail, MapPin, Heart } from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import FadeIn from "../animations/FadeIn";

const socialIcons: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
};

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#1a1512] via-[#0a0806] to-[#1a1512] overflow-hidden">
      {/* Animated gradient orbs - matching Hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E5D3C5]/20 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "700ms" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A882]/10 rounded-full blur-[150px] animate-pulse"
          style={{ animationDelay: "1000ms" }}
        />
      </div>

      {/* Animated grid background - matching Hero */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(229,211,197,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(229,211,197,.04)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <FadeIn delay={0}>
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-[#E5D3C5] via-[#D4A574] to-[#C9A882] bg-clip-text text-transparent mb-4">
                {PERSONAL_INFO.name.split(" ")[0]}
              </h3>

              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                {PERSONAL_INFO.tagline}
              </p>

              <div className="space-y-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="group flex items-center gap-3 p-3 bg-white/5 border border-[#E5D3C5]/20 rounded-xl hover:bg-white/10 hover:border-[#E5D3C5]/50 transition-all duration-300"
                >
                  <div className="p-2 bg-[#E5D3C5]/10 rounded-lg">
                    <Mail className="w-4 h-4 text-[#E5D3C5]" />
                  </div>
                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    {PERSONAL_INFO.email}
                  </span>
                </a>

                <div className="flex items-center gap-3 p-3 bg-white/5 border border-[#E5D3C5]/20 rounded-xl">
                  <div className="p-2 bg-[#E5D3C5]/10 rounded-lg">
                    <MapPin className="w-4 h-4 text-[#E5D3C5]" />
                  </div>
                  <span className="text-gray-300 text-sm">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">
                Quick Links
              </h4>

              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="group flex items-center gap-2 text-gray-300 hover:text-[#E5D3C5] transition-all duration-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-[#E5D3C5] group-hover:w-2 transition-all duration-300" />
                      <span className="text-sm">{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">
                Connect With Me
              </h4>

              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Let's connect and create something amazing together.
              </p>

              <div className="flex flex-wrap gap-3">
                {Object.entries(SOCIAL_LINKS).map(([platform, url]) => {
                  const Icon = socialIcons[platform];

                  if (!Icon) return null;

                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-4 bg-white/5 rounded-xl border border-[#E5D3C5]/20 hover:bg-white/10 hover:border-[#E5D3C5]/50 hover:scale-110 transition-all duration-300"
                      aria-label={`Connect on ${platform}`}
                    >
                      <Icon className="w-5 h-5 text-gray-300 group-hover:text-[#E5D3C5] transition-colors duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#E5D3C5]/0 to-[#E5D3C5]/0 group-hover:from-[#E5D3C5]/10 group-hover:to-[#D4A574]/5 rounded-xl transition-all duration-300 pointer-events-none" />
                    </a>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={300}>
          <div className="pt-8 border-t border-[#E5D3C5]/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights
                reserved.
              </p>

              <p className="flex items-center gap-2 text-gray-400 text-sm">
                Built with{" "}
                <Heart className="w-4 h-4 text-[#E5D3C5] fill-[#E5D3C5] animate-pulse" />{" "}
                using React and Tailwind CSS
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;
