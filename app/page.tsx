"use client";

import { useSound } from "@/hook/useSound";
import { baseUrl } from "@/lib/config";
import Link from "next/link";

export default function Home() {
  const { toggle } = useSound(`${baseUrl}/audios/intro-outro.mp3`);
  return (
    <Link
      className="w-full h-full flex justify-center items-center bg-white"
      href="/intro/splash"
      onClick={() => toggle()}
    >
      <video
        loop={true}
        autoPlay={true}
        muted={true}
        playsInline={true}
        src={"/videos/splash-intro.mp4"}
        className="w-full h-full object-cover"
        width={400}
        height={900}
      />
    </Link>
  );
}
