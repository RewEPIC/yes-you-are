import { TagRow } from "@/app/intro/confidence/(type)/tag";
import Tag from "@/components/container/tag";
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

export type CheckedItem = {
  [key: string]: boolean
}
interface HeartSeperateProps {
  isDragging: boolean
  checkedItems: CheckedItem
  setCheckedItems: Dispatch<SetStateAction<CheckedItem>>
  tags: TagRow[]
}

export default function HeartSeperate({ isDragging, checkedItems, setCheckedItems, tags }: Readonly<HeartSeperateProps>) {
  const handleChange = (id: string, checked: boolean) => {
    if (isDragging) return
    setCheckedItems((prev) => {
      const updated = { ...prev, [id]: checked };
      if (!checked) {
        delete updated[id]
      }
      return updated;
    });
  }

  return (
    <div className="p-0.5 flex flex-col items-center justify-center space-y-[10px]">
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