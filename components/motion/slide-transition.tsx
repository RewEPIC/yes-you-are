'use client';
import { LayoutTransition } from '@/components/motion/transition-router';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

interface SlideTransitionProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}

const slideIn = {
  initial: { x: '-100%', opacity: 0, position: 'absolute' as const },
  animate: { x: 0, opacity: 1, position: 'relative' as const },
  exit: { x: '100%', opacity: 0, position: 'absolute' as const },
};

const slideBack = {
  initial: { x: '100%', opacity: 0, position: 'absolute' as const },
  animate: { x: 0, opacity: 1, position: 'relative' as const },
  exit: { x: '-100%', opacity: 0, position: 'absolute' as const },
};

export function SlideTransition({ children, className, duration = 0.3 }: Readonly<SlideTransitionProps>) {
  const pathname = usePathname();
  const history = useRef<string[]>([]);
  const [isBack, setIsBack] = useState(false);

  useEffect(() => {
    const index = history.current.lastIndexOf(pathname);
    if (index !== -1) {
      history.current = history.current.slice(0, index + 1);
      setIsBack(true);
    } else {
      history.current.push(pathname);
      setIsBack(false);
    }
  }, [pathname]);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="sync">
        <LayoutTransition
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
