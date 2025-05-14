"use client"
import BackgroundLayout from "@/components/background-layout";
import QuestionButton from "@/components/buttons/question-button";
import { useRouter } from "next/navigation";

export default function Outro3() {
    const router = useRouter()
    const handleClick = () => {
        router.push("/outro/4")
    }
    return (
        <BackgroundLayout className="flex flex-col justify-center items-center font-[500] text-[16px] space-y-[23px]">
            <div>ถ้าเธอได้รับ <span className="text-[24px] bg-gradient-to-b from-pink-light to-pink bg-clip-text text-transparent">‘สินค้า’</span> นี้ไปแล้ว</div>
            <div>เธอคิดว่าเธอจะพอใจกับตัวเองมากขึ้นมั้ย</div>
            <div className="space-y-[11px]">
                <QuestionButton name="แน่นอนอยู่แล้ว :)" onClick={handleClick} />
                <QuestionButton name="ไม่แน่ใจ :/" onClick={handleClick} />
            </div>
        </BackgroundLayout>
    )
}