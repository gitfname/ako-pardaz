"use client"

import { useState } from "react"
import { BodyCard } from "@/components"
import { AlertInfo } from "@/components/alerts"
import { Input } from "@/components/input"
import { ArrowLeftSolidIcon, BookmarkIconSolid, BookmarkIconWithMessageSquare, CalculatorIconSolid, CancelIconSquare, EditIcon, PlusIcon, PlusIconSquare, TickIconSquare } from "@/icons"
import { Select, TextInput, Button, Textarea, Text } from "@mantine/core"
import Link from "next/link"

function SinglePersonCompanyBillInquiryDetails() {
    return (
        <BodyCard
            title="جزییات صورت حساب"
            icon={
                <BookmarkIconWithMessageSquare width={30} height={30} />
            }
        >
            <div className="space-y-9">
                <div className="space-y-5">
                    <AlertInfo
                        text="اطلاعات صورت حساب"
                        icon={<BookmarkIconSolid width={21} height={21} className="stroke-myBlue" />}
                    />

                    <div className="grid grid-cols-2 gap-5">
                        <Input.TextInput
                            rightSection="سریال صورت حساب"
                            value="114"
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
                            rightSection="شناسه منحصر به فرد مالیاتی مرجع"
                            value="8765423456789"
                            readOnly
                            className="text-input--bordered"
                        />

                        <Input.TextInput
                            rightSection="شناسه منحصر به فرد مالیاتی"
                            value="9876543123456789"
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

                <div className="space-y-5">
                    <AlertInfo
                        text="آیتم صورت حساب"
                        icon={<BookmarkIconSolid width={21} height={21} className="stroke-myBlue" />}
                    />

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

                        {
                            Array.from({ length: 3 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="bg-white px-2 w-max grid
                        grid-cols-[5rem_16rem_7rem_7rem_9rem_11rem_11rem_11em_9rem_11rem_10rem]    
                        divide-x divide-x-reverse divide-black/15 min-h-9 text-black/90
                        [&_p]:flex [&_p]:items-center border-b border-b-black/10"
                                >
                                    <p className="text-sm font-medium pr-3">{index + 1}</p>
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
                            ))
                        }
                    </div>
                </div>

                <div className="space-y-5">
                    <AlertInfo
                        icon={
                            <CalculatorIconSolid width={21} height={21} className="stroke-myBlue" />
                        }
                        text="مجموع صورت حساب"
                    />

                    <div className="grid grid-cols-2 gap-4">
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

                        <Textarea
                            radius="md"
                            description="توضیحات صورت حساب"
                            rows={3}
                            readOnly
                            value="hello world"
                        />
                    </div>
                </div>

                <Button
                    fw={400} color="var(--mantine-color-primaryColor-3)" radius="md" mr="auto" display="block" w="max-content"
                    component={Link} href="/person-company/123/billing-inquiries"
                >
                    بازگشت
                </Button>
            </div>
        </BodyCard>
    )
}

export default SinglePersonCompanyBillInquiryDetails