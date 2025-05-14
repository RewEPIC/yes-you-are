import { CheckedItem } from "@/app/intro/confidence/(module)/heart-seperate";
import HeartIcon from "@/public/svgs/heart.svg";
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
                        flex justify-center items-center drop-shadow-lg transition-all duration-300 ease-in-out
                        ${checked ? "scale-100 drop-shadow-pink-heart" : "scale-95"}
                `}> 
                    <HeartIcon width={340} height={270} style={{ 
                        filter: checked ? "drop-shadow(3px 0 0 #FB6EA7) drop-shadow(0 3px 0 #FB6EA7) drop-shadow(-3px 0 0 #FB6EA7)  drop-shadow(0 -3px 0 #FB6EA7)" : "drop-shadow(0.5px 0 0 #FCD2E3) drop-shadow(0 0.5px 0 #FCD2E3) drop-shadow(-0.5px 0 0 #FCD2E3)  drop-shadow(0 -0.5px 0 #FCD2E3)"
                     }}/>
                
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[36px] font-[500] pointer-events-none">
                ตัวเธอเอง
            </div>
        </label>
    )
}