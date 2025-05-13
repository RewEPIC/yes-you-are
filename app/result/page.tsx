"use client";

import TransitionLayout from "@/components/motion/transition-layout";
import Logo from "@/components/svg/logo";
// import { products } from "@/lib/dictionary/products";
import { useEffect, useState } from "react";

// const categoriesProduct = [
//     [products.shoes, products.lottery, products.certificate, products.salary, products.job, products.position],
//     [products.pen, products.pill, products.camera, products.potion, products.headphones, products.mirror],
//     [products.crown, products.card, products.book, products.bracelet, products.amulet]
// ]
import Image from "next/image";
import PinkButton from "@/components/buttons/pink-button";
export default function Result() {

    // const [category, setCategory] = useState(0)
    // const currentProduct = categoriesProduct[category]
    const [name, setName] = useState<string | null>(null);

   useEffect(() => {
        const storedName = localStorage.getItem("name");
        setName(storedName);
    }, []);
    return (
        <TransitionLayout>
            {/* <BackgroundLayout className="flex flex-col justify-end py-[100px] space-y-[260px]"> */}
                <div className="flex flex-col justify-center font-bai-jamjuree">
                    <div className="justify-items-center " ><Logo /> </div>

                    <div className="flex flex-col justify-center items-center gap-6  px-10">

                        <div className="items-center" >ขอมอบสิ่งนี้ให้แก่  { name }</div>
                        <Image loading="lazy" src="./images/shopping/items/quality/shoes.png" alt="shoes" width={104} height={130} />

                        <div className="flex flex-col gap-6 items-center">
                            <div className="items-center  text-[20px] ">มงกุฏวิเศษ</div>
                            <div className="items-center text-[14px]">“เธอคือคนที่มุ่งมั่นและตั้งใจ
                                ไม่ว่าจะเจอกับอุปสรรคแค่ไหนก็ไม่ยอมแพ้
                                บางครั้งเธออาจรู้สึกว่าตัวเองไม่โดดเด่น
                                แต่ความจริงคือ ทุกย่างก้าวที่เธอลงมือทำ
                                มันได้ประกาศถึงความสำเร็จในตัวเองแล้ว
                                ขอให้มงกุฏนี้ เป็นสัญลักษณ์ของหัวใจ
                                ที่ไม่ยอมแพ้ของเธอนะ”
                            </div>
                        </div>
                    </div>
                    <div className="text-center">-----------------------------------------------------------</div>
                    <div className="flex flex-row justify-center items-center">
                        <Image loading="lazy" src="./images/shopping/category/heart-icon.svg" alt="shoes" width={38} height={38} />
                        <Image loading="lazy" src="./images/shopping/category/message-icon.svg" alt="shoes" width={38} height={38} />
                        <Image loading="lazy" src="./images/shopping/category/trophy-icon.svg" alt="shoes" width={38} height={38} />

                    </div>
                    <div className="grid grid-cols-2 gap-4 place-items-center">
                        <div>40% เจ้าแม่แฟชั่น</div>
                        <div>40% ความรัก</div>
                        <div>10% ความหวัง</div>
                        <div>10% หุ้นสุดแซ่บ</div>

                    </div>

                    <div className="flex justify-center"> <PinkButton name="Share on IG story"/></div>


                </div>

            {/* </BackgroundLayout> */}
        </TransitionLayout>
    );
}
