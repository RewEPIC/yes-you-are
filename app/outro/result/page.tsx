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
        
        // Store original styles
        const originalStyles = {
            visibility: divRef.current.style.visibility,
            opacity: divRef.current.style.opacity,
            position: divRef.current.style.position,
            top: divRef.current.style.top,
            left: divRef.current.style.left,
            zIndex: divRef.current.style.zIndex
        };

        // Move off-screen but make visible for html2canvas
        divRef.current.style.visibility = "visible";
        divRef.current.style.opacity = "1";
        divRef.current.style.position = "fixed";
        divRef.current.style.top = "-10000px";
        divRef.current.style.left = "-10000px";
        divRef.current.style.zIndex = "-9999";

        try {
            const canvas = await html2canvas(divRef.current, {
                scale: 2,
                useCORS: true,
                allowTaint: false,
                backgroundColor: null,
                width: 540,
                height: 960,
            });

            const dataURL = canvas.toDataURL('image/png');
            const link = document.createElement("a");
            link.href = dataURL;
            link.download = "yes-you-are-receipt.png";
            link.click();
        } finally {
            // Restore original styles
            divRef.current.style.visibility = originalStyles.visibility;
            divRef.current.style.opacity = originalStyles.opacity;
            divRef.current.style.position = originalStyles.position;
            divRef.current.style.top = originalStyles.top;
            divRef.current.style.left = originalStyles.left;
            divRef.current.style.zIndex = originalStyles.zIndex;
        }
    };

    return (
        <div className="relative flex flex-col justify-start items-center text-primary-dark-gray">
            <Image
                priority={true}
                src={`${baseUrl}/images/result-background.png`}
                alt="Result Background"
                width={390}
                height={844}
                className={"absolute top-0 left-0 object-cover w-full h-screen min-h-full -z-10"}
            />
            <div className="h-[54px] w-[328px] bg-white rounded-[16px] shadow-blue z-10" />
            <div className="absolute h-[54px] w-[328px] top-[27px] bg-pink-light-2 -z-10 rounded-[16px]" />
            <div className="pb-[40px]">
                <ImageCard
                    name={name}
                    product={product}
                    categories={categories}
                    confidence={confidence}
                    baseUrl={baseUrl}
                    onSaveImage={handleSaveImage}
                    variant="display" // สำหรับผู้ใช้เห็น
                />
            </div>
            {/* <div className="pb-[40px]"/> */}
            {/* Save Image Here */}
            <div ref={divRef} className="fixed invisible opacity-0 pointer-events-none -z-50 w-[540px] h-[960px] flex justify-center items-center overflow-hidden left-0 top-0">
                <ImageCard     
                    name={name}
                    product={product}
                    categories={categories}
                    confidence={confidence}
                    baseUrl={baseUrl}
                    onSaveImage={handleSaveImage}
                    variant="capture"
                    className="w-full h-full flex justify-center items-center"
                />
                <Image 
                    className="absolute -z-10 object-cover h-full w-full"
                    src={`${baseUrl}/images/result-background-download.jpg`} 
                    alt="Result Background Download" 
                    width={540} 
                    height={960}
                    priority
                />
            </div>
        </div>
    )
}