import { products } from "@/lib/dictionary/products";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ShoppingShelfProps {
  products: typeof products[keyof typeof products][];
  startIdx: number;
}

export default function ShoppingShelf({ products, startIdx }: Readonly<ShoppingShelfProps>) {
  const router = useRouter()
  return (
    <div className="w-full">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-x-[48px]">
          {Array.from({ length: 3 }).map((_, i) => {
            const index = startIdx + i;
            if (index >= products.length) return null; // Adjust based on max items
            const product = products[index];
            return (
              <Image
                key={`item-${index}`}
                // src={`${baseUrl}/images/shopping/items/${category}/${index}.png`}
                onClick={() => {
                  router.push(`/shopping/items/${product.id}`)
                }}
                src={product.image}
                alt={`item-${index}`}
                width={80}
                height={100}
                loading="lazy"
                className="-mb-[45px] justify-self-center cursor-pointer"
              />
            );
          })}
        </div>
      </div>
      <div className="border-y-[2px] border-primary-pink bg-shelf-cream h-[53px]" />
      <div className="bg-primary-pink h-[18px]" />
    </div>
  );
}
