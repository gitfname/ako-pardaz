"use client"

import Image from "next/image"
import { BellIcon } from "../icons"
import { usePathname } from "next/navigation"

const routeNames: Record<string, string> = {
    "/": "داشبورد",
    "/see-person-company": "مشاهده شخص/شرکت",
    "/create-person-company": "ساخت شخص/شرکت",
    "/bill-inquiry": "استعلام صورت حساب",
    "/financial-settings": "تنظیمات مالی",
    "/support": "پشتیبانی",
}

function TopNavigationBar() {
    const pathname = usePathname()

    return (
        <nav className="w-full p-2 max-md:min-h-[18rem] md:min-h-[14rem] bg-gradient-to-r from-[#7583D1] to-[#4a5382]">
            <div className="flex items-center justify-between p-2 max-md:flex-col max-md:items-start gap-5">
                {/* right section */}
                <div className="flex-1 max-md:order-2 w-full">
                    <div className="w-full md:max-w-sm">
                        <input
                            type="text"
                            placeholder="جست و جو"
                            className="w-full p-2 px-3 rounded-md text-sm font-[vazir] outline outline-2 outline-transparent
                            outline-offset-1 focus:outline-myBlue"
                        />
                    </div>
                </div>

                {/* left section */}
                <div className="flex-shrink-0 max-md:order-1 max-md:mr-auto">
                    <div className="flex items-center gap-x-3">
                        <button className="btn max-md:btn--transparent">
                            <BellIcon width={17} height={17} />
                        </button>

                        <Image
                            src="https://fakeimg.pl/180x180/"
                            loading="lazy"
                            width={180}
                            height={180}
                            alt=""
                            className="w-11 h-11 object-center object-cover rounded-full block mx-auto blue-outline"
                        />
                    </div>
                </div>
            </div>

            <p className="mt-6 text-sm text-white/90 font-normal">
                {routeNames[pathname]}
            </p>
        </nav>
    )
}

export default TopNavigationBar