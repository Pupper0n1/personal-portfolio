import { Card } from "@/components/ui/card";
import { Briefcase, Award } from "lucide-react";

const experiences = [
  {
    title: "Software Developer Student-on-Call",
    company: "IBM Skills Network",
    location: "Calgary, AB",
    period: "Aug. 2026 – Present",
    achievements: [
      "Designed and led development of an AI-powered WYSIWYG markdown editor, modernizing the authoring experience for lab instructions",
      "Built and managed a scalable support pipeline now used by millions of learners worldwide",
      "Created and delivered a workshop for IBM TechXchange 2025, showcasing innovative uses of AI in education"
    ]
  },
  {
    title: "Software Developer Intern",
    company: "IBM Skills Network",
    location: "Calgary, AB",
    period: "May 2024 – Aug. 2026",
    achievements: [
      "Spearheaded the development of an internal AI-powered project manager with Jira and Slack integration, reducing meeting time by up to 50%",
      "Created an AI-powered translation system for 1,800+ courses, enhancing accessibility and global reach",
      "Implemented a robust support pipeline achieving 99.9% uptime across services",
      "Developed and delivered a workshop that earned the Best Rated Session award at IBM's TechXChange 2024"
    ]
  },
  {
    title: "Project Manager",
    company: "TechStart, University of Calgary",
    location: "Calgary, AB",
    period: "July 2023 – May 2024",
    achievements: [
      "Led an 8-member team developing a full-stack social media mobile app using React Native, FastAPI, PostgreSQL, Redis, and Docker",
      "Managed feature delivery timelines and code review cycles, ensuring consistent quality and progress"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg">Building impactful solutions at scale</p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative animate-slide-up group" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-primary/50" />
                
                <Card className="ml-0 md:ml-20 p-6 bg-card hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-border/50 hover:-translate-x-2 hover:border-primary/30">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.location} • {exp.period}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 ml-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        {/* Achievements */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 group cursor-default">
            <Award className="h-8 w-8 text-primary mb-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
            <h3 className="font-bold text-lg mb-2">Canada CIO Awards Winner</h3>
            <p className="text-sm text-muted-foreground mb-2">November 2025</p>
            <p className="text-xs text-muted-foreground italic">Learn in your own language</p>
            <a 
              href="https://event.idc.com/wp-content/uploads/2025/11/CIO-Awards-Canada-Winning-Projects-2025.pdf?RefId=LI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline mt-2 inline-block"
            >
              View Award →
            </a>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 group cursor-default">
            <Award className="h-8 w-8 text-primary mb-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
            <h3 className="font-bold text-lg mb-2">IBM TechXchange Best Rated Session</h3>
            <p className="text-sm text-muted-foreground">October 2024</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 group cursor-default">
            <Award className="h-8 w-8 text-primary mb-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
            <h3 className="font-bold text-lg mb-2">Microsoft Certified: Azure Cloud Practitioner</h3>
            <p className="text-sm text-muted-foreground">May 2023</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
