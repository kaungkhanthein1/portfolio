import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Veteran Tour Guide App",
    description: "A multilingual Southeast Asia tourists web app.The app features token-based authentication, global state with Zustand, dynamic language switching, and reusable custom components.",
    image: "/projects/VeteranBanner.png",
    tags: ["React", "Redux Toolkit", "TailwindCSS", "i18next", "Zustand", "Axios", "React Router", "JWT Auth"],
    demoUrl: "https://vd-demo-11.netlify.app/",
    githubUrl: "https://github.com/kaungkhanthein1/veteran-driver-v1",
  },
  
  {
    id: 2,
    title: "Personal Developer Portfolio",
    description:
    "A space-themed interactive portfolio showcasing skills, experience, and projects. Built using a beautiful React + Tailwind starter template and customized with animated elements, responsive layout, and Markdown-powered project listings.",
    image: "/projects/PortfolioBanner.png",
    tags: ["React", "TailwindCSS", "Framer Motion", "Markdown"],
    demoUrl: "#",
    githubUrl: "https://github.com/kaungkhanthein1/portfolio",
  },

  // {
  //   id: 3,
  //   title: "Beacon Proximity App",
  //   description:
  //   "A mobile app that detects nearby Bluetooth beacon signals and triggers contextual actions based on proximity. Developed as a prototype to explore React Native integration with real-world devices.",
  //   image: "/projects/BeaconBanner.png",
  //   tags: ["React Native", "Expo", "Bluetooth Beacon", "Location API"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },

  {
    id: 4,
    title: "H5 Movie App",
    description: "A mobile-first streaming and social web app with secure API requests, lazy-loaded routes, player/explore pages, search & recommendations, ads with rewards, sharing/invites, and a localized UI. Optimized for WebView with native hooks for a responsive, app-like experience.",
    image: "/projects/H5Banner.png",
    tags: ["React", "Redux Toolkit",  "RTK Query", "React Router", "Tailwind CSS", "i18next", "video-react", "Lottie", "CryptoJS + JSEncrypt/node-forge"],
    demoUrl: "https://h5-movie-app.netlify.app/",
    githubUrl: "https://github.com/kaungkhanthein1/h5",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-cosmic"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group glassmorphism-card overflow-hidden neon-border"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 text-xs font-medium rounded-full glassmorphism border border-white/20 text-cosmic">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-2 text-cosmic">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-cosmic hover:text-glow transition-all duration-300 p-1.5 rounded-lg hover:glassmorphism"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-cosmic hover:text-glow transition-all duration-300 p-1.5 rounded-lg hover:glassmorphism"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
