import { BodyCard, Input } from "@/components"
import { AlertInfo } from "@/components/alerts"
import { CancelIconSquare, EditIconSquare, Icon2Square, TickIconSquare } from "@/icons"
import { NumberInput, Select, TextInput } from "@mantine/core"
import Link from "next/link"

function DetailsSinglePersonCompanyProductAndService() {
    return (
        <BodyCard
            title="جزییات محصول"
            icon={
                <Icon2Square width={30} height={30} />
            }
        >

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-5 items-end">
                <Input.TextInput
                    value="ورق فولادی"
                    readOnly
                    rightSection="نام"
                    className="text-input--bordered"
                />

                <Input.TextInput
                    value="8765432345678"
                    readOnly
                    rightSection="شناسه"
                    className="text-input--bordered"
                />

                <Input.TextInput
                    value=""
                    readOnly
                    rightSection="کد سیستم حسابداری"
                    className="text-input--bordered"
                />

                <Input.TextInput
                    value="کالا"
                    readOnly
                    rightSection="نوع"
                    className="text-input--bordered"
                />

                <Input.TextInput
                    value="کیلوگرم"
                    readOnly
                    rightSection="واحد"
                    className="text-input--bordered"
                />

                <Input.TextInput
                    value="9%"
                    readOnly
                    rightSection="نرخ ارزش افزوده"
                    className="text-input--bordered"
                />

                <Input.TextInput
                    value="A54245Hb2vaao22rp3v824c"
                    readOnly
                    rightSection="مضوع سایر وجوه قانونی"
                    className="text-input--bordered"
                />

                <Input.TextInput
                    value=""
                    readOnly
                    rightSection="نرخ سایر وجوه قانونی"
                    className="text-input--bordered"
                />

                <Input.TextInput
                    value=""
                    readOnly
                    rightSection="موضوع سایر مالیات و عوارض"
                    className="text-input--bordered"
                />

                <Input.TextInput
                    value=""
                    readOnly
                    rightSection="نرخ سایر مالیات و عوارض"
                    className="text-input--bordered"
                />

                <Input.TextInput
                    value="فعال"
                    readOnly
                    rightSection="وضعیت"
                    className="text-input--bordered text-emerald-500"
                />

                <Input.TextInput
                    value="1402/08/01"
                    readOnly
                    rightSection="تاریخ ایجاد"
                    className="text-input--bordered"
                />
            </div>

            <div className="sm:w-max sm:mr-auto flex items-center gap-x-3 mt-10">
                <Link href="/person-company/123/products-and-services" className="max-sm:flex-1">
                    <button className="btn btn--primary w-full">
                        بازگشت
                    </button>
                </Link>
            </div>
        </BodyCard>
    )
}

export default DetailsSinglePersonCompanyProductAndService