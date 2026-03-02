import { useRef, useState, useEffect } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3;

    const tryPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        // Wait for explicit user gesture on mobile/desktop
      }
    };

    const unlockAndPlay = () => {
      audio.muted = false;
      audio.load();
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    };

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    document.addEventListener("pointerdown", unlockAndPlay, { once: true });
    document.addEventListener("touchstart", unlockAndPlay, { once: true });
    document.addEventListener("click", unlockAndPlay, { once: true });

    tryPlay();

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      document.removeEventListener("pointerdown", unlockAndPlay);
      document.removeEventListener("touchstart", unlockAndPlay);
      document.removeEventListener("click", unlockAndPlay);
    };
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
      <audio ref={audioRef} loop preload="auto" playsInline>
        <source src="/audio/Free_mind.mp3" type="audio/mpeg" />
        <source src="/audio/Free_mind.mpeg" type="audio/mpeg" />
      </audio>
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
