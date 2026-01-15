import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Cinematic dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Subtle film grain texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
      
      <div className="text-center max-w-5xl mx-auto relative z-10">
        {/* Cinematic top bar */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-16 md:w-32 h-[1px] bg-gradient-to-r from-transparent to-gold" />
          <span className="text-gold text-xs tracking-[0.4em] uppercase font-light">Toronto • Independent Artist</span>
          <div className="w-16 md:w-32 h-[1px] bg-gradient-to-l from-transparent to-gold" />
        </div>
        
        {/* Artist name - Movie title style */}
        <h1 className="text-7xl md:text-9xl font-bold tracking-tight text-foreground mb-8 leading-none">
          CHICO
          <span className="block text-gold">KANE</span>
        </h1>
        
        {/* Tagline - Cinematic subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide mb-12 max-w-xl mx-auto">
          Healing youth through music. Raw. Reflective. Real.
        </p>
        
        {/* CTA - Movie trailer play button style */}
        <a 
          href="https://app.loud.army/stream/terence?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gold/10 border border-gold/30 rounded-full text-gold hover:bg-gold hover:text-foreground transition-all duration-500 group"
        >
          <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="text-sm tracking-widest uppercase font-medium">Listen Now</span>
        </a>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
