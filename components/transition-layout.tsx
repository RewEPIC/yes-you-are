import clsx from "clsx";
import { motion } from "framer-motion";

interface TransitionLayoutProps {
    children: React.ReactNode
    className?: string;
    onClick?: () => void;
}

export default function TransitionLayout({ children, className, onClick }: Readonly<TransitionLayoutProps>) {
    return (
        <motion.div
            onClick={onClick}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={clsx(onClick ? "cursor-pointer" : "", className)}
        >
            {children}
        </motion.div>
    );
}