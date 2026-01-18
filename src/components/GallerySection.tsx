import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery6 from "@/assets/gallery-6.jpeg";
import gallery7 from "@/assets/gallery-7.jpeg";
import gallery8 from "@/assets/gallery-8.jpeg";

const GallerySection = () => {
  const photos = [
    { src: gallery1, alt: "Chico Kane portrait", caption: "The Vision" },
    { src: gallery6, alt: "King Life vibes on the train", caption: "King Life" },
    { src: gallery2, alt: "Chico Kane in the studio", caption: "In The Lab" },
    { src: gallery7, alt: "Young movement with the team", caption: "The Brotherhood" },
    { src: gallery8, alt: "Golden hour moment", caption: "The Come Up" },
    { src: gallery5, alt: "Community champions", caption: "Giving Back" },
  ];

  return (
    <section id="gallery" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Cinematic film strip accents */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section header - cinematic title card */}
        <div className="text-center mb-20">
          <span className="text-gold text-xs tracking-[0.4em] uppercase font-light">The Journey</span>
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mt-4 tracking-tight">
            Moments
          </h2>
          <p className="text-muted-foreground mt-4 text-lg tracking-wide max-w-xl mx-auto">
            Every frame tells a story. Every story builds the legacy.
          </p>
        </div>

        {/* Cinematic full-width photo sequence */}
        <div className="space-y-16">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Scene number - film style */}
              <div className="absolute -left-4 md:-left-12 top-4 z-10">
                <span className="text-gold/60 text-xs font-mono tracking-widest">
                  SCENE {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              
              {/* Full-width image container */}
              <div className="relative overflow-hidden rounded-lg border border-border/50 group-hover:border-gold/50 transition-all duration-700">
                {/* Cinematic letterbox bars for effect */}
                <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-background/80 to-transparent z-10" />
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-background/80 to-transparent z-10" />
                
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-[1.02]"
                />
                
                {/* Caption overlay - appears on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <h3 className="text-gold text-2xl font-bold tracking-wide">{photo.caption}</h3>
                </div>
                
                {/* Gold frame glow on hover */}
                <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/30 rounded-lg transition-all duration-700 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Cinematic end card */}
        <div className="text-center mt-20 pt-12 border-t border-border/30">
          <span className="text-gold/60 text-xs font-mono tracking-[0.3em]">TO BE CONTINUED...</span>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
