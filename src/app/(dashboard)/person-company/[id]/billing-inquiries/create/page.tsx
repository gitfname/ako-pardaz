"use client"

import { useState } from "react"
import { BodyCard } from "@/components"
import { AlertInfo } from "@/components/alerts"
import { Input } from "@/components/input"
import { ArrowLeftSolidIcon, BookmarkIconSolid, CalculatorIconSolid, CancelIconSquare, EditIcon, PlusIcon, PlusIconSquare, TickIconSquare } from "@/icons"
import { Select, TextInput, Button, Textarea, Text } from "@mantine/core"


const CreateBillingInquiry_Step1 = () => {
    return (
        <>
            <div className="mt-4">
                <AlertInfo
                    icon={
                        <BookmarkIconSolid width={21} height={21} className="stroke-myBlue" />
                    }
                    text="اطلاعات صورت حساب"
                />
            </div>


            <div className="mt-8 grid grid-cols-3 gap-4 gap-y-5 items-end">
                <Select
                    description="نوع صورت حساب"
                    placeholder={"یک گزینه را انتخاب کنید"}
                    data={["نوع یک", "نوع دو", "نوع سه", "نوع چهار"]}
                    radius="md"
                />

                <Select
                    description="طرف حساب"
                    placeholder={"یک گزینه را انتخاب کنید"}
                    data={["نوع یک", "نوع دو", "نوع سه", "نوع چهار"]}
                    radius="md"
                />

                <TextInput
                    placeholder="سریال صورت حساب"
                    radius="md"
                />

                <Select
                    description="الگوی صورت حساب"
                    placeholder={"یک گزینه را انتخاب کنید"}
                    data={["نوع یک", "نوع دو", "نوع سه", "نوع چهار"]}
                    radius="md"
                />

                <Select
                    description="روش تسویه"
                    placeholder={"یک گزینه را انتخاب کنید"}
                    data={["نوع یک", "نوع دو", "نوع سه", "نوع چهار"]}
                    radius="md"
                />

                <TextInput
                    placeholder="تاریخ صدوز فاکتور"
                    radius="md"
                />

                <TextInput
                    placeholder="مالیات موضوع ماده 17"
                    radius="md"
                />
            </div>
        </>
    )
}

const CreateBillingInquiry_Step2 = () => {
    const [items, setItems] = useState<{ key: string }[]>([])

    const handleAddItemClick = () => {
        setItems(prev => [...prev, { key: crypto.randomUUID() }])
    }

    const handleRemoveItemClick = (key: string) => {
        setItems(prev => prev.filter(item => item.key !== key))
    }

    return (
        <>
            <div className="mt-4 relative">
                <AlertInfo
                    icon={
                        <BookmarkIconSolid width={21} height={21} className="stroke-myBlue" />
                    }
                    text="آیتم های صورت حساب"
                />

                <div className="absolute top-1/2 left-1 -translate-y-1/2">
                    <Button onClick={handleAddItemClick} radius="md" fw={400} color="var(--mantine-color-primaryColor-3)">
                        <PlusIcon width={20} height={20} className="stroke-white" />&nbsp;
                        افزودن آیتم
                    </Button>
                </div>
            </div>

            {
                items?.map((item) => (
                    <div key={item.key} className="bg-zinc-100 border border-dashed border-zinc-300 p-4 rounded-2xl mt-8">
                        <div className="grid grid-cols-3 xl:grid-cols-4 gap-4 gap-y-5 items-end">
                            <Select
                                description="کالا/خدمت"
                                placeholder={"یک گزینه را انتخاب کنید"}
                                data={["نوع یک", "نوع دو", "نوع سه", "نوع چهار"]}
                                radius="md"
                            />

                            <TextInput
                                placeholder="مقدار/تعداد"
                                radius="md"
                            />

                            <TextInput
                                placeholder="مبلغ هر واحد"
                                radius="md"
                            />

                            <TextInput
                                placeholder="مبلغ تخفیف"
                                radius="md"
                            />

                            <TextInput
                                placeholder="مبلغ قبل از تخفیف"
                                radius="md"
                            />

                            <TextInput
                                placeholder="مبلغ بعد از تخفیف"
                                radius="md"
                            />

                            <TextInput
                                placeholder="مبلغ مالیات بر ارزش افزوده"
                                radius="md"
                            />

                            <TextInput
                                placeholder="مبلغ سایرمالیات و عوارض"
                                radius="md"
                            />

                            <TextInput
                                placeholder="مبلغ سایر وحوه قانونی"
                                radius="md"
                            />

                            <TextInput
                                placeholder="مبلغ کل کالا/خدمت ریالی"
                                radius="md"
                            />

                            <TextInput
                                placeholder="صهم ارزش افزوده از پرداخت"
                                radius="md"
                            />
                        </div>

                        <div className="my-7 border border-dashed border-zinc-300"></div>

                        <Button onClick={() => handleRemoveItemClick(item.key)} fw={400} color="var(--mantine-color-red-8)" radius="md" variant="outline" mr="auto" display="block">
                            <CancelIconSquare width={22} height={22} className="stroke-red-500" />&nbsp;
                            حذف آیتم
                        </Button>
                    </div>
                ))
            }
        </>
    )
}

const CreateBillingInquiry_Step3 = () => {
    const [items, setItems] = useState<{ key: string }[]>([])

    const handleAddItemClick = () => {
        setItems(prev => [...prev, { key: crypto.randomUUID() }])
    }

    const handleRemoveItemClick = (key: string) => {
        setItems(prev => prev.filter(item => item.key !== key))
    }

    return (
        <div className="space-y-12">
            <div>
                <div className="mt-4 relative">
                    <AlertInfo
                        icon={
                            <BookmarkIconSolid width={21} height={21} className="stroke-myBlue" />
                        }
                        text="اطلاعات صورت حساب"
                    />

                    <div className="absolute top-1/2 left-1 -translate-y-1/2">
                        <Button onClick={handleAddItemClick} radius="md" fw={400} color="var(--mantine-color-primaryColor-3)">
                            <EditIcon width={20} height={20} className="stroke-white" />&nbsp;
                            ویرایش
                        </Button>
                    </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-5">
                    <Input.TextInput
                        rightSection="سریال صورت حساب"
                        value="876544567890"
                        readOnly
                        className="text-input--bordered"
                    />

                    <Input.TextInput
                        rightSection="طرف حساب"
                        value="قرارگاه سازندگی خاتم الانبیا موسسه اروندان"
                        readOnly
                        className="text-input--bordered"
                    />

                    <Input.TextInput
                        rightSection="نوع صورت حساب"
                        value="نوع اول"
                        readOnly
                        className="text-input--bordered"
                    />

                    <Input.TextInput
                        rightSection="روش تسویه"
                        value="نقد"
                        readOnly
                        className="text-input--bordered"
                    />

                    <Input.TextInput
                        rightSection="الگوی صورت حساب"
                        value="فروش"
                        readOnly
                        className="text-input--bordered"
                    />

                    <Input.TextInput
                        rightSection="شناسه منحصر یه فرد مالیاتی مرجع"
                        value="98765434567893"
                        readOnly
                        className="text-input--bordered"
                    />

                    <Input.TextInput
                        rightSection="شناسه منحصر یه فرد مالیاتی"
                        value="86cf20g7624fvu354sd"
                        readOnly
                        className="text-input--bordered"
                    />

                    <Input.TextInput
                        rightSection="تاریخ و زمان صدور فاکتور"
                        value="13:25 | 1403/01/18"
                        readOnly
                        className="text-input--bordered"
                    />
                </div>
            </div>

            <div>
                <div className="mt-4 relative">
                    <AlertInfo
                        icon={
                            <BookmarkIconSolid width={21} height={21} className="stroke-myBlue" />
                        }
                        text="آیتم های صورت حساب"
                    />

                    <div className="absolute top-1/2 left-1 -translate-y-1/2">
                        <Button onClick={handleAddItemClick} radius="md" fw={400} color="var(--mantine-color-primaryColor-3)">
                            <EditIcon width={20} height={20} className="stroke-white" />&nbsp;
                            ویرایش
                        </Button>
                    </div>
                </div>

                <div className="mt-5 overflow-x-auto rounded-xl overflow-hidden border border-zinc-100">
                    <div
                        className="bg-zinc-100 p-2 w-max grid grid-cols-[5rem_16rem_7rem_7rem_9rem_11rem_11rem_11em_9rem_11rem_10rem]
                    divide-x divide-x-reverse divide-black/15 text-black/60"
                    >
                        <p className="text-sm font-medium pr-3">ردیف</p>
                        <p className="text-sm font-medium pr-3">عنوان</p>
                        <p className="text-sm font-medium pr-3">مقدار</p>
                        <p className="text-sm font-medium pr-3">واحد</p>
                        <p className="text-sm font-medium pr-3">فنی</p>
                        <p className="text-sm font-medium pr-3">قبل از تخفیف</p>
                        <p className="text-sm font-medium pr-3">تخفیف</p>
                        <p className="text-sm font-medium pr-3">پس از تخفیف</p>
                        <p className="text-sm font-medium pr-3">ارزش افزوده</p>
                        <p className="text-sm font-medium pr-3">مجموع مالیات و عوارض</p>
                        <p className="text-sm font-medium pr-3">قیمت نهایی</p>
                    </div>

                    <div
                        className="bg-white px-2 w-max grid
                        grid-cols-[5rem_16rem_7rem_7rem_9rem_11rem_11rem_11em_9rem_11rem_10rem]    
                        divide-x divide-x-reverse divide-black/15 min-h-9 text-black/90
                        [&_p]:flex [&_p]:items-center border-b border-b-black/10"
                    >
                        <p className="text-sm font-medium pr-3">1</p>
                        <p className="text-sm font-medium pr-3">پانل ساندویجی 5 سانت</p>
                        <p className="text-sm font-medium pr-3">14.200</p>
                        <p className="text-sm font-medium pr-3">کیلگرم</p>
                        <p className="text-sm font-medium pr-3"></p>
                        <p className="text-sm font-medium pr-3">100.000</p>
                        <p className="text-sm font-medium pr-3">10%</p>
                        <p className="text-sm font-medium pr-3">90.000</p>
                        <p className="text-sm font-medium pr-3">20%</p>
                        <p className="text-sm font-medium pr-3"></p>
                        <p className="text-sm font-medium pr-3">110.000</p>
                    </div>

                    <div
                        className="bg-white px-2 w-max grid
                        grid-cols-[5rem_16rem_7rem_7rem_9rem_11rem_11rem_11em_9rem_11rem_10rem]    
                        divide-x divide-x-reverse divide-black/15 min-h-9 text-black/90
                        [&_p]:flex [&_p]:items-center border-b border-b-black/10"
                    >
                        <p className="text-sm font-medium pr-3">2</p>
                        <p className="text-sm font-medium pr-3">پانل ساندویجی 5 سانت</p>
                        <p className="text-sm font-medium pr-3">14.200</p>
                        <p className="text-sm font-medium pr-3">کیلگرم</p>
                        <p className="text-sm font-medium pr-3"></p>
                        <p className="text-sm font-medium pr-3">100.000</p>
                        <p className="text-sm font-medium pr-3">10%</p>
                        <p className="text-sm font-medium pr-3">90.000</p>
                        <p className="text-sm font-medium pr-3">20%</p>
                        <p className="text-sm font-medium pr-3"></p>
                        <p className="text-sm font-medium pr-3">110.000</p>
                    </div>

                    <div
                        className="bg-white px-2 w-max grid
                        grid-cols-[5rem_16rem_7rem_7rem_9rem_11rem_11rem_11em_9rem_11rem_10rem]    
                        divide-x divide-x-reverse divide-black/15 min-h-9 text-black/90
                        [&_p]:flex [&_p]:items-center border-b border-b-black/10"
                    >
                        <p className="text-sm font-medium pr-3">3</p>
                        <p className="text-sm font-medium pr-3">پانل ساندویجی 5 سانت</p>
                        <p className="text-sm font-medium pr-3">14.200</p>
                        <p className="text-sm font-medium pr-3">کیلگرم</p>
                        <p className="text-sm font-medium pr-3"></p>
                        <p className="text-sm font-medium pr-3">100.000</p>
                        <p className="text-sm font-medium pr-3">10%</p>
                        <p className="text-sm font-medium pr-3">90.000</p>
                        <p className="text-sm font-medium pr-3">20%</p>
                        <p className="text-sm font-medium pr-3"></p>
                        <p className="text-sm font-medium pr-3">110.000</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="mt-4">
                    <AlertInfo
                        icon={
                            <CalculatorIconSolid width={21} height={21} className="stroke-myBlue" />
                        }
                        text="مجموع صورت حساب"
                    />
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                    <Input.TextInput
                        rightSection="مبلغ از کسر تخفیف"
                        value="65,100,000,000 ریال"
                        readOnly
                        className="text-input--bordered"
                    />

                    <Input.TextInput
                        rightSection="سایر مالیات، عوارض و وجوه قانونی"
                        value="0 ریال"
                        readOnly
                        className="text-input--bordered"
                    />

                    <Input.TextInput
                        rightSection="تخفیفات"
                        value="0 ریال"
                        readOnly
                        className="text-input--bordered"
                    />

                    <Input.TextInput
                        rightSection="سهم مالیات بر ارزش افزوده از پرداخت"
                        value="0 ریال"
                        readOnly
                        className="text-input--bordered"
                    />

                    <Input.TextInput
                        rightSection="مبلغ پس از کسر تخفیف"
                        value="0 ریال"
                        readOnly
                        className="text-input--bordered"
                    />

                    <Input.TextInput
                        rightSection="روش تسویه"
                        value="نقد"
                        readOnly
                        className="text-input--bordered"
                    />

                    <Input.TextInput
                        rightSection="مالیات بر ارزش افزوده"
                        value="0 ریال"
                        readOnly
                        className="text-input--bordered"
                    />

                    <Input.TextInput
                        rightSection="مبلغ کل صورت حساب"
                        value="0 ریال"
                        readOnly
                        className="text-input--bordered"
                    />

                    <div>
                        <Textarea
                            radius="md"
                            placeholder="توضیحات صورت حساب"
                            rows={3}
                        />
                        <p className="text-xs text-black/60 mt-1.5 pr-1">
                            حداکثر 250 کاراکتر مجاز است.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

import Link from "next/link"

function CreateBillingInquiry() {
    const [formStep, setFormStep] = useState(1)

    const handleSubmitButtonClick = () => {
        if (formStep < 3) {
            setFormStep(formStep + 1)
        }
    }

    const handlePrevStepButtonClick = () => {
        setFormStep(prev => prev > 0 ? prev - 1 : 0)
    }

    return (
        <BodyCard
            title="ثبت صورت حساب"
            icon={
                <PlusIconSquare width={30} height={30} />
            }
        >
            {
                formStep < 3
                    ?
                    <AlertInfo
                        text="پر کردن فیلد های ستاره دار اجباری است"
                    />
                    :
                    null
            }

            {formStep === 1 ? <CreateBillingInquiry_Step1 /> : null}

            {formStep === 2 ? <CreateBillingInquiry_Step2 /> : null}

            {formStep === 3 ? <CreateBillingInquiry_Step3 /> : null}

            <div className="flex items-center justify-between mt-12">
                {
                    formStep > 1
                        ?
                        <button onClick={handlePrevStepButtonClick} className="btn btn--primary btn--outline border border-myBlue">
                            <ArrowLeftSolidIcon width={18} height={18} className="rotate-180" />
                            مرحبه قبل
                        </button>
                        :
                        null
                }

                <div className="w-max mr-auto flex items-center gap-x-3">
                    <div className="w-max mr-auto flex items-center gap-x-3">
                        <Link href="/person-company/123/billing-inquiries">
                            <button className="btn btn--bordered">
                                <CancelIconSquare width={18} height={18} />
                                لغو
                            </button>
                        </Link>

                        {
                            formStep < 3
                                ?
                                <button onClick={handleSubmitButtonClick} className="btn btn--primary">
                                    مرحله بعد ( افزودن آیتم )
                                    <ArrowLeftSolidIcon width={18} height={18} />
                                </button>
                                :
                                <button onClick={handleSubmitButtonClick} className="btn btn--primary">
                                    <PlusIcon width={18} height={18} />
                                    ثبت صورت حساب
                                </button>
                        }
                    </div>
                </div>
            </div>
        </BodyCard>
    )
}

export default CreateBillingInquiry