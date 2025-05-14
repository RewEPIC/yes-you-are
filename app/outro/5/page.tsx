"use client"
import BackgroundLayout from "@/components/background-layout";
import QuestionButton from "@/components/buttons/question-button";
import { useRouter } from "next/navigation";

export default function Outro5() {
    const router = useRouter()
    const handleClick = () => {
        router.push("/outro/6")
    }
    return (
        <BackgroundLayout className="flex flex-col justify-center items-center space-y-[17px]">
            <QuestionButton name="ฉันยังต้องการมันอยู่" onClick={handleClick} />
            <QuestionButton name="ไม่ล่ะ ฉันไม่ต้องการแล้ว" onClick={handleClick} />
        </BackgroundLayout>
    )
}