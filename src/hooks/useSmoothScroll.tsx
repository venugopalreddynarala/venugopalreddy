import { useState, useEffect, useCallback } from "react";

export const useSmoothScroll = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Track which section is currently in view
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "experience", "education", "contact"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsTransitioning(true);
      
      // Add transition class to body
      document.body.classList.add("section-transitioning");
      
      // Calculate position with offset for fixed navbar
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      // Smooth scroll with custom timing
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Remove transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
        document.body.classList.remove("section-transitioning");
        setActiveSection(id);
      }, 800);
    }
  }, []);

  return { activeSection, isTransitioning, scrollToSection };
};
