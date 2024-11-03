
import { type ReactNode } from "react";

interface Props {
    title?: string;
    icon?: ReactNode;
    leftSection?: ReactNode;
    children: ReactNode;
}

function BodyCard({ icon, leftSection, title, children }: Props) {
    return (
        <div className="w-full bg-white rounded-xl  box-shadow-sm p-3">

            {/* top section */}
            <div className="flex items-center justify-between">

                <div className="flex items-center gap-x-2">
                    {
                        icon
                            ?
                            icon
                            :
                            null
                    }
                    {
                        title
                            ?
                            <span className="text-base font-medium text-black/80">{title}</span>
                            :
                            null
                    }
                </div>

                {leftSection ?? null}

            </div>

            {/* body */}
            <div className="mt-7">{children}</div>
        </div>
    )
}

export default BodyCard