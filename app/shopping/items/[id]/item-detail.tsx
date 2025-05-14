"use client"
import Arrow from "@/components/svg/icon/arrow"
import { products } from "@/lib/dictionary/products"
import Image from "next/image"
import Link from "next/link"

import PinkButton from "@/components/buttons/pink-button"
import Face from "@/public/images/icon/face-add-svgrepo-com.svg"
import Flower from "@/public/images/icon/flower-beauty-pretty-nature-svgrepo-com.svg"
import Lip from "@/public/images/icon/lips-beauty-pretty-sex-svgrepo-com.svg"
import Star from "@/public/images/icon/star.svg"
import { useParams, useRouter } from "next/navigation"

export default function ItemDetailClient() {
    const { id } = useParams<{ id: string }>()
    const router = useRouter()
    const product = products[id as keyof typeof products]
    if (!product) return null
    const handleClickBack = () => {
        router.back()
    }
    return (
        <div className="relative w-full h-full bg-white flex flex-col">
            <div className="w-full h-[40px] pt-[50px] bg-primary-pink/40 z-10 flex items-center justify-center">
                <button onClick={handleClickBack} className="absolute left-6 bg-white rounded-full size-[40px] flex items-center justify-center">
                    <Arrow color="#FB6E80" width="20" height="20" />
                </button>
            </div>
            <div className="z-0 relative w-full h-[360px] rounded-b-[160px] bg-primary-pink/40 flex items-end justify-center">
                <Image loading="lazy" src={product.image} alt={product.name} className="w-[250px] h-auto z-20" width={540} height={675} />
            </div>
            <div className="px-[30px] pt-[21px]">
                <div className="font-[600] text-[36px] text-center pb-[12px]">{product.name}</div>
                <div className="grid grid-cols-2 gap-x-[50px] gap-y-[8px] font-[400] text-[13px] pb-[27px]">
                    <div className="flex items-center h-[48px] gap-x-[8px]"><Face width="32" height="32" /> {product.tags.face}</div>
                    <div className="flex items-center h-[48px] gap-x-[8px]"><Lip width="32" height="32" /> {product.tags.lip}</div>
                    <div className="flex items-center h-[48px] gap-x-[8px]"><Flower width="32" height="32" /> {product.tags.flower}</div>
                    <div className="flex items-center h-[48px] gap-x-[8px]"><Star width="32" height="32" /> {product.tags.star}</div>
                </div>
                <div className="space-y-[14px] pb-[30px]">
                    <div className="flex items-center gap-x-[9px] font-[600] text-[15px]">
                        <div>คำอธิบายสินค้า</div>
                        <div className="flex-1 h-px bg-black" />
                    </div>
                    <div>
                        {product.description.map((desc, index) => (
                            <div key={`line-${index}-${desc.at(0)}`}>{desc}</div>
                        ))}
                    </div>
                </div>
                <Link href={`/shopping/items/${id}/buy`} className="flex justify-center pb-[35px]">
                    <PinkButton name="สั่งซื้อ" />
                </Link>
            </div>
        </div>
    )
}