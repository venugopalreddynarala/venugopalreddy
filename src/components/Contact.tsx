import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { toast } = useToast();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "naralavenugopalreddy@gmail.com",
      link: "mailto:naralavenugopalreddy@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9121499852",
      link: "tel:+919121499852",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Andhra Pradesh, India",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-700 ${
            titleVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full line-animated"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div ref={contentRef} className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className={`space-y-6 transition-all duration-700 ${
            contentVisible ? 'animate-slide-right' : 'opacity-0 -translate-x-10'
          }`}>
            <Card className="p-6 sm:p-8 shadow-lg hover-lift">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex items-start gap-4 group animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {item.label}
                        </p>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-foreground font-medium hover:text-primary transition-colors story-link"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="p-6 sm:p-8 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5 hover-lift hover-glow">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-primary animate-bounce-subtle" />
                <h3 className="text-xl font-bold text-foreground">
                  Open to Opportunities
                </h3>
              </div>
              <p className="text-muted-foreground">
                I'm currently exploring new opportunities in UI/UX design and would
                love to hear about exciting projects or roles where I can contribute
                my skills and passion for creating great user experiences.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className={`p-6 sm:p-8 shadow-lg hover-lift transition-all duration-700 ${
            contentVisible ? 'animate-slide-left' : 'opacity-0 translate-x-10'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="animate-slide-up stagger-1">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="transition-all duration-300 focus:scale-[1.02] hover:border-primary/50"
                  required
                />
              </div>
              <div className="animate-slide-up stagger-2">
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="transition-all duration-300 focus:scale-[1.02] hover:border-primary/50"
                  required
                />
              </div>
              <div className="animate-slide-up stagger-3">
                <Input
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="transition-all duration-300 focus:scale-[1.02] hover:border-primary/50"
                  required
                />
              </div>
              <div className="animate-slide-up stagger-4">
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={6}
                  className="transition-all duration-300 focus:scale-[1.02] hover:border-primary/50"
                  required
                />
              </div>
              <Button type="submit" className="w-full group hover-glow animate-slide-up stagger-5" size="lg">
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
