import Link from "next/link";
import { ClockIconSolid, EyeIcon } from "@/icons";

interface Props {
    title: string;
    category: string;
    description?: string;
    createdAt: string;
}

function NotificationCard({ category, title, description, createdAt }: Props) {
    return (
        <div className="w-full relative border py-3.5 px-2.5 border-gray-300 hover:border-myBlue transition-colors rounded-xl flex items-center justify-between group">
            {/* title */}
            <p
                className="bg-white border border-gray-300 rounded-xl py-1 px-2.5 absolute
                top-0 right-4 -translate-y-1/2 text-xs font-medium text-black/90 w-full max-w-xs leading-none group-hover:bg-[#F2F6FF] transition-colors group-hover:border-myBlue"
            >
                {title}
            </p>

            <div className="space-y-0.5 mt-2">
                <div>
                    <span className="text-sm text-black/50">دسته بندی :</span>
                    &nbsp;
                    <span className="text-sm text-black/90">{category}</span>
                </div>

                <div>
                    <span className="text-sm text-black/50">توضیحات :</span>
                    &nbsp;
                    <span className="text-sm text-black/90">{description ?? ""}</span>
                </div>
            </div>

            <div className="flex items-center gap-x-1.5 place-self-start">
                <ClockIconSolid width={17} height={17} className="stroke-black/60" />
                <p className="text-xs text-black/60">{createdAt}</p>
            </div>
        </div>
    )
}

export default NotificationCard