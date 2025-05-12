"use client";
import BackgroundLayout from "@/components/background-layout";
import PinkButton from "@/components/buttons/pink-button";
import { pgGrandCanyon } from "@/lib/font";
import { isTextEmpty } from "@/lib/text-util";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Look() {
    const [look, setLook] = useState("");
    const router = useRouter();
    const handleSubmit = () => {
        if (isTextEmpty(look, "กรุณากรอกคำตอบของคุณ")) return
        localStorage.setItem("look", look);
        router.push("/shopping");
    }
    return (
        <BackgroundLayout className="flex flex-col justify-end py-[100px] space-y-[260px]">
            <div className="flex flex-col items-center space-y-[19px]">
                <div className={`${pgGrandCanyon.className} text-[18px]`}>อยากให้คนอื่นมองเห็นเธอแบบไหน</div>
                <input
                    type="text"
                    value={look}
                    onChange={(e) => setLook(e.target.value)}
                    className="font-[400] text-[10px] bg-gray w-[237px] h-[33px] rounded-[18px] text-center"
                    placeholder="ใส่คำตอบของคุณ.."
                />
            </div>
            <PinkButton onClick={handleSubmit} />
        </BackgroundLayout>
    );
}