import { useState, useEffect, useCallback } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);

    // Add trail particle
    setTrail(prev => [
      ...prev.slice(-12), // Keep last 12 particles
      { x: e.clientX, y: e.clientY, id: Date.now() }
    ]);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Trailing cursor with smooth delay
    const trailInterval = setInterval(() => {
      setTrailPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15
      }));
    }, 16);

    return () => clearInterval(trailInterval);
  }, [position]);

  useEffect(() => {
    // Clean up old trail particles
    const cleanupInterval = setInterval(() => {
      setTrail(prev => prev.slice(-8));
    }, 100);

    return () => clearInterval(cleanupInterval);
  }, []);

  useEffect(() => {
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("hover-lift") ||
        target.classList.contains("card-3d") ||
        target.classList.contains("magnetic-btn")
      ) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = () => {
      setIsHovering(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseout", handleHoverEnd);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
    };
  }, [handleMouseMove, handleMouseLeave, handleMouseEnter]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      {/* Trail particles */}
      {trail.map((particle, index) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            left: particle.x,
            top: particle.y,
            width: `${4 + index * 0.5}px`,
            height: `${4 + index * 0.5}px`,
            transform: "translate(-50%, -50%)",
            opacity: (index + 1) / trail.length * 0.5,
            transition: "opacity 0.3s ease-out",
          }}
        />
      ))}

      {/* Trailing circle */}
      <div
        className={`absolute rounded-full border-2 transition-all duration-300 ease-out ${
          isHovering 
            ? "w-16 h-16 border-primary/50 bg-primary/10" 
            : "w-10 h-10 border-primary/30"
        } ${isClicking ? "scale-75" : "scale-100"}`}
        style={{
          left: trailPosition.x,
          top: trailPosition.y,
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Main cursor dot */}
      <div
        className={`absolute rounded-full transition-all duration-150 ease-out ${
          isHovering 
            ? "w-2 h-2 bg-accent" 
            : "w-3 h-3 bg-primary"
        } ${isClicking ? "scale-150" : "scale-100"}`}
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
          boxShadow: isHovering 
            ? "0 0 20px hsl(var(--accent) / 0.6)" 
            : "0 0 10px hsl(var(--primary) / 0.4)",
        }}
      />

      {/* Hover ring effect */}
      {isHovering && (
        <div
          className="absolute rounded-full border border-accent/40 animate-ping"
          style={{
            left: trailPosition.x,
            top: trailPosition.y,
            width: "60px",
            height: "60px",
            transform: "translate(-50%, -50%)",
            animationDuration: "1s",
          }}
        />
      )}
    </div>
  );
};

export default CustomCursor;
