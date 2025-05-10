"use client";
import BackgroundLayout from "@/components/background-layout";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/intro");
  }
  return (
    <BackgroundLayout>
      <motion.div
        onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1.2, 
          ease: [0.0, 0.1, 0.25, 1], 
        }}
      >
        <Image
          priority={true}
          src="/images/logo.svg"
          alt="Yes You Are"
          width={246}
          height={246}
        />
      </motion.div>
    </BackgroundLayout>
  );
}
