import Link from "next/link";
import { EyeIcon } from "@/icons";

interface Props {
    title: string;
    category: string;
    icon: string;
}

function TicketCard({ category, title, icon }: Props) {
    return (
        <div className="w-full relative border py-3.5 px-2.5 border-gray-300 rounded-xl flex items-center justify-between">
            {/* title */}
            <p
                className="bg-white border border-gray-300 rounded-xl py-1 px-2.5 absolute
                top-0 right-4 -translate-y-1/2 text-xs font-medium text-black/90 w-2/3 leading-none"
            >
                <img
                    alt=""
                    loading="lazy"
                    src={icon}
                    className="w-6 h-6 object-center object-cover inline-block"
                />
                &nbsp;&nbsp;
                {title}
            </p>

            <div>
                <span className="text-sm text-black/50">دسته بندی :</span>
                &nbsp;
                <span className="text-sm text-black/90">{category}</span>
            </div>

            <Link href="/support/tickets/123">
                <button className="btn btn--primary">
                    <EyeIcon width={18} height={18} />
                    مشاهده جزییات
                </button>
            </Link>
        </div>
    )
}

export default TicketCard