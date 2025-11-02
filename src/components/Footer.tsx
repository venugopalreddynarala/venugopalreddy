import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/venugopalreddynarala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transition-transform"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/venugopalreddynarala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transition-transform"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:naralavenugopalreddy@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transition-transform"
            >
              <Mail size={24} />
            </a>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© 2025 Venu Gopal Reddy Narala</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
