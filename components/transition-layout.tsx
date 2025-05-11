import clsx from "clsx";
import { motion } from "framer-motion";

interface TransitionLayoutProps {
    children: React.ReactNode
    className?: string
}

export default function TransitionLayout({ children, className }: Readonly<TransitionLayoutProps>) {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={clsx("w-full h-full", className)}
        >
            {children}
        </motion.div>
    );
}