import { baseUrl } from "@/lib/config";
import clsx from "clsx";

interface TagProps {
    text?: string;
    className?: string;
}

export default function Tag({ text, className }: Readonly<TagProps>) {
    return (
        <div 
            className={clsx(
                `w-fit border border-pink-light rounded-[20px] px-[9px] py-[5px] shadow-pink-light font-[400] text-[10px] bg-cover`, 
                className
            )}
            style={{ backgroundImage: `url('${baseUrl}/images/frame.png')` }}
        >
            {text}
        </div>
    );
}