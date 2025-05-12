"use client"
import { baseUrl } from "@/lib/config";
import background from "@/lib/lotties/background.json";
import clsx from "clsx";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
interface BackgroundLayoutProps {
  children: React.ReactNode
  className?: string;
  onClick?: () => void;
}

export default function BackgroundLayout({ children, onClick, className }: Readonly<BackgroundLayoutProps>) {
  const [lottieLoaded, setLottieLoaded] = useState(false);
  const Wrapper = onClick ? 'button' : 'div';

  return (
    // <div className={clsx("h-full bg-[url('/images/background.png')] bg-cover flex items-center justify-center", className)}>
    <Wrapper
      type={onClick ? "button" : undefined}
      onClick={onClick}
      className={clsx(
        "relative h-full w-full flex items-center justify-center",
        onClick ? "cursor-pointer" : ""
      )}
    >
      {/* Fallbackk */}
      <Image
        priority={true}
        src={`${baseUrl}/images/background.png`}
        alt="Background"
        width={390}
        height={844}
        className={clsx(
          "absolute top-0 left-0 object-cover w-full h-full -z-10 transition-opacity duration-500",
          lottieLoaded ? "opacity-0" : "opacity-100"
        )}
      />
      <Lottie 
        loop={true} 
        autoplay={true}
        muted={true} 
        playsInline={true} 
        className="absolute top-0 left-0 w-full h-full -z-10" 
        animationData={background} 
        rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
        onDOMLoaded={() => setLottieLoaded(true)}
      />
      <div className={clsx("h-full w-full flex items-center justify-center", className)}>
        {children}
      </div>
    </Wrapper>
    // </div>
  );
}