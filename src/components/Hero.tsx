import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-secondary/30 to-background"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 animate-fade-in">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-medium text-lg animate-slide-in">
                Hi there, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground animate-fade-in-up">
                Venu Gopal Reddy
              </h1>
              <p className="text-2xl sm:text-3xl text-muted-foreground font-light animate-fade-in-up">
                UI/UX Designer
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 animate-fade-in-up">
              Crafting intuitive digital experiences through user-centered design.
              <br className="hidden sm:block" />
              Passionate about turning complex problems into beautiful solutions.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-fade-in-up">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="group"
              >
                Let's Connect
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
              >
                <a href="https://drive.google.com/file/d/1K5KQ5T8PFB_XBxrpwWj06fIBp9-qSPE8/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  View Resume
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 animate-fade-in-up">
              <a
                href="https://github.com/venugopalreddynarala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transition-transform"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/venugopalreddynarala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transition-transform"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:naralavenugopalreddy@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transition-transform"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
              <img
                src={profilePhoto}
                alt="Venu Gopal Reddy"
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-8 border-card shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
