import { baseUrl } from "@/lib/config";
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
        "h-full w-full bg-cover flex items-center justify-center",
        onClick ? "cursor-pointer" : "",
        className
      )}
      style={{ backgroundImage: `url('${baseUrl}/videos/background.gif')` }}
    >
        {children}
    </Wrapper>
    // </div>
  );
}