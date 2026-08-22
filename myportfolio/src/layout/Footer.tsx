import { Github, Linkedin, Mail } from "lucide-react";
import { MediumIcon } from "@/components/MediumIcon";

const socialLinks = [
  { icon: Github, href: "https://github.com/Sandu-hb", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sanduni-bandara-123002306/", label: "LinkedIn" },
  { icon: MediumIcon, href: "https://medium.com/@sadunibandara1129", label: "Medium" },
  { icon: Mail, href: "mailto:bandarasanduni69@gmail.com", label: "Email" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border/40">
          {/* Logo */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              SHb<span className="text-primary">.</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Centered Copyright */}
        <div className="pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Sanduni Bandara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};