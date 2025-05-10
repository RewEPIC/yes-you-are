import { baiJamjuree, itim } from "@/lib/font";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yes You Are",
  description: "Yes You Are is a web application that helps you to find your true self.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${baiJamjuree.variable} ${itim.variable} font-bai-jamjuree antialiased`}
      >
        <div id="root" className="h-screen w-96 mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
