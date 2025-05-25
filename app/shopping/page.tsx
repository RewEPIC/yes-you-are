// shopping/page.tsx
"use client";

import ShoppingShelf from "@/app/shopping/(module)/shopping-shelf";
import ShuffleCards from "@/app/shopping/(module)/shuffle-card";
import CategoryButton from "@/components/buttons/category-button";
import ShoppingBrand from "@/components/container/shopping-brand";
import TransitionLayout from "@/components/motion/transition-layout";
import Logo from "@/components/svg/logo";
import PinkText from "@/components/text/pink-text";
import { useModal } from "@/hook/useModal";
import { baseUrl } from "@/lib/config";
import { products } from "@/lib/dictionary/products";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import ReactModal, { Styles } from "react-modal";

const shuffleModalStyles: Styles = {
    overlay: {
        zIndex: 99,
        backgroundColor: "rgba(0, 0, 0, 0.25)",
    },
    content: {
        zIndex: 99,
        background: "transparent",
        // inset: 0,
        border: "none",
        height: "100%",
        width: "28rem",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
    }
}

const modalStyles: Styles = {
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
    { 
        icon: `${baseUrl}/images/shopping/category/home-icon.png`, label: "Home", products: [
            products.amulet, products.pill, products.book,
            products.camera, products.card, products.key
        ] 
    },
    { 
        icon: `${baseUrl}/images/shopping/category/trophy-icon.png`, label: "ความสำเร็จ", products: [
            products.shoes, products.certificate, products.lottery, 
            products.job, products.salary, products.position
        ]
    },
    { 
        icon: `${baseUrl}/images/shopping/category/heart-icon.png`, label: "ความมั่นใจ", products: [
            products.pill, products.headphones, products.potion,
            products.camera, products.mirror, products.pen
        ]   
    },
    { 
        icon: `${baseUrl}/images/shopping/category/message-icon.png`, label: "การยอมรับ", products: [
            products.book, products.card, products.key,
            products.bracelet, products.amulet, products.crown
        ] 
    },
];

ReactModal.setAppElement('#root');

export default function Shopping() {
    const shoppingModal = useModal(true);
    const shuffleModal = useModal();
    const [category, setCategory] = useState(0);
    const router = useRouter()

    const handleRandomClick = () => {
        shuffleModal.open()
    }
    const handleCloseModal = useCallback(() => {
        shoppingModal.close();
      }, [shoppingModal]);
      
      const handleShuffleModalClose = useCallback(() => {
        shuffleModal.close();
      }, [shuffleModal]);

    const handleOpenShopping = () => {
        router.push("/shopping/items")
    }
    const handleCategoryClick = (index: number) => {
        setCategory(index);
    }
    const handleShuffleClick = useCallback((id: string) => {
        shuffleModal.close()
        router.push(`/shopping/items/${id}`)
    }, [shuffleModal, router])

    return (
        <>
            <ShoppingBrand />
            <div className="flex">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={"circle-" + index} className="-z-10 -mt-[50px] size-[84px] rounded-full bg-primary-pink"></div>
                ))}
            </div>
            {/* Category */}
            <div className="pt-[16px] flex flex-col items-center justify-center" >
                <div className="flex flex-col items-center justify-center space-y-[19px]">
                    <div className="text-black font-[700] text-[14px]">เลือกหมวดหมู่ที่เธอต้องการ</div>
                    <div className="flex space-x-[17px]">
                        {categories.map(({ icon, label }, index) => (
                            <CategoryButton
                                key={label}
                                active={index === category}
                                onClick={() => handleCategoryClick(index)}
                            >
                                <Image priority={true} src={icon} alt={label} width={40} height={40} quality={80} />
                                <div className="text-[11px] font-[500]">{label}</div>
                            </CategoryButton>
                        ))}
                    </div>
                    {/* Shelf Sections */}
                    <div className="relative overflow-x-hidden w-full"> {/* Adjust height as needed */}
                        <div
                            className="flex transition-transform duration-1000 ease-in-out"
                            style={{
                                transform: `translateX(-${category * 100}%)`,
                                width: `${categories.length + 1 * 100}%`,
                            }}
                        >
                            {categories.map((cat, idx) => (
                                <div key={`shelf-group-${idx}-${cat.label}`} className="w-full shrink-0 space-y-[18px]">
                                    {[0, 3].map((startIdx) => (
                                        <ShoppingShelf
                                            key={`shelf-${idx}-${startIdx}`}
                                            products={cat.products}
                                            startIdx={startIdx}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Shopping Button */}
                <div className="bg-shelf-pink w-full flex flex-col justify-center items-center pt-[41px] pb-[39px] space-y-[7px]">
                    <div className="font-[700] text-[15px]">ยินดีต้อนรับสู่พื้นที่ปลอดภัยของเธอ :)</div>
                    <div className="font-[500] text-[15px]">มาเลือกสิ่งที่ใจต้องการ แล้วเริ่มเปลี่ยนชีวิตได้เลย</div>
                    <Image 
                        onClick={handleOpenShopping}
                        className="drop-shadow-button cursor-pointer" 
                        src={`${baseUrl}/images/shopping/shopping-button.png`} 
                        alt="shopping-button" width={264} height={74} 
                    />
                </div>
                {/* Random Section */}
                <div
                    style={{ backgroundImage: `url('${baseUrl}/images/shopping/random/shopping-background.png')` }}
                    className={`relative w-full h-[678px] flex flex-col items-center bg-center bg-cover overflow-hidden`}
                >
                    {/* Absolute Images (relative to parent now) */}
                    <Image
                        priority={true}
                        className="absolute -bottom-34 drop-shadow-red"
                        src={`${baseUrl}/images/shopping/random/card-bottom-center.png`}
                        alt="card-bottom-center"
                        width={220}
                        height={180}
                    />
                    <Image
                        priority={true}
                        className="absolute -bottom-12 -right-36 drop-shadow-red"
                        src={`${baseUrl}/images/shopping/random/card-bottom-right.png`}
                        alt="card-bottom-right"
                        width={220}
                        height={180}
                    />
                    <Image
                        priority={true}
                        className="absolute -bottom-12 -left-42 drop-shadow-red"
                        src={`${baseUrl}/images/shopping/random/card-bottom-left.png`}
                        alt="card-bottom-left"
                        width={220}
                        height={180}
                    />
                    <Image
                        priority={true}
                        className="absolute top-1/3 bottom-1/3 -translate-y-1/3 -right-36 drop-shadow-red"
                        src={`${baseUrl}/images/shopping/random/card-top-right.png`}
                        alt="card-top-right"
                        width={220}
                        height={180}
                    />
                    <Image
                        priority={true}
                        className="absolute top-1/3 bottom-1/3 -translate-y-1/3 -left-38 drop-shadow-red"
                        src={`${baseUrl}/images/shopping/random/card-top-left.png`}
                        alt="card-top-right"
                        width={220}
                        height={180}
                    />
                    <main className="space-y-[30px]">
                        <div className="flex justify-center items-center h-[200px] overflow-hidden">
                            <Image
                                priority={true}
                                className="pt-[10px] drop-shadow-red"
                                src={`${baseUrl}/images/shopping/random/butterfly.png`}
                                alt="butterfly" 
                                width={220} 
                                height={180}
                            />
                        </div>
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
                                            <Image loading="lazy" src={icon} alt={label} width={40} height={40} />
                                            <div className="text-[11px] font-[500]">{label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                   {shoppingModal.isOpen && !shuffleModal.isOpen && <ReactModal
                    key="shopping-modal"
                        id="shopping-modal"
                        isOpen={shoppingModal.isOpen}
                        style={modalStyles}
                        onRequestClose={handleCloseModal}
                        // closeTimeoutMS={300}
                    >
                            <TransitionLayout className="flex flex-col justify-center items-center space-y-[20px]">
                                <div className="h-[99px] overflow-hidden flex items-center">
                                    <Logo size={198} />
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
                    </ReactModal>}
            </AnimatePresence>
            {/* Shuffle Modal */}
            <AnimatePresence>
                <ReactModal
                    key="shuffle-modal"
                    id="shuffle-modal"
                    isOpen={shuffleModal.isOpen}
                    style={shuffleModalStyles}
                    onRequestClose={handleShuffleModalClose}
                >
                    <TransitionLayout className="w-full h-full flex flex-col justify-center items-center">
                        <ShuffleCards onClick={handleShuffleClick} />
                    </TransitionLayout>
                </ReactModal>
            </AnimatePresence>
        </>
    );
}