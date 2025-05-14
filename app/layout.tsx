import { AudioProvider } from "@/context/audio-context";
import { baiJamjuree, itim, pgGrandCanyon } from "@/lib/font";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yes You Are",
  description: "Yes You Are is a web application that helps you to find your true self.",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${baiJamjuree.variable} ${itim.variable} ${pgGrandCanyon.variable} w-screen h-screen font-bai-jamjuree antialiased`}
      >
        <AudioProvider>
          <div id="root" className="w-full h-full max-w-md mx-auto">
            {/* <LayoutWrapper> */}
              {children}
            {/* </LayoutWrapper> */}
          </div>
        </AudioProvider>
      </body>
    </html>
  );
}
