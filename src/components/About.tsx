import { Card } from "@/components/ui/card";
import { Palette, Users, Lightbulb, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  const highlights = [
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting visually stunning interfaces",
    },
    {
      icon: Users,
      title: "User-Centered",
      description: "Putting users at the heart of every decision",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Transforming complex challenges into simple solutions",
    },
    {
      icon: Target,
      title: "Detail-Oriented",
      description: "Every pixel matters in creating excellence",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto relative z-10">
        <div 
          ref={sectionRef}
          className={`text-center mb-12 transition-all duration-700 ${
            sectionVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full line-animated"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <Card 
            className={`p-8 shadow-lg hover-lift hover-glow transition-all duration-500 ${
              sectionVisible ? 'animate-scale-in stagger-2' : 'opacity-0'
            }`}
          >
            <p className="text-lg text-muted-foreground leading-relaxed text-center sm:text-left">
              I'm a dedicated UI/UX Designer with a passion for creating intuitive and
              visually compelling digital experiences. My journey in design is driven by
              curiosity and empathy—I believe that great design starts with understanding
              people. With expertise in tools like Figma and Adobe XD, I bring ideas to
              life through wireframing, prototyping, and user research.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4 text-center sm:text-left">
              Currently pursuing my B.Tech in Computer Science (AI & Data Science) at Vel
              Tech, I'm constantly exploring the intersection of technology and design.
              Whether it's designing a seamless mobile app flow or crafting a responsive
              website, I strive to make every interaction meaningful and delightful.
            </p>
          </Card>

          <div 
            ref={cardsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className={`p-6 text-center hover-lift group transition-all duration-500 ${
                    cardsVisible ? 'animate-slide-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
