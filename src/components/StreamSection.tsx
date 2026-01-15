import { Music, Apple, Instagram, Play } from "lucide-react";

const StreamSection = () => {
  const links = [
    {
      name: "Stream Now",
      subtitle: "Loud Army",
      url: "https://app.loud.army/stream/terence?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
      icon: Play,
      primary: true,
    },
    {
      name: "Apple Music",
      subtitle: "Listen",
      url: "https://music.apple.com/artist/terence-kane/1602574120",
      icon: Apple,
      primary: false,
    },
    {
      name: "Instagram",
      subtitle: "Follow",
      url: "https://www.instagram.com/chico__kane",
      icon: Instagram,
      primary: false,
    },
  ];

  return (
    <section id="music" className="py-32 px-6 bg-background relative">
      {/* Cinematic lighting effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-gold/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Section header - Movie credits style */}
        <span className="text-gold text-xs tracking-[0.3em] uppercase font-light">Connect</span>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4">
          Join the Journey
        </h2>
        <p className="text-muted-foreground mb-16 max-w-md mx-auto">
          Support the movement. Stream the music. Stay connected.
        </p>

        {/* Links - Cinematic button grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-8 rounded-lg border transition-all duration-500 ${
                link.primary
                  ? "bg-gold/10 border-gold hover:bg-gold"
                  : "bg-secondary border-border hover:border-gold hover:bg-gold/5"
              }`}
            >
              <link.icon className={`w-8 h-8 mx-auto mb-4 transition-all duration-300 group-hover:scale-110 ${
                link.primary ? "text-gold group-hover:text-foreground" : "text-muted-foreground group-hover:text-gold"
              }`} />
              <p className={`font-semibold transition-colors ${
                link.primary ? "text-foreground" : "text-foreground"
              }`}>{link.name}</p>
              <p className={`text-sm transition-colors ${
                link.primary ? "text-muted-foreground group-hover:text-foreground/70" : "text-muted-foreground"
              }`}>{link.subtitle}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StreamSection;
