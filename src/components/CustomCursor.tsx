import { useState, useEffect, useCallback } from "react";
import penCursor from "@/assets/pen-cursor.png";

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
      {/* Pen Cursor Image */}
      <img
        src={penCursor}
        alt=""
        width={32}
        height={32}
        className="absolute"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-2px, -2px)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.1s",
        }}
      />

      {/* Ink Dots */}
      {inkDots.map(dot => (
        <div
          key={dot.id}
          className="absolute rounded-full bg-[#0ea5e9] animate-ink-splash"
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
