
import { type ReactNode } from "react"

interface Props {
    data: {
        text: string;
        value: string;
        icon?: ReactNode;
    }[];
}

function DataStack({ data }: Props) {
    return (
        <div className="space-y-2.5">
            {
                data?.map((item, index) => (
                    <div key={index + item.text} className="flex items-center gap-x-1 text-black/60 stroke-black/60">
                        {item.icon ?? null}
                        <span className="text-xs font-normal ">{item.text}</span>
                        <span className="text-xs font-normal">:</span>
                        <span className="text-sm font-normal text-black/90">{item.value}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default DataStack