"use client"

import { LayoutTransition } from "@/components/motion/transition-router";
import React from "react";

interface LayoutWrapperProps {
    children: React.ReactNode
    motionKey?: string
}

export default function LayoutWrapper({ motionKey, children }: Readonly<LayoutWrapperProps>) {

    return (
        <LayoutTransition
            motionKey={motionKey}
            className="w-full h-full"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {children}
        </LayoutTransition>
    )
}