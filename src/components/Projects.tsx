import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "Jira Slack Assistant",
    description: "Built a Slack application that reminds users about Jira issues with outdated or missing dates, helping teams maintain sprint accuracy. Integrated interactive Slack modals and message shortcuts to let users update issue fields directly within Slack.",
    tech: ["Node.js", "Slack API", "Express", "TypeScript", "PostgreSQL"],
    highlights: [
      "Optimized app home generation by caching data, reducing load time by 40%",
      "Real-time status updates from Jira's REST API",
      "Interactive modals for seamless issue management"
    ],
    period: "Jan 2024 – Present"
  },
  {
    title: "Time Off Scheduler",
    description: "Developed a web application to streamline time-off requests and shift scheduling for store employees. Implemented role-based access control for managers and staff to approve, modify, and view requests.",
    tech: ["Django", "Bootstrap", "PostgreSQL"],
    highlights: [
      "Intuitive Bootstrap-based interface for mobile and desktop",
      "Role-based access control system",
      "Reduced scheduling conflicts through automated coordination"
    ],
    period: "Sept 2021 – Apr 2022"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">Solving real problems with innovative solutions</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 border-border/50 group animate-slide-up hover:-translate-y-2 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground">{project.period}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start">
                    <span className="text-primary mr-2">→</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="bg-secondary/50 hover:bg-primary/20 hover:scale-105 transition-all duration-200 cursor-default">
                    {tech}
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

export default Projects;
