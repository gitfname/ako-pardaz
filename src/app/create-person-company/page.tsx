"use client"

import { BodyCard, Input } from "../components"
import TopNavigationBar from "../components/TopNavigationBar"
import { CancelIconSquare, PlusIconSquare, TickIconSquare } from "../icons"
import { AlertInfo } from "../components/alerts"

function CreatePersonCompany() {
    return (
        <div>
            <TopNavigationBar />

            <div className="w-full p-2 md:p-5">
                <div className="-translate-y-24">
                    <BodyCard
                        title="ثبت شخص/شرکت"
                        icon={
                            <PlusIconSquare width={24} height={24} />
                        }
                        children={<div>
                            <AlertInfo
                                text="پر کردن فیلد های ستاره دار اجباری است"
                            />

                            <div className="grid grid-cols-3 gap-4 gap-y-9 mt-10">
                                <Input.TextInput
                                    floatLabel="نام *"
                                    className="text-input--bordered"
                                    required
                                />

                                <Input.SelectInput
                                    defaultValue={"op 1"}
                                    options={["op 1", "op 2", "op 3", "op 4"]}
                                    floatLabel="نوع شخصیت"
                                    className="text-input--bordered"
                                />

                                <Input.FileInput
                                    label="لوگو"
                                    onChange={e => {
                                        console.log(e.target.files?.[0] ?? "no file")
                                    }}
                                />

                                <Input.TextInput floatLabel="شناسه ملی/شناسه مشارکت/کد فراگیر" className="text-input--bordered" />
                                <Input.TextInput floatLabel="شناسه یکتا حافظه" className="text-input--bordered" />
                                <Input.FileInput label="کلید خصوصی" className="text-input--bordered" />

                                <Input.TextInput floatLabel="کد اقتصادی" className="text-input--bordered" />
                                <Input.TextInput floatLabel="کد پستی" className="text-input--bordered" />
                                <Input.TextInput floatLabel="تلفن" className="text-input--bordered" />

                                <div className="col-span-2">
                                    <Input.TextInput floatLabel="آدرس" className="text-input--bordered" />
                                </div>
                                <Input.TextInput floatLabel="کد شعبه" className="text-input--bordered" />

                                <div className="col-span-2">
                                    <Input.TextAreaInput floatLabel="توضیحات پیشفرض صورت حساب" className="text-input--bordered" />
                                </div>
                                <Input.SelectInput
                                    defaultValue={"یک گزینه را انتخاب کنید"}
                                    options={["یک گزینه را انتخاب کنید", "op 1", "op 2", "op 3", "op 4"]}
                                    floatLabel="وضعیت"
                                    className="text-input--bordered"
                                />
                            </div>

                            <div className="w-max mr-auto flex items-center gap-x-3 mt-10">
                                <button className="btn btn--bordered">
                                    <CancelIconSquare width={18} height={18} />
                                    لغو
                                </button>

                                <button className="btn btn--primary">
                                    <TickIconSquare width={18} height={18} />
                                    ثبت شخص/شرکت
                                </button>
                            </div>
                        </div>}
                    />
                </div>
            </div>
        </div>
    )
}

export default CreatePersonCompany