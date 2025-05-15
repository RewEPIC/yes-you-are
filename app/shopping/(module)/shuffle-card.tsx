'use client';
import { baseUrl } from '@/lib/config';
import { products } from '@/lib/dictionary/products';
import { pgGrandCanyon } from '@/lib/font';
import SmallLogo from "@/public/svgs/small-logo.svg";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo, useState } from 'react';

const cards = [
  {
    label: "Card Bottom Center",
    card: `${baseUrl}/images/shopping/random/card-bottom-center.png`,
    pink: `${baseUrl}/images/shopping/random/card-bottom-center-pink.png`,
  }, {
    label: "Card Bottom Right",
    card: `${baseUrl}/images/shopping/random/card-bottom-right.png`,
    pink: `${baseUrl}/images/shopping/random/card-bottom-right-pink.png`,
  }, {
    label: "Card Bottom Left",
    card: `${baseUrl}/images/shopping/random/card-bottom-left.png`,
    pink: `${baseUrl}/images/shopping/random/card-bottom-left-pink.png`,
  }, {
    label: "Card Top Right",
    card: `${baseUrl}/images/shopping/random/card-top-right.png`,
    pink: `${baseUrl}/images/shopping/random/card-top-right-pink.png`,
  }, {
    label: "Card Top Left",
    card: `${baseUrl}/images/shopping/random/card-top-left.png`,
    pink: `${baseUrl}/images/shopping/random/card-top-left-pink.png`,
  }
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    if (i !== j)
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled;
}

function randomProduct() {
  const keys = Object.keys(products);
  return products[keys[keys.length * Math.random() << 0] as keyof typeof products]
}

interface ShuffleCardsProps {
  onClick?: (id: string) => void
}

export default function ShuffleCards({ onClick }: Readonly<ShuffleCardsProps>) {
  const shuffleCards = useMemo(() => shuffleArray(cards), [])
  const product = useMemo(() => randomProduct(), [])
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = () => {
    if (isFlipped) {
      onClick?.(product.id)
      return
    }
    // Only allow clicking if not currently spinning
    if (!isSpinning) {
      setIsSpinning(true);

      // Complete one full spin
      setTimeout(() => {
        setIsFlipped(!isFlipped);
        setIsSpinning(false);
      }, 2000); // Animation completes in 600ms
    }
  };

  const rotateY = () => {
    if (isSpinning)
      return [0, 1080] //x = 0, y = 720
    else if (isFlipped)
      return 900 //x = 540, y = 0
    else
      return 0 //x = 0, y = 0
  }

  return (
    <>
      <motion.div
        className="relative w-full h-[450px] flex items-center justify-center"
        style={{ perspective: 1000 }}
      >
        {shuffleCards.map((cardItem, index) => {
          const middleIndex = Math.floor(shuffleCards.length / 2);
          const offset = index - middleIndex;
          const isCenterCard = offset === 0;

          return (
            <motion.div
              key={cardItem.label}
              layoutId={cardItem.label}
              className="absolute w-[190px] h-[240px] rounded-lg text-3xl drop-shadow-red flex justify-center items-center cursor-pointer"
              style={{
                transformStyle: "preserve-3d",
                zIndex: cards.length - Math.abs(offset),
              }}
              animate={isCenterCard ? {
                // For the center card
                rotateY: rotateY(),
                x: 0,
                y: 0,
              } : {
                // For peripheral cards
                rotate: offset * 15,
                x: offset * 70,
                y: Math.abs(offset) * 10,
              }}
              transition={isCenterCard && isSpinning ?
                { rotateY: { duration: 2, ease: "easeInOut" } } :
                { type: 'spring', stiffness: 200, damping: 25 }
              }
              onClick={isCenterCard ? handleClick : undefined}
            >
              {/* Card Front */}
              <div
                className="absolute w-full h-full rounded-lg flex justify-center items-center  cursor-pointer"
                style={{
                  scale: isCenterCard ? 1.5 : 1.1,
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(0deg)',
                }}
              >
                <Image
                  loading="lazy"
                  className="absolute inset-0 object-cover rounded-lg flex items-center justify-center cursor-pointer"
                  src={cardItem.card}
                  alt="card front"
                  width={190}
                  height={240}
                />
              </div>

              {/* Card Back */}
              <div
                className="absolute w-full h-full rounded-lg flex justify-center items-center"
                style={{
                  scale: isCenterCard ? 1.5 : 1.1,
                  opacity: isCenterCard && isFlipped ? 1 : 0,
                  transform: 'rotateY(180deg)',
                }}
              >
                <Image
                  loading="lazy"
                  className="absolute inset-0 object-cover rounded-lg flex flex-col items-center justify-center cursor-pointer"
                  src={cardItem.pink}
                  alt="card back"
                  width={190}
                  height={240}
                >

                </Image>
                <div className="absolute flex flex-col items-center justify-center space-y-[5px]">
                  <SmallLogo width={69} height={45} />
                  <div className="z-10 size-[100px] bg-pink-light/35 rounded-[15px] flex justify-center items-center">
                    <Image width={75} height={75} src={`${product.image}`} alt={product.name} />
                  </div>
                  <div className="z-10 text-white flex flex-col items-center justify-center">
                    <div className="text-[8px] font-[300]">กดเพื่อไปต่อ</div>
                    <div className="text-[14px] font-[600]">{product.name}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      {(!isSpinning && !isFlipped) && 
        <div className={`${pgGrandCanyon.className} text-white text-[20px] text-shadow-lg`}>กดที่การ์ดตรงกลางเพื่อสุ่ม</div>
      }
    </>
  );
}