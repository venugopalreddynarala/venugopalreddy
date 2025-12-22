import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import projectFoodly from "@/assets/project-foodly.jpg";
import projectQuizlio from "@/assets/project-quizlio.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import projectFinance from "@/assets/project-finance.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Food Delivery App UI Design",
      description:
        "Multi-screen mobile application flow with Home, Menu, and Checkout screens. Focused on simplicity, usability, and visual hierarchy using Adobe XD.",
      technologies: ["Adobe XD", "Mobile Design", "UI/UX", "Prototyping"],
      link: "https://xd.adobe.com/view/477dafab-a83a-4403-812f-4e52592e574c-122e/",
      showcase: "Foodly",
      image: projectFoodly,
    },
    {
      title: "Quiz App UI/UX Design",
      description:
        "Engaging Quiz App interface to enhance user learning and participation. Complete user flows with high-fidelity prototypes focusing on clarity and usability.",
      technologies: ["Adobe XD", "User Flow", "Color Psychology", "Micro-interactions"],
      link: "https://xd.adobe.com/view/7a429438-c280-4e78-9c2c-8a55542baa67-2f11/",
      showcase: "Quizlio",
      image: projectQuizlio,
    },
    {
      title: "Portfolio Website UI/UX Design",
      description:
        "Responsive personal portfolio website showcasing design projects and case studies. Clean, modern, and minimal aesthetic with accessibility principles.",
      technologies: ["Figma", "Responsive Design", "Accessibility", "Typography"],
      link: "https://www.figma.com/design/9eS3lNB2Rt2OcL0ucwM7SM/Untitled?node-id=0-1&t=1PWDVyztuHpCYtrZ-1",
      showcase: "Portfolio",
      image: projectPortfolio,
    },
    {
      title: "Personal Finance Tracker Mobile App",
      description:
        "Mobile application helping users monitor income, expenses, and savings. Conducted user research to identify pain points and crafted intuitive navigation.",
      technologies: ["Adobe XD", "User Research", "Design Systems", "Mobile UX"],
      link: "https://xd.adobe.com/view/24cccdb1-4196-4906-ad93-effc193d1ac2-719f/",
      showcase: "Finance Tracker",
      image: projectFinance,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Showcasing my passion for creating delightful user experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {project.showcase}
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="default" size="sm" className="group/btn" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
