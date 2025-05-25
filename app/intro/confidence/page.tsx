"use client";
import { tagOne } from "@/app/intro/confidence/(constant)/tag-one";
import { tagTwo } from "@/app/intro/confidence/(constant)/tag-two";
import Heart from "@/app/intro/confidence/(module)/heart";
import HeartSeperate, { CheckedItem } from "@/app/intro/confidence/(module)/heart-seperate";
import BackgroundLayout from "@/components/background-layout";
import PinkButton from "@/components/buttons/pink-button";
import PinkText from "@/components/text/pink-text";
import { pgGrandCanyon } from "@/lib/font";
import { motion, PanInfo, useAnimation } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Confidence() {
    const [page, setPage] = useState(0);
    const [checkedItems, setCheckedItems] = useState<CheckedItem>({})
    const [isDragging, setIsDragging] = useState(false);
    const controls = useAnimation();
    const router = useRouter()

    const snapToPage = (pageNumber: number) => {
        controls.start({
            x: `${-pageNumber * 33.33}%`,
            transition: {
                duration: 0.5,
                ease: [0.32, 0.72, 0, 1]
            }
        });
    };

    useEffect(() => {
        snapToPage(page);
    }, [page, snapToPage]);

    const handleSubmit = () => {
        const size = Object.values(checkedItems).filter(Boolean).length
        if (size <= 0) {
            alert("ต้องเลือกอย่างน้อย 1 อันนะ");
        } else if (size > 4) {
            alert("เลือกได้มากสุด 4 อันเท่านั้นนะ");
        } else {
            router.push("/intro/puzzle")
            localStorage.setItem("confidence", Object.keys(checkedItems).join(","))
        }
    };

    const handleDragStart = () => { 
        setIsDragging(true)
    }

    const handleDragEnd = (event: MouseEvent, info: PanInfo) => {
        setIsDragging(false);
        const swipeThreshold = 50;

        if (info.offset.x < -swipeThreshold && page < 2) {
            setPage(page + 1);
        } else if (info.offset.x > swipeThreshold && page > 0) {
            setPage(page - 1);
        } else {
            snapToPage(page);
        }
    };

    return (
        <BackgroundLayout className="flex flex-col space-y-[79px] overflow-hidden">
            <div className="flex flex-col items-center justify-center space-y-[47px]">
                <div className={`${pgGrandCanyon.className} -space-x-0.5 text-brownie`}>
                    <span className="text-shadow-custom">พูดถึง</span>
                    <PinkText text="ความมั่นใจ" containerClassName="text-[24px]" textClassName="to-pink-red" />
                    <span className="text-shadow-custom">แล้วเธอนึกถึงอะไร</span>
                </div>

                <div className="flex flex-col w-full">
                    <div className="relative w-full overflow-hidden">
                        <motion.div
                            className="flex w-[300%]"
                            animate={controls}
                            initial={{ x: "0%" }}
                            drag="x"
                            onDragStart={handleDragStart}
                            onDragEnd={handleDragEnd}
                        >
                            <div className="w-1/3 flex-shrink-0 flex flex-col items-center justify-center">
                                <HeartSeperate tags={tagOne} isDragging={isDragging} checkedItems={checkedItems} setCheckedItems={setCheckedItems} />
                            </div>
                            <div className="w-1/3 flex-shrink-0 flex flex-col items-center justify-center">
                                <HeartSeperate tags={tagTwo} isDragging={isDragging} checkedItems={checkedItems} setCheckedItems={setCheckedItems} />
                            </div>
                            <div className="w-1/3 flex-shrink-0 flex flex-col items-center justify-center">
                                <Heart isDragging={isDragging} checkedItems={checkedItems} setCheckedItems={setCheckedItems} />
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="space-y-[83px]">
                    <div className="flex flex-col items-center space-y-[12px]">
                        <div className="flex space-x-[11px]">
                            <button
                                onClick={() => setPage(0)}
                                className={`size-[10px] rounded-full cursor-pointer ${page === 0 ? 'bg-bullet-active' : 'bg-bullet-inactive'}`}
                            />
                            <button
                                onClick={() => setPage(1)}
                                className={`size-[10px] rounded-full cursor-pointer ${page === 1 ? 'bg-bullet-active' : 'bg-bullet-inactive'}`}
                            />
                            <button
                                onClick={() => setPage(2)}
                                className={`size-[10px] rounded-full cursor-pointer ${page === 2 ? 'bg-bullet-active' : 'bg-bullet-inactive'}`}
                            />
                        </div>
                        <div className="font-400 text-[15px] text-primary-gray">
                            {page === 0 ? "ปัดซ้ายเพื่อดูเพิ่ม" : page === 1 ? "ปัดซ้ายหรือขวาเพื่อดูเพิ่ม" : "ปัดขวาเพื่อกลับ"}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <PinkButton onClick={handleSubmit} />
                    </div>
                </div>
            </div>
        </BackgroundLayout>
    );
}