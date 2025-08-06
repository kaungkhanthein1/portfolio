import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },

  // Tools
  { name: "Git/GitHub", level: 80, category: "tools" },
  { name: "Docker", level: 50, category: "tools" },
  { name: "Figma", level: 80, category: "tools" },
  { name: "Cursor Pro", level: 90, category: "tools" },
  { name: "VS Code", level: 85, category: "tools" },
];

const categories = ["all", "frontend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-cosmic"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-3 rounded-full transition-all duration-300 capitalize font-medium",
                activeCategory === category
                  ? "cosmic-button text-glow"
                  : "glassmorphism text-foreground/80 hover:text-cosmic hover:border-primary/70 hover:shadow-[0_0_8px_rgba(167,139,250,0.4)]"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="glassmorphism-card neon-border"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg text-cosmic"> {skill.name}</h3>
              </div>
              <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden border border-white/20">
                <div
                  className="h-3 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ 
                    width: skill.level + "%",
                    background: 'linear-gradient(90deg, hsl(var(--cosmic-purple)) 0%, hsl(var(--cosmic-blue)) 100%)',
                    boxShadow: '0 0 10px rgba(167, 139, 250, 0.5)'
                  }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
