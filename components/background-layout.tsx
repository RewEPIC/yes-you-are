import background from "@/lib/lotties/background.json";
import clsx from "clsx";
import dynamic from "next/dynamic";

const LottieWithNoSSR = dynamic(() => import('lottie-react'), { ssr: false });

interface BackgroundLayoutProps {
  children: React.ReactNode
  className?: string;
  onClick?: () => void;
}

export default function BackgroundLayout({ children, onClick, className }: Readonly<BackgroundLayoutProps>) {
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
      // style={{ backgroundImage: `url('${baseUrl}/videos/background.gif')` }}
    >
      <LottieWithNoSSR 
        loop={true} 
        autoplay={true}
        muted={true} 
        playsInline={true} 
        className="absolute top-0 left-0 w-full h-full -z-10" 
        animationData={background} 
        rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
      />
      <div className={clsx("h-full w-full flex items-center justify-center", className)}>
        {children}
      </div>
    </Wrapper>
    // </div>
  );
}