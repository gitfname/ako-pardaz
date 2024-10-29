
"use client"

import { TextareaHTMLAttributes } from "react"

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    floatLabel?: string;
}

function TextAreaInput({ floatLabel, ...restProps }: Props) {
    return (
        <div className="text-input-container">
            <textarea
                {...restProps}
                placeholder=""
                className={"text-input " + restProps?.className}
            ></textarea>

            {/* float label */}
            {
                floatLabel
                    ?
                    <span className="text-sm text-black/50 leading-none absolute top-[-1.14rem] right-4">{floatLabel}</span>
                    :
                    null
            }
        </div>
    )
}

export default TextAreaInput