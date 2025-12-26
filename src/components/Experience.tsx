import { Card } from "@/components/ui/card";
import { Briefcase, Award, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Experience = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: workRef, isVisible: workVisible } = useScrollAnimation();
  const { ref: certRef, isVisible: certVisible } = useScrollAnimation();
  const { ref: achieveRef, isVisible: achieveVisible } = useScrollAnimation();

  const workExperience = {
    title: "UI/UX Design Intern",
    company: "LearnFlu",
    type: "Remote",
    period: "2023",
    responsibilities: [
      "Worked on real-world UI design projects focused on responsive layouts and modern interface patterns",
      "Enhanced visual consistency and improved user flows for client websites using Adobe XD",
      "Collaborated with design team on design handoff workflows using Zeplin and GitHub",
      "Gained hands-on experience in smooth development integration processes",
    ],
  };

  const certificates = [
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Great Learning",
      icon: Award,
    },
    {
      title: "Adobe XD for UI/UX Design",
      issuer: "Great Learning",
      icon: Award,
    },
    {
      title: "Adobe XD Essentials for Beginners",
      issuer: "Simplilearn SkillUp",
      icon: Award,
    },
    {
      title: "UX Design Short Course",
      issuer: "CareerFoundry",
      icon: Award,
    },
  ];

  const achievements = [
    "Created multiple UI/UX Designs",
    "Organized college-level UI/UX workshops and design challenges",
    "Participated in UX hackathons and interface redesign competitions",
    "Fluent in English, Telugu, Tamil",
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-700 ${
            titleVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full line-animated"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Work Experience */}
          <Card 
            ref={workRef}
            className={`p-6 sm:p-8 shadow-lg hover-lift transition-all duration-500 ${
              workVisible ? 'animate-slide-right' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center animate-glow group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {workExperience.title}
                    </h3>
                    <p className="text-primary font-medium">
                      {workExperience.company}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="hover:scale-105 transition-transform">{workExperience.type}</Badge>
                    <Badge variant="outline" className="hover:scale-105 transition-transform">{workExperience.period}</Badge>
                  </div>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  {workExperience.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <span className="text-primary mt-1.5 animate-bounce-subtle">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          {/* Certificates */}
          <div ref={certRef}>
            <h3 className={`text-2xl font-bold text-foreground mb-6 transition-all duration-700 ${
              certVisible ? 'animate-slide-up' : 'opacity-0'
            }`}>
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificates.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <Card
                    key={index}
                    className={`p-6 shadow-md hover-lift group transition-all duration-500 ${
                      certVisible ? 'animate-scale-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Additional Achievements */}
          <Card 
            ref={achieveRef}
            className={`p-6 sm:p-8 shadow-lg hover-lift transition-all duration-500 ${
              achieveVisible ? 'animate-slide-left' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-xl font-bold text-foreground mb-4">
              Additional Achievements
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-2 text-muted-foreground group ${
                    achieveVisible ? 'animate-slide-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-foreground transition-colors">{achievement}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
