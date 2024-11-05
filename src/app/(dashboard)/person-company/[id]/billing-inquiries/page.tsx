import { BodyCard } from "@/components"
import { BillIconSquare, CancelIconSquare, EditIcon, ExcelIconSolid, ExclamationMarkIcon, EyeIcon, Icon123, PlusIcon, SearchIcon } from "@/icons"
import Link from "next/link"
import { Button, Select, TextInput, ActionIcon, Pagination } from "@mantine/core"

function BillingInquiries() {
    return (
        <BodyCard
            title="صورت حساب ها"
            icon={
                <BillIconSquare width={30} height={30} />
            }
            leftSection={
                <div className="flex items-center gap-x-2">
                    <Button component={Link} href="/person-company/123/from-the-accounts/create" color="var(--mantine-color-primaryColor-3)" radius="md" fw={400}>
                        <PlusIcon width={20} height={20} className="stroke-white" />&nbsp;
                        ثبت صورت حساب
                    </Button>

                    <Button color="var(--mantine-color-primaryColor-3)" radius="md" fw={400} variant="outline">
                        <ExcelIconSolid width={20} height={20} className="fill-myBlue" />&nbsp;
                        طرف حساب اکسل
                    </Button>

                    <Button component={Link} href="/person-company/123/billing-inquiries/subjects" color="var(--mantine-color-primaryColor-3)" radius="md" fw={400} variant="outline">
                        <ExclamationMarkIcon width={20} height={20} className="stroke-myBlue" />&nbsp;
                        موضوعات صورت حساب الکترونیکی
                    </Button>

                </div>
            }
        >
            <div className="flex items-center justify-between">
                <div className="w-full max-w-[10rem]">
                    <Select
                        defaultValue="بیشترین فروش"
                        data={["بیشترین فروش", "محبوب ترین ها", "کمترین فروش"]}
                        radius="md"
                        classNames={{
                            input: "!bg-zinc-100"
                        }}
                    />
                </div>

                <TextInput
                    placeholder="جست و جو"
                    radius="md"
                    className="w-full max-w-xs"
                    leftSection={
                        <SearchIcon width={17} height={17} className="stroke-black/50" />
                    }
                    classNames={{
                        input: "!bg-myBlue/10 !placeholder-black/55"
                    }}
                />
            </div>

            <div className="mt-10 space-y-7">
                {
                    Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="shadow-md rounded-xl border border-zinc-200">
                            <div className="grid grid-cols-[8rem_1fr_1fr] p-3 bg-myBlue/10">
                                <p className="text-sm font-medium text-black/90">103867</p>
                                <p className="text-sm font-medium text-black/90 pr-3 border-r border-r-black/10">قرارگاه سازندگی خاتم الانبیا موسسه اروندان</p>
                                <p className="text-sm font-medium text-black/90 text-left">9876543234567890-065</p>
                            </div>

                            <div className="overflow-x-auto pb-1">
                                <div className="grid w-max lg:grid-cols-[8rem_8rem_11rem_10rem_10rem_6rem_6rem_14rem_13rem] bg-zinc-200/50 border-y border-y-black/10 py-2 p-3 divide-x divide-black/20 divide-x-reverse">
                                    <div className="text-sm text-black/60 pr-3">
                                        سریال
                                    </div>

                                    <div className="text-sm text-black/60 pr-3">
                                        الگو
                                    </div>

                                    <div className="text-sm text-black/60 pr-3">
                                        روش تسویه
                                    </div>

                                    <div className="text-sm text-black/60 pr-3">
                                        تاریخ صدور
                                    </div>

                                    <div className="text-sm text-black/60 pr-3">
                                        مجموع صورت حساب
                                    </div>

                                    <div className="text-sm text-black/60 pr-3">
                                        موضوع
                                    </div>

                                    <div className="text-sm text-black/60 pr-3">
                                        وضعیت
                                    </div>

                                    <div className="text-sm text-black/60 pr-3">
                                        شناسه صورت حساب مرجع
                                    </div>

                                    <div className="text-sm text-black/60 pr-3">
                                        عملیات
                                    </div>
                                </div>

                                <div className="grid w-max lg:grid-cols-[8rem_8rem_11rem_10rem_10rem_6rem_6rem_14rem_13rem] bg-white py-2.5 p-3 divide-x divide-black/20 divide-x-reverse">
                                    <div className="text-sm text-black/60 pr-3">
                                        09876544567
                                    </div>

                                    <div className="text-sm text-black/60 pr-3">
                                        فروش
                                    </div>

                                    <div className="text-sm text-black/60 pr-3">
                                        نقد
                                    </div>

                                    <div className="text-sm text-black/60 pr-3">

                                    </div>

                                    <div className="text-sm text-black/60 pr-3">
                                        1,119,460,743,224
                                    </div>

                                    <div className="text-sm text-black/60 pr-3">
                                        اصلی
                                    </div>

                                    <div className="text-sm text-emerald-500 pr-3">
                                        فعال
                                    </div>

                                    <div className="text-sm text-black/60 pr-3">
                                        987654323456789065
                                    </div>
                                    <div className="pr-3 flex items-center gap-x-1.5 justify-center">
                                        <ActionIcon
                                            component={Link}
                                            href="/person-company/123/from-the-accounts/123/update"
                                            color="var(--mantine-color-sky-5)"
                                        >
                                            <Icon123 width={18} height={18} className="stroke-white" />
                                        </ActionIcon>

                                        <ActionIcon
                                            component={Link}
                                            href="/person-company/123/from-the-accounts/123/update"
                                            color="var(--mantine-color-gray-6)"
                                        >
                                            <Icon123 width={18} height={18} className="stroke-white" />
                                        </ActionIcon>

                                        <ActionIcon
                                            component={Link}
                                            href="/person-company/123/from-the-accounts/123/update"
                                            color="var(--mantine-color-green-5)"
                                        >
                                            <EditIcon width={18} height={18} className="stroke-white" />
                                        </ActionIcon>

                                        <ActionIcon
                                            component={Link}
                                            href="/person-company/123/from-the-accounts/123/update"
                                            color="var(--mantine-color-yellow-5)"
                                        >
                                            <EditIcon width={18} height={18} className="stroke-white" />
                                        </ActionIcon>

                                        <ActionIcon
                                            component={Link}
                                            href="/person-company/123/from-the-accounts/123/details"
                                            color="var(--mantine-color-primaryColor-3)"
                                        >
                                            <EyeIcon width={18} height={18} className="stroke-white" />
                                        </ActionIcon>

                                        <ActionIcon
                                            color="var(--mantine-color-red-7)"
                                        >
                                            <CancelIconSquare width={18} height={18} className="stroke-white" />
                                        </ActionIcon>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="w-max mx-auto mt-3">
                <Pagination
                    defaultValue={1}
                    total={9}
                    gap={3}
                    size="sm"
                />
            </div>
        </BodyCard>
    )
}

export default BillingInquiries