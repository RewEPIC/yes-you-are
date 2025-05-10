"use client";
import BackgroundLayout from "@/components/background-layout";
import PinkButton from "@/components/buttons/pink-button";
import PinkText from "@/components/text/pink-text";
import TransitionLayout from "@/components/transition-layout";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Welcome() {
    const router = useRouter()
    const [name, setName] = useState<string | null>(null);

    useEffect(() => {
        const storedName = localStorage.getItem("name");
        setName(storedName);
    }, []);

    const handleSubmit = () => {
        router.push("/confidence")
    }
    return (
        <TransitionLayout>
            <BackgroundLayout>
                <div className="flex flex-col items-center space-y-[40px]">
                    <div className="space-y-[18px] text-center">
                        <div className="font-pg text-[48px] text-brownie">ยินดีต้อนรับ</div>
                        <PinkText text={name} containerClassName="text-[24px]" textClassName="to-pink-red"/>
                    </div>
                    <div className="space-y-[10px] flex flex-col items-center">
                        <div className="text-dark-gray text-[14px] font-[400]">
                            <div>(พวกเราขอทำความรู้จักเธออีกซักนิด</div>
                            <div>เพื่อเลือกสินค้าที่เหมาะกับเธอที่สุดนะ)</div>
                        </div>
                        <PinkButton onClick={handleSubmit} />
                    </div>
                </div>
            </BackgroundLayout>
        </TransitionLayout>
    );
}