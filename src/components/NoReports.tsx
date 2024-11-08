import Image from "next/image"

function NoReports() {
    return (
        <div>
            <Image
                alt="no ticket"
                src="/images/no-reports.png"
                className="w-24 h-auto block mx-auto"
                loading="lazy"
                width={132}
                height={132}
            />

            <p className="text-center text-sm text-black/75 font-medium mt-2">
                گزارشی برای نمایش وجود ندارد !
            </p>
        </div>
    )
}

export default NoReports