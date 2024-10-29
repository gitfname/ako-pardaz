import Link from "next/link"
import { BodyCard, Input } from "../components"
import TopNavigationBar from "../components/TopNavigationBar"
import { CancelIconSquare, EditIconSquare, TickIconSquare } from "../icons"

function FinancialSettings() {
    return (
        <div>
            <TopNavigationBar />
            <div className="w-full p-2 md:p-5">
                <div className="-translate-y-24">
                    <BodyCard
                        title="ویرایش تنظیمات مالی"
                        icon={
                            <EditIconSquare width={26} height={26} />
                        }
                        children={
                            <>
                                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-12">
                                    <Input.TextInput
                                        floatLabel="نام"
                                        className="text-input--bordered"
                                    />

                                    <Input.SelectInput
                                        floatLabel="نوع شخصیت"
                                        className="text-input--bordered"
                                        options={["یک شخصیت را انتخاب کنید", "شخصیت یک", "شخصیت دو", "شخصیت سه", "شخصیت چهار"]}
                                        defaultValue="یک شخصیت را انتخاب کنید"
                                    />

                                    <Input.TextInput
                                        floatLabel="شناسه ملی"
                                        className="text-input--bordered"
                                    />

                                    <Input.TextInput
                                        floatLabel="شماره اقتصادی"
                                        className="text-input--bordered"
                                    />

                                    <Input.TextInput
                                        floatLabel="تلفن"
                                        className="text-input--bordered"
                                    />

                                    <Input.TextInput
                                        floatLabel="کدپستی"
                                        className="text-input--bordered"
                                    />

                                    <div className="col-span-2">
                                        <Input.TextInput
                                            floatLabel="آدرس"
                                            className="text-input--bordered"
                                        />
                                    </div>
                                </div>

                                <div className="w-max mr-auto flex items-center gap-x-3 mt-10">
                                    <div className="w-max mr-auto flex items-center gap-x-3 mt-10">
                                        <Link href="/financial-settings">
                                            <button className="btn btn--bordered">
                                                <CancelIconSquare width={18} height={18} />
                                                لغو
                                            </button>
                                        </Link>

                                        <button className="btn btn--primary">
                                            <TickIconSquare width={18} height={18} />
                                            ویرایش
                                        </button>
                                    </div>
                                </div>
                            </>
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default FinancialSettings