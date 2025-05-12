import { baseUrl } from "@/lib/config";
import shoppingBrand from "@/lib/lotties/shopping-brand.json";
import clsx from "clsx";
import Lottie from "lottie-react";
import Image from "next/image";
import { useState } from "react";

export default function ShoppingBrand() {
    const [lottieLoaded, setLottieLoaded] = useState(false)

    return (
        <div className="relative w-full h-[224px] z-10">
            {/* Fallbackk */}
            <Image
                priority={true}
                src={`${baseUrl}/images/shopping/shopping-brand.png`}
                alt="Shopping Brand"
                width={0}
                height={0}
                className={clsx(
                    "absolute w-full h-[224px] object-cover",
                    lottieLoaded ? "opacity-0" : "opacity-100"
                )}
            />
            <Lottie
                loop={true}
                autoplay={true}
                muted={true}
                playsInline={true}
                className={clsx(
                    "absolute w-full h-[224px]"
                )}
                animationData={shoppingBrand}
                rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
                onDOMLoaded={() => setLottieLoaded(true)}
            />
        </div>
    )
}