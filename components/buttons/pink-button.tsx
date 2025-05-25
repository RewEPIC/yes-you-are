import { useSound } from "@/hook/useSound";
import { baseUrl } from "@/lib/config";
import clsx from "clsx";
import { useEffect } from "react";

interface PinkButtonProps {
    onClick?: () => void;
    name?: string;
    className?: string;
}

export default function PinkButton({ onClick, name = "ไปต่อ", className }: Readonly<PinkButtonProps>) {
    const { toggle, playing, isLoading } = useSound(`${baseUrl}/audios/click.mp3`);

    useEffect(() => {
        if (playing) {
            onClick?.();
        }
    }, [playing, onClick]);

    return (
        <button 
            className={clsx(
                "font-[500] bg-primary-pink w-[114px] h-[33px] rounded-[18px] text-white shadow-pink shadow-pink-light-2",
                isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
                className
            )} 
            onClick={toggle}
            disabled={isLoading}
        >
            {name}
        </button>
    );
}