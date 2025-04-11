import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX, Music, Play, Pause } from "lucide-react";

export default function MusicControl() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [musicLoaded, setMusicLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with a romantic/celebration song
    const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/01/27/audio_11fb7ea919.mp3?filename=beautiful-piano-115480.mp3');
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;
    
    // Set up event listeners
    audio.oncanplaythrough = () => {
      setMusicLoaded(true);
      console.log("Music loaded and ready to play");
    };
    
    // Auto-play attempt when loaded (may be blocked by browser)
    audio.onloadeddata = () => {
      console.log("Music data loaded");
      
      // Show the tooltip after a short delay to draw attention to the music control
      setTimeout(() => {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 5000); // Hide after 5 seconds
      }, 3000);
    };
    
    // Handle errors
    audio.onerror = (e) => {
      console.error("Audio loading error:", e);
    };

    // Try to initialize audio context to prepare for playback
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContext) {
        new AudioContext();
      }
    } catch (e) {
      console.log("AudioContext initialization failed:", e);
    }

    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current = null;
      }
    };
  }, []);

  // Handle document user interaction to enable audio
  useEffect(() => {
    const enableAudio = () => {
      if (!isInitialized && audioRef.current) {
        console.log("User interaction detected, enabling audio");
        setIsInitialized(true);
        
        // Create a silent audio context to unlock audio
        const silentAudio = new Audio();
        silentAudio.play().catch(e => console.log("Silent audio play failed:", e));
        
        // Preload our actual audio
        audioRef.current.load();
      }
    };

    // Listen for user interactions to enable audio
    document.addEventListener('click', enableAudio);
    document.addEventListener('touchstart', enableAudio);
    
    return () => {
      document.removeEventListener('click', enableAudio);
      document.removeEventListener('touchstart', enableAudio);
    };
  }, [isInitialized]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isMusicPlaying) {
      audioRef.current.pause();
      setIsMusicPlaying(false);
    } else {
      // Play with better error handling and feedback
      audioRef.current.play()
        .then(() => {
          console.log("Music playing successfully");
          setIsMusicPlaying(true);
        })
        .catch(e => {
          console.log('Audio playback error:', e);
          
          // Show tooltip to inform user about enabling audio
          setShowTooltip(true);
          setTimeout(() => setShowTooltip(false), 4000);
          
          // Try to reload the audio element
          if (audioRef.current) {
            audioRef.current.load();
          }
        });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="relative"
      >
        {/* Music player tooltip */}
        {showTooltip && (
          <motion.div 
            className="absolute bottom-full right-0 mb-2 p-2 bg-black/70 backdrop-blur-sm text-white text-sm rounded-lg w-48"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            Click to {isMusicPlaying ? 'pause' : 'play'} celebration music! 🎵
          </motion.div>
        )}
        
        {/* Enhanced music button */}
        <Button
          onClick={toggleMusic}
          variant="outline"
          className="relative w-14 h-14 rounded-full bg-gradient-to-br from-pink-500/80 to-violet-500/80 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center text-white hover:from-pink-500/90 hover:to-violet-500/90 hover:scale-105 transition shadow-lg"
        >
          {/* Animated icon */}
          <motion.div
            animate={isMusicPlaying ? {
              scale: [1, 1.1, 1],
            } : {
              scale: 1
            }}
            transition={{ 
              duration: 1.5, 
              repeat: isMusicPlaying ? Infinity : 0,
              repeatType: "reverse"
            }}
          >
            {isMusicPlaying ? (
              <Music size={22} className="text-white" />
            ) : (
              <Play size={22} className="text-white ml-1" />
            )}
          </motion.div>
          
          {/* Music equalizer animation */}
          {isMusicPlaying && (
            <div className="absolute top-1 right-1 flex space-x-[2px]">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-[2px] bg-white rounded-full"
                  animate={{ height: [3, 6, 3] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          )}
        </Button>
      </motion.div>
    </div>
  );
}
