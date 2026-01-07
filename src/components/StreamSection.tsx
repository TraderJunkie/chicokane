import { Music, Apple, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const StreamSection = () => {
  const links = [
    {
      name: "Listen on Loud Army",
      url: "https://app.loud.army/stream/terence?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
      icon: Music,
      primary: true,
    },
    {
      name: "Apple Music",
      url: "https://music.apple.com/artist/terence-kane/1602574120",
      icon: Apple,
      primary: false,
    },
    {
      name: "Follow on Instagram",
      url: "https://www.instagram.com/chico__kane",
      icon: Instagram,
      primary: false,
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        {/* Section header */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Stream & Connect</h2>
        <div className="w-16 h-1 bg-gold mx-auto mb-4" />
        <p className="text-muted-foreground mb-12">
          Support the movement. Stream the music. Stay connected.
        </p>

        {/* Link buttons */}
        <div className="space-y-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                variant="outline"
                size="lg"
                className={`w-full h-16 text-lg font-medium transition-all duration-300 ${
                  link.primary
                    ? "bg-gold text-foreground border-gold hover:bg-gold-dark hover:border-gold-dark hover:text-foreground"
                    : "bg-background text-foreground border-border hover:bg-gold hover:border-gold hover:text-foreground"
                }`}
              >
                <link.icon className="w-5 h-5 mr-3" />
                {link.name}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StreamSection;
