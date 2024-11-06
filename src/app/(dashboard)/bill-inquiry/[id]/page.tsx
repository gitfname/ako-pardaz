import { BodyCard, Input } from "@/components"
import TopNavigationBar from "@/components/TopNavigationBar"
import { AlertInfo } from "@/components/alerts"
import { BookmarkIconSolid, BookmarkIconWithMessageSquare, DiscountIconSolid } from "@/icons"
import { Button, TextInput } from "@mantine/core"
import Link from "next/link"

function SingleBillInquiryDetails() {
    return (
        <div>
            <TopNavigationBar />

            <div className="w-full p-2 md:p-5 -translate-y-24 space-y-6">
                <BodyCard
                    title="مشاهده صورت حساب"
                    icon={<BookmarkIconWithMessageSquare width={24} height={24} />}
                >
                    <div className="grid grid-cols-[1fr_18rem] gap-3">
                        <div className="space-y-9">
                            <div>
                                <AlertInfo
                                    icon={<BookmarkIconSolid width={20} height={20} className="stroke-myBlue" />}
                                    text="اطلاعات صورت حساب"
                                />

                                <div className="w-full grid grid-cols-2 gap-5 mt-5">
                                    <Input.TextInput
                                        rightSection="عنوان"
                                        value="آریا تجهیز سیستم"
                                        readOnly
                                        className="text-input--bordered"
                                    />

                                    <Input.TextInput
                                        rightSection="شناسه ملی"
                                        value="87654323456789"
                                        readOnly
                                        className="text-input--bordered"
                                    />

                                    <Input.TextInput
                                        rightSection="کد اقتصادی"
                                        value="87654323456789"
                                        readOnly
                                        className="text-input--bordered"
                                    />

                                    <Input.TextInput
                                        rightSection="شناسه یکتا حافظ"
                                        value="A65Gfv3s"
                                        readOnly
                                        className="text-input--bordered"
                                    />
                                </div>
                            </div>

                            <div>
                                <AlertInfo
                                    icon={<BookmarkIconSolid width={20} height={20} className="stroke-myBlue" />}
                                    text="آیتم های صورت حساب"
                                />

                                <div className="mt-5 overflow-x-auto rounded-xl overflow-hidden border border-zinc-100">
                                    <div
                                        className="bg-zinc-100 min-w-full p-2 w-max grid grid-cols-[4rem_10rem_5rem_1fr_1fr]
                    divide-x divide-x-reverse divide-black/15 text-black/60"
                                    >
                                        <p className="text-sm font-medium pr-3">ردیف</p>
                                        <p className="text-sm font-medium pr-3">عنوان</p>
                                        <p className="text-sm font-medium pr-3">تعداد</p>
                                        <p className="text-sm font-medium pr-3">قیمت واحد</p>
                                        <p className="text-sm font-medium pr-3">قیمت کل</p>
                                    </div>

                                    <div
                                        className="min-w-full bg-white px-2 w-max grid
                        grid-cols-[4rem_10rem_5rem_1fr_1fr]    
                        divide-x divide-x-reverse divide-black/15 min-h-9 text-black/90
                        [&_p]:flex [&_p]:items-center border-b border-b-black/10"
                                    >
                                        <p className="text-sm font-medium pr-3">1</p>
                                        <p className="text-xs font-medium pr-3">شخص/شرکت سطح یک (یک ساله)</p>
                                        <p className="text-sm font-medium pr-3">100</p>
                                        <p className="text-sm font-medium pr-3">36,556,000,000</p>
                                        <p className="text-sm font-medium pr-3">36,556,000,000</p>
                                    </div>

                                    <div
                                        className="min-w-full bg-white px-2 w-max grid
                        grid-cols-[4rem_10rem_5rem_1fr_1fr]    
                        divide-x divide-x-reverse divide-black/15 min-h-9 text-black/90
                        [&_p]:flex [&_p]:items-center border-b border-b-black/10"
                                    >
                                        <p className="text-sm font-medium pr-3">2</p>
                                        <p className="text-xs font-medium pr-3">شخص/شرکت سطح یک (یک ساله)</p>
                                        <p className="text-sm font-medium pr-3">100</p>
                                        <p className="text-sm font-medium pr-3">36,556,000,000</p>
                                        <p className="text-sm font-medium pr-3">36,556,000,000</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <AlertInfo
                                    icon={<DiscountIconSolid width={20} height={20} className="stroke-myBlue" />}
                                    text="کد تخفیف"
                                />

                                <TextInput
                                    radius="md"
                                    description="کد تخفیف"
                                    className="mt-5"
                                    rightSectionProps={{
                                        className: "!w-20 !justify-end !pl-0.5"
                                    }}
                                    rightSection={
                                        <Button
                                            color="var(--mantine-color-primaryColor-3)"
                                            radius="md"
                                            fw={400}
                                            size="xs"
                                            variant="light"
                                        >
                                            اعمال
                                        </Button>
                                    }
                                />
                            </div>
                        </div>

                        <div>
                            <div className="w-full border border-zinc-300 rounded-xl bg-zinc-100 p-3">
                                <h2 className="text-sm font-medium text-black/90">اطلاعات پرداخت</h2>

                                <div className="mt-5 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-black/60">مجموع صورت حساب</span>
                                        <span className="text-sm text-black/90">610,000,000 تومان</span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-black/60">مالیات بر ارزش افزوده (9%)</span>
                                        <span className="text-sm text-black/90">270,000 تومان</span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-black/60">تخفیف</span>
                                        <span className="text-sm text-red-600">610,000,000 تومان</span>
                                    </div>

                                    <div className="border border-dashed border-zinc-300 !my-6"></div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-black/90">مبلغ قابل پرداخت</span>
                                        <span className="text-sm font-medium text-black/90">610,000,000 تومان</span>
                                    </div>
                                </div>

                                <Button fw={400} color="var(--mantine-color-primaryColor-3)" radius="md" mt="xl" w="100%">
                                    پرداخت آنلاین
                                </Button>
                            </div>
                        </div>
                    </div>
                </BodyCard>
            </div>
        </div>
    )
}

export default SingleBillInquiryDetails