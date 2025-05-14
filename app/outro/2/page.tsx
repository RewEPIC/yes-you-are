"use client"
import BackgroundLayout from "@/components/background-layout";
import { useNavigate } from "@/hook/useNavigate";

export default function Outro2() {
    useNavigate({
        delayInMs: 4000,
        path: "/outro/3",
    })
    return (
        <BackgroundLayout className="flex flex-col justify-center items-center font-[500] text-[20px]">
            <div>มาลองสำรวจหัวใจของเธอ</div>
            <div>ที่กำลังจะเปลี่ยนไป</div>
            <div>ในทางที่ดีขึ้นกันดีกว่า</div>
        </BackgroundLayout>
    )
}