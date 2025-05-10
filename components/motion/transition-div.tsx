import { motion } from "framer-motion";

interface TransitionDivProps {
    children: React.ReactNode
    className?: string;
}

export default function TransitionDiv({ children, className }: Readonly<TransitionDivProps>) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 1.2,
                ease: [0.0, 0.1, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}