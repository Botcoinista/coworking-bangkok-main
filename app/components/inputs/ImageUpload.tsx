"use client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";
declare global {
  var cloudinary: any;
}
// Import statements...
interface ImageUploadProps {
  onChange: (value: string[]) => void;
  value: string[];
}
const ImageUpload = ({ onChange, value }: ImageUploadProps) => {

  const handleUpload = useCallback(
    (result: any) => {
      onChange([...value, result.info.secure_url]);
    },
    [onChange, value]
  );
  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="k3nqau5e"
      options={{
        maxFiles: 5,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="
                        relative
                        cursor-pointer
                        hover:opacity-70
                        transition
                        border-dashed
                        border-2
                        p-20
                        border-neutral-300
                        flex
                        flex-col
                        justify-center
                        items-center
                        gap-4
                        text-neutral-600
                    "
          >
            <TbPhotoPlus size={50} />
            <div className="font-semibold text-lg">Click to upload</div>
            {value && value.length > 0 && (
              <div className="grid grid-cols-5 gap-4 mt-4">
                {value.map((url, index) => (
                  <div key={index} className="relative">
                    <Image
                      alt={`Upload ${index + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                      src={url || "/placeholder-image.jpg"} // Use a placeholder image or handle this case
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
