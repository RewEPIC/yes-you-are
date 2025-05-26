"use client"
import BackgroundLayout from "@/components/background-layout";
import PinkButton from "@/components/buttons/pink-button";
import { useSound } from "@/hook/useSound";
import { baseUrl } from "@/lib/config";
import { pgGrandCanyon } from "@/lib/font";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function OutroAffirmation() {
    const router = useRouter()
    const { toggle } = useSound(`${baseUrl}/audios/print.mp3`)
    const [selectedAffirmation, setSelectedAffirmation] = useState<React.ReactNode | null>(null)
    
    const handleClickResult = () => {
        setTimeout(() => {
            toggle()
        }, 300)
        router.push("/outro/result")
    }
    
    const affirmations: React.ReactNode[] = useMemo(() => [
        (
            <>
                <div>หวังว่าสิ่งที่เธอ &quot;เลือก&quot; ไป จะค่อยๆ</div>
                <div>ทำให้เธอเห็นว่าเธอไม่ต้องแสร้งเป็นใครเลย</div>
                <div>เพราะเธอ <span className={`text-primary-pink-dark ${pgGrandCanyon.className}`}>ในแบบที่เป็นอยู่</span> ก็ดีมากพอแล้ว</div>
            </>
        ),
        (
            <>
                <div>&quot;ตัวเธอ&quot; ไม่สามารถเป็นคนอื่นได้</div>
                <div>คนอื่นก็ไม่สามารถแทนที่ &quot;ตัวเธอ&quot; ได้เช่นกัน</div>
                <div>เพราะเธอมีหนึ่งเดียว <span className={`text-primary-pink-dark ${pgGrandCanyon.className}`}>พิเศษในแบบที่เธอเป็น</span></div>
            </>
        ),
        (
            <>
                <div>คงจะฟังดูแปลก ถ้าเราจะบอกว่า</div>
                <div>อยากให้เธอได้รับ &quot;สินค้า&quot; นั้นไป</div>
                <div>และ<span className={`text-primary-pink-dark ${pgGrandCanyon.className}`}>ไม่รู้สึกต้องการร้านค้าของเรา</span>อีกแล้ว</div>
                <br/>
                <div>แต่เมื่อไหร่ที่เธอยังต้องการ เราพร้อมต้อนรับเธอเสมอ</div>
            </>
        ),
        (
            <>
                <div>วันนี้เธอชมตัวเองแล้วหรือยัง ?</div>
                <div>หรือมีใคร ได้ชมอะไรเธอแล้วหรือเปล่า ?</div>
                <div>ถ้ายัง งั้นเราขอเป็นคนที่มอบคำนี้ให้กับเธอนะ</div>
                <br/>
                <div>วันนี้ <span className={`text-primary-pink-dark ${pgGrandCanyon.className}`}>เธอทำได้ดีมากแล้ว</span></div>
                <div>มาพยายามต่อไปด้วยกันนะ</div>
            </> 
        )
    ], [])
    
    // Select random affirmation only once when component mounts
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * affirmations.length)
        setSelectedAffirmation(affirmations[randomIndex])
    }, [affirmations])
    
    // Don't render until affirmation is selected to prevent flash
    if (!selectedAffirmation) {
        return null
    }
    
    return (
        <BackgroundLayout className="flex flex-col justify-center items-center font-[500] text-[13px] space-y-[50px]">
            <div className="text-center">{selectedAffirmation}</div>
            <PinkButton name="ไปรับใบเสร็จของเธอกันเลย!" onClick={handleClickResult} className="w-fit font-itim px-[16px]" />
        </BackgroundLayout>
    )
}