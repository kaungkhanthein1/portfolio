import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-cosmic"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I&apos;m always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <a
                    href="mailto:kaungkhantheinkkh2003@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                  kaungkhantheinkkh2003@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <a
                    href="tel:0378320387"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    0378320387
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Khuê Mỹ Dong, Đà Nẵng, Vietnam
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/kaung-khant-536521297/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-cosmic hover:text-glow transition-all duration-300 p-2 rounded-lg hover:glassmorphism"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://www.facebook.com/share/19Z9kCiL44/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-cosmic hover:text-glow transition-all duration-300 p-2 rounded-lg hover:glassmorphism"
                >
                  <Facebook size={24} />
                </a>
                <a 
                  href="https://github.com/kaungkhanthein1" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-cosmic hover:text-glow transition-all duration-300 p-2 rounded-lg hover:glassmorphism"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>

          <form
            className="glassmorphism-card neon-border"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6 text-cosmic"> Send a Message</h3>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md glassmorphism neon-border focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name.."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md glassmorphism neon-border focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Email.."
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md glassmorphism neon-border focus:outline-none focus:ring-2 focus:ring-primary resize-none h-32"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
