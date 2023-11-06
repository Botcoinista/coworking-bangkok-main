"use client";

import { IconType } from "react-icons";

interface ListingInfoProps {
  icon: IconType;
  label: string;
  iconClassName?: string;
}

const ListingCategory = ({
  icon: Icon,
  label,
  iconClassName,
}: ListingInfoProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
      <Icon size={40} className={`text-neutral-600 ${iconClassName || ''}`} />
        <div className="flex flex-col">
          <div className="text-semlightgray text-lg font-semibold">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default ListingCategory;
