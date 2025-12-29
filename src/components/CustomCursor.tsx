import { useState, useEffect, useCallback } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
      {/* Outer ring */}
      <div
        className={`absolute rounded-full border transition-all duration-500 ease-out ${
          isHovering 
            ? "w-12 h-12 border-accent bg-accent/5" 
            : "w-8 h-8 border-primary/50"
        } ${isClicking ? "scale-90" : "scale-100"}`}
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Inner dot */}
      <div
        className={`absolute rounded-full transition-all duration-200 ease-out ${
          isHovering 
            ? "w-1.5 h-1.5 bg-accent" 
            : "w-2 h-2 bg-primary"
        } ${isClicking ? "scale-150" : "scale-100"}`}
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
        }}
      />
    </div>
  );
};

export default CustomCursor;
