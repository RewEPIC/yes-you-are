import clsx from "clsx";
import { motion } from "framer-motion";

interface TransitionLayoutProps {
    children: React.ReactNode
    motionKey?: string
    layoutId?: string
    className?: string
}

export default function TransitionLayout({ motionKey, children, className }: Readonly<TransitionLayoutProps>) {
    return (
        <motion.div
            key={motionKey}
            layoutId={motionKey}
            initial={{ opacity: 0, y: 0 }} // Start with modal hidden and moved down
            animate={{ opacity: 1, y: 0 }} // Fade in and move to normal position
            exit={{ opacity: 0, y: 0 }} // Fade out and move down when exiting
            transition={{ duration: 1.2 }}
            className={clsx("w-full h-full", className)}
        >
            {children}
        </motion.div>
    );
}