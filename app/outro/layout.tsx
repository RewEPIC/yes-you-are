"use client"
import { LayoutTransition } from "@/components/motion/transition-router"
import { usePathname } from "next/navigation"

interface IntroLayoutProps {
    children: React.ReactNode
}

export default function IntroLayout({ children }: Readonly<IntroLayoutProps>) {
    const pathname = usePathname()
    return (
        <LayoutTransition
            motionKey={pathname}
              className="w-full h-full"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ type: "spring", mass: 1, stiffness: 80, damping: 20 }}
        >
                {children}
        </LayoutTransition>
    )
}