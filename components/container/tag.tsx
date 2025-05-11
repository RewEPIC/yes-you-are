import { baseUrl } from "@/lib/config";
import clsx from "clsx";

interface TagProps {
    id: string;
    text?: string;
    className?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

export default function Tag({ id, text, className, checked, onChange }: Readonly<TagProps>) {
    const checkedStyles = !checked ? {
        backgroundRepeat: "repeat",
        backgroundImage: `url('${baseUrl}/images/frame.png')`,
        backgroundSize: "100px 100px",
        backgroundPosition: "center",
        backgroundAttachment: "local"
    } : undefined
    return (
        <label
            htmlFor={id}
            className={clsx(
                "inline-flex items-center w-fit cursor-pointer border rounded-[20px] px-[9px] py-[5px] font-[400] text-[10px]",
                checked ?
                    "bg-gradient-to-b from-pink-light via-yellow-card to-blue-light border-pink-light-2 shadow-pink-dark" :
                    "shadow-pink-light border-pink-light",
                className
            )}
            style={checkedStyles}
        >
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange?.(e.target.checked)}
                className="sr-only" // hide actual checkbox
            />
            {text}
        </label>
    );
}