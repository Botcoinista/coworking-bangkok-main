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
      <Icon size={16} className={`text-semilightgray ${iconClassName || ''}`} />
        <div className="flex flex-col">
          <div className="text-semilightgray text-custom-base font-semibold">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default ListingCategory;
