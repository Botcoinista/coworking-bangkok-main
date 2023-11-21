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
                py-6
                px-10
                hover:bg-neutral-200
                transition
                cursor-pointer
                text-twenty
                min-w-full                "
                >
            {label}
        </div>
    );
};


export default MenuItem