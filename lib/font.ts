import { Bai_Jamjuree, Itim } from "next/font/google";
import localFont from "next/font/local";

export const baiJamjuree = Bai_Jamjuree({
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
export const pgGrandCanyon = localFont ({
  variable: "--font-pg-grandcanyon",
  src: "/../public/fonts/pg-grandcanyon.ttf",
  display: "swap",
})