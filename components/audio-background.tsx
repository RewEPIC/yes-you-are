"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

export interface AudioBackgroundHandle {
  playAudio: () => void;
  stopAudio: () => void;
}

interface AudioBackgroundProps {
  src: string;  // Dynamic src prop
}

const AudioBackground = forwardRef<AudioBackgroundHandle, AudioBackgroundProps>(({ src }, ref) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useImperativeHandle(ref, () => ({
    playAudio: () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current.currentTime = 0
        audioRef.current.volume = 0.1
        audioRef.current.play().catch(console.warn);
      }
    },
    stopAudio: () => {
      if (audioRef.current) {
        audioRef.current.muted = true
        audioRef.current.pause();
      }
    },
  }));

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <audio
      ref={audioRef}
      src={src} // Dynamic audio source
      autoPlay
      muted
      loop
      preload="auto"
      className="hidden"
    />
  );
});

AudioBackground.displayName = "AudioBackground";
export default AudioBackground;
