"use client"
import BackgroundLayout from "@/components/background-layout";
import { useNavigate } from "@/hook/useNavigate";

export default function Outro6() {
    useNavigate({
        delayInMs: 5000,
        path: "/outro/7",
    })
    return (
        <BackgroundLayout className="flex flex-col justify-center items-center font-[500] text-[14px]">
            <div>ถ้าสิ่งที่เธอกำลังต้องการ ฝากมาบอกว่า</div>
            <div>สิ่งเหล่านั้นก็ต้องการตัวเธอเหมือนกัน</div>
            <div>|</div>
            <div>เธอจะกล้าโอบกอดมันไว้มั้ย ?</div>
        </BackgroundLayout>
    )
}