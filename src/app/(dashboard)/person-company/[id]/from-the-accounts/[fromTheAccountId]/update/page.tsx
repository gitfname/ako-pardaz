import { BodyCard } from "@/components"
import { AlertInfo } from "@/components/alerts"
import { CancelIconSquare, EditIconSquare, PlusIconSquare, TickIconSquare } from "@/icons"
import { Select, TextInput } from "@mantine/core"
import Link from "next/link"

function PersonCompanyUpdateSingleFromTheAccounts() {
    return (
        <BodyCard
            title="ویرایش طرف حساب"
            icon={
                <EditIconSquare width={30} height={30} />
            }
        >
            <AlertInfo
                text="پر کردن فیلد های ستاره دار اجباری است"
            />

            <div className="mt-8 grid grid-cols-3 gap-4 gap-y-5 items-end">
                <TextInput
                    description="نام"
                    placeholder="نام"
                    defaultValue="سلام جهان"
                    radius="md"
                />

                <Select
                    description="نوع شخصیت"
                    defaultValue="نوع دو"
                    placeholder={"یک گزینه را انتخاب کنید"}
                    data={["نوع یک", "نوع دو", "نوع سه", "نوع چهار"]}
                    radius="md"
                />

                <TextInput
                    description="کد طرف حساب در سیستم حسابداری"
                    placeholder="کد طرف حساب در سیستم حسابداری"
                    radius="md"
                />

                <TextInput
                    description="شناسه ملی / شناسه مشارکت / کد فراگیر"
                    placeholder="شناسه ملی / شناسه مشارکت / کد فراگیر"
                    radius="md"
                />

                <TextInput
                    description="کد پستی"
                    placeholder="کد پستی"
                    radius="md"
                />

                <TextInput
                    description="شماره اقتصادی"
                    placeholder="شماره اقتصادی"
                    radius="md"
                />

                <TextInput
                    description="تلفن"
                    placeholder="تلفن"
                    radius="md"
                />

                <TextInput
                    description="آدرس"
                    placeholder="آدرس"
                    className="col-span-2"
                    radius="md"
                />

                <Select
                    description="وضعیت"
                    placeholder={"یک گزینه را انتخاب کنید"}
                    data={["خوب", "بد", "افتضاح"]}
                    radius="md"
                />
            </div>

            <div className="w-max mr-auto flex items-center gap-x-3 mt-12">
                <div className="w-max mr-auto flex items-center gap-x-3 mt-10">
                    <Link href="/person-company/123/from-the-accounts">
                        <button className="btn btn--bordered">
                            <CancelIconSquare width={18} height={18} />
                            لغو
                        </button>
                    </Link>

                    <button className="btn btn--primary">
                        <TickIconSquare width={18} height={18} />
                        ثبت کالا/خدمات
                    </button>
                </div>
            </div>
        </BodyCard>
    )
}

export default PersonCompanyUpdateSingleFromTheAccounts