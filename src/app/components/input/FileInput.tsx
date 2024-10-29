
"use client"

import { useState, type InputHTMLAttributes, useId } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    noFileDescription?: string;
}

function FileInput({ label, noFileDescription, ...props }: Props) {
    const [file, setFile] = useState<File>(null)
    const fileInputId = useId()

    return (
        <div className="w-full relative">
            <input
                {...props}
                type="file"
                className="hidden"
                id={fileInputId}
                onChange={e => {
                    if (e.target.files?.[0]) {
                        setFile(e.target.files[0])
                    }
                    else {
                        setFile(null)
                    }
                    props?.onChange?.(e)
                }}
            />

            <label htmlFor={fileInputId} className="file-input-container file-input--bordered cursor-pointer relative">
                <label htmlFor={fileInputId} className="btn btn--primary absolute left-[0.1rem] top-1/2 -translate-y-1/2 rounded-md text-xs px-2.5 py-2">
                    انتخاب فایل
                </label>

                {
                    !file
                        ?
                        <p className="text-[0.8rem] text-black/90 font-normal absolute top-1/2 -translate-y-1/2 leading-none right-1.5">
                            {noFileDescription ?? "هنوز فایلی انتهاب نکرده اید"}
                        </p>
                        :
                        <p className="text-[0.8rem] line-clamp-2 text-black/90 font-normal absolute top-1/2 -translate-y-1/2 leading-none right-1.5">
                            {file.name}
                        </p>
                }
            </label>

            {/* label */}
            {
                label
                    ?
                    <span className="text-sm text-black/50 leading-none absolute top-[-1.14rem] pr-4">{label}</span>
                    :
                    null
            }
        </div>
    )
}

export default FileInput