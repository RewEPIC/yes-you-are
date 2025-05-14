"use client"
import BackgroundLayout from "@/components/background-layout";
import { useNavigate } from "@/hook/useNavigate";

export default function Outro1() {
    useNavigate({
        delayInMs: 2500,
        path: "/outro/2",
    })
    return (
        <BackgroundLayout className="flex flex-col justify-center items-center">
            <div className="font-[500] text-[20px]">อย่าพึ่งไปไหนนะ...</div>
        </BackgroundLayout>
    )
}