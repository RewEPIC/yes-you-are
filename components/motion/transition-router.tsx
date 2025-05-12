import { AnimatePresence, motion } from "framer-motion";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useSelectedLayoutSegment } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";

function usePreviousValue<T>(value: T): T | undefined {
    const prevRef = useRef<T | undefined>(undefined);
    useEffect(() => {
        prevRef.current = value;
    }, [value]);
    return prevRef.current;
}

function FrozenRouter(props: Readonly<{ children: React.ReactNode }>) {
    const [isClient, setIsClient] = useState(false)
    const context = useContext(LayoutRouterContext)
    const prevContext = usePreviousValue(context) || null

    const segment = useSelectedLayoutSegment()
    const prevSegment = usePreviousValue(segment)

    const changed = Boolean(segment !== prevSegment && segment !== undefined && prevSegment !== undefined)

    // Ensure that the code only runs after hydration (on the client)
    useEffect(() => {
        const timeout = setTimeout(() => setIsClient(true), 10);
        return () => clearTimeout(timeout);
    }, []);
    

    if (!isClient) {
        return null // Render nothing until client-side hydration
    }

    return (
        <LayoutRouterContext.Provider value={changed ? prevContext : context}>
            {props.children}
        </LayoutRouterContext.Provider>
    )
}

interface LayoutTransitionProps {
    children: React.ReactNode
    className?: React.ComponentProps<typeof motion.div>["className"]
    style?: React.ComponentProps<typeof motion.div>["style"]
    initial: React.ComponentProps<typeof motion.div>["initial"]
    animate: React.ComponentProps<typeof motion.div>["animate"]
    exit?: React.ComponentProps<typeof motion.div>["exit"]
    transition: React.ComponentProps<typeof motion.div>["transition"]
    variants?: React.ComponentProps<typeof motion.div>["variants"]
}

export function LayoutTransition({
    children,
    className,
    style,
    initial,
    animate,
    exit,
    transition,
    variants
}: Readonly<LayoutTransitionProps>) {
    const segment = useSelectedLayoutSegment()

    return (
        <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
                className={className}
                style={style}
                key={segment}
                initial={initial}
                animate={animate}
                exit={exit}
                transition={transition}
                variants={variants}
            >
                <FrozenRouter>
                    {children}
                </FrozenRouter>
            </motion.div>
        </AnimatePresence>
    )
}