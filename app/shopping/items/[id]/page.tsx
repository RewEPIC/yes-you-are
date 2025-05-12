import ItemDetailClient from "@/app/shopping/items/[id]/item-detail"
import { products } from "@/lib/dictionary/products"

export async function generateStaticParams() {
    return Object.keys(products).map((product) => ({
      id: product,
    }))
}

export default function ItemDetail() {
    return (<ItemDetailClient/>)
}