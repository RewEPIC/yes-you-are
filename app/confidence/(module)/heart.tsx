import { CheckedItem } from "@/app/confidence/(module)/heart-seperate";
import HeartActive from "@/components/svg/heart/heart-active";
import HeartInactive from "@/components/svg/heart/heart-inactive";
import { Dispatch, SetStateAction } from "react";

interface HeartProps {
    checkedItems: CheckedItem
    setCheckedItems: Dispatch<SetStateAction<CheckedItem>>
}

export default function Heart({ checkedItems, setCheckedItems }: Readonly<HeartProps>) {
    const id = "big-self"
    const checked = checkedItems?.[id] ?? false
    const handleChange = (checked: boolean) => {
        setCheckedItems((prev) => ({ ...prev, [id]: checked }))
    }
    return (
        <label htmlFor={id} className="relative cursor-pointer inline-block">
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={(e) => handleChange(e.target.checked)}
                className="sr-only"
            />
            <div 
                className={`
                        drop-shadow-lg transition-all duration-300 ease-in-out
                        ${checked ? "scale-100 opacity-100" : "scale-95 opacity-80"}
                `}>
                {checked ? 
                    <HeartActive width={356} height={282} /> : 
                    <HeartInactive width={340} height={266} />
                }
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[36px] font-[500] pointer-events-none">
                ตัวเธอเอง
            </div>
        </label>
    )
}