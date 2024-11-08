import Image from "next/image"
import { BodyCard, Input } from "@/components"
import TopNavigationBar from "@/components/TopNavigationBar"
import { CancelIconSquare, CreditCardSolidIcon, PersonSolidIcon, TickIconSquare } from "@/icons"
import Link from "next/link"
import { AlertInfo } from "@/components/alerts"

function UpdateProfile() {
    return (
        <div>
            <TopNavigationBar />
            <div className="w-full p-2 md:p-5">
                <div className="-translate-y-24">
                    <BodyCard
                        title="ویرایش اطلاعات"
                        icon={
                            <Image
                                src="/images/edit-square-icon.svg"
                                width={48}
                                height={48}
                                className="w-7 h-auto object-center object-cover"
                                alt=""
                            />
                        }
                        children={<>
                            <AlertInfo
                                text="اطلاعات کاربری"
                                icon={<PersonSolidIcon width={20} height={20} />}
                            />

                            <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12 max-sm:gap-y-9">
                                <Input.TextInput
                                    floatLabel="نام"
                                    defaultValue="صحر رستمی"
                                    className="text-input--bordered"
                                />

                                <Input.TextInput
                                    floatLabel="ایمیل"
                                    defaultValue="helloworld@gmail.com"
                                    className="text-input--bordered"
                                />

                                <Input.FileInput
                                    label="تصویر کاربر"
                                    className="text-input--bordered"
                                />
                            </div>

                            <AlertInfo
                                text="اطلاعات بانکی"
                                icon={<CreditCardSolidIcon width={20} height={20} />}
                            />

                            <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-sm:gap-y-9">
                                <Input.TextInput
                                    floatLabel="شماره حساب"
                                    defaultValue="123456789123456"
                                    className="text-input--bordered"
                                />

                                <Input.TextInput
                                    floatLabel="شماره شیا"
                                    defaultValue="123456789123456"
                                    className="text-input--bordered"
                                />

                                <Input.TextInput
                                    floatLabel="کدملی"
                                    defaultValue="123456789123456"
                                    className="text-input--bordered"
                                />
                            </div>

                            <div className="sm:w-max sm:mr-auto flex items-center gap-x-3 mt-10">
                                <Link href="/" className="max-sm:flex-1">
                                    <button className="btn btn--bordered w-full">
                                        <CancelIconSquare width={18} height={18} />
                                        لغو
                                    </button>
                                </Link>

                                <button className="btn btn--primary w-full max-sm:flex-[3]">
                                    <TickIconSquare width={18} height={18} />
                                    ذخیره تغییرات
                                </button>
                            </div>
                        </>}
                    />
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile