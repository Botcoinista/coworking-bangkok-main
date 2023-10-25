'user client';

interface MenuItemProps {
    onClick: () => void;
    label: string;
}

const MenuItem = ({ onClick, label }: MenuItemProps) => {
    return (
        <div
            onClick={onClick}
            className="
                text-sm
                font-semibold
                py-3
                px-4
                rounded-full
                hover:bg-neutral-100
                transition
                cursor-pointer
                ">
            {label}
        </div>
    );
};


export default MenuItem