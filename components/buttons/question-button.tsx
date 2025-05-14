import clsx from "clsx";

interface QuestionButtonProps {
    name?: string;
    onClick?: () => void;
    className?: string;
}

export default function QuestionButton({ name, onClick, className }: Readonly<QuestionButtonProps>) {
    return (
        <button
            className={clsx("text-[10px] bg-white font-[500] w-[236px] h-[23px] py-[10px] px-[9px] rounded-[20px] text-brownie shadow-pink-light cursor-pointer border border-pink-light flex justify-center items-center", className)}
            onClick={onClick}
        >
            {name}
        </button>
    )
}