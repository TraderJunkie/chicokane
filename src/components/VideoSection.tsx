import { Play } from "lucide-react";
import { useState } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "DKUQFEKG6F8";

  return (
    <section id="video" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Cinematic side accent */}
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent" />
      
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-light">Watch</span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mt-4">
            Featured Video
          </h2>
        </div>

        {/* Video container - Cinematic aspect ratio */}
        <div className="relative aspect-video bg-secondary rounded-lg overflow-hidden border border-border group">
          {!isPlaying ? (
            <>
              {/* Thumbnail with play overlay */}
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-all duration-500" />
              
              {/* Play button */}
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gold/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-foreground ml-1" fill="currentColor" />
                </div>
              </button>
              
              {/* Film strip decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-gold/0 via-gold/50 to-gold/0" />
            </>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="Chico Kane Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Video info */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-lg">
            Experience the energy and authenticity of Chico Kane
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
