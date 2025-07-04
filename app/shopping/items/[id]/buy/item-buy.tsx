"use client"
import GrayButton from "@/components/buttons/gray-button"
import PinkButton from "@/components/buttons/pink-button"
import Arrow from "@/components/svg/icon/arrow"
import { useAudio } from "@/context/audio-context"
import { useSound } from "@/hook/useSound"
import { baseUrl } from "@/lib/config"
import { products } from "@/lib/dictionary/products"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function ItemBuyClient() {
    const { id } = useParams<{ id: string }>()
    const router = useRouter()
    const audio = useAudio()
    const product = products[id as keyof typeof products]
    const [name, setName] = useState<string | null>(null)
    const { toggle } = useSound(`${baseUrl}/audios/intro-outro.mp3`)

    useEffect(() => {
        const storedName = localStorage.getItem("name")
        setName(storedName);
    }, []);

    if (!product) return null

    const handleClickBack = () => {
        router.back()
    }
    const handleClickOutro = () => {
        localStorage.setItem("product", id)
        router.push("/outro/splash")

        audio.setAudioSrc(`${baseUrl}/audios/outro.mp3`)
        audio.stopAudio()

        setTimeout(() => {
            toggle()
        }, 50)

        setTimeout(() => {
            audio.playAudio()
        }, 2500 + 4000)
    }
    
    return (
        <div className="w-full h-full bg-white flex flex-col">
            <div className="w-full h-[40px] pt-[50px] bg-green-blue z-10 flex items-center justify-center">
                <Link href=".." className="absolute left-6 bg-white rounded-full size-[40px] flex items-center justify-center">
                    <Arrow color="#FB6E80" width="20" height="20" />
                </Link>
                <div className="text-brownie text-[20px] font-[600]">
                    ทำการสั่งซื้อ
                </div>
            </div>
            <div className="w-full h-[518px] bg-gradient-to-b from-green-blue to-white flex flex-col items-center justify-start">
                <div className="pt-[40px] w-[300px] h-[300px] overflow-hidden flex justify-center items-center ">
                    <Image loading="lazy" src={product.image} alt={product.name} className="w-[200px] h-auto z-20" width={540} height={675} />
                </div>
                <div className="pt-[70px] font-[500] text-[15px]">{name} ได้เลือกสินค้า :</div>
            </div>
            <div className="w-full h-full flex flex-col justify-start items-center">
                <div className="pt-[20px] font-[600] text-[32px]">{product.name}</div>
                <div className="pt-[28px] font-[500] text-[15px]">เธอแน่ใจแล้วใช่มั้ยว่าต้องการสิ่งนี้ ?</div>
                <div className="pt-[19px] space-y-[8px] w-fit">
                    <div className="bg-gray-box rounded-[8px] h-[32px] flex items-center justify-center px-[20px]">{product.tags.face}</div>
                    <div className="bg-gray-box rounded-[8px] h-[32px] flex items-center justify-center px-[20px]">{product.tags.lip}</div>
                    <div className="bg-gray-box rounded-[8px] h-[32px] flex items-center justify-center px-[20px]">{product.tags.flower}</div>
                </div>
                <div className="pt-[45px] flex space-x-[9px] pb-[35px]">
                    <GrayButton name="ยังก่อน" onClick={handleClickBack}/>
                    <PinkButton name="แน่ใจ" className="!shadow-none" onClick={handleClickOutro}/>
                </div>
            </div>
        </div>
    )
}