import type { Metadata } from "next";
import { Bai_Jamjuree, Itim } from "next/font/google";
import "./globals.css";

export const BaiJamjuree = Bai_Jamjuree({
  variable: "--font-bai-jamjuree",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
})
export const itim = Itim({
  variable: "--font-itim",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal"],
})

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
        className={`${BaiJamjuree.variable} ${itim.variable} font-bai-jamjuree antialiased`}
      >
        <div id="root" className="h-screen w-96 mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
