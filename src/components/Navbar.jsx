import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-500",
        isScrolled 
          ? "py-2 glassmorphism border-b border-white/10 shadow-[0_8px_32px_rgba(31,38,135,0.37)]" 
          : "py-2 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-cosmic font-bold"> KaungKhant&apos;s </span>
            <span className="text-glow ml-1">Portfolio</span>
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-cosmic hover:text-glow transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/5"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile nav */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        {isMenuOpen && (
          <div
            className="fixed inset-0 md:hidden"
            style={{ 
              zIndex: 45,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          />
        )}
        <div
          className={cn(
            "fixed inset-0 flex flex-col items-center justify-center",
            "transition-all duration-500 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
          style={{ zIndex: 46 }}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-cosmic hover:text-glow transition-all duration-300 px-6 py-3 rounded-lg hover:glassmorphism-card"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
