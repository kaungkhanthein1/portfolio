import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-cosmic"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-glow mb-4">
               Aspiring Frontend Developer & Creative Tech Explorer
            </h3>

            <p className="text-muted-foreground">
            With hands-on experience building real-world applications, 
            I specialize in crafting responsive, multilingual, 
            and user-friendly web and mobile interfaces 
            using modern frameworks like React and React Native.
            My journey started with data entry and app content management,
            evolved through mentorship from a senior full-stack developer, 
            and led to my role as a front-end developer building tourism apps 
            that support local discovery across Southeast Asia.

            </p>

            <p className="text-muted-foreground">
            I thrive on clean design, reusable code, and constant learning — currently 
            focused on React, Zustand, Tailwind CSS, and API integrations.

            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/KKH's-resume.pdf"
                download="KKH's-resume.pdf"
                className="px-6 py-3 rounded-full neon-border text-cosmic hover:text-glow transition-all duration-300 font-medium"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="glassmorphism-card neon-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full glassmorphism">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-cosmic">Frontend Development</h4>
                  <p className="text-muted-foreground">
                  Building responsive web interfaces using React, Tailwind, 
                  and component-based architecture for clean, scalable code.
                  </p>
                </div>
              </div>
            </div>
            <div className="glassmorphism-card neon-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full glassmorphism">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-cosmic">Multilingual UI Integration</h4>
                  <p className="text-muted-foreground">
                  Creating dynamic language support with i18next and 
                  translation files for Southeast Asian tourism audiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="glassmorphism-card neon-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full glassmorphism">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg text-cosmic">API Integration</h4>
                  <p className="text-muted-foreground">
                  Integrating REST APIs using Axios and React Query with support for loading states, 
                  error handling, and token-based auth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
