import { useEffect, useRef } from 'react';

export const useSound = (src, shouldPlay = false, volume = 0.5) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!shouldPlay) return;

    const audio = new Audio(src);
    audio.volume = volume;
    audio.play().catch((e) => console.warn('Error playing sound:', e));
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [shouldPlay, src]);

  return audioRef;
};
