import { useRef, useState, useEffect } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.3;

    const attemptAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        // Autoplay blocked — wait for any user interaction then play
        const playOnInteraction = () => {
          audio.play().then(() => {
            setIsPlaying(true);
          }).catch(() => {});
          document.removeEventListener("click", playOnInteraction);
          document.removeEventListener("touchstart", playOnInteraction);
        };
        document.addEventListener("click", playOnInteraction, { once: true });
        document.addEventListener("touchstart", playOnInteraction, { once: true });
      }
    };

    attemptAutoplay();
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.muted = false;
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const rewind = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      if (!isPlaying) {
        audio.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/Free_mind.mpeg" loop preload="auto" />
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border rounded-full px-3 py-2 sm:px-3 sm:py-2 shadow-lg">
        <button onClick={rewind} className="p-2.5 sm:p-1.5 rounded-full hover:bg-muted active:bg-muted transition-colors touch-manipulation" aria-label="Rewind">
          <RotateCcw className="w-5 h-5 sm:w-4 sm:h-4 text-foreground" />
        </button>
        <button onClick={togglePlay} className="p-2.5 sm:p-1.5 rounded-full hover:bg-muted active:bg-muted transition-colors touch-manipulation" aria-label={isPlaying ? "Pause" : "Play"}>
          {isPlaying ? <Pause className="w-5 h-5 sm:w-4 sm:h-4 text-foreground" /> : <Play className="w-5 h-5 sm:w-4 sm:h-4 text-foreground" />}
        </button>
      </div>
    </>
  );
};

export default BackgroundMusic;
