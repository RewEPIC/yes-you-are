import ItemBuyClient from "@/app/shopping/items/[id]/buy/item-buy";
import { products } from "@/lib/dictionary/products";

export async function generateStaticParams() {
    return Object.keys(products).map((product) => ({
      id: product,
    }))
}

export default function ItemBuy() {
    return (<ItemBuyClient/>)
}