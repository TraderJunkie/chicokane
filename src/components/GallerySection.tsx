import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";

const GallerySection = () => {
  const photos = [
    { src: gallery1, alt: "Chico Kane portrait" },
    { src: gallery2, alt: "Chico Kane in the studio" },
    { src: gallery3, alt: "Chico Kane photoshoot" },
    { src: gallery4, alt: "Chico Kane with the crew" },
  ];

  return (
    <section id="gallery" className="py-32 px-6 bg-secondary/30 relative overflow-hidden">
      {/* Cinematic side accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent" />
      
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-light">Gallery</span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mt-4">
            Moments
          </h2>
        </div>

        {/* Photo grid - cinematic layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg border border-border hover:border-gold transition-all duration-500 ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Hover border glow */}
              <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/50 rounded-lg transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
