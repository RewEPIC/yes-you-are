"use client";
import BackgroundLayout from "@/components/background-layout";
import PinkButton from "@/components/buttons/pink-button";
import TransitionLayout from "@/components/motion/transition-layout";
import PinkText from "@/components/text/pink-text";
import { useAudio } from "@/context/audio-context";
import { pgGrandCanyon } from "@/lib/font";
import { isTextEmpty } from "@/lib/text-util";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Intro() {
  const router = useRouter()
  const { playAudio } = useAudio()
  const [name, setName] = useState<string>("")
  const handleSubmit = () => {
    if (isTextEmpty(name, "กรุณากรอกชื่อของคุณ")) return
    localStorage.setItem("name", name)
    router.push("/intro/welcome")
    playAudio()
  }

  return (
    <TransitionLayout>
      <BackgroundLayout className="w-full h-full flex flex-col items-center space-y-[19px]">
        <div className={`${pgGrandCanyon.className} text-[24px] leading-none text-brownie`}>
          <span className="text-shadow-custom">อยากให้เราเรียก</span>
          <PinkText text="ชื่อเธอ" containerClassName="text-[24px]" />
          <span className="text-shadow-custom">ว่าอะไรดี?</span>
        </div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="font-[400] text-[10px] bg-gray w-[237px] h-[33px] rounded-[18px] text-center"
          placeholder="ใส่คำตอบของคุณ.."
        />
        <PinkButton onClick={handleSubmit}/>
      </BackgroundLayout>
    </TransitionLayout>
  )
}