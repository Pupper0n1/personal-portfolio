import { Card } from "@/components/ui/card";
import { Code, Layers, Wrench, Database } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "TypeScript", "Ruby", "Haskell", "Java", "C/C++", "R", "Golang"]
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: ["React", "Node.js", "Django", "Ruby on Rails", "Tailwind", "LangChain"]
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    skills: ["Git", "Docker", "Kubernetes", "Postman", "AWS", "Microsoft Azure", "Playwright"]
  },
  {
    title: "Libraries",
    icon: Database,
    skills: ["pandas", "NumPy", "Matplotlib", "PyTorch", "Pydantic"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground text-lg">A versatile toolkit for building modern solutions</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-card border-border/50 hover:border-primary/30 transition-all duration-300 animate-slide-up hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-secondary rounded-md text-sm hover:bg-primary/20 hover:scale-110 hover:-translate-y-0.5 transition-all duration-200 cursor-default hover:shadow-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
