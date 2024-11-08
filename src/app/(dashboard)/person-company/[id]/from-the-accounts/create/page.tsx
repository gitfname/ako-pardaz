import { BodyCard } from "@/components"
import { AlertInfo } from "@/components/alerts"
import { CancelIconSquare, PlusIconSquare, TickIconSquare } from "@/icons"
import { NumberInput, Select, TextInput } from "@mantine/core"
import Link from "next/link"

function PersonCompanyCreateFromTheAccounts() {
    return (
        <BodyCard
            title="ثبت طرف حساب"
            icon={
                <PlusIconSquare width={30} height={30} />
            }
        >
            <AlertInfo
                text="پر کردن فیلد های ستاره دار اجباری است"
            />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-5 items-end">
                <TextInput
                    placeholder="نام"
                    radius="md"
                />

                <Select
                    description="نوع شخصیت"
                    placeholder={"یک گزینه را انتخاب کنید"}
                    data={["نوع یک", "نوع دو", "نوع سه", "نوع چهار"]}
                    radius="md"
                />

                <TextInput
                    placeholder="کد طرف حساب در سیستم حسابداری"
                    radius="md"
                />

                <TextInput
                    placeholder="شناسه ملی / شناسه مشارکت / کد فراگیر"
                    radius="md"
                />

                <TextInput
                    placeholder="کد پستی"
                    radius="md"
                />

                <TextInput
                    placeholder="شماره اقتصادی"
                    radius="md"
                />

                <TextInput
                    placeholder="تلفن"
                    radius="md"
                />

                <TextInput
                    placeholder="آدرس"
                    className="md:col-span-2"
                    radius="md"
                />

                <Select
                    description="وضعیت"
                    placeholder={"یک گزینه را انتخاب کنید"}
                    data={["خوب", "بد", "افتضاح"]}
                    radius="md"
                />
            </div>

            <div className="sm:w-max sm:mr-auto flex items-center gap-x-3 mt-10">
                <Link href="/person-company/123/from-the-accounts" className="max-sm:flex-1">
                    <button className="btn btn--bordered w-full">
                        <CancelIconSquare width={18} height={18} />
                        لغو
                    </button>
                </Link>

                <button className="btn btn--primary max-sm:flex-[3]">
                    <TickIconSquare width={18} height={18} />
                    ثبت کالا/خدمات
                </button>
            </div>
        </BodyCard>
    )
}

export default PersonCompanyCreateFromTheAccounts