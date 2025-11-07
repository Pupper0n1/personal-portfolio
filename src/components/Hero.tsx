import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(199_89%_48%/0.1),transparent)]" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            Software Developer
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
          Wassem "Wilbur" Elbouni
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Building AI-powered solutions at IBM Skills Network. Passionate about creating scalable systems that impact millions of learners worldwide.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => scrollToSection("contact")}
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/30 hover:bg-primary/10"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </Button>
        </div>
        
        <div className="flex gap-4 justify-center">
          <a 
            href="https://github.com/Pupper0n1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a 
            href="https://linkedin.com/in/wilbur-elbouni" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a 
            href="mailto:elbouni.wassem@gmail.com"
            className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection("experience")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="h-6 w-6 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
