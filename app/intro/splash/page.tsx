"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Splash() {
  const router = useRouter()
  const [intro, setIntro] = useState(false)

  useEffect(() => {
    if (intro) return
    const timer = setTimeout(() => {
      setIntro(true)
      router.push("/intro/name")
    }, 3000)
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
        src={"/videos/splash-intro-open.mp4"}
        width={400}
        height={900}
      />
    </div>
  )
}