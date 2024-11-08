import { BodyCard, Input } from "@/components"
import { AlertInfo } from "@/components/alerts"
import { BookmarkIconSolid, BookmarkIconWithMessageSquare, EyeIcon, TickIconFilled } from "@/icons"
import { Button } from "@mantine/core"
import Link from "next/link"

function SeeBillInquiry() {
    return (
        <BodyCard
            title="مشاهده صورت حساب"
            icon={<BookmarkIconWithMessageSquare width={24} height={24} />}
        >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_18rem] gap-3">
                <div>
                    <div className="p-2 px-3.5 rounded-lg border border-emerald-500/70 bg-emerald-500/10 mb-4">
                        <TickIconFilled width={21} height={21} className="inline-block" />
                        &nbsp;
                        <span className="text-xs text-black/80">صورت حساب تایید شده است و دارای هیچگونه خطایی نیست!</span>
                    </div>

                    <AlertInfo
                        icon={<BookmarkIconSolid width={20} height={20} className="stroke-myBlue" />}
                        text="اطلاعات صورت حساب"
                    />

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                        <Input.TextInput
                            rightSection="سریال"
                            value="87654323456789"
                            readOnly
                            className="text-input--bordered"
                        />

                        <Input.TextInput
                            rightSection="طرف حساب"
                            value="آریا تجهیز سیستم"
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
                            rightSection="روش تسویه"
                            value="نقد"
                            readOnly
                            className="text-input--bordered"
                        />

                        <Input.TextInput
                            rightSection="وضعیت"
                            value="تایید شده"
                            readOnly
                            className="text-input--bordered text-emerald-500"
                        />

                        <Input.TextInput
                            rightSection="تاریخ صدور فاکتور"
                            value="1403/02/02-11:04"
                            readOnly
                            className="text-input--bordered"
                        />
                    </div>
                </div>

                <div>
                    <div className="w-full border border-zinc-300 rounded-xl bg-zinc-100 p-3">
                        <h2 className="text-sm font-medium text-black/90">اطلاعات پرداخت</h2>

                        <div className="mt-5 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-black/60">مبلغ پرداخت نقدی</span>
                                <span className="text-sm text-black/90">610,000,000 تومان</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-xs text-black/60">مبلغ نسیه</span>
                                <span className="text-sm text-black/90">270,000 تومان</span>
                            </div>

                            <div className="border border-dashed border-zinc-300 !my-6"></div>

                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-black/90">مبلغ صورت حساب</span>
                                <span className="text-sm font-medium text-black/90">610,000,000 تومان</span>
                            </div>
                        </div>

                        <Button fw={400} color="var(--mantine-color-primaryColor-3)" radius="md" mt="xl" w="100%">
                            پرداخت آنلاین
                        </Button>
                    </div>
                </div>
            </div>

            <Button
                fw={400} color="var(--mantine-color-primaryColor-3)" radius="md" mr="auto" display="block" w="max-content"
                component={Link} href="/person-company/123/billing-inquiries" mt={92}
            >
                <EyeIcon width={20} height={20} className="stroke-white" />&nbsp;
                نمایش صورت حساب
            </Button>
        </BodyCard>
    )
}

export default SeeBillInquiry