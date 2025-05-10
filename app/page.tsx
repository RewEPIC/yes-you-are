"use client";
import BackgroundLayout from "@/components/background-layout";
import Logo from "@/components/svg/logo";
import TransitionLayout from "@/components/transition-layout";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/intro");
  }
  return (
    <TransitionLayout>
      <BackgroundLayout onClick={handleClick}>
        <Logo/>
      </BackgroundLayout>

    </TransitionLayout>
  );
}
