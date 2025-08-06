import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <div className="flex justify-center lg:justify-start opacity-0 animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden neon-border bg-gradient-to-br from-cosmic-purple to-cosmic-blue p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <img
                    src="/KKH.jpg"
                    alt="Kaung Khant Hein"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
              {/* Floating elements around photo */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-cosmic-purple/20 blur-xl animate-pulse-subtle"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-cosmic-blue/20 blur-xl animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in-delay-1"> Hi, I&apos;m</span>
              <br />
              <span className="text-cosmic opacity-0 animate-fade-in-delay-2 whitespace-nowrap">
                Kaung Khant Hein
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-4">
              I create stellar web experiences with modern technologies.
              Specializing in front-end development, I build interfaces that are
              both beautiful and functional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
              <a href="#contact" className="px-6 py-3 rounded-full neon-border text-cosmic hover:text-glow transition-all duration-300 font-medium">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
