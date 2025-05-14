"use client"
import AudioBackground, { AudioBackgroundHandle } from "@/components/audio-background";
import { baseUrl } from "@/lib/config";
import { createContext, useContext, useMemo, useRef, useState } from "react";

interface AudioContextType {
  audioRef: React.RefObject<AudioBackgroundHandle | null>;
  playAudio: () => void;
  stopAudio: () => void;
  setAudioSrc: (src: string) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const audioRef = useRef<AudioBackgroundHandle | null>(null);  // Allow null here
  const [audioSrc, setAudioSrc] = useState<string>(`${baseUrl}/audios/intro.mp3`);

  const playAudio = () => {
    audioRef.current?.playAudio();
  };
  const stopAudio = () => {
    audioRef.current?.stopAudio();
  };

  const contextValue = useMemo(() => ({
    audioRef,
    playAudio,
    setAudioSrc,
    stopAudio
  }), []);  // Memoize context value to avoid unnecessary re-renders

  return (
    <AudioContext.Provider value={contextValue}>
      {children}
      <AudioBackground src={audioSrc} ref={audioRef} />
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
