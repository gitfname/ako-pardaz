
"use client"

import { InputHTMLAttributes, ReactNode } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    floatLabel?: string;
    rightSection?: string | ReactNode;
}

function TextInput({ floatLabel, rightSection, ...restProps }: Props) {
    return (
        <div className="text-input-container  h-max">
            {
                rightSection
                    ?
                    <div className="w-full flex items-center max-sm:flex-col max-sm:rounded-md max-sm:border max-sm:border-zinc-200/70">
                        {
                            typeof rightSection === "string"
                                ?
                                <div
                                    className="bg-zinc-200/70 flex-1 self-stretch p-2 border-l-transparent
                            rounded-r-md border border-gray-300 flex items-center max-sm:rounded-none max-sm:border-none max-sm:rounded-t-md"
                                >
                                    <p className="text-sm text-black/70 leading-none">{rightSection}</p>
                                </div>
                                :
                                <div
                                    className="bg-zinc-200/70 flex-1 self-stretch p-2 border-l-transparent
                            rounded-r-md border border-gray-300 flex items-center max-sm:rounded-none max-sm:border-none max-sm:rounded-t-md"
                                >
                                    {rightSection}
                                </div>
                        }
                        <input
                            type="text"
                            {...restProps}
                            placeholder=""
                            className={"text-input flex-1 rounded-r-none border-r-transparent max-sm:border-none max-sm:rounded-b-md " + restProps?.className}
                        />
                    </div>
                    :
                    <input
                        type="text"
                        {...restProps}
                        placeholder=""
                        className={"text-input " + restProps?.className}
                    />
            }

            {/* float label */}
            {
                floatLabel
                    ?
                    <span className="text-input__float-label">{floatLabel}</span>
                    :
                    null
            }
        </div>
    )
}

export default TextInput