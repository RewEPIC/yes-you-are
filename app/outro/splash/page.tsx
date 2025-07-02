"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SplashOutro() {
  const router = useRouter()
  const [intro, setIntro] = useState(false)

  useEffect(() => {
    if (intro) return
    const timer = setTimeout(() => {
      setIntro(true)
      router.push("/outro/shopping")
    }, 3850)
    return () => clearTimeout(timer);
  }, [router, intro])
  return (
    <div
      className="w-full h-full flex justify-center items-center bg-white"
    >
      <video
        muted
        loop
        autoPlay
        src={"/videos/splash-outro.mp4"}
        width={450}
        height={900}
      />
    </div>
  )
}