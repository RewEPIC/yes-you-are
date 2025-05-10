"use client";
import BackgroundLayout from "@/components/background-layout";
import TransitionLayout from "@/components/transition-layout";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/intro");
  }
  return (
    <TransitionLayout>
      <BackgroundLayout onClick={handleClick}>

        <Image
          priority={true}
          src="/images/logo.png"
          alt="Yes You Are"
          width={246}
          height={246}
        />
      </BackgroundLayout>

    </TransitionLayout>
  );
}
