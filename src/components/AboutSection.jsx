import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
          About <span className="text-cosmic"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-glow mb-3 sm:mb-4">
              Full‑Stack Mobile & Web Engineer — Product-minded
            </h3>

            <p className="text-muted-foreground">
              I build production-ready web and mobile applications with a focus on
              performance, localization, and maintainable architecture. My
              experience spans React, React Native (CLI & Expo), TypeScript,
              Tailwind CSS, Go backends, and Medusa.js e-commerce platforms.
            </p>

            <p className="text-muted-foreground">
              I deliver end-to-end features: ERD-backed API design, atomic UI,
              multi-tenant backend patterns, offline-first local storage
              (MMKV), push notifications (FCM / Notifee), and multilingual
              experiences using i18n. I combine practical engineering with
              AI-assisted workflows to accelerate design-to-code delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/kkh_cv.pdf"
                download="kkh_cv.pdf"
                className="px-6 py-3 rounded-full neon-border text-cosmic hover:text-glow transition-all duration-300 font-medium"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <div className="glassmorphism-card neon-border">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-full glassmorphism">
                  <Code className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base sm:text-lg text-cosmic">Mobile & Native</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    React Native (CLI & Expo), TypeScript, MMKV local storage,
                    push notifications (FCM / Notifee), and mobile-first UX.
                  </p>
                </div>
              </div>
            </div>

            <div className="glassmorphism-card neon-border">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-full glassmorphism">
                  <User className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base sm:text-lg text-cosmic">Full‑Stack & Backend</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Go REST APIs, Medusa.js, Node.js, PostgreSQL, Docker, and
                    token-based authentication for scalable backends.
                  </p>
                </div>
              </div>
            </div>

            <div className="glassmorphism-card neon-border">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-full glassmorphism">
                  <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-base sm:text-lg text-cosmic">Architecture & AI</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    ERD design, Atomic UI, MVP scoping and AI-assisted SDLC
                    workflows (MCP integration, design-to-code acceleration).
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
