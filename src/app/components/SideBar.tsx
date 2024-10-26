import Image from "next/image"
import SideBarLink from "./SideBarLink"
import { ApartmentIcon, HeadPhoneIcon, MdIcon, MenuIcon, PlusIcon, SettingsIcon } from "../icons"

function SideBar() {
    return (
        <div className="grid grid-cols-1 grid-rows-[max-content_1fr] h-screen w-full">
            <div className="min-h-[9rem] p-3">
                <Image
                    src="https://fakeimg.pl/250x250/"
                    loading="lazy"
                    width={250}
                    height={250}
                    alt=""
                    className="w-16 h-16 object-center object-cover rounded-full block mx-auto blue-outline"
                />

                <p className="text-center font-medium mt-1.5 text-sm text-black/80 font-[vazir]">
                    صحرا رستمی
                </p>
            </div>

            <div className="flex flex-col gap-y-2">
                <SideBarLink
                    text="داشبورد"
                    link="/"
                    icon={
                        <MenuIcon width={18} height={18} />
                    }
                />

                <SideBarLink
                    text="مشاهده شخص شرکت"
                    link="/see-person-company"
                    icon={
                        <ApartmentIcon width={18} height={18} />
                    }
                />

                <SideBarLink
                    text="ثبت شخص شرکت"
                    link="/create-person-company"
                    icon={
                        <PlusIcon width={18} height={18} />
                    }
                />

                <SideBarLink
                    text="استعلام صورت حساب"
                    link="/bill-inquiry"
                    icon={
                        <MdIcon width={18} height={18} />
                    }
                />

                <SideBarLink
                    text="تنظیمات مالی"
                    link="/financial-settings"
                    icon={
                        <SettingsIcon width={18} height={18} />
                    }
                />

                <SideBarLink
                    text="پشتیبانی"
                    link="/support"
                    icon={
                        <HeadPhoneIcon width={18} height={18} />
                    }
                />
            </div>
        </div>
    )
}

export default SideBar