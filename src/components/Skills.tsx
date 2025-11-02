import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Design Tools",
      skills: ["Adobe XD", "Figma", "Photoshop", "Canva"],
      color: "bg-blue-500/10 text-blue-700 hover:bg-blue-500/20",
    },
    {
      title: "UX Methods",
      skills: [
        "Wireframing",
        "Prototyping",
        "User Flow",
        "Persona Creation",
        "Usability Testing",
      ],
      color: "bg-purple-500/10 text-purple-700 hover:bg-purple-500/20",
    },
    {
      title: "UI Skills",
      skills: [
        "Layout Design",
        "Typography",
        "Color Theory",
        "Visual Hierarchy",
        "Responsive Design",
      ],
      color: "bg-green-500/10 text-green-700 hover:bg-green-500/20",
    },
    {
      title: "Front-End Basics",
      skills: ["HTML", "CSS", "JavaScript"],
      color: "bg-orange-500/10 text-orange-700 hover:bg-orange-500/20",
    },
    {
      title: "Soft Skills",
      skills: [
        "Creativity",
        "Empathy",
        "Collaboration",
        "Problem-Solving",
        "Communication",
      ],
      color: "bg-pink-500/10 text-pink-700 hover:bg-pink-500/20",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional user experiences
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    className={`${category.color} px-4 py-2 text-sm font-medium transition-all duration-200 cursor-default`}
                    variant="secondary"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
