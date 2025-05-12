import Arrow from "@/components/svg/icon/arrow"
import { products } from "@/lib/dictionary/products"
import Image from "next/image"
import Link from "next/link"

import PinkButton from "@/components/buttons/pink-button"
import Face from "@/public/images/icon/face-add-svgrepo-com.svg"
import Flower from "@/public/images/icon/flower-beauty-pretty-nature-svgrepo-com.svg"
import Lip from "@/public/images/icon/lips-beauty-pretty-sex-svgrepo-com.svg"
import Star from "@/public/images/icon/star.svg"

export async function generateStaticParams() {
    return Object.keys(products).map((product) => ({
      id: product,
    }))
}

interface ItemDetailProps {
    params: {
        id: string
    }
}

export default async function ItemDetail({ params }: Readonly<ItemDetailProps>) {
    const product = products[(await params).id as keyof typeof products]
    if (!product) return null
    return (
        <div className="relative w-full h-full bg-white">  
            <div className="relative w-full h-[400px] rounded-b-[120px] bg-primary-pink/40 flex items-center justify-center">
                <Image src={product.image} alt={product.name} className="w-auto h-[400px] z-20" width={1080} height={1350} quality={80} />
            </div>
            <Link href="/shopping/items" className="absolute top-8 left-6 bg-white rounded-full size-[40px] flex items-center justify-center">
                <Arrow color="#FB6E80" width="20" height="20" />
            </Link>
            <div className="px-[30px] pt-[21px]">
                <div className="font-[600] text-[36px] text-center pb-[12px]">{product.name}</div>
                <div className="grid grid-cols-2 gap-x-[50px] gap-y-[8px] font-[400] text-[13px] pb-[27px]">
                    <div className="flex items-center h-[48px] gap-x-[8px]"><Face width="32" height="32"/> {product.tags.face}</div>
                    <div className="flex items-center h-[48px] gap-x-[8px]"><Lip width="32" height="32"/> {product.tags.lip}</div>
                    <div className="flex items-center h-[48px] gap-x-[8px]"><Flower width="32" height="32"/> {product.tags.flower}</div>
                    <div className="flex items-center h-[48px] gap-x-[8px]"><Star width="32" height="32"/> {product.tags.star}</div>
                </div>
                <div className="space-y-[14px] pb-[46px]">
                    <div className="flex items-center gap-x-[9px] font-[600] text-[15px]">
                        <div>คำอธิบายสินค้า</div>
                        <div className="flex-1 h-px bg-black"/>
                    </div>
                    <div>
                        {product.description.map((desc, index) => (
                            <div key={`line-${index}-${desc.at(0)}`}>{desc}</div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center"><PinkButton name="สั่งซื้อ" /></div>
            </div>
        </div>
    )
}