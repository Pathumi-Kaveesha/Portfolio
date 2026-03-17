import React from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const ScrollReveal = ({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 700,
}: {
  children: React.ReactNode;
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleIn";
  delay?: number;
  duration?: number;
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 }) as {
    ref: React.RefObject<HTMLDivElement>;
    isVisible: boolean;
  };

  const animationClasses = {
    fadeUp: isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
    fadeIn: isVisible ? "opacity-100" : "opacity-0",
    slideLeft: isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 -translate-x-12",
    slideRight: isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 translate-x-12",
    scaleIn: isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90",
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${animationClasses[animation]}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
