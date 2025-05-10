import clsx from "clsx";

interface CategoryButtonProps {
    active?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
}

export default function CategoryButton({ active, children, onClick }: Readonly<CategoryButtonProps>) {
    const variant = {
        default: "bg-gradient-to-t from-yellow-light to-gray-light",
        active: "bg-gradient-to-t from-yellow-light to-yellow",
    }
    return (
        <button onClick={onClick} className={clsx(
            `size-[63px] flex flex-col items-center justify-start shadow-category rounded-[12px] cursor-pointer`,
            active ? variant.active : variant.default
        )}>{children}</button>
    );
}