"use client";
import BackgroundLayout from "@/components/background-layout";
import Logo from "@/components/svg/logo";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter()
  const [intro, setIntro] = useState(false)

  useEffect(() => {
    if (intro) return
    const timer = setTimeout(() => {
        setIntro(true)
        router.push("/intro/splash")
    }, 100)
    return () => clearTimeout(timer);
  }, [router, intro])

  return (
    <BackgroundLayout>
      <Logo/>
    </BackgroundLayout>
  );
}
