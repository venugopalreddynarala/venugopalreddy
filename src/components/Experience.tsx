import { Card } from "@/components/ui/card";
import { Briefcase, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience & Achievements
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Work Experience */}
          <Card className="p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
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
                    <Badge variant="secondary">{workExperience.type}</Badge>
                    <Badge variant="outline">{workExperience.period}</Badge>
                  </div>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  {workExperience.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          {/* Certificates */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 animate-fade-in">
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificates.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="w-6 h-6 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
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
          <Card className="p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Additional Achievements
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-muted-foreground"
                >
                  <span className="text-primary mt-1">✓</span>
                  <span>{achievement}</span>
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
