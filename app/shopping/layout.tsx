import { SlideTransition } from "@/components/motion/slide-transition";

interface ShoppingLayoutProps {
  children: React.ReactNode;
}

export default function ShoppingLayout({ children }: Readonly<ShoppingLayoutProps>) {
  return (
    <SlideTransition basePath="/shopping">
          {children}
    </SlideTransition>
  );
}