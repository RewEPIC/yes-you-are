import { pgGrandCanyon } from "@/lib/font";
import clsx from "clsx";

interface PinkTextProps {
    text?: string | null;
    containerClassName?: string;
    textClassName?: string;
    shadowTextClassName?: string;
}

export default function PinkText({ containerClassName, shadowTextClassName, textClassName, text = "ชื่อเธอ" }: Readonly<PinkTextProps>) {
    return (
        <span className={clsx(`${pgGrandCanyon.className} relative inline-block text-[18px]`, containerClassName)}>
            <span
                className={clsx("px-1 absolute left-0 top-[1px] text-brownie opacity-[13%] pointer-events-none select-none", shadowTextClassName)}
                aria-hidden="true"
            >
                {text}
            </span>
            <span className={clsx("pt-6 px-1 relative bg-gradient-to-b from-50% from-pink-light to-pink bg-clip-text text-transparent", textClassName)}>
                {text}
            </span>
        </span>
    );
}