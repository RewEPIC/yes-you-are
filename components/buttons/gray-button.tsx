import { useSound } from "@/hook/useSound";
import { baseUrl } from "@/lib/config";
import clsx from "clsx";
import { useEffect } from "react";

interface GrayButtonProps {
    name?: string;
    onClick?: () => void;
    className?: string;
}

export default function GrayButton({ name = "ยังก่อน", onClick, className }: Readonly<GrayButtonProps>) {
    const { toggle, playing, isLoading } = useSound(`${baseUrl}/audios/click.mp3`);

    useEffect(() => {
        if (playing) {
            onClick?.();
        }
    }, [playing, onClick]);

    return (
        <button 
            className={clsx(
                "font-[500] bg-primary-gray w-[114px] h-[33px] rounded-[18px] text-brownie",
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