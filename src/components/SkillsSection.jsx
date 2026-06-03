import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Mobile
  { name: "React Native (CLI & Expo)", level: 88, category: "mobile" },
  { name: "TypeScript", level: 85, category: "mobile" },
  { name: "i18n", level: 80, category: "mobile" },
  { name: "MMKV", level: 75, category: "mobile" },
  { name: "Notifee", level: 70, category: "mobile" },
  { name: "Firebase Cloud Messaging", level: 80, category: "mobile" },

  // Frontend
  { name: "React 18", level: 92, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 90, category: "frontend" },
  { name: "TypeScript", level: 88, category: "frontend" },
  { name: "Next.js", level: 82, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "SCSS / CSS", level: 85, category: "frontend" },
  { name: "HTML5", level: 95, category: "frontend" },
  { name: "React Hook Form", level: 78, category: "frontend" },
  { name: "Framer Motion", level: 80, category: "frontend" },

  // Backend
  { name: "Go (Golang) REST APIs", level: 80, category: "backend" },
  { name: "Medusa.js", level: 72, category: "backend" },
  { name: "Node.js", level: 82, category: "backend" },
  { name: "PostgreSQL", level: 78, category: "backend" },
  { name: "Docker", level: 70, category: "backend" },

  // State & Data
  { name: "Redux Toolkit", level: 86, category: "state" },
  { name: "Zustand", level: 80, category: "state" },
  { name: "React Query", level: 82, category: "state" },
  { name: "Axios", level: 84, category: "state" },
  { name: "MMKV local storage", level: 75, category: "state" },

  // Architecture
  { name: "ERD Design", level: 78, category: "architecture" },
  { name: "Atomic Design", level: 80, category: "architecture" },
  { name: "MVP Feature Scoping", level: 82, category: "architecture" },
  { name: "AI-powered SDLC", level: 76, category: "architecture" },

  // AI & Tools
  { name: "MCP Server Integration", level: 72, category: "tools" },
  { name: "AI-assisted Workflows", level: 78, category: "tools" },
  { name: "Cursor", level: 85, category: "tools" },
  { name: "Figma", level: 80, category: "tools" },
  { name: "VS Code", level: 88, category: "tools" },
  { name: "Git / GitHub", level: 86, category: "tools" },
  { name: "Vite", level: 80, category: "tools" },
  { name: "ESLint", level: 78, category: "tools" },

  // Testing
  { name: "React Testing Library", level: 72, category: "testing" },
  { name: "Cypress", level: 70, category: "testing" },
  { name: "Real-device QA", level: 68, category: "testing" },
];

const categories = [
  "all",
  "mobile",
  "frontend",
  "backend",
  "state",
  "architecture",
  "tools",
  "testing",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-12 px-4 relative bg-secondary/30">
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
                  : "glassmorphism text-foreground/80 hover:text-cosmic hover:border-primary/70"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredSkills.map((skill, key) => (
            <div key={key} className="glassmorphism-card neon-border">
              <div className="text-left mb-4">
                <h3 className="font-medium text-sm text-cosmic">{skill.name}</h3>
              </div>

              <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden border border-white/20">
                <div
                  className="h-2 rounded-full origin-left animate-[grow_1s_ease-out]"
                  style={{
                    width: skill.level + "%",
                    background:
                      "linear-gradient(90deg, hsl(var(--cosmic-purple)) 0%, hsl(var(--cosmic-blue)) 100%)",
                    boxShadow: "0 0 6px rgba(167, 139, 250, 0.35)",
                  }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-xs text-muted-foreground">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
