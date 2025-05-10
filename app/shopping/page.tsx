"use client";

import CategoryButton from "@/components/buttons/category-button";
import PinkText from "@/components/text/pink-text";
import TransitionLayout from "@/components/transition-layout";
import { baseUrl } from "@/lib/config";
import Image from "next/image";
import { useState } from "react";
import ReactModal, { Styles } from "react-modal";

const customStyles: Styles = {
    overlay: {
        zIndex: 99,
        backgroundColor: "rgba(0, 0, 0, 0.25)",
    },
    content: {
        zIndex: 99,
        border: '1px solid #3D3A38',
        borderRadius: '16px',
        height: "480px",
        width: "320px",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
    },
};

const categories = [
    { icon: `${baseUrl}/images/shopping/category/home-icon.svg`, label: "Home", size: 6 },
    { icon: `${baseUrl}/images/shopping/category/trophy-icon.svg`, label: "ความสำเร็จ", size: 6 },
    { icon: `${baseUrl}/images/shopping/category/heart-icon.svg`, label: "ความมั่นใจ", size: 5 },
    { icon: `${baseUrl}/images/shopping/category/message-icon.svg`, label: "การยอมรับ", size: 5 },
];

ReactModal.setAppElement('#root');

export default function Shopping() {
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const [category, setCategory] = useState(0);

    const handleCloseModal = () => {
        setModalIsOpen(false);
    }
    const handleRandomClick = () => {

    }

    return (
        <TransitionLayout className="flex items-center justify-center">
            <div className="h-full flex flex-col items-start">
                <Image src={`${baseUrl}/images/shopping/background.svg`} alt="background" width={398} height={224} className="z-10 w-full" />
                <div className="flex z-0">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div key={"circle-" + index} className="-mt-[45px] size-[84px] rounded-full bg-primary-pink"></div>
                    ))}
                </div>
                <div className="pt-[16px] w-full flex flex-col items-center justify-center space-y-[19px]" >
                    <div className="text-black font-[700] text-[14px]">เลือกหมวดหมู่ที่เธอต้องการ</div>
                    <div className="flex space-x-[17px]">
                        {categories.map(({ icon, label }, index) => (
                            <CategoryButton
                                key={label}
                                active={index === category}
                                onClick={() => setCategory(index)}
                            >
                                <Image src={icon} alt={label} width={40} height={40} />
                                <div className="text-[11px] font-[500]">{label}</div>
                            </CategoryButton>
                        ))}
                    </div>
                    {/* Shelf Sections */}
                    {[0, 3].map((startIdx) => (
                        <div key={`shelf-${startIdx}`} className="w-full">
                            <div className="flex justify-center items-center w-full">
                                <div className="grid grid-cols-3 gap-x-[48px]">
                                    {Array.from({ length: 3 }).map((_, i) => ((startIdx + i <= categories[category].size - 1) && 
                                        <Image
                                            className="-mb-[45px] justify-self-center"
                                            key={`item-${startIdx + i}`}
                                            src={`${baseUrl}/images/shopping/items/${category}/${startIdx + i}.svg`}
                                            alt="item"
                                            width={80}
                                            height={100}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="border-y-[2px] border-primary-pink bg-shelf-cream w-full h-[53px]" />
                            <div className="bg-primary-pink w-full h-[18px]"></div>
                        </div>
                    ))}
                    {/* Shopping */}
                    <div className="bg-primary-pink rounded-[3px] w-[97px] h-[28px] flex items-center justify-center text-white font-[700] text-[13px]">
                        SHOPPING
                    </div>
                    {/* Random Section */}
                    <div 
                        style={{ backgroundImage: `url('${baseUrl}/images/shopping/random/background.svg')` }}
                        className={`relative w-full h-[678px] flex flex-col items-center bg-center bg-cover overflow-hidden`}
                    >
                        {/* Absolute Images (relative to parent now) */}
                        <Image
                            className="absolute bottom-0"
                            src={`${baseUrl}/images/shopping/random/card-bottom-center.svg`}
                            alt="card-bottom-center"
                            width={240}
                            height={240}
                        />
                        <Image
                            className="absolute bottom-0 right-0"
                            src={`${baseUrl}/images/shopping/random/card-bottom-right.svg`}
                            alt="card-bottom-right"
                            width={100}
                            height={100}
                        />
                        <Image
                            className="absolute bottom-0 left-0"
                            src={`${baseUrl}/images/shopping/random/card-bottom-left.svg`}
                            alt="card-bottom-left"
                            width={60}
                            height={60}
                        />  
                        <Image
                            className="absolute top-1/3 bottom-1/3 -translate-y-1/3 right-0"
                            src={`${baseUrl}/images/shopping/random/card-top-right.svg`}
                            alt="card-top-right"
                            width={90}
                            height={90}
                        />
                        <Image
                            className="absolute top-1/3 bottom-1/3 -translate-y-1/3 left-0"
                            src={`${baseUrl}/images/shopping/random/card-top-left.svg`}
                            alt="card-top-right"
                            width={80}
                            height={80}
                        />              
                        <main className="space-y-[30px]">
                            <Image className="pt-[10px]" src={`${baseUrl}/images/shopping/random/butterfly.svg`} alt="butterfly" width={218} height={173} />
                            <div className="w-[202px] h-[273px] flex flex-col bg-yellow-card rounded-[10px] shadow-card overflow-hidden">
                                <div className="flex flex-col flex-1 justify-center items-center space-y-[18px]">
                                    <div className="text-center font-[600] text-[20px] leading-[1.25]">
                                        <div>ให้เราเลือกสินค้า</div>
                                        <div>ที่เหมาะกับคุณ</div>
                                    </div>
                                    <button 
                                        onClick={handleRandomClick}
                                        className="font-itim text-center bg-pink-light-2 rounded-[14px] text-white w-[59px] h-[28px] cursor-pointer"
                                    >
                                        สุ่ม
                                    </button>
                                </div>
                                <div className="flex flex-col items-center justify-center h-[100px] bg-pink-card space-y-[5px]">
                                    <div className="font-[600] text-[13px]">สุ่มตามประเภทที่สนใจ</div>
                                    <div className="flex space-x-[6px]">
                                        {categories.slice(1).map(({ icon, label }) => (
                                            <div className="flex flex-col items-center" key={label}>
                                                <Image src={icon} alt={label} width={40} height={40} />
                                                <div className="text-[11px] font-[500]">{label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </main>    
                    </div>
                </div>
            </div>

            <ReactModal
                isOpen={modalIsOpen}
                style={customStyles}
            >
                <TransitionLayout className="flex flex-col justify-center items-center space-y-[20px]">
                    <div className="h-[99px] overflow-hidden flex items-center">
                        <Image src={`${baseUrl}/images/logo.png`} alt="logo" width={198} height={99} />
                    </div>
                    <div className="text-brownie text-[16px] font-[500] text-center">
                        <div>“เธอสามารถเลือกซื้อสินค้าได้แค่</div>
                        <div>
                            <PinkText
                                text="ชิ้นเดียวเท่านั้น"
                                shadowTextClassName="hidden"
                                textClassName="font-bai-jamjuree text-[16px]"
                            />คิดให้ดีก่อนตัดสินใจ
                        </div>
                        <div>อะไรคือสิ่งที่เธอต้องการมากที่สุดตอนนี้”</div>
                    </div>
                    <button onClick={handleCloseModal} className="cursor-pointer bg-primary-dark-gray py-[6px] px-[33px] text-white rounded-[16px]">
                        ตกลง
                    </button>
                </TransitionLayout>
            </ReactModal>
        </TransitionLayout>
    );
}