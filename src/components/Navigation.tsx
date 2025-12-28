import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { activeSection, isTransitioning, scrollToSection } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / windowHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-card/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        } ${isTransitioning ? "pointer-events-none" : ""}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              onClick={() => handleNavClick("home")}
              className="text-xl md:text-2xl font-bold text-gradient hover:scale-110 transition-transform duration-300 magnetic-btn"
            >
              VGR
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-foreground hover:text-primary transition-all duration-300 font-medium relative group ${
                    activeSection === item.id ? "text-primary nav-active" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                    activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground hover:text-primary transition-all duration-300 elastic-scale"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className={`transition-transform duration-300 ${isMobileMenuOpen ? "rotate-180" : ""}`}>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}>
            <div className="py-4 bg-card/95 backdrop-blur-md rounded-lg shadow-lg">
              <div className="flex flex-col space-y-1 px-4">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-foreground hover:text-primary transition-all duration-300 font-medium py-3 text-left hover:translate-x-2 rounded-lg hover:bg-primary/5 px-3 ${
                      activeSection === item.id ? "text-primary bg-primary/10" : ""
                    }`}
                    style={{ 
                      animationDelay: `${index * 0.05}s`,
                      transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms"
                    }}
                  >
                    <span className="flex items-center gap-2">
                      {activeSection === item.id && (
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                      )}
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
