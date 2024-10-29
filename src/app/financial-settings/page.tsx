import Link from "next/link"
import { BodyCard, Input } from "../components"
import TopNavigationBar from "../components/TopNavigationBar"
import { EditIcon, Icon1 } from "../icons"

function FinancialSettings() {
    return (
        <div>
            <TopNavigationBar />
            <div className="w-full p-2 md:p-5">
                <div className="-translate-y-24">
                    <BodyCard
                        title="جزییات تنظیمات مالی"
                        icon={
                            <Icon1 width={24} height={24} />
                        }
                        children={
                            <>
                                <div className="grid grid-cols-2 gap-4">
                                    <Input.TextInput
                                        readOnly
                                        rightSection="نام"
                                        className="text-input--bordered"
                                        value="آکو پرداز"
                                    />

                                    <Input.TextInput
                                        readOnly
                                        rightSection="نوع شخصیت"
                                        className="text-input--bordered"
                                        value="حقیقی"
                                    />

                                    <Input.TextInput
                                        readOnly
                                        rightSection="شناسه ملی"
                                        className="text-input--bordered"
                                        value="8765432345678"
                                    />

                                    <Input.TextInput
                                        readOnly
                                        rightSection="شماره اقتصادی"
                                        className="text-input--bordered"
                                        value="9876543456787"
                                    />

                                    <Input.TextInput
                                        readOnly
                                        rightSection="تلفن"
                                        className="text-input--bordered"
                                        value="09887678767"
                                    />

                                    <Input.TextInput
                                        readOnly
                                        rightSection="کدپستی"
                                        className="text-input--bordered"
                                        value="8765434"
                                    />

                                    <Input.TextInput
                                        readOnly
                                        rightSection="آدرس"
                                        className="text-input--bordered"
                                    />
                                </div>

                                <div className="w-max mr-auto flex items-center gap-x-3 mt-10">

                                    <Link href="/edit-financial-settings">
                                        <button className="btn btn--primary">
                                            <EditIcon width={18} height={18} />
                                            ویرایش تنظیمات مالی
                                        </button>
                                    </Link>

                                </div>
                            </>
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default FinancialSettings