import { ExclamationMarkIcon } from "@/icons";
import { ReactNode } from "react";

interface Props {
    text: string;
    icon?: ReactNode;
}

function AlertInfo({ text, icon }: Props) {
    return (
        <div className="w-full py-2.5 px-3.5 rounded-lg border stroke-myBlue border-myBlue/40 bg-myBlue/10 flex items-center gap-x-3">
            {icon ?? <ExclamationMarkIcon width={21} height={21} />}
            <p className="text-xs text-black font-medium">
                {text}
            </p>
        </div>
    )
}

export default AlertInfo