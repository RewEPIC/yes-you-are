"use client"
import BackgroundLayout from "@/components/background-layout";
import PinkButton from "@/components/buttons/pink-button";
import { useRouter } from "next/navigation";

function GradientText({ children }: Readonly<{ children: React.ReactNode }>) {
    return (<span className="bg-gradient-to-b from-pink-light to-pink bg-clip-text text-transparent py-4">{children}</span>)
}

export default function OutroAffirmation() {
    const router = useRouter()
    const handleClickResult = () => {
        router.push("/outro/result")
    }
    const affirmations = [
        (
            <>
                <div>หวังว่าสิ่งที่เธอ “เลือก” ไป จะค่อยๆ</div>
                <div>ทำให้เธอเห็นว่าเธอไม่ต้องแสร้งเป็นใครเลย</div>
                <div>เพราะเธอ <GradientText>ในแบบที่เป็นอยู่</GradientText> ก็ดีมากพอแล้ว</div>
            </>
        ),
        (
            <>
                <div>“ตัวเธอ” ไม่สามารถเป็นคนอื่นได้</div>
                <div>คนอื่นก็ไม่สามารถแทนที่ “ตัวเธอ” ได้เช่นกัน</div>
                <div>เพราะเธอมีหนึ่งเดียว <GradientText>พิเศษในแบบที่เธอเป็น</GradientText></div>
            </>
        ),
        (
            <>
                <div>คงจะฟังดูแปลก ถ้าเราจะบอกว่า</div>
                <div>อยากให้เธอได้รับ “สินค้า” นั้นไป</div>
                <div>และ<GradientText>ไม่รู้สึกต้องการร้านค้าของเรา</GradientText>อีกแล้ว</div>
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
                <div>วันนี้ <GradientText>เธอทำได้ดีมากแล้ว</GradientText></div>
                <div>มาพยายามต่อไปด้วยกันนะ</div>
            </> 
        )
    ]
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)]
    return (
        <BackgroundLayout className="flex flex-col justify-center items-center font-[500] text-[13px] space-y-[50px]">
            <div className="text-center">{randomAffirmation}</div>
            <PinkButton name="ไปรับใบเสร็จของเธอกันเลย!" onClick={handleClickResult} className="w-fit font-itim px-[16px]" />
        </BackgroundLayout>
    )
}