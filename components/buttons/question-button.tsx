import { useSound } from "@/hook/useSound";
import { baseUrl } from "@/lib/config";
import clsx from "clsx";

interface QuestionButtonProps {
    name?: string;
    onClick?: () => void;
    className?: string;
}

export default function QuestionButton({ name, onClick, className }: Readonly<QuestionButtonProps>) {
    const { toggle } = useSound(`${baseUrl}/audios/click.mp3`);

    const handleClick = () => {
        toggle()
        onClick?.()
    }
    return (
        <button
            className={clsx("text-[14px] bg-white font-[500] w-[236px] h-[30px] py-[10px] px-[9px] rounded-[20px] text-brownie shadow-pink-light cursor-pointer border border-pink-light flex justify-center items-center", className)}
            onClick={handleClick}
        >
            {name}
        </button>
    )
}