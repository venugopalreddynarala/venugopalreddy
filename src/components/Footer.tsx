import { Github, Linkedin, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const { ref: footerRef, isVisible: footerVisible } = useScrollAnimation();

  return (
    <footer 
      ref={footerRef}
      className="bg-card border-t border-border py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className={`flex flex-col items-center justify-center space-y-4 transition-all duration-700 ${
          footerVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/venugopalreddynarala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover-glow rounded-full p-2"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/venugopalreddynarala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover-glow rounded-full p-2"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:naralavenugopalreddy@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover-glow rounded-full p-2"
            >
              <Mail size={24} />
            </a>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© 2025 </span>
            <span className="text-gradient font-medium">Venu Gopal Reddy Narala</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
