import { useState, useEffect, useCallback } from "react";

interface InkDot {
  id: number;
  x: number;
  y: number;
}

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [inkDots, setInkDots] = useState<InkDot[]>([]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  const handleClick = useCallback((e: MouseEvent) => {
    const newDot: InkDot = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };
    
    setInkDots(prev => [...prev, newDot]);
    
    // Remove the dot after 1 second
    setTimeout(() => {
      setInkDots(prev => prev.filter(dot => dot.id !== newDot.id));
    }, 1000);
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("click", handleClick);
    };
  }, [handleMouseMove, handleMouseLeave, handleMouseEnter, handleClick]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      {/* Fountain Pen Nib */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        className="absolute"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-2px, -2px) rotate(-45deg)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.1s",
        }}
      >
        {/* Nib body */}
        <path
          d="M4 2 L16 14 L14 16 L2 4 Z"
          fill="hsl(var(--primary))"
          stroke="hsl(var(--primary-foreground))"
          strokeWidth="0.5"
        />
        {/* Nib tip */}
        <path
          d="M2 4 L4 2 L1 1 Z"
          fill="hsl(var(--foreground))"
        />
        {/* Nib slit */}
        <line
          x1="3"
          y1="3"
          x2="12"
          y2="12"
          stroke="hsl(var(--background))"
          strokeWidth="0.8"
        />
        {/* Ink reservoir hint */}
        <path
          d="M14 16 L16 14 L20 18 L18 20 Z"
          fill="hsl(var(--muted))"
          stroke="hsl(var(--border))"
          strokeWidth="0.3"
        />
      </svg>

      {/* Ink Dots */}
      {inkDots.map(dot => (
        <div
          key={dot.id}
          className="absolute rounded-full bg-foreground animate-ink-splash"
          style={{
            left: dot.x,
            top: dot.y,
            width: "8px",
            height: "8px",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
};

export default CustomCursor;
