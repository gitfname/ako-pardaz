"use client"

import Image from "next/image"
import { BellIcon, ExitSolidIcon, KeySolidIcon, PersonSolidIcon, SettingsIcon } from "@/icons"
import { usePathname } from "next/navigation"
import { Menu } from "@mantine/core"
import ShoppingCarSolidIcon from "@/icons/ShoppingCarSolidIcon"
import Link from "next/link"

const routeNames: Record<string, string> = {
    "/": "داشبورد",
    "/profile/update": "داشبورد",
    "/profile/update-password": "داشبورد",
    "/see-person-company": "مشاهده شخص/شرکت",
    "/create-person-company": "ساخت شخص/شرکت",
    "/bill-inquiry": "استعلام صورت حساب",
    "/financial-settings": "تنظیمات مالی",
    "/edit-financial-settings": "تنظیمات مالی",
    "/support": "پشتیبانی",
    "/support/new-ticket": "پشتیبانی",
}

function TopNavigationBar() {
    const pathname = usePathname()

    return (
        <nav className="w-full p-2 max-md:min-h-[19rem] md:min-h-[14rem] bg-gradient-to-r from-[#7583D1] to-[#4a5382]">
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
                        <Link href="/notifications">
                            <button className="btn max-md:btn--transparent">
                                <BellIcon width={17} height={17} />
                            </button>
                        </Link>

                        <Menu width={210} position="bottom-end" classNames={{ itemLabel: "text-black/80" }}>
                            <Menu.Target>
                                <Image
                                    src="https://fakeimg.pl/180x180/"
                                    loading="lazy"
                                    width={180}
                                    height={180}
                                    alt=""
                                    className="w-11 h-11 object-center object-cover rounded-full block mx-auto blue-outline"
                                />
                            </Menu.Target>

                            <Menu.Dropdown className="!rounded-xl">
                                <Menu.Item
                                    component={Link}
                                    href="/profile/update"
                                    leftSection={<PersonSolidIcon width={19} height={19} className="stroke-black/80" />}
                                >
                                    ویرایش اطلاعات کاربری
                                </Menu.Item>

                                <Menu.Item
                                    leftSection={<ShoppingCarSolidIcon width={19} height={19} className="fill-black/80" />}
                                >
                                    لیست خرید های کاربر
                                </Menu.Item>

                                <Menu.Item
                                    leftSection={<SettingsIcon width={19} height={19} className="stroke-black/80" />}
                                >
                                    تنظیمالت مالی
                                </Menu.Item>

                                <Menu.Item
                                    component={Link}
                                    href="/profile/update-password"
                                    leftSection={<KeySolidIcon width={19} height={19} className="stroke-black/80" />}
                                >
                                    تغییر رمز عبور
                                </Menu.Item>

                                <Menu.Item
                                    leftSection={<ExitSolidIcon width={19} height={19} className="stroke-black/80" />}
                                >
                                    خروج
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    </div>
                </div>
            </div>

            <div className="flex items-center max-sm:flex-col max-sm:items-start gap-y-5 justify-between mt-6">
                <p className="text-sm text-white/90 font-normal">
                    {routeNames[pathname]}
                </p>

                <div id="top-navigation-bar-left-section"></div>
            </div>
        </nav>
    )
}

export default TopNavigationBar