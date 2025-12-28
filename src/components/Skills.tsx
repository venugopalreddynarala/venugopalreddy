import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SkillBar from "@/components/SkillBar";

const Skills = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
  const { ref: barsRef, isVisible: barsVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: "Design Tools",
      skills: ["Adobe XD", "Figma", "Photoshop", "Canva"],
      color: "bg-blue-500/10 text-blue-700 dark:text-blue-400 hover:bg-blue-500/20 elastic-scale",
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
      color: "bg-purple-500/10 text-purple-700 dark:text-purple-400 hover:bg-purple-500/20 elastic-scale",
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
      color: "bg-green-500/10 text-green-700 dark:text-green-400 hover:bg-green-500/20 elastic-scale",
    },
    {
      title: "Front-End Basics",
      skills: ["HTML", "CSS", "JavaScript"],
      color: "bg-orange-500/10 text-orange-700 dark:text-orange-400 hover:bg-orange-500/20 elastic-scale",
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
      color: "bg-pink-500/10 text-pink-700 dark:text-pink-400 hover:bg-pink-500/20 elastic-scale",
    },
  ];

  const proficiencySkills = [
    { skill: "Figma", level: 90, color: "bg-gradient-to-r from-primary to-accent" },
    { skill: "Adobe XD", level: 85, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { skill: "UI Design", level: 88, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
    { skill: "UX Research", level: 82, color: "bg-gradient-to-r from-green-500 to-emerald-500" },
    { skill: "Prototyping", level: 87, color: "bg-gradient-to-r from-orange-500 to-yellow-500" },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl parallax-slow" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl parallax-medium" />

      <div className="container mx-auto relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-700 ${
            titleVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full line-animated"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional user experiences
          </p>
        </div>

        {/* Proficiency Bars */}
        <div 
          ref={barsRef}
          className={`max-w-2xl mx-auto mb-12 space-y-4 transition-all duration-700 ${
            barsVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Proficiency Levels</h3>
          {proficiencySkills.map((skill, index) => (
            <SkillBar
              key={skill.skill}
              skill={skill.skill}
              level={skill.level}
              color={skill.color}
              delay={index * 200}
            />
          ))}
        </div>

        <div ref={skillsRef} className="max-w-6xl mx-auto space-y-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`p-6 sm:p-8 shadow-lg card-3d spotlight transition-all duration-500 ${
                skillsVisible ? 'slide-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-glow pulse-ring"></span>
                <span className="underline-animate">{category.title}</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    className={`${category.color} px-4 py-2 text-sm font-medium transition-all duration-300 cursor-default ripple`}
                    variant="secondary"
                    style={{ animationDelay: `${(index * 0.15) + (skillIndex * 0.05)}s` }}
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
