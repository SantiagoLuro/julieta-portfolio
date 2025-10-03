import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3; // Volumen bajo para no ser invasivo
      audio.play().catch(e => {
        console.log('Autoplay fue bloqueado por el navegador');
      });
      setIsPlaying(true);
    }
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        try {
          await audio.play();
        } catch (e) {
          console.log('Error al reproducir audio:', e);
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.button
        className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
        onClick={() => setShowControls(!showControls)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d={isPlaying
              ? "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
              : "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            }
            clipRule="evenodd"
          />
        </svg>
      </motion.button>

      {showControls && (
        <motion.div
          className="absolute bottom-16 right-0 bg-black/80 text-white p-4 rounded-lg backdrop-blur-sm min-w-48"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          <div className="text-sm mb-2">Música de fondo</div>
          <button
            onClick={togglePlay}
            className="w-full bg-white/20 hover:bg-white/30 rounded px-3 py-2 text-center transition-colors"
          >
            {isPlaying ? 'Pausar música' : 'Reproducir música'}
          </button>
        </motion.div>
      )}

      <audio
        ref={audioRef}
        loop
        preload="auto"
        onEnded={() => setIsPlaying(false)}
      >
        <source src="/assets/music.mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
  );
};

export default AudioPlayer;