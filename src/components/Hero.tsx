import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullName = "Venu Gopal Reddy";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullName.length) {
        setDisplayText(fullName.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-animated relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl parallax-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl parallax-medium" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-2xl parallax-fast" />
        
        {/* Floating particles */}
        <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-primary/40 rounded-full particle" style={{ '--tx': '50px', '--ty': '-80px' } as React.CSSProperties} />
        <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-accent/30 rounded-full particle" style={{ '--tx': '-60px', '--ty': '-120px', animationDelay: '2s' } as React.CSSProperties} />
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-primary/50 rounded-full particle" style={{ '--tx': '80px', '--ty': '-100px', animationDelay: '4s' } as React.CSSProperties} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-medium text-lg animate-slide-right stagger-1">
                Hi there, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold animate-blur-in stagger-2">
                <span className="text-gradient">
                  {displayText}
                  <span className={`inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle ${isTypingComplete ? 'animate-pulse' : 'animate-blink'}`} />
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl text-muted-foreground font-light animate-slide-up stagger-3">
                <span className="underline-animate">UI/UX Designer & AI/ML Developer</span>
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 animate-slide-up stagger-4">
              Crafting intuitive digital experiences through user-centered design.
              <br className="hidden sm:block" />
              Building intelligent solutions with AI, Machine Learning & Full-Stack Development.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-slide-up stagger-5">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="group magnetic-btn glow-border ripple hover-glow"
              >
                Let's Connect
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="magnetic-btn hover-lift"
                asChild
              >
                <a href="https://drive.google.com/file/d/1K5KQ5T8PFB_XBxrpwWj06fIBp9-qSPE8/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  View Resume
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 animate-slide-up stagger-6">
              <a
                href="https://github.com/venugopalreddynarala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 elastic-scale hover-glow rounded-full pulse-ring"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/venugopalreddynarala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 elastic-scale hover-glow rounded-full"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:naralavenugopalreddy@gmail.com"
                className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 elastic-scale hover-glow rounded-full"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex-shrink-0 animate-scale-in stagger-3">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-glow group-hover:bg-primary/30 transition-colors duration-500"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full blur-2xl morph-bg opacity-60"></div>
              <div className="relative pulse-ring rounded-full">
                <img
                  src={profilePhoto}
                  alt="Venu Gopal Reddy"
                  className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-8 border-card shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2 glow-border">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-slide-up" style={{ animationDuration: '1.5s', animationIterationCount: 'infinite' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
