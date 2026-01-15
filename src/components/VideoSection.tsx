import { Play } from "lucide-react";

const VideoSection = () => {
  const loudArmyUrl = "https://app.loud.army/stream/terence?utm_source=ig&utm_medium=social&utm_content=link_in_bio";
  
  const videos = [
    {
      id: "m7irTA-LJtk",
      title: "Latest Release",
      featured: true,
    },
    {
      id: "DKUQFEKG6F8",
      title: "Featured Video",
      featured: false,
    },
  ];

  return (
    <section id="video" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Cinematic side accent */}
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent" />
      
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-light">Watch</span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mt-4">
            Videos
          </h2>
        </div>

        {/* Video grid - Similar to songs layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <a
              key={video.id}
              href={loudArmyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative aspect-video rounded-lg overflow-hidden border transition-all duration-500 ${
                video.featured
                  ? "bg-gold/10 border-gold md:col-span-2"
                  : "bg-secondary border-border hover:border-gold"
              }`}
            >
              {/* Thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Dark overlay */}
              <div className={`absolute inset-0 transition-all duration-500 ${
                video.featured 
                  ? "bg-background/30 group-hover:bg-background/10" 
                  : "bg-background/50 group-hover:bg-background/30"
              }`} />
              
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`flex items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110 shadow-2xl ${
                  video.featured 
                    ? "w-20 h-20 md:w-24 md:h-24 bg-gold" 
                    : "w-16 h-16 md:w-20 md:h-20 bg-gold/90"
                }`}>
                  <Play className={`text-foreground ml-1 ${
                    video.featured ? "w-8 h-8 md:w-10 md:h-10" : "w-6 h-6 md:w-8 md:h-8"
                  }`} fill="currentColor" />
                </div>
              </div>
              
              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                <p className={`font-semibold text-foreground ${video.featured ? "text-lg" : "text-base"}`}>
                  {video.title}
                </p>
                {video.featured && (
                  <span className="text-gold text-xs tracking-wider uppercase">Featured</span>
                )}
              </div>
              
              {/* Film strip decoration for featured */}
              {video.featured && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0" />
              )}
            </a>
          ))}
        </div>

        {/* Video info */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-lg">
            Click to stream on Loud Army
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
