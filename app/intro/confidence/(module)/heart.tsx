import { CheckedItem } from "@/app/intro/confidence/(module)/heart-seperate";
import { baseUrl } from "@/lib/config";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
interface HeartProps {
    isDragging: boolean
    checkedItems: CheckedItem
    setCheckedItems: Dispatch<SetStateAction<CheckedItem>>
}

export default function Heart({ isDragging, checkedItems, setCheckedItems }: Readonly<HeartProps>) {
    const id = "ตัวเอง"
    const checked = checkedItems?.[id] ?? false
    const handleChange = (checked: boolean) => {
        if (isDragging) return
        setCheckedItems((prev) => {
            const updated = { ...prev, [id]: checked };
            if (!checked) {
                delete (updated as Partial<typeof updated>)[id];
            }
            return updated;
        });
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
                        flex justify-center items-center transition-all duration-300 ease-in-out relative
                        ${checked ? "scale-100 drop-shadow-pink-heart" : "scale-95 drop-shadow-lg"}
                `}
            > 
                {/* Drop shadow layer */}
                <div className="absolute inset-0" style={{ 
                    filter: checked ? "drop-shadow(3px 0 0 #FB6EA7) drop-shadow(0 3px 0 #FB6EA7) drop-shadow(-3px 0 0 #FB6EA7)  drop-shadow(0 -3px 0 #FB6EA7)" : "drop-shadow(0.5px 0 0 #FCD2E3) drop-shadow(0 0.5px 0 #FCD2E3) drop-shadow(-0.5px 0 0 #FCD2E3)  drop-shadow(0 -0.5px 0 #FCD2E3)"
                }}>
                    <Image 
                        draggable={false}
                        src={`${baseUrl}/images/heart.png`} 
                        alt="heart shadow" 
                        width={340} 
                        height={270}
                    />
                </div>
                {/* Image layer */}
                <Image 
                    draggable={false}
                    src={`${baseUrl}/images/heart.png`} 
                    alt="heart" 
                    width={340} 
                    height={270} 
                    className={`relative ${!checked && "opacity-50"}`}
                />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[36px] font-[500] pointer-events-none">
                ตัวเธอเอง
            </div>
        </label>
    )
}