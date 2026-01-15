import { Instagram, Music, Apple } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/chico__kane",
      icon: Instagram,
    },
    {
      name: "Loud Army",
      url: "https://app.loud.army/stream/terence?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
      icon: Music,
    },
    {
      name: "Apple Music",
      url: "https://music.apple.com/artist/terence-kane/1602574120",
      icon: Apple,
    },
  ];

  return (
    <footer className="py-16 px-6 bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Cinematic gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Logo - Movie credits style */}
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          CHICO <span className="text-gold">KANE</span>
        </h3>
        <p className="text-sm text-primary-foreground/50 tracking-widest uppercase mb-8">
          Independent • Authentic • Unstoppable
        </p>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-8 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/40 hover:text-gold transition-all duration-300 hover:scale-110"
              aria-label={link.name}
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Copyright - Cinematic end credits */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-xs text-primary-foreground/30 tracking-wide">
            © {new Date().getFullYear()} Chico Kane. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/20 mt-2">
            Toronto, Canada
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
