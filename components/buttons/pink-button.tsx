import { useSound } from "@/hook/useSound";
import { baseUrl } from "@/lib/config";
import clsx from "clsx";

interface PinkButtonProps {
    onClick?: () => void;
    name?: string;
    className?: string;
}

export default function PinkButton({ onClick, name = "ไปต่อ", className }: Readonly<PinkButtonProps>) {
    const { toggle } = useSound(`${baseUrl}/audios/click.mp3`);

    const handleClick = () => {
        toggle()
        onClick?.()
    }
    return (
        <button 
            className={clsx("font-[500] bg-primary-pink w-[114px] h-[33px] rounded-[18px] text-white shadow-pink shadow-pink-light-2 cursor-pointer", className)} 
            onClick={handleClick}
        >
            {name}
        </button>
    );
}