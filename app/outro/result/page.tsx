"use client";
import PinkButton from "@/components/buttons/pink-button";
import { baseUrl } from "@/lib/config";
import { result } from "@/lib/dictionary/result";
import SmallLogoBlack from "@/public/svgs/small-logo-black.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

const categories = [
    { icon: `${baseUrl}/images/shopping/category/trophy-icon.png`, label: "ความสำเร็จ", size: 6 },
    { icon: `${baseUrl}/images/shopping/category/heart-icon.png`, label: "ความมั่นใจ", size: 5 },
    { icon: `${baseUrl}/images/shopping/category/message-icon.png`, label: "การยอมรับ", size: 5 },
];

export default function Result() {
    const [name, setName] = useState<string | null>(null);
    const product = result.camera

    useEffect(() => {
        const storedName = localStorage.getItem("name");
        setName(storedName);
    }, [])

    return (
        <div className="relative w-full h-full flex flex-col justify-start items-center text-primary-dark-gray">
            <Image
                priority={true}
                src={`${baseUrl}/images/result-background.png`}
                alt="Result Background"
                width={390}
                height={844}
                className={"absolute top-0 left-0 object-cover w-full h-full -z-10"}
            />
            <div className="h-[54px] w-[328px] bg-white rounded-[16px] shadow-blue z-10" />
            <div className="absolute h-[54px] w-[328px] top-[27px] bg-pink-light-2 -z-10 rounded-[16px]"></div>
            <div className="flex flex-col justify-center items-center bg-white w-[291px] h-[745px] pt-[30px] pb-[49px] space-y-[16px]">
                <SmallLogoBlack width={140} height={69} />
                <div className="flex flex-col justify-center items-center gap-6  px-10">
                    <div className="text-[14px] font-[400]" >ขอมอบสิ่งนี้ให้แก่  {name}</div>
                    <Image loading="lazy" src={product.image} alt={product.name} width={104} height={130} />
                    <div className="flex flex-col text-center items-center space-y-[6px]">
                        <div className="text-[20px] font-[600]">{product.name}</div>
                        <div className="font-[300] text-[11px] py-[10px]">
                            {product.description.map((desc, index) => (
                                <div key={`line-${index}-${desc.at(0)}`}>{desc}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <hr className="h-[20px] border-dotted mx-[10px]"/>
                    <div className="flex flex-row justify-center space-x-[12px] pb-[10px]">
                        {categories.map(({ icon, label }) => (
                            <Image key={label} loading="lazy" src={icon} alt={label} width={38} height={38} />
                        ))}
                    </div>
                    <div className="grid grid-cols-2 place-items-center text-[13px] font-[500] w-full">
                        <div className="flex-1 space-y-[5px]">
                            <div>40% เจ้าแม่แฟชั่น</div>
                            <div>40% ความหวัง</div>
                        </div>
                        <div className="flex-1 space-y-[5px]">
                            <div>10% ความรัก</div>
                            <div>10% หุ้นสุดแซ่บ</div>
                        </div>
                    </div>
                    <div className="flex justify-center pt-[16px]">
                        <PinkButton name="share on ig story" className="w-[169px]"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
