import { Apple, Instagram, Play } from "lucide-react";

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
      url: "https://www.instagram.com/chico__kane?igsh=Mjl5a20yanIwbXIy",
      icon: Instagram,
      primary: false,
    },
  ];

  return (
    <section id="music" className="py-32 px-6 bg-background relative">
      {/* Cinematic lighting effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-gold/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header - Movie credits style */}
        <div className="text-center mb-16">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-light">Listen</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4">
            Play Now
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Stream the music everywhere
          </p>
        </div>

        {/* Streaming Links */}
        <div className="grid md:grid-cols-3 gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-6 rounded-lg border transition-all duration-500 ${
                link.primary
                  ? "bg-gold/10 border-gold hover:bg-gold"
                  : "bg-secondary border-border hover:border-gold hover:bg-gold/5"
              }`}
            >
              <link.icon className={`w-6 h-6 mx-auto mb-3 transition-all duration-300 group-hover:scale-110 ${
                link.primary ? "text-gold group-hover:text-foreground" : "text-muted-foreground group-hover:text-gold"
              }`} />
              <p className="font-semibold text-foreground text-sm">{link.name}</p>
              <p className="text-xs text-muted-foreground">{link.subtitle}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StreamSection;
