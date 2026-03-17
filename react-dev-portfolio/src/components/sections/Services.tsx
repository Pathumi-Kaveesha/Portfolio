import React, { useEffect, useRef, useState } from "react";
import { services } from "../../data/services";
import * as Icons from "lucide-react";
import { Sparkles } from "lucide-react";
import FadeIn from "../animations/FadeIn";

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [titleVisible, setTitleVisible] = useState(false);

  const titleRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Title animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    const currentTitle = titleRef.current;

    if (currentTitle) {
      observer.observe(currentTitle);
    }

    return () => {
      if (currentTitle) {
        observer.unobserve(currentTitle);
      }
      observer.disconnect();
    };
  }, []);

  // Cards animation observer
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const updated = new Set(prev);
              updated.add(index);
              return updated;
            });
          }
        },
        {
          threshold: 0.2,
          rootMargin: "0px 0px -50px 0px",
        },
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section
      id="services"
      className="relative py-20 bg-gradient-to-br from-[#1a1512] via-[#0a0806] to-[#1a1512] overflow-hidden"
    >
      {/* Background Effects */}
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

      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0806] via-[#0a0806]/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E5D3C5]/10 border border-[#E5D3C5]/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#E5D3C5]" />
            <span className="text-sm text-[#E5D3C5] font-medium tracking-wider uppercase">
              What I Offer
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4 max-w-2xl mx-auto">
            Build for innovation. Designed for results.
          </h2>

          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Comprehensive solutions to transform your ideas into exceptional
            digital experiences.
          </p>
        </div>

        {/* First 2 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {services.slice(0, 2).map((service, index) => {
            const IconComponent = (Icons[service.icon as keyof typeof Icons] ??
              Icons.Code2) as React.ElementType;

            const isLeft = index === 0;

            return (
              <div
                key={service.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`transition-all duration-1000 ease-out ${
                  visibleCards.has(index)
                    ? "opacity-100 translate-x-0"
                    : isLeft
                      ? "opacity-0 -translate-x-20"
                      : "opacity-0 translate-x-20"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="group relative bg-white/5 border border-[#E5D3C5]/20 rounded-3xl p-8 hover:border-[#E5D3C5]/40 transition-all duration-300 h-full min-h-[280px] flex flex-col">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#E5D3C5]/20 border border-[#E5D3C5]/30 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-[#E5D3C5]" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-[#E5D3C5] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Remaining Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(2).map((service, index) => {
            const IconComponent = (Icons[service.icon as keyof typeof Icons] ??
              Icons.Code2) as React.ElementType;

            const cardIndex = index + 2;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={service.id}
                ref={(el) => {
                  cardRefs.current[cardIndex] = el;
                }}
                className={`transition-all duration-1000 ease-out ${
                  visibleCards.has(cardIndex)
                    ? "opacity-100 translate-x-0"
                    : isLeft
                      ? "opacity-0 -translate-x-20"
                      : "opacity-0 translate-x-20"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="group relative bg-white/5 border border-[#E5D3C5]/20 rounded-2xl p-6 hover:border-[#E5D3C5]/40 transition-all duration-300 h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#E5D3C5]/20 border border-[#E5D3C5]/30 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-[#E5D3C5]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#E5D3C5] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0806] via-[#0a0806]/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default Services;
