"use client"
// HELPER: do transition layout with framer motion

import { LayoutTransition } from "@/components/motion/transition-router";

export default function TransitionPageLayout({ children }: Readonly<{ children: React.ReactNode}>) {
    // const pathname = usePathname()
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
