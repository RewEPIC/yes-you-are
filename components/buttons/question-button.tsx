import { useSound } from "@/hook/useSound";
import { baseUrl } from "@/lib/config";
import clsx from "clsx";
import { useEffect } from "react";

interface QuestionButtonProps {
    name?: string;
    onClick?: () => void;
    className?: string;
}

export default function QuestionButton({ name, onClick, className }: Readonly<QuestionButtonProps>) {
    const { toggle, playing, isLoading } = useSound(`${baseUrl}/audios/click.mp3`);

    useEffect(() => {
        if (playing) {
            onClick?.();
        }
    }, [playing, onClick]);

    return (
        <button
            className={clsx(
                "text-[14px] bg-white font-[500] w-[236px] h-[30px] py-[10px] px-[9px] rounded-[20px] text-brownie shadow-pink-light border border-pink-light flex justify-center items-center",
                isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
                className
            )}
            onClick={toggle}
            disabled={isLoading}
        >
            {name}
        </button>
    )
}