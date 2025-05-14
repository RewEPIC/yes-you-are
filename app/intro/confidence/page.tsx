"use client";
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
    const controls = useAnimation();
    const router = useRouter()

    // Use animation controls for more reliable transitions
    useEffect(() => {
        // Animate to the current page position
        controls.start({
            x: page === 0 ? "0%" : "-50%",
            transition: {
                type: "tween", // Use tween for more reliable animation
                ease: "easeInOut",
                duration: 0.5
            }
        });
    }, [page, controls]);

    // Handle submission logic
    const handleSubmit = () => {
        router.push("/intro/puzzle")
    };

    // Handle drag end with reliable transition
    const handleDragEnd = (event: MouseEvent, info: PanInfo) => {
        // Apply page change based on drag offset
        if (info.offset.x < -50 && page === 0) {
            setPage(1);
        } else if (info.offset.x > 50 && page === 1) {
            setPage(0);
        } else {
            // If not enough drag to change page, snap back
            controls.start({
                x: page === 0 ? "0%" : "-50%",
                transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                }
            });
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
                    <div className="relative">
                        <motion.div
                            className="flex w-[200%]"
                            animate={controls}
                            initial={{ x: "0%" }}
                            drag="x"
                            onDragEnd={handleDragEnd}
                        >
                            <div className="w-1/2 flex flex-col items-center justify-center">
                                <HeartSeperate checkedItems={checkedItems} setCheckedItems={setCheckedItems} />
                            </div>
                            <div className="w-1/2 flex flex-col items-center justify-center">
                                <Heart checkedItems={checkedItems} setCheckedItems={setCheckedItems} />
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
                        </div>
                        <div className="font-400 text-[15px] text-primary-gray">
                            {page === 0 ? "ปัดซ้ายเพื่อดูเพิ่ม" : "ปัดขวาเพื่อกลับ"}
                        </div>
                    </div>
                    <PinkButton onClick={handleSubmit} />
                </div>
            </div>
        </BackgroundLayout>
    );
}