import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="py-8 px-4 text-center border-t border-border/50">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Wassem "Wilbur" Elbouni. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default Index;
