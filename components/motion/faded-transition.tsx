import { AnimatePresence, motion } from "framer-motion";

interface TransitionDivProps {
    children: React.ReactNode
    motionKey: number | string
    className?: string;
}

export default function FadedTransition({ children, motionKey, className }: Readonly<TransitionDivProps>) {
    return (
        <AnimatePresence mode="popLayout">
            <motion.div
                key={motionKey} // key must change to trigger re-animation
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className={className}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}