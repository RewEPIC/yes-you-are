import { SlideTransition } from "@/components/motion/slide-transition";

interface ShoppingLayoutProps {
  children: React.ReactNode;
}

export default function ShoppingItemsLayout({ children }: Readonly<ShoppingLayoutProps>) {

  return (
    <SlideTransition>
        {children}
    </SlideTransition>
  );
}