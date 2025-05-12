'use client';
import { baseUrl } from '@/lib/config';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useMemo, useState } from 'react';

const cards = [
  { 
    label: "Card Bottom Center",
    card: `${baseUrl}/images/shopping/random/card-bottom-center.png`, 
    pink: `${baseUrl}/images/shopping/random/card-bottom-center-pink.png`,
  },{
    label: "Card Bottom Right",
    card: `${baseUrl}/images/shopping/random/card-bottom-right.png`,
    pink: `${baseUrl}/images/shopping/random/card-bottom-right-pink.png`,
  },{
    label: "Card Bottom Left",
    card: `${baseUrl}/images/shopping/random/card-bottom-left.png`,
    pink: `${baseUrl}/images/shopping/random/card-bottom-left-pink.png`,
  },{
    label: "Card Top Right",
    card: `${baseUrl}/images/shopping/random/card-top-right.png`,
    pink: `${baseUrl}/images/shopping/random/card-top-right-pink.png`,
  },{
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

export default function ShuffleCards() {
  const shuffleCards = useMemo(() => shuffleArray(cards), []);

  // Add motion values for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  // Add state to track if card is spinning and if it's flipped
  const [isSpinning, setIsSpinning] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  // Transform mouse position to rotation values
  const rotateX = useTransform(mouseY, [-300, 300], [25, -25]);

  // Handle spin animation when clicked
  const handleClick = () => {
    if (!isSpinning) {
      setIsSpinning(true);
      setIsFlipped(false);

      // Set a timeout to mark the card as flipped when animation completes
      setTimeout(() => {
        setIsFlipped(true);
        setIsSpinning(false);
      }, 1500); // This should match the duration of the spin animation
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    // Calculate mouse position relative to the center of the container
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);

    mouseX.set(offsetX);
    mouseY.set(offsetY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovering(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const rotateY = () => {
    if (isSpinning) {
      return 540
    } else {
      return isFlipped ? 540 : 0; 
    }
  }

  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center"
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        perspective: 800,
      }}
    >
      {shuffleCards.map(({ label, card, pink }, i) => {
        const middleIndex = Math.floor(cards.length / 2);
        const offset = i - middleIndex;
        const isCenterCard = offset === 0;

        return (
          <motion.div
            key={label}
            layoutId={label}
            style={{
              transformStyle: "preserve-3d",
              rotateX: isCenterCard && isHovering && !isSpinning ? rotateX : 0,
              zIndex: cards.length - Math.abs(offset),
            }}
            animate={isCenterCard ? 
              { rotateY: rotateY(), x: 0, y: 0,  } :
              { rotate: offset * 10, x: offset * 75, y: Math.abs(offset) * 10 * 2, }
            }
            initial={{ rotateY: 0, x: 0,y: 0 }}
            transition={isCenterCard ? 
              { rotateY: { duration: 1, ease: [0.2, 0.65, 0.3, 0.9], } } : 
              { type: 'spring', stiffness: 150, damping: 30 }
            }
            className="absolute w-48 h-64 rounded-lg flex items-center justify-center text-3xl drop-shadow-red"
          >
            {/* Show card back or front based on rotation */}
            <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
             {/* Front */}
             <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  backfaceVisibility: 'hidden',
                }}
              >
                <Image
                  loading="lazy"
                  className="absolute inset-0 object-cover rounded-lg"
                  src={card} 
                  alt="card front" 
                  width={isCenterCard ? 200 : 160}
                  height={isCenterCard ? 300 : 200}
                  quality={80} 
                />
              </div>
             {/* Back */}
             <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  backfaceVisibility: 'hidden', 
                  transform: 'rotateY(180deg)',
                }}
              >
                <Image
                  loading="lazy"
                  className="absolute inset-0 object-cover rounded-lg"
                  src={pink} 
                  alt="card back" 
                  width={isCenterCard ? 200 : 160}
                  height={isCenterCard ? 300 : 200}
                  quality={80} 
                />
                <div className='absolute inset-0 flex items-center justify-center z-10 text-white text-xl'>Hello World</div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}