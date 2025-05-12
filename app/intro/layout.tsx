"use client"
import { LayoutTransition } from "@/components/motion/transition-router"

interface IntroLayoutProps {
    children: React.ReactNode
}

export default function IntroLayout({ children }: Readonly<IntroLayoutProps>) {
    return (
        <LayoutTransition
              className="w-full h-full"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 1.2 }}
        >
                {children}
        </LayoutTransition>
    )
}