
import { BodyCard, Input } from "@/components"
import TopNavigationBar from "@/components/TopNavigationBar"
import { CancelIconSquare, PlusIconSquare, TickIconSquare } from "@/icons"
import { AlertInfo } from "@/components/alerts"
import Link from "next/link"

function Settings() {
    return (
        <div>
            <TopNavigationBar />
            <div className="w-full p-2 md:p-5">
                <div className="-translate-y-24">
                    <BodyCard
                        title="ایجاد تیکت"
                        icon={
                            <PlusIconSquare width={26} height={26} />
                        }
                        children={<>
                            <AlertInfo
                                text="پر کردن فیلد های ستاره دار اجباری است"
                            />

                            <div className="grid grid-cols-2 xl:grid-cols-3 gap-5 gap-y-9 mt-12">
                                <Input.TextInput
                                    floatLabel="عنوان تیکت"
                                    className="text-input--bordered"
                                />

                                <Input.SelectInput
                                    floatLabel="دسته بندی تیکت"
                                    defaultValue={"یک گزینه را انتخاب کنید"}
                                    options={["یک گزینه را انتخاب کنید", "دسته بندی یک", "دسته بندی دو", "دسته بندی سه"]}
                                    className="text-input--bordered"
                                />

                                <Input.FileInput
                                    label="فایل"
                                    className="text-input--bordered"
                                />

                                <div className="col-span-2">
                                    <Input.TextAreaInput
                                        floatLabel="متن پیام"
                                        className="text-input--bordered"
                                    />
                                </div>
                            </div>

                            <div className="w-max mr-auto flex items-center gap-x-3 mt-10">
                                <Link href="/support">
                                    <button className="btn btn--bordered">
                                        <CancelIconSquare width={18} height={18} />
                                        لغو
                                    </button>
                                </Link>

                                <button className="btn btn--primary">
                                    <TickIconSquare width={18} height={18} />
                                    ارسال تیکت
                                </button>
                            </div>
                        </>}
                    />
                </div>
            </div>
        </div>
    )
}

export default Settings