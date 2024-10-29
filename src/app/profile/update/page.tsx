import Image from "next/image"
import { BodyCard, Input } from "@/app/components"
import TopNavigationBar from "@/app/components/TopNavigationBar"
import { CancelIconSquare, CreditCardSolidIcon, PersonSolidIcon, TickIconSquare } from "../../icons"
import Link from "next/link"
import { AlertInfo } from "@/app/components/alerts"

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

                            <div className="mt-9 grid grid-cols-3 gap-5 m-12">
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

                            <div className="mt-9 grid grid-cols-3 gap-5">
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

                            <div className="w-max mr-auto flex items-center gap-x-3 mt-12">
                                <div className="w-max mr-auto flex items-center gap-x-3 mt-10">
                                    <Link href="/">
                                        <button className="btn btn--bordered">
                                            <CancelIconSquare width={18} height={18} />
                                            لغو
                                        </button>
                                    </Link>

                                    <button className="btn btn--primary">
                                        <TickIconSquare width={18} height={18} />
                                        ذخیره تغییرات
                                    </button>
                                </div>
                            </div>
                        </>}
                    />
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile