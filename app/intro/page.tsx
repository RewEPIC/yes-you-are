"use client";
import BackgroundLayout from "@/components/background-layout";
import PinkButton from "@/components/buttons/pink-button";
import PinkText from "@/components/text/pink-text";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Intro() {
  const router = useRouter()
  const [name, setName] = useState<string>("")
  const handleSubmit = () => {
      localStorage.setItem("name", name)
      router.push("/welcome")
  }

  return (
    <BackgroundLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1.2, 
          ease: [0.0, 0.1, 0.25, 1], 
        }}
        className="flex flex-col items-center space-y-[19px]"
      >
        <div className="font-pg text-[24px] leading-none text-brownie">
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
        <PinkButton onClick={handleSubmit} />
      </motion.div>
    </BackgroundLayout>
  );
}