// shopping/items/page.tsx
"use client"
import clsx from "clsx";
import Image from "next/image";
import { useMemo, useState } from "react";

import FadedTransition from "@/components/motion/faded-transition";
import Arrow from "@/components/svg/icon/arrow";
import { baseUrl } from "@/lib/config";
import { products } from "@/lib/dictionary/products";
import Link from "next/link";

const categories = [
    {
        icon: `${baseUrl}/images/shopping/category/trophy-icon.png`,
        label: "ความสำเร็จ",
    },
    {
        icon: `${baseUrl}/images/shopping/category/heart-icon.png`,
        label: "ความมั่นใจ",
    },
    {
        icon: `${baseUrl}/images/shopping/category/message-icon.png`,
        label: "การยอมรับ",
    },
]
const categoriesProduct = [
    [
        products.shoes, products.lottery, products.certificate, products.salary, products.job, products.position,
        products.glasses, products.timelapse_capsule, products.game_controller, products.game_simulator, products.sugar_bracelet, products.relife_pen
    ],
    [
        products.pen, products.pill, products.camera, products.potion, products.headphones, products.mirror,
        products.anti_imposter_pin, products.universe_approved, products.level, products.no_comment_today_gift, products.sticker, products.right_amulet
    ],
    [
        products.crown, products.card, products.book, products.bracelet, products.key, products.amulet,
        products.crystal_ball, products.eye_patch, products.pillow
    ]
]

export default function ItemsPage() {
    const [category, setCategory] = useState(0)
    const canGoPrev = category > 0
    const canGoNext = category < categories.length - 1
    const currentCategory = categories[category]
    const currentProduct =  categoriesProduct[category]
    const items = useMemo(() => Array.from({ length: currentProduct.length }), [currentProduct])
    return (
        <div className="h-full py-[32px] px-[15px] bg-blue flex items-center justify-center ">
            <div className="relative flex flex-col rounded-[20px] overflow-auto bg-white w-full h-full shadow-big-card pb-[50px]">
                <div className="sticky top-0 left-0 w-full z-[999]">
                    {/* Section */}
                    <div className="relative w-full text-center flex justify-center bg-primary-pink pb-[18px] pt-[25px]">
                        <Link
                            href="/shopping"
                            className="absolute cursor-pointer top-[22px] left-[18px] bg-white rounded-full size-[32px] flex items-center justify-center"
                        >
                            <Arrow width="16" height="14" color="#F67EA8" />
                        </Link>
                        <div className="text-center text-white font-[600] text-[20px]">สินค้าทั้งหมด</div>
                        {/* Category */}
                        <FadedTransition motionKey={category}>
                            <Image src={currentCategory.icon} width={68} height={68} alt={currentCategory.label} className="absolute right-2 bottom-0" />
                        </FadedTransition>
                    </div>
                    {/* Navigation */}
                    <div className="flex justify-center items-center space-x-[22px] h-[50px] bg-white">
                        <button
                            className={clsx({ "cursor-pointer": canGoPrev })}
                            disabled={!canGoPrev}
                            onClick={() => setCategory((prev) => prev - 1)}
                        >
                            <Arrow color={canGoPrev ? undefined : "#D9D9D9"} />
                        </button>
                        <FadedTransition 
                            motionKey={currentCategory.label} 
                            className="w-[80px] font-[600] text-[14px] text-center"
                        >
                            {currentCategory.label}
                        </FadedTransition>
                        <button
                            className={clsx(`scale-x-[-1]`, { "cursor-pointer": canGoNext })}
                            disabled={!canGoNext}
                            onClick={() => setCategory((prev) => prev + 1)}
                        >
                            <Arrow color={canGoNext ? undefined : "#D9D9D9"} />
                        </button>
                    </div>
                </div>
                {/* Content */}
                <div className="flex-1 px-[27px] w-full flex flex-col justify-start items-center">
                    <FadedTransition motionKey={category} className="w-full h-full grid grid-cols-2 gap-x-[18px] gap-y-[17px]">
                        {items.map((_, index) => (
                            <Link 
                                key={"item-" + index} 
                                href={`/shopping/items/${currentProduct[index].id}`}
                                className="cursor-pointer h-full flex flex-col bg-gradient-to-b from-white-item-card to-yellow-item-card rounded-[8px] shadow-card">
                                <div className="flex flex-1 justify-center">
                                    <Image loading="lazy" src={currentProduct[index].image} alt={currentProduct[index].name} className="w-[120px] h-[140px]" width={540} height={675} />
                                </div>
                                <div className="p-[12px]">
                                    <div className="font-[300] text-[10px]">ความสำเร็จ</div>
                                    <div className="font-[600] text-[12px]">{currentProduct[index].name}</div>
                                </div>
                            </Link>
                        ))}
                    </FadedTransition>
                </div>
            </div>
        </div>
    )
}