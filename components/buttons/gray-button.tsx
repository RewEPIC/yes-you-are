import { useSound } from "@/hook/useSound";
import { baseUrl } from "@/lib/config";
import clsx from "clsx";


interface GrayButtonProps {
    name?: string;
    onClick?: () => void;
    className?: string;
}

export default function GrayButton({ name = "ยังก่อน", onClick, className }: Readonly<GrayButtonProps>) {
    const { toggle } = useSound(`${baseUrl}/audios/click.mp3`);

    const handleClick = () => {
        toggle()
        onClick?.()
    }
    return (
        <button 
            className={clsx("font-[500] bg-primary-gray w-[114px] h-[33px] rounded-[18px] text-brownie cursor-pointer", className)} 
            onClick={handleClick}
        >
            {name}
        </button>
    );
}