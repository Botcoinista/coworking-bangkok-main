"use client"
import { CldUploadWidget } from "next-cloudinary"
import Image from "next/image"
import { useCallback } from "react"
import { TbPhotoPlus } from "react-icons/tb"

declare global {
    var cloudinary: any
}

interface ImageUploadProps {
    onChange: (value: string) => void
    value: string
}

const ImageUpload = ({ onChange, value }:ImageUploadProps) => {

    const handleUpload = useCallback((result: any) => {
        onChange(result.info.secure_url)
    }, [onChange])

  return (
    <CldUploadWidget
        onUpload={handleUpload}
        uploadPreset="k3nqau5e"
        options={{
            maxFiles: 1,
        }}
        >
            {({ open }) => {
                return (
                    <div
                    onClick={() => open?.()}
                    className="
                    relative
                    cursor-pointer
                    hover:opacity-80
                    transition
                    border-dashed
                    border-2
                    p-20
                    border-neutral-200
                    flex
                    justify-center
                    items-center
                    flex-col
                    gap-4
                    text-neutral-400
                    "
                    >
                        <TbPhotoPlus size={50 }/>
                        <div className="font-semibold text-lg">
                            Click to upload image
                        </div>
                        {value && (
                            <div className="absolute inset-0 w-full h-full"
                            >
                                <Image 
                                    alt="Upload"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    src={value}                                
                                />
                            </div>
                            )}
                    </div>
                )
            }}
        </CldUploadWidget>

  )
}

export default ImageUpload