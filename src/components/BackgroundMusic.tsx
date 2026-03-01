import { useRef, useState, useEffect } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3;
      audio.play().catch(() => setIsPlaying(false));
    }
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const rewind = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/Free_mind.mpeg" loop />
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border rounded-full px-3 py-2 shadow-lg">
        <button onClick={rewind} className="p-1.5 rounded-full hover:bg-muted transition-colors" aria-label="Rewind">
          <RotateCcw className="w-4 h-4 text-foreground" />
        </button>
        <button onClick={togglePlay} className="p-1.5 rounded-full hover:bg-muted transition-colors" aria-label={isPlaying ? "Pause" : "Play"}>
          {isPlaying ? <Pause className="w-4 h-4 text-foreground" /> : <Play className="w-4 h-4 text-foreground" />}
        </button>
      </div>
    </>
  );
};

export default BackgroundMusic;
