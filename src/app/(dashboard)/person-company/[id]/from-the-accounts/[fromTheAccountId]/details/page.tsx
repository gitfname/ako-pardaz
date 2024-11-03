import { BodyCard, Input } from "@/components"
import { PersonWithMessageIconSquare } from "@/icons"
import Link from "next/link"

function DetailsSinglePersonCompanyFromTheAccount() {
    return (
        <BodyCard
            title="مشخصات طرف حساب"
            icon={
                <PersonWithMessageIconSquare width={30} height={30} />
            }
        >

            <div className="mt-8 grid grid-cols-2 xl:grid-cols-3 gap-4 gap-y-5 items-end">
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
                    value="876543456789"
                    readOnly
                    rightSection="کد اقتصادی"
                    className="text-input--bordered"
                />

                <Input.TextInput
                    value="98764345678"
                    readOnly
                    rightSection="کد پستی"
                    className="text-input--bordered"
                />

                <Input.TextInput
                    value="09887899876"
                    readOnly
                    rightSection="تلفن"
                    className="text-input--bordered"
                />

                <Input.TextInput
                    value="1402/08/01"
                    readOnly
                    rightSection="تاریخ ایجاد"
                    className="text-input--bordered"
                />

                <Input.TextInput
                    value="سلام جهان و موارد دیگر برای این فیلد"
                    readOnly
                    rightSection="آدرس"
                    className="text-input--bordered"
                />

                <Input.TextInput
                    value="فعال"
                    readOnly
                    rightSection="وضعیت"
                    className="text-input--bordered text-emerald-500"
                />
            </div>

            <div className="w-max mr-auto flex items-center gap-x-3 mt-12">
                <div className="w-max mr-auto flex items-center gap-x-3 mt-10">
                    <Link href="/person-company/123/from-the-accounts">
                        <button className="btn btn--primary">
                            بازگشت
                        </button>
                    </Link>
                </div>
            </div>
        </BodyCard>
    )
}

export default DetailsSinglePersonCompanyFromTheAccount