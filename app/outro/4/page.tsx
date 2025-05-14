"use client"
import BackgroundLayout from "@/components/background-layout";
import { useNavigate } from "@/hook/useNavigate";

export default function Outro4() {
    useNavigate({
        delayInMs: 7000,
        path: "/outro/5",
    })
    return (
        <BackgroundLayout className="flex flex-col justify-center items-center font-[500] text-[16px]">
            <div>ถ้าหากว่าเธอได้รับสินค้าชิ้นนี้ไป</div>
            <div>แล้วทุกอย่างยังเป็นแบบเดิม</div>
            <br />
            <div>เหมือนกับว่า.. สิ่งที่เธอคิดว่าเธอต้องการนั้น</div>
            <div>เป็นเพียงแค่เสียงในหัวของเธอเอง</div>
            <br />
            <div>เธอจะยังต้องการสินค้านี้อยู่หรือเปล่า ? </div>
        </BackgroundLayout>
    )
}