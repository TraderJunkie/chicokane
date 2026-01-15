import { Apple, Instagram, Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

const StreamSection = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

  const songs = [
    {
      title: "Latest Track",
      artist: "Terence Kane",
      // Using a preview/sample - replace with actual audio URLs
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      title: "Featured Single",
      artist: "Terence Kane",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      title: "Community Anthem",
      artist: "Terence Kane",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
  ];

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

  const togglePlay = (index: number) => {
    const audio = audioRefs.current[index];
    if (!audio) return;

    if (playingIndex === index) {
      audio.pause();
      setPlayingIndex(null);
    } else {
      // Pause any currently playing audio
      audioRefs.current.forEach((a, i) => {
        if (a && i !== index) a.pause();
      });
      audio.play();
      setPlayingIndex(index);
    }
  };

  const handleAudioEnd = () => {
    setPlayingIndex(null);
  };

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
            Hit play and feel the vibes
          </p>
        </div>

        {/* Songs with play buttons */}
        <div className="space-y-4 mb-16">
          {songs.map((song, index) => (
            <div
              key={index}
              className={`group flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 ${
                playingIndex === index
                  ? "bg-gold/20 border-gold"
                  : "bg-secondary/50 border-border hover:border-gold/50"
              }`}
            >
              <button
                onClick={() => togglePlay(index)}
                className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                  playingIndex === index
                    ? "bg-gold text-foreground"
                    : "bg-gold/20 text-gold hover:bg-gold hover:text-foreground"
                }`}
              >
                {playingIndex === index ? (
                  <Pause className="w-6 h-6" fill="currentColor" />
                ) : (
                  <Play className="w-6 h-6 ml-1" fill="currentColor" />
                )}
              </button>
              
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground truncate">{song.title}</p>
                <p className="text-sm text-muted-foreground">{song.artist}</p>
              </div>

              {/* Audio element */}
              <audio
                ref={(el) => { audioRefs.current[index] = el; }}
                src={song.audioUrl}
                onEnded={handleAudioEnd}
              />

              {/* Playing indicator */}
              {playingIndex === index && (
                <div className="flex items-center gap-1">
                  <div className="w-1 h-4 bg-gold animate-pulse rounded-full" />
                  <div className="w-1 h-6 bg-gold animate-pulse rounded-full delay-75" />
                  <div className="w-1 h-3 bg-gold animate-pulse rounded-full delay-150" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Streaming Links */}
        <div className="text-center mb-8">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-light">Connect</span>
          <h3 className="text-2xl font-bold text-foreground mt-2">
            Stream Everywhere
          </h3>
        </div>

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
