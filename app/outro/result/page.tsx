"use client";
import ImageCard from "@/app/outro/result/(module)/image-card";
import { baseUrl } from "@/lib/config";
import { products } from "@/lib/dictionary/products";
import html2canvas from "html2canvas";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const categories = [
    { icon: `${baseUrl}/images/shopping/category/trophy-icon.png`, label: "ความสำเร็จ", size: 6 },
    { icon: `${baseUrl}/images/shopping/category/heart-icon.png`, label: "ความมั่นใจ", size: 5 },
    { icon: `${baseUrl}/images/shopping/category/message-icon.png`, label: "การยอมรับ", size: 5 },
];

export default function Result() {
    const divRef = useRef<HTMLDivElement>(null);
    const [name, setName] = useState<string | null>(null);
    const [product, setProduct] = useState<(typeof products[keyof typeof products])>(products.camera)
    const [confidence, setConfidence] = useState<string[]>([])

    useEffect(() => {
        const storedName = localStorage.getItem("name");
        const storedProduct = localStorage.getItem("product");
        const storedConfidence = localStorage.getItem("confidence");
        const product = products?.[storedProduct as keyof typeof products]

        setName(storedName)
        setProduct(product || products.camera)
        setConfidence(storedConfidence?.split(",") ?? [])
    }, [])


    const handleSaveImage = async () => {
        if (!divRef.current) return;
        // เปิด visibility ชั่วคราว
        divRef.current.style.visibility = "visible";
        divRef.current.style.opacity = "1";
        divRef.current.style.position = "absolute";
        divRef.current.style.top = "0";
        divRef.current.style.left = "0";

        const canvas = await html2canvas(divRef.current, {
            useCORS: true,
            allowTaint: false,
            backgroundColor: null,
        });

        // กลับสู่เดิม
        divRef.current.style.visibility = "hidden";
        divRef.current.style.opacity = "0";
        divRef.current.style.position = "absolute";

        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "yes-you-are-receipt.png";
        link.click();

    };

    return (
        <div className="relative w-full flex flex-col justify-start items-center text-primary-dark-gray pb-[40px]">
            <Image
                priority={true}
                src={`${baseUrl}/images/result-background.png`}
                alt="Result Background"
                width={390}
                height={844}
                className={"absolute top-0 left-0 object-cover w-full -z-10"}
            />
            <div className="h-[54px] w-[328px] bg-white rounded-[16px] shadow-blue z-10" />
            <div className="absolute h-[54px] w-[328px] top-[27px] bg-pink-light-2 -z-10 rounded-[16px]" />
            <ImageCard     
                name={name}
                product={product}
                categories={categories}
                confidence={confidence}
                baseUrl={baseUrl}
                onSaveImage={handleSaveImage}
                variant="display" // สำหรับผู้ใช้เห็น
            />
            {/* Save Image Here */}
            <div ref={divRef} className="absolute opacity-0 -z-50 w-full h-full flex justify-center items-center">
                <ImageCard     
                    name={name}
                    product={product}
                    categories={categories}
                    confidence={confidence}
                    baseUrl={baseUrl}
                    onSaveImage={handleSaveImage}
                    variant="capture" // สำหรับผู้ใช้เห็น
                    className="h-full flex justify-center items-center"
                />
                <Image 
                    className="absolute -z-10"
                    src={`${baseUrl}/images/result-background-download.jpg`} 
                    alt="Result Background Downlolad" width={1254} height={2223} 
                />
            </div>                  
        </div>
    )
}
