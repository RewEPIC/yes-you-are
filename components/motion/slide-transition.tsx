'use client';
import { LayoutTransition } from '@/components/motion/transition-router';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

interface SlideTransitionProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  basePath?: string; // 👈 optional base path to calculate relative depth
}

const slideIn = {
  initial: { x: '100%', opacity: 0, position: 'absolute' as const },
  animate: { x: 0, opacity: 1, position: 'relative' as const },
  exit: { x: '-100%', opacity: 0, position: 'absolute' as const },
};

const slideBack = {
  initial: { x: '-100%', opacity: 0, position: 'absolute' as const },
  animate: { x: 0, opacity: 1, position: 'relative' as const },
  exit: { x: '100%', opacity: 0, position: 'absolute' as const },
};

export function SlideTransition({
  children,
  className,
  duration = 0.3,
  basePath = '', // 👈 default to empty string (root)
}: Readonly<SlideTransitionProps>) {
  const pathname = usePathname();
  const prevDepth = useRef(0);
  const [isBack, setIsBack] = useState(false);

  // Normalize basePath and pathname
  const normalizedBase = basePath.replace(/\/$/, ''); // remove trailing slash
  const relativePath = pathname.replace(normalizedBase, '') || '/';

  // Count segments from relative path (ignore empty strings)
  const currentDepth = relativePath.split('/').filter(Boolean).length;

  const prevPath = useRef<string>('');
  useEffect(() => {
    const isGoingBack = currentDepth < prevDepth.current
      || (currentDepth === prevDepth.current && pathname < prevPath.current); // Optional lexicographic fallback
  
    setIsBack(isGoingBack);
    prevDepth.current = currentDepth;
    prevPath.current = pathname;
  }, [pathname, currentDepth]);
  

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <LayoutTransition
          motionKey={relativePath}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={isBack ? slideBack : slideIn}
          transition={{ type: 'tween', duration }}
          className={className ?? 'w-full h-full'}
        >
          {children}
        </LayoutTransition>
      </AnimatePresence>
    </div>
  );
}
