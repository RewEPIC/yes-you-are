import { baseUrl } from "@/lib/config";
import Image from "next/image";

interface ShoppingShelfProps {
  category: number;
  size: number;
  startIdx: number;
}

export default function ShoppingShelf({ category, size, startIdx }: Readonly<ShoppingShelfProps>) {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-x-[48px]">
          {Array.from({ length: 3 }).map((_, i) => {
            const index = startIdx + i;
            if (index >= size) return null; // Adjust based on max items
            return (
              <Image
                key={`item-${index}`}
                src={`${baseUrl}/images/shopping/items/${category}/${index}.png`}
                alt={`item-${index}`}
                width={80}
                height={100}
                loading="lazy"
                className="-mb-[45px] justify-self-center"
                quality={80}
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
