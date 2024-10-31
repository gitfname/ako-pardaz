import Image from "next/image";

interface Props {
    title: string;
    img: string;
    count: number;
    color: string;
}

function TicketOverviewCard({ count, img, title, color }: Props) {
    return (
        <div style={{ backgroundColor: color }} className="w-full rounded-lg p-3 h-28 flex flex-col relative">
            <Image
                alt={title}
                src={img}
                width={100}
                height={100}
                className="absolute top-1 left-1 w-10 h-10 object-center object-cover"
                loading="lazy"
            />

            <p className="text-sm font-medium text-black/80">{title}</p>

            <p className="text-lg font-medium mt-auto">{count}</p>
        </div>
    )
}

export default TicketOverviewCard