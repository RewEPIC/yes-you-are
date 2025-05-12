import Tag from "@/components/container/tag";
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

type TagRow = {
    header: string | null;
    tags: TagOption[];
}

type TagOption = {
    id: string;
    text: string;
    className?: string;
};

const tags: TagRow[] = [
    {
        header: "space-x-[51px]", 
        tags: [
          { id: "self", text: "ได้เป็นตัวของตัวเอง", className: "px-[10px]" },
          { id: "golden",text: "ร่างทอง", className: "px-[23.5px]" },
        ],
      },
      {
        header: "space-x-[12px]",
        tags: [
          { id: "confidence", text: "กล้าแสดงออก" },
          { id: "self-confiden", text: "การเชื่อในตัวเอง" },
          { id: "make-up", text: "เมคอัพ" },
          { id: "bully", text: "ไม่กลัวทัวร์ลง" },
        ],
      },
      {
        header: "space-x-[18px]",
        tags: [
          { id: "sexy", text: "สเน่ห์แรงเกินต้าน" },
          { id: "fashion", text: "เจ้าแม่แฟชั่น" },
          { id: "no-filter", text: "ลง IG No Filter" },
          { id: "no-care", text: "โนสนโนแคร์" },
        ],
      },
      {
        header: "space-x-[12px]",
        tags: [
          { id: "no-make-up",text: "หน้าสดออกจากบ้าน" },
          { id: "kid", text: "ตัวเองตอนเด็ก" },
          { id: "meitu", text: "Meitu", className: "px-[22px]" },
          { id: "nice-body", text: "หุ่นสุดแซ่บ" },
        ],
      },
      {
        header: "space-x-[16px]",
        tags: [
          { id: "mom", text: "ตัวแม่ตัวมัม" },
          { id: "self-worth", text: "ตัวเองในเวอร์ชันที่เริ่ดกว่า" },
          { id: "tiktoker", text: "ดาวติ้กต่อก" },
        ],
      },
      {
        header: "space-x-[14px]",
        tags: [
          { id: "target", text: "เป้าหมายมีไว้พุ่งชน" },
          { id: "no-hesitate", text: "ไม่มีความลังเล" },
        ],
      },
      {
        header: "space-x-[4px]",
        tags: [
          { id: "challenge", text: "ความท้าทาย" },
          { id: "hope", text: "ความหวัง" },
        ],
      },
      {
        header: null,
        tags: [{ id: "love", text: "ความรัก" }],
      },
];

export type CheckedItem = {
    [key: string]: boolean
}
interface HeartSeperateProps {
    checkedItems: CheckedItem
    setCheckedItems: Dispatch<SetStateAction<CheckedItem>>
}

export default function HeartSeperate({ checkedItems, setCheckedItems }: Readonly<HeartSeperateProps>) {
    const handleChange = (id: string, checked: boolean) => {
        setCheckedItems((prev) => ({ ...prev, [id]: checked }))
    }

    return (
        <div className="p-0.5 flex flex-col items-center justify-center space-y-[10px] ">
            {tags.map(({ header, tags }, index) => (
                <div 
                    key={`tag-${index}-${header ?? "null"}`} 
                    className={clsx(`flex`, header)}
                >
                    {tags.map(({ id, text, className }) => (
                        <Tag 
                            id={id}
                            key={id} 
                            checked={checkedItems?.[id] ?? false}
                            onChange={(checked) => handleChange(id, checked)} 
                            text={text} 
                            className={className} 
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}