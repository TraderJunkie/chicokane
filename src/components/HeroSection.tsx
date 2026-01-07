import { Music } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-background">
      <div className="text-center max-w-4xl mx-auto">
        {/* Gold accent line */}
        <div className="w-24 h-1 bg-gold mx-auto mb-8" />
        
        {/* Artist name */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-foreground mb-6">
          CHICO KANE
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide mb-8">
          Raw Expression. Reflective Lyrics. Authentic Storytelling.
        </p>
        
        {/* Gold accent icon */}
        <div className="flex items-center justify-center gap-3 text-gold">
          <Music className="w-6 h-6" />
          <span className="text-sm font-medium tracking-widest uppercase">Independent Hip-Hop & R&B Artist</span>
          <Music className="w-6 h-6" />
        </div>
        
        {/* Bottom gold line */}
        <div className="w-24 h-1 bg-gold mx-auto mt-8" />
      </div>
    </section>
  );
};

export default HeroSection;
