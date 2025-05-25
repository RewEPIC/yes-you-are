"use client";
import { CheckedItem } from "@/app/intro/confidence/(module)/heart-seperate";
import KonvaPuzzleButton from "@/app/intro/puzzle/(module)/puzzle-button";
import PinkButton from "@/components/buttons/pink-button";
import { baseUrl } from "@/lib/config";
import { pgGrandCanyon } from "@/lib/font";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface PuzzleButtonProps {
    label?: React.ReactNode
    src: string
    id: string
    checkedItems: CheckedItem
    handleChange: (id: string, checked: boolean) => void
    className?: string
}

function PuzzleButton({ label, src, id, checkedItems, handleChange, className }: Readonly<PuzzleButtonProps>) {
    const isChecked = checkedItems?.[id] ?? false;
    return (
        <div className={
            clsx(
                "pointer-events-auto h-[287px] w-[287px] flex items-center justify-center transition ease-in-out duration-200",
                isChecked ? "" : "grayscale",
                className
            )
        }>
            <KonvaPuzzleButton
                src={src} // must be a transparent PNG
                width={287}
                height={287}
                onClick={() => handleChange(id, !isChecked)}
            />
            {label}
        </div>
    )
}

export default function Puzzle() {
    const [checkedItems, setCheckedItems] = useState<CheckedItem>({ passionate: true })
    const router = useRouter()
    const handleSubmit = () => {
        router.push("/intro/look")
    }
    const handleChange = (id: string, checked: boolean) => {
        setCheckedItems((prev: CheckedItem) => ({ ...prev, [id]: checked }))
    }
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-end overflow-x-hidden">
            <div className="space-y-[22px] text-center py-[100px] z-20">
                <PinkButton onClick={handleSubmit} />
                <div className="text-brownie text-shadow-custom text-[14px] font-[500]">เลือกชิ้นส่วนเพื่อไปต่อ</div>
            </div>
            <div className="absolute bottom-0 bg-gradient-to-t from-white to-transparent h-[200px] w-full z-10 cursor-none pointer-events-none"></div>
            <div className="absolute w-full h-full overflow-x-hidden">
                <Image className="absolute -top-[41px] -left-[61px]" width={287} height={287} src={`${baseUrl}/images/puzzle/puzzle2.png`} alt="puzzle-2" />
                <Image className="absolute top-[186px] -left-[160px]" width={287} height={287} src={`${baseUrl}/images/puzzle/puzzle3.png`} alt="puzzle-3" />
                {/* เพื่อน Interactable */}
                <PuzzleButton
                    label={(
                        <span className={`pointer-events-none absolute ${pgGrandCanyon.className} text-[18px] text-primary-dark-gray -rotate-[18.7deg]`}>เพื่อน</span>
                    )}
                    id="friend"
                    src={`${baseUrl}/images/puzzle/puzzle9.png`}
                    checkedItems={checkedItems}
                    handleChange={handleChange}
                    className="absolute -top-[101px] left-[100px]"
                />
                <Image className="absolute top-[25px] -left-[218px]" width={287} height={287} src={`${baseUrl}/images/puzzle/puzzle10.png`} alt="puzzle-10" />
                {/* พยายาม Interactable */}
                <PuzzleButton
                    label={(
                        <div className={`pointer-events-none absolute flex flex-col ${pgGrandCanyon.className} text-[18px] text-white text-center -rotate-[18.7deg]`}>
                            <div>ทุกวันนี้เธออยาก</div>
                            <div><span className="text-[22px] bg-gradient-to-b from-pink-light to-pink bg-clip-text text-transparent">พยายาม</span>เพื่อสิ่งใด</div>
                        </div>
                    )}
                    id="passionate"
                    src={`${baseUrl}/images/puzzle/puzzle17.png`}
                    checkedItems={checkedItems}
                    handleChange={handleChange}
                    className="absolute top-[123px] left-[4px]"
                />
                {/* อนาคต Interactable */}
                <PuzzleButton
                    label={(
                        <span className={`pointer-events-none absolute ${pgGrandCanyon.className} text-[18px] text-primary-dark-gray -rotate-[18.7deg]`}>อนาคต</span>
                    )}
                    id="future"
                    src={`${baseUrl}/images/puzzle/puzzle7.png`}
                    checkedItems={checkedItems}
                    handleChange={handleChange}
                    className="absolute top-[63px] left-[160px]"
                />
                <Image className="absolute top-[11px] left-[315px]" width={287} height={287} src={`${baseUrl}/images/puzzle/puzzle8.png`} alt="puzzle-8" />
                {/* ครอบครัว Interactable */}
                <PuzzleButton
                    label={(
                        <span className={`pointer-events-none absolute ${pgGrandCanyon.className} text-[18px] text-primary-dark-gray -rotate-[18.7deg]`}>ครอบครัว</span>
                    )}
                    id="family"
                    src={`${baseUrl}/images/puzzle/puzzle13.png`}
                    checkedItems={checkedItems}
                    handleChange={handleChange}
                    className="absolute top-[356px] -left-[100px]"
                />
                {/* เงิน Interactable */}
                <PuzzleButton
                    label={(
                        <span className={`pointer-events-none absolute ${pgGrandCanyon.className} text-[18px] text-primary-dark-gray -rotate-[18.7deg]`}>
                            เงิน
                        </span>
                    )}
                    id="money"
                    src={`${baseUrl}/images/puzzle/puzzle16.png`}
                    checkedItems={checkedItems}
                    handleChange={handleChange}
                    className="absolute top-[284px] left-[61px]"
                />
                {/* หน้าที่การงาน Interactable */}
                <PuzzleButton
                    label={(
                        <span className={`pointer-events-none absolute ${pgGrandCanyon.className} text-[18px] text-primary-dark-gray -rotate-[18.7deg]`}>หน้าที่การงาน</span>
                    )}
                    id="work"
                    src={`${baseUrl}/images/puzzle/puzzle15.png`}
                    checkedItems={checkedItems}
                    handleChange={handleChange}
                    className="absolute top-[237px] left-[219px]"
                />
                <Image className="absolute top-[580px] -left-[199px]" width={287} height={287} src={`${baseUrl}/images/puzzle/puzzle12.png`} alt="puzzle-12" />
                <Image className="absolute top-[517px] -left-[40px]" width={287} height={287} src={`${baseUrl}/images/puzzle/puzzle5.png`} alt="puzzle-5" />
                {/* ความสุขส่วนตัว Interactable */}
                <PuzzleButton
                    label={(
                        <span className={`pointer-events-none absolute ${pgGrandCanyon.className} text-[18px] text-primary-dark-gray -rotate-[18.7deg]`}>ความสุขส่วนตัว</span>
                    )}
                    id="happiness"
                    src={`${baseUrl}/images/puzzle/puzzle14.png`}
                    checkedItems={checkedItems}
                    handleChange={handleChange}
                    className="absolute top-[463px] left-[118px]"
                />
                <Image className="absolute top-[397px] left-[280px]" width={287} height={287} src={`${baseUrl}/images/puzzle/puzzle6.png`} alt="puzzle-6" />
                <Image className="absolute top-[684px] left-[18px]" width={287} height={287} src={`${baseUrl}/images/puzzle/puzzle11.png`} alt="puzzle-11" />
                <Image className="absolute top-[626px] left-[181px]" width={287} height={287} src={`${baseUrl}/images/puzzle/puzzle4.png`} alt="puzzle-4" />
            </div>
        </div>
    );
}