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
    <footer className="py-12 px-6 bg-foreground text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo/Name */}
        <h3 className="text-2xl font-bold tracking-tight mb-2">CHICO KANE</h3>
        <p className="text-sm text-primary-foreground/70 mb-6">Independent Artist</p>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-6 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-gold transition-colors"
              aria-label={link.name}
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-6">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Chico Kane. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
