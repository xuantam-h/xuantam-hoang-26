interface TagProps {
    skillItem: string;
}

export const Tag = ({ skillItem } : TagProps) => {
    return (
        <li key={skillItem} className="badge inline-flex text-sm py-1 px-3 uppercase border">
            {skillItem}
        </li>
    )
}