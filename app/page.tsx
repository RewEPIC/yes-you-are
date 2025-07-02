"use client";

import Link from "next/link";

export default function Home() {
  return (
    <Link
      className="w-full h-full flex justify-center items-center bg-white"
      href="/intro/splash"
    >
      <video
        muted
        loop
        autoPlay
        src={"/videos/splash-intro.mp4"}
        width={400}
        height={900}
      />
    </Link>
  );
}
