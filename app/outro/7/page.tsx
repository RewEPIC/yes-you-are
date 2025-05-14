"use client"
import BackgroundLayout from "@/components/background-layout";
import { useNavigate } from "@/hook/useNavigate";

export default function Outro7() {
    useNavigate({
        delayInMs: 3000,
        path: "/outro/affirmation",
    })
    return (
        <BackgroundLayout className="flex flex-col justify-center items-center font-[500] text-[14px]">
            <div>คำถามนี้เธอไม่จำเป็นต้องตอบเราหรอกนะ</div>
        </BackgroundLayout>
    )
}