import { Card } from "@/components/ui/card";
import { Palette, Users, Lightbulb, Target } from "lucide-react";

const About = () => {
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
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
