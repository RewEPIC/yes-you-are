"use client"
import BackgroundLayout from "@/components/background-layout";
import { useNavigate } from "@/hook/useNavigate";
import Check from "@/public/images/icon/check.svg";
import { useState } from "react";
 
export default function OutroShopping() {
    const [name, setName] = useState<string | null>(null);

    useNavigate({
        delayInMs: 2000,
        path: "/outro/1",
        initialCallback: () => {
            const storedName = localStorage.getItem("name")
            setName(storedName)
        }
    })
        
    return (
        <BackgroundLayout className="flex flex-col text-center space-y-[17px]">
            <div className="bg-primary-pink rounded-full size-[82px] flex justify-center items-center">
                <Check color="#FFFFFF" width={48} height={36}/>
            </div>
            <div className="flex flex-col text-brownie text-[20px] font-[500]">
                <div><span className="pt-4 text-[24px] bg-gradient-to-b from-pink-light to-pink-red bg-clip-text text-transparent">{name}</span> ได้ทำการสั่งซื้อสำเร็จ!</div>
                <div>ขอบคุณที่ไว้ใจ Yes You Are Shopping</div>
            </div>
        </BackgroundLayout>
    )
}