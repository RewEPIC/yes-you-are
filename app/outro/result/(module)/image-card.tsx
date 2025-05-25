import PinkButton from "@/components/buttons/pink-button";
import { motion } from "framer-motion";
import Image from "next/image";

type Product = {
    name: string;
    image: string;
    result: {
        description: string[];
        highlight: string[];
    };
};

type Category = {
    icon: string;
    label: string;
};

type ImageCardProps = {
    name: string | null;
    product: Product;
    categories: Category[];
    className?: string
    confidence: string[];
    baseUrl: string;
    onSaveImage: () => void;
    variant?: "display" | "capture"; // 🟡 default = "display"
};

export default function ImageCard({
    name,
    product,
    categories,
    className,
    confidence,
    baseUrl,
    onSaveImage,
    variant = "display",
}: Readonly<ImageCardProps>) {
    const content = (
        <div
            className={`flex flex-col justify-start items-center w-[291px] h-fit pt-[39px] pb-[49px] space-y-[16px] bg-white`}
        >
            <Image
                src={`${baseUrl}/images/small-logo-black.png`}
                alt="Small logo black"
                priority={variant === "display"}
                width={140}
                height={69}
            />

            <div className="flex flex-col justify-center items-center">
                <div className="text-[14px] font-[400]">ขอมอบสิ่งนี้ให้แก่ {name}</div>
                <Image
                    loading="lazy"
                    src={product.image}
                    alt={product.name}
                    width={104}
                    height={130}
                    className="pt-[13px]"
                />
                <div className="flex flex-col text-center items-center space-y-[6px] pt-[18px]">
                    <div className="text-[20px] font-[600]">{product.name}</div>
                    <div className="font-[300] text-[12px] py-[10px] space-y-[5px]">
                        {product.result.description.map((desc, index) => (
                            <div key={`desc-${index}-${desc.at(1)}`}>{desc}</div>
                        ))}
                        {product.result.highlight.map((highlight, index) => (
                            <div className="text-black font-[500]" key={`hl-${index}-${highlight.at(1)}`}>
                                {highlight}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center w-full items-center">
                <hr className="h-[20px] w-[245px] border-dotted" />

                <div className={`flex flex-row justify-center space-x-[12px] ${variant === "capture" ? "pt-[10px]" : "pb-[10px]"}`}>
                    {categories.map(({ icon, label }) => (
                        <Image key={label} loading="lazy" src={icon} alt={label} width={38} height={38} />
                    ))}
                </div>

                <div className="flex justify-center text-[16px] font-[500] pb-[10px]">
                    {name} ผู้เต็มเปี่ยมไปด้วย...
                </div>

                <div className="flex flex-row text-[12px] font-[500] w-fit gap-x-[7px] text-nowrap">
                    <div className="flex-1 flex flex-col items-start gap-y-[5px]">
                        {confidence[0] && (
                            <div>
                                <span className="text-primary-pink-dark">40%</span> <span className="font-[400]">{confidence[0]}</span>
                            </div>
                        )}
                        {confidence[2] && (
                            <div>
                                <span className="text-primary-pink-dark">20%</span> <span className="font-[400]">{confidence[2]}</span>
                            </div>
                        )}
                    </div>
                    <div className="flex-1 flex flex-col items-start gap-y-[5px]">
                        {confidence[1] && (
                            <div>
                                <span className="text-primary-pink-dark">30%</span> <span className="font-[400]">{confidence[1]}</span>
                            </div>
                        )}
                        {confidence[3] && (
                            <div>
                                <span className="text-primary-pink-dark">10%</span> <span className="font-[400]">{confidence[3]}</span>
                            </div>
                        )}
                    </div>
                </div>

                {variant === "display" && (
                    <div className="flex justify-center pt-[16px]">
                        <PinkButton name="กดเพื่อบันทึกรูป" className="w-[169px]" onClick={onSaveImage} />
                    </div>
                )}
            </div>
        </div>
    );

    return variant === "display" ? (
        <motion.div
            initial={{ y: -400 }}
            animate={{ y: 0 }}
            exit={{ y: 0 }}
            transition={{ duration: 1.2 }}
        >
            {content}
        </motion.div>
    ) : (
        <div className={className}>{content}</div>
    );
};
