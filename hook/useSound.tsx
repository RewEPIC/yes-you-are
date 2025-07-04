import { useCallback, useEffect, useState } from "react";

export const useSound = (url: string) => {
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    const [playing, setPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const toggle = useCallback(() => {
        if (!isLoading && audio) {
            setPlaying(prev => !prev);
        }
    }, [isLoading, audio]);

    // Initialize audio only on client side
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const audioInstance = new Audio(url);
            setAudio(audioInstance);

            const handleCanPlayThrough = () => {
                setIsLoading(false);
            };

            audioInstance.addEventListener('canplaythrough', handleCanPlayThrough);
            audioInstance.load();

            return () => {
                audioInstance.removeEventListener('canplaythrough', handleCanPlayThrough);
            };
        }
    }, [url]);

    useEffect(() => {
        if (!audio) return;
        if (playing) {
            audio.play().catch(error => {
                console.error('Error playing audio:', error);
                setPlaying(false);
            });
        } else {
            audio.pause();
        }
    }, [playing, audio]);

    useEffect(() => {
        if (!audio) return;
        const handleEnded = () => setPlaying(false);

        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('ended', handleEnded);
        };
    }, [audio]);

    return { playing, toggle, isLoading }
}
