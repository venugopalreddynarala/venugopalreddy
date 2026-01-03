import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Palette, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import projectFoodly from "@/assets/project-foodly.jpg";
import projectQuizlio from "@/assets/project-quizlio.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import projectFinance from "@/assets/project-finance.jpg";

const Projects = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();

  // UI/UX Design Projects
  const uiuxProjects = [
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

  // Technical Projects
  const technicalProjects = [
    {
      title: "Inventory Management System",
      description:
        "Created a full-stack web application for managing inventory, users, and stock data with complete CRUD operations and role-based access control. Designed a responsive dashboard for real-time updates and better usability.",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL", "Bootstrap", "PHP"],
      link: "#",
      showcase: "Web Application",
      image: projectFoodly,
    },
    {
      title: "AI-Powered Smart Cursor Control System",
      description:
        "Built an AI-based assistive system enabling hands-free computer control through head and eye movement tracking. Used computer vision and facial landmark detection to translate gestures into cursor actions for differently-abled users.",
      technologies: ["Python", "OpenCV", "MediaPipe", "CNN"],
      link: "#",
      showcase: "Assistive Technology",
      image: projectQuizlio,
    },
    {
      title: "AI-Powered X-Ray Visualization for Pneumonia Detection",
      description:
        "Developed a deep learning model using CNN to detect pneumonia from chest X-ray images and integrated GradCAM explainable AI for visual interpretation of predictions. Built a Flask web app for real-time image uploads and diagnostic visualization.",
      technologies: ["TensorFlow", "Keras", "Flask", "Grad-CAM", "NumPy", "Matplotlib"],
      link: "#",
      showcase: "Healthcare AI",
      image: projectPortfolio,
    },
    {
      title: "Intelligent Payment Fraud Detection",
      description:
        "Developed a machine learning model to detect and prevent fraudulent online transactions using classification algorithms. Performed data preprocessing, feature selection, and model evaluation to enhance detection accuracy and reduce false positives.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      link: "#",
      showcase: "Machine Learning",
      image: projectFinance,
    },
  ];

  const [activeTab, setActiveTab] = useState<'uiux' | 'technical'>('uiux');
  const projects = activeTab === 'uiux' ? uiuxProjects : technicalProjects;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-700 ${
            titleVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full line-animated"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Showcasing my passion for creating delightful user experiences and technical solutions
          </p>
          
          {/* Tab Switcher */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant={activeTab === 'uiux' ? 'default' : 'outline'}
              onClick={() => setActiveTab('uiux')}
              className="gap-2 transition-all duration-300"
            >
              <Palette className="w-4 h-4" />
              UI/UX Design
            </Button>
            <Button
              variant={activeTab === 'technical' ? 'default' : 'outline'}
              onClick={() => setActiveTab('technical')}
              className="gap-2 transition-all duration-300"
            >
              <Code className="w-4 h-4" />
              Technical Projects
            </Button>
          </div>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-6 sm:p-8 shadow-lg card-3d spotlight group overflow-hidden transition-all duration-500 ${
                projectsVisible ? 'slide-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg mb-4 relative image-reveal">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 underline-animate">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3 animate-shimmer inline-block px-2 py-1 rounded">
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
                      className="bg-primary/10 text-primary hover:bg-primary/20 elastic-scale transition-all duration-300 ripple"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="default" size="sm" className="group/btn magnetic-btn glow-border ripple" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
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
