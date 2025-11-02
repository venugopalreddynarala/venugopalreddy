import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in C.S.E (AI & DS)",
      institution: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology",
      period: "2022 – Present",
      grade: "CGPA: 8.0",
      status: "Current",
    },
    {
      degree: "Board of Intermediate Education",
      institution: "Chaitanya Junior College, Andhra Pradesh",
      period: "2020 – 2022",
      grade: "Percentage: 77%",
      status: "Completed",
    },
    {
      degree: "Board of Secondary Education",
      institution: "All Saints English Medium School, Andhra Pradesh",
      period: "2019 – 2020",
      grade: "Percentage: 92.6%",
      status: "Completed",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Academic journey and qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                    <Badge
                      variant={edu.status === "Current" ? "default" : "secondary"}
                      className="self-start"
                    >
                      {edu.status}
                    </Badge>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-3 text-muted-foreground">
                    <span className="text-sm">{edu.period}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="text-sm font-medium text-foreground">
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
