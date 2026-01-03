import { Card } from "@/components/ui/card";
import { Palette, Users, Lightbulb, Target, Award, Briefcase, Code, Brain } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedCounter from "@/components/AnimatedCounter";

const About = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  const highlights = [
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting visually stunning and intuitive interfaces",
    },
    {
      icon: Brain,
      title: "AI & ML Expert",
      description: "Building intelligent solutions with machine learning",
    },
    {
      icon: Code,
      title: "Full-Stack Dev",
      description: "Developing robust web applications end-to-end",
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
      description: "Every pixel and line of code matters",
    },
  ];

  const stats = [
    { number: 10, suffix: "+", label: "Projects Completed", icon: Briefcase },
    { number: 2, suffix: "+", label: "Years Experience", icon: Award },
    { number: 15, suffix: "+", label: "Happy Clients", icon: Users },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 parallax-slow" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 parallax-medium" />

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
            className={`p-8 shadow-lg card-3d spotlight transition-all duration-500 ${
              sectionVisible ? 'animate-scale-in stagger-2' : 'opacity-0'
            }`}
          >
            <p className="text-lg text-muted-foreground leading-relaxed text-center sm:text-left">
              I'm a passionate UI/UX Designer and AI/ML Developer with expertise in creating 
              intuitive digital experiences and building intelligent solutions. My journey combines 
              design thinking with technical excellence—I believe great products emerge from the 
              intersection of beautiful interfaces and powerful technology. With expertise in tools 
              like Figma, Adobe XD, Python, TensorFlow, and modern web technologies, I bring ideas 
              to life through both visual design and code.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4 text-center sm:text-left">
              Currently pursuing my B.Tech in Computer Science (AI & Data Science) at Vel Tech, 
              I'm constantly exploring how AI can enhance user experiences. Whether it's designing 
              a seamless mobile app, building a machine learning model for healthcare, or developing 
              a full-stack web application, I strive to create solutions that are both meaningful 
              and impactful.
            </p>
          </Card>

          {/* Stats Section */}
          <div 
            ref={statsRef}
            className={`grid grid-cols-1 sm:grid-cols-3 gap-6 transition-all duration-700 ${
              statsVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
            }`}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 text-center hover-lift glow-border group"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3 group-hover:bg-primary/20 transition-all duration-300 elastic-scale">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              );
            })}
          </div>

          <div 
            ref={cardsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className={`p-6 text-center card-3d spotlight group transition-all duration-500 ${
                    cardsVisible ? 'slide-fade-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-all duration-300 elastic-scale">
                    <Icon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors underline-animate">
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
