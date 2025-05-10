"use client";
import BackgroundLayout from "@/components/background-layout";
import PinkButton from "@/components/buttons/pink-button";
import Tag from "@/components/container/tag";
import PinkText from "@/components/text/pink-text";
import TransitionLayout from "@/components/transition-layout";
import { motion, PanInfo, useAnimation } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function HeartSeperate() {
    return (
        <div className="flex flex-col items-center justify-center space-y-[10px] ">
            <div className="flex space-x-[51px]">
                <Tag className="px-[10px]" text="ได้เป็นตัวของตัวเอง" />
                <Tag className="px-[23.5px]" text="ร่างทอง" />
            </div>
            <div className="flex space-x-[12px]">
                <Tag text="กล้าแสดงออก" />
                <Tag text="การเชื่อในตัวเอง" />
                <Tag text="เมคอัพ" />
                <Tag text="ไม่กลัวทัวร์ลง" />
            </div>
            <div className="flex space-x-[18px]">
                <Tag text="สเน่ห์แรงเกินต้าน" />
                <Tag text="เจ้าแม่แฟชั่น" />
                <Tag text="ลง IG No Filter" />
                <Tag text="โนสนโนแคร์" />
            </div>
            <div className="flex space-x-[12px]">
                <Tag text="หน้าสดออกจากบ้าน" />
                <Tag text="ตัวเองตอนเด็ก" />
                <Tag className="px-[22px]" text="Meitu" />
                <Tag text="หุ่นสุดแซ่บ" />
            </div>
            <div className="flex space-x-[16px]">
                <Tag text="ตัวแม่ตัวมัม" />
                <Tag text="ตัวเองในเวอร์ชันที่เริ่ดกว่า" />
                <Tag text="ดาวติ้กต่อก" />
            </div>
            <div className="flex space-x-[14px]">
                <Tag text="เป้าหมายมีไว้พุ่งชน" />
                <Tag text="ไม่มีความลังเล" />
            </div>
            <div className="flex space-x-[4px]">
                <Tag text="ความท้าทาย" />
                <Tag text="ความหวัง" />
            </div>
            <Tag text="ความรัก" />
        </div>
    )
}

export default function Confidence() {
    const [page, setPage] = useState(0);
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
        router.push("/puzzle")
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
        <TransitionLayout>
            <BackgroundLayout className="flex flex-col space-y-[79px] overflow-hidden">
                <div className="flex flex-col items-center justify-center space-y-[47px]">
                    <div className="font-pg -space-x-0.5 text-brownie">
                        <span className="text-shadow-custom">พูดถึง</span>
                        <PinkText text="ความมั่นใจ" containerClassName="text-[24px]" textClassName="to-pink-red" />
                        <span className="text-shadow-custom">แล้วเธอนึกถึงอะไร</span>
                    </div>

                    <div className="flex flex-col w-full">
                        <div className="overflow-hidden relative">
                            <motion.div
                                className="flex w-[200%]"
                                animate={controls}
                                initial={{ x: "0%" }}
                                drag="x"
                                onDragEnd={handleDragEnd}
                            >
                                <div className="w-1/2 flex flex-col items-center justify-center">
                                    <HeartSeperate />
                                </div>
                                <div className="w-1/2 flex flex-col items-center justify-center">
                                    <div className="relative text-center">
                                        <Image className="drop-shadow-lg" draggable="false" src="/svg/heart.svg" alt="Heart" width={340} height={265.5} />
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[36px] font-[500]">ตัวเธอเอง</div>
                                    </div>
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
        </TransitionLayout>
    );
}