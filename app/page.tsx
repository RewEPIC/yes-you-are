"use client";
import BackgroundLayout from "@/components/background-layout";
import Logo from "@/components/svg/logo";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/intro/splash");
  return (
    <BackgroundLayout>
      <Logo/>
    </BackgroundLayout>
  );
}
