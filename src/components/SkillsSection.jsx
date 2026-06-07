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
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          My <span className="text-cosmic"> Skills</span>
        </h2>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full transition-all duration-300 capitalize font-medium text-sm",
                activeCategory === category
                  ? "cosmic-button text-glow"
                  : "glassmorphism text-foreground/80 hover:text-cosmic hover:border-primary/70"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills grid — compact cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="glassmorphism neon-border rounded-xl px-3 py-3 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_8px_32px_rgba(31,38,135,0.37)]"
            >
              {/* Skill name */}
              <h3 className="font-medium text-xs text-cosmic leading-snug mb-2 line-clamp-2 min-h-[2.5rem]">
                {skill.name}
              </h3>

              {/* Progress bar + percentage inline */}
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-white/10 h-1.5 rounded-full overflow-hidden border border-white/10">
                  <div
                    className="h-full rounded-full animate-[grow_1s_ease-out]"
                    style={{
                      width: skill.level + "%",
                      background:
                        "linear-gradient(90deg, hsl(var(--cosmic-purple)) 0%, hsl(var(--cosmic-blue)) 100%)",
                      boxShadow: "0 0 4px rgba(167, 139, 250, 0.4)",
                    }}
                  />
                </div>
                <span className="text-[10px] text-muted-foreground shrink-0 font-medium">
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
