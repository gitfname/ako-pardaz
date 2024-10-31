import Image from "next/image"

function NoTickets() {
    return (
        <div>
            <Image
                alt="no ticket"
                src="/images/no-ticket.png"
                className="w-24 h-auto block mx-auto"
                loading="lazy"
                width={132}
                height={132}
            />

            <p className="text-center text-sm text-black/75 font-medium mt-2">
                تیکتی برای نمایش وجود ندارد !
            </p>
        </div>
    )
}

export default NoTickets