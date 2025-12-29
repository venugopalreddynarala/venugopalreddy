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
      {/* Fountain Pen Nib - 3D Blue Style */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        className="absolute"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-5%, -5%)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.1s",
        }}
      >
        {/* Main nib body - dark blue */}
        <path
          d="M35 15 L60 40 L55 50 L45 55 L20 30 Z"
          fill="#1e5799"
        />
        {/* Nib tip - pointed */}
        <path
          d="M20 30 L5 5 L35 15 Z"
          fill="#0ea5e9"
        />
        {/* Left face - lighter blue for 3D effect */}
        <path
          d="M5 5 L20 30 L45 55 L50 70 L25 45 Z"
          fill="#38bdf8"
        />
        {/* Right face - medium blue */}
        <path
          d="M35 15 L60 40 L65 55 L50 70 L45 55 L20 30 Z"
          fill="#0284c7"
        />
        {/* Inner cut/slit */}
        <path
          d="M25 25 L45 45"
          stroke="#0c4a6e"
          strokeWidth="2"
          fill="none"
        />
        {/* Highlight edge */}
        <path
          d="M5 5 L35 15"
          stroke="#7dd3fc"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Bottom connector */}
        <path
          d="M50 70 L55 50 L65 55 Z"
          fill="#1e3a5f"
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
