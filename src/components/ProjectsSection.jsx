import { useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [

  {
    id: 1,
    title: "NextBite — Multi-Tenant QSR Platform",
    description:
      "A white-label Quick Service Restaurant platform built for scalability across multiple restaurant brands. Features a multi-tenant Go REST API, brand-specific theming, and AI-powered SDLC — converting business flows into ERD, Figma UI, and production-ready code. Built with React Native Expo for seamless cross-brand ordering experiences.",
    image: "/projects/NextBiteBanner.jpg",
    tags: ["Go", "React Native", "Expo", "TypeScript", "PostgreSQL", "Docker", "MCP", "Figma", "REST API", "Multi-Tenant"],
    demoUrl: "#",
    githubUrl: "https://github.com/kaungkhanthein1/nextbite",
  },

   {
  id: 3,
  title: "Zawgyi Mythic Run — Multiplayer Browser Game",
  description:
  "A 2D/3D side-scrolling multiplayer game featuring a Myanmar alchemist with Levitate, Staff Strike, and Alchemic Pill abilities. Features 5 modes, including Treasure Hunt, Flying Zawgyi, Hidden Souls, and a 3D Alchemist's Race. Players connect smartphones as gamepads via QR, relaying real-time inputs through Socket.IO. Built with Phaser 3, Babylon.js, and Node.js/Express with bilingual support.",
  image: "/projects/ZawgyiBanner.png",
  tags: ["Phaser 3", "Babylon.js", "Socket.IO", "Node.js", "Express", "QR Controller", "Multiplayer", "2D/3D", "Mobile Gamepad"],
  demoUrl: "#",
  githubUrl: "https://github.com/kaungkhanthein1/zawgyi-mythic-run",
  },

  {
    id: 2,
    title: "Techzy — Full-Stack E-Commerce App",
    description:
      "An end-to-end mobile e-commerce platform built with an AI-powered SDLC: from business analysis and ERD design to atomic UI architecture and production deployment. Features push notifications via Firebase Cloud Messaging, persistent wishlists with MMKV, Myanmar & English i18n, and dark/light/system theming — all powered by a self-hosted Medusa.js backend in Docker.",
    image: "/projects/TechzyBanner.jpg",
    tags: ["React Native", "TypeScript", "Medusa.js", "PostgreSQL", "Docker", "Firebase", "FCM", "Notifee", "MMKV", "i18n", "Go", "MCP"],
    demoUrl: "#",
    githubUrl: "https://github.com/kaungkhanthein1/techzy",
  },
  
  {
    id: 4,
    title: "Veteran Tour Guide App",
    description: "A multilingual Southeast Asia tourists web app.The app features token-based authentication, global state with Zustand, dynamic language switching, and reusable custom components.",
    image: "/projects/VeteranBanner.png",
    tags: ["React", "Redux Toolkit", "TailwindCSS", "i18next", "Zustand", "Axios", "React Router", "JWT Auth"],
    demoUrl: "https://vd-demo-11.netlify.app/",
    githubUrl: "https://github.com/kaungkhanthein1/veteran-driver-v1",
  },
  
  {
    id: 5,
    title: "Personal Developer Portfolio",
    description:
    "A space-themed interactive portfolio showcasing skills, experience, and projects. Built using a beautiful React + Tailwind starter template and customized with animated elements, responsive layout, and Markdown-powered project listings.",
    image: "/projects/PortfolioBanner.png",
    tags: ["React", "TailwindCSS", "Framer Motion", "Markdown"],
    demoUrl: "#",
    githubUrl: "https://github.com/kaungkhanthein1/portfolio",
  },


  // {
  //   id: 6,
  //   title: "Beacon Proximity App",
  //   description:
  //   "A mobile app that detects nearby Bluetooth beacon signals and triggers contextual actions based on proximity. Developed as a prototype to explore React Native integration with real-world devices.",
  //   image: "/projects/BeaconBanner.png",
  //   tags: ["React Native", "Expo", "Bluetooth Beacon", "Location API"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },

  // {
  //   id: 7,
  //   title: "H5 Movie App",
  //   description: "A mobile-first streaming and social web app with secure API requests, lazy-loaded routes, player/explore pages, search & recommendations, ads with rewards, sharing/invites, and a localized UI. Optimized for WebView with native hooks for a responsive, app-like experience.",
  //   image: "/projects/H5Banner.png",
  //   tags: ["React", "Redux Toolkit",  "RTK Query", "React Router", "Tailwind CSS", "i18next", "video-react", "Lottie", "CryptoJS + JSEncrypt/node-forge"],
  //   demoUrl: "https://h5-movie-project.netlify.app/",
  //   githubUrl: "https://github.com/kaungkhanthein1/h5",
  // },
];

export const ProjectsSection = () => {
  const [expandedIds, setExpandedIds] = useState({});

  const toggleDescription = (id) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="projects" className="py-6 px-4 lg:px-8 relative">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-cosmic"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group glassmorphism-card overflow-hidden neon-border"
            >
              <div className="h-40 sm:h-48 md:h-52 lg:h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4 lg:p-3">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs font-medium rounded-full glassmorphism border border-white/20 text-cosmic">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg md:text-xl font-semibold mb-2 text-cosmic">{project.title}</h3>
                <p
                  className={`text-muted-foreground text-sm md:text-sm mb-1 leading-relaxed ${
                    expandedIds[project.id] ? "" : "line-clamp-4 sm:line-clamp-none"
                  }`}
                >
                  {project.description}
                </p>
                {project.description.length > 200 && (
                  <button
                    type="button"
                    onClick={() => toggleDescription(project.id)}
                    className="sm:hidden text-xs font-medium text-cosmic hover:text-glow transition-all duration-300 mb-3"
                  >
                    {expandedIds[project.id] ? "Show less" : "Read more"}
                  </button>
                )}
                <div className="hidden sm:block mb-3" />
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
            href="https://github.com/kaungkhanthein1"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
