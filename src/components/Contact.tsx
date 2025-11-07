import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-3xl mx-auto text-center">
        <div className="animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-lg mb-12">
            I'm always interested in hearing about new opportunities and interesting projects
          </p>
          
          <Card className="p-8 bg-card border-border/50 hover:border-primary/20 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-6">
              <a 
                href="mailto:elbouni.wassem@gmail.com"
                className="flex items-center gap-3 p-4 rounded-lg bg-secondary hover:bg-primary/20 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                <Mail className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium group-hover:text-primary transition-colors">elbouni.wassem@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="tel:825-561-6645"
                className="flex items-center gap-3 p-4 rounded-lg bg-secondary hover:bg-primary/20 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                <Phone className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium group-hover:text-primary transition-colors">(825) 561-6645</p>
                </div>
              </a>
              
              <a 
                href="https://github.com/Pupper0n1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-secondary hover:bg-primary/20 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                <Github className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="font-medium group-hover:text-primary transition-colors">Pupper0n1</p>
                </div>
              </a>
              
              <a 
                href="https://linkedin.com/in/wilbur-elbouni"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-secondary hover:bg-primary/20 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                <Linkedin className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium group-hover:text-primary transition-colors">wilbur-elbouni</p>
                </div>
              </a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-muted-foreground mb-4">Currently pursuing</p>
              <p className="font-medium">Honours Bachelor of Science in Computer Science</p>
              <p className="text-sm text-muted-foreground">Minor in Data Science • University of Calgary</p>
              <p className="text-sm text-primary font-semibold mt-2">GPA: 3.8/4.0</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
