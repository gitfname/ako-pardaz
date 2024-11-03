import { BodyCard } from "@/components"
import { AlertInfo } from "@/components/alerts"
import { CancelIconSquare, PlusIconSquare, TickIconSquare } from "@/icons"
import { NumberInput, Select, TextInput } from "@mantine/core"
import Link from "next/link"

function NewProductService() {
    return (
        <BodyCard
            title="ثبت کالا/خدمال"
            icon={
                <PlusIconSquare width={30} height={30} />
            }
        >
            <AlertInfo
                text="پر کردن فیلد های ستاره دار اجباری است"
            />

            <div className="mt-8 grid grid-cols-3 gap-4 gap-y-5 items-end">
                <TextInput
                    placeholder="عنوان"
                    radius="md"
                />

                <TextInput
                    placeholder="شناسه"
                    radius="md"
                />

                <Select
                    description="نوع کالا"
                    placeholder={"یک گزینه را انتخاب کنید"}
                    data={["نوع یک", "نوع دو", "نوع سه", "نوع چهار"]}
                    radius="md"
                />

                <TextInput
                    placeholder="کد کالا/خدمت در سیستم حسابداری"
                    radius="md"
                />

                <Select
                    description="واحد اندازه گیری"
                    placeholder={"یک گزینه را انتخاب کنید"}
                    data={["گرم", "کیلوگرم", "تن"]}
                    radius="md"
                />

                <NumberInput
                    placeholder="نرخ ارزش افزوده"
                    max={100}
                    min={0}
                    radius="md"
                />

                <TextInput
                    placeholder="مضوع سایر وجوه قانونی"
                    radius="md"
                />

                <TextInput
                    placeholder="نرخ سایر وجوه قانونی"
                    radius="md"
                />

                <Select
                    description="وضعیت"
                    placeholder={"یک گزینه را انتخاب کنید"}
                    data={["خوب", "بد", "افتضاح"]}
                    radius="md"
                />

                <TextInput
                    placeholder="موضوع سایر مالیات و عوارض"
                    radius="md"
                />

                <TextInput
                    placeholder="نرخ سایر مالیات و عوارض"
                    radius="md"
                />
            </div>

            <div className="w-max mr-auto flex items-center gap-x-3 mt-12">
                <div className="w-max mr-auto flex items-center gap-x-3 mt-10">
                    <Link href="/person-company/123/products-and-services">
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

export default NewProductService