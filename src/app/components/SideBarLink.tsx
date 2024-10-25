"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react"
import { twMerge } from "tailwind-merge";

interface Props {
    text: string;
    link: string;
    icon?: ReactNode;
}

function SideBarLink({ icon, link, text }: Props) {
    const pathName = usePathname()

    return (
        <Link
            href={link}
            className="w-full p-1.5 relative"
        >
            <div
                className={twMerge(
                    "absolute top-0 right-0 bottom-0 w-1 rounded-l-md bg-myBlue transition-opacity opacity-0",
                    pathName === link ? "opacity-100" : ""
                )}
            ></div>

            <p
                className={twMerge(
                    `flex items-center gap-x-2 font-[vazir] text-sm font-medium text-black/70  stroke-black/70 pr-3
                    transition-colors duration-200 hover:text-myBlue hover:stroke-myBlue`,
                    pathName === link ? "text-myBlue stroke-myBlue" : ""
                )}
            >
                {icon}
                {text}
            </p>
        </Link>
    )
}

export default SideBarLink