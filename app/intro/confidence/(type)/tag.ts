export type TagRow = {
    header: string | null;
    tags: TagOption[];
}

export type TagOption = {
    id: string;
    text: string;
    className?: string;
};