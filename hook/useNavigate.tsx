import { useRouter } from "next/navigation"
import { useEffect } from "react"

interface UseNavigateProps {    
    delayInMs: number
    path: string
    initialCallback?: () => void
}

export function useNavigate({ initialCallback, delayInMs, path }: Readonly<UseNavigateProps>) {
    const router = useRouter()

    useEffect(() => {
        const timeout = setTimeout(() => 
            router.push(path)
        , delayInMs)
        initialCallback?.()
        return () => clearTimeout(timeout);
    }, [initialCallback, delayInMs, router, path])

}