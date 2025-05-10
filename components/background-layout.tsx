import clsx from "clsx";

interface BackgroundLayoutProps {
    children: React.ReactNode
    className?: string;
}

export default function BackgroundLayout({ children, className }: Readonly<BackgroundLayoutProps>) {
  return (
    <div className={clsx("h-full bg-[url('/images/background.png')] bg-cover flex items-center justify-center", className)}>
        {children}
    </div>
  );
}