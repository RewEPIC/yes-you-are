import { useEffect, useState } from "react";

export const useSound = (url: string) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const toggle = () => {
        if (!isLoading) {
            setPlaying(!playing);
        }
    };

    useEffect(() => {
        audio.addEventListener('canplaythrough', () => {
            setIsLoading(false);
        });

        audio.load();

        return () => {
            audio.removeEventListener('canplaythrough', () => {
                setIsLoading(false);
            });
        };
    }, [audio]);

    useEffect(() => {
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
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, [audio]);

    return { playing, toggle, isLoading }
}
