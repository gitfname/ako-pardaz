
"use client"

import { SelectHTMLAttributes } from "react"

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
    floatLabel?: string;
    options?: string[];
}

function SelectInput({ floatLabel, options, ...restProps }: Props) {
    return (
        <div className="text-input-container h-max">
            <select
                {...restProps}
                className={"text-input " + restProps?.className}
            >
                {options?.map(option => <option key={option} value={option}>{option}</option>)}
            </select>

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

export default SelectInput