"use client";
import BackgroundLayout from "@/components/background-layout";
import PinkButton from "@/components/buttons/pink-button";
import { useRouter } from "next/navigation";

export default function Puzzle() {
    const router = useRouter()
    const handleSubmit = () => {
        router.push("/look")
    }
    return (
        <BackgroundLayout className="flex flex-col items-center justify-end p-[50px]">
            <div className="space-y-[22px] text-center">
                <PinkButton onClick={handleSubmit}/>
                <div className="text-brownie text-shadow-custom text-[14px] font-[500]">เลือกชิ้นส่วนเพื่อไปต่อ</div>
            </div>
        </BackgroundLayout>
    );
}