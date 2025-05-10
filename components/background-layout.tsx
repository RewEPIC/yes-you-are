import clsx from "clsx";
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
        "relative w-full h-full flex items-center justify-center overflow-hidden",
        onClick ? "cursor-pointer" : ""
      )}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        crossOrigin="anonymous"
        className="absolute inset-0 min-w-full min-h-full object-cover -z-10"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      {/* Foreground Content */}
      <div className={clsx("flex items-center justify-center z-10 w-full h-full", className)}>
        {children}
      </div>
    </Wrapper>
    // </div>
  );
}