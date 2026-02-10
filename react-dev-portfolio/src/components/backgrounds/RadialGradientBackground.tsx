import React from "react";

/* ---------- Types ---------- */
type GradientColor = {
  color: string;
  stop: string;
};

type GradientConfig = {
  position: string;
  size: string;
  colors: GradientColor[];
  blur: string;
  opacity: number;
};

type Variant = "hero" | "about" | "custom";

interface RadialGradientBackgroundProps {
  variant?: Variant;
  gradients?: GradientConfig[];
}

/* ---------- Component ---------- */
const RadialGradientBackground: React.FC<RadialGradientBackgroundProps> = ({
  variant = "hero",
  gradients = [],
}) => {
  const variants: Record<Exclude<Variant, "custom">, GradientConfig[]> = {
    hero: [
      {
        position: "top-[-10%] left-[-5%]",
        size: "w-[600px] h-[600px]",
        colors: [
          { color: "rgba(34, 197, 94, 0.15)", stop: "0%" },
          { color: "rgba(34, 197, 94, 0.08)", stop: "40%" },
          { color: "rgba(34, 197, 94, 0)", stop: "70%" },
        ],
        blur: "80px",
        opacity: 1,
      },
      {
        position: "top-[5%] right-[-8%]",
        size: "w-[500px] h-[500px]",
        colors: [
          { color: "rgba(16, 185, 129, 0.12)", stop: "0%" },
          { color: "rgba(16, 185, 129, 0.06)", stop: "40%" },
          { color: "rgba(16, 185, 129, 0)", stop: "70%" },
        ],
        blur: "70px",
        opacity: 1,
      },
      {
        position: "top-[25%] left-[15%]",
        size: "w-[400px] h-[400px]",
        colors: [
          { color: "rgba(74, 222, 128, 0.1)", stop: "0%" },
          { color: "rgba(74, 222, 128, 0.05)", stop: "40%" },
          { color: "rgba(74, 222, 128, 0)", stop: "70%" },
        ],
        blur: "60px",
        opacity: 1,
      },
      {
        position: "top-[40%] right-[10%]",
        size: "w-[450px] h-[450px]",
        colors: [
          { color: "rgba(34, 197, 94, 0.14)", stop: "0%" },
          { color: "rgba(34, 197, 94, 0.07)", stop: "40%" },
          { color: "rgba(34, 197, 94, 0)", stop: "70%" },
        ],
        blur: "75px",
        opacity: 1,
      },
      {
        position: "bottom-[10%] left-[25%]",
        size: "w-[550px] h-[550px]",
        colors: [
          { color: "rgba(16, 185, 129, 0.13)", stop: "0%" },
          { color: "rgba(16, 185, 129, 0.065)", stop: "40%" },
          { color: "rgba(16, 185, 129, 0)", stop: "70%" },
        ],
        blur: "85px",
        opacity: 1,
      },
      {
        position: "bottom-[-5%] right-[5%]",
        size: "w-[480px] h-[480px]",
        colors: [
          { color: "rgba(34, 197, 94, 0.11)", stop: "0%" },
          { color: "rgba(34, 197, 94, 0.055)", stop: "40%" },
          { color: "rgba(34, 197, 94, 0)", stop: "70%" },
        ],
        blur: "65px",
        opacity: 1,
      },
      {
        position: "top-[60%] left-[-3%]",
        size: "w-[380px] h-[380px]",
        colors: [
          { color: "rgba(74, 222, 128, 0.09)", stop: "0%" },
          { color: "rgba(74, 222, 128, 0.045)", stop: "40%" },
          { color: "rgba(74, 222, 128, 0)", stop: "70%" },
        ],
        blur: "55px",
        opacity: 1,
      },
    ],

    about: [
      {
        position: "bottom-1 left-[75%]",
        size: "w-[700px] h-[700px]",
        colors: [
          { color: "rgba(34, 197, 94, 0.15)", stop: "0%" },
          { color: "rgba(34, 197, 94, 0.08)", stop: "40%" },
          { color: "rgba(34, 197, 94, 0)", stop: "70%" },
        ],
        blur: "80px",
        opacity: 1,
      },
    ],
  };

  const activeGradients =
    variant === "custom" ? gradients : variants[variant] || variants.hero;

  const generateGradient = (colors: GradientColor[]): string => {
    const colorStops = colors
      .map(({ color, stop }) => `${color} ${stop}`)
      .join(", ");

    return `radial-gradient(circle at center, ${colorStops})`;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {activeGradients.map((gradient, index) => (
        <div
          key={index}
          className={`absolute ${gradient.position} ${gradient.size} rounded-full`}
          style={{
            background: generateGradient(gradient.colors),
            filter: `blur(${gradient.blur})`,
            opacity: gradient.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default RadialGradientBackground;
