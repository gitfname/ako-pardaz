import { BodyCard } from "@/components"
import { CancelIconSquare, EditIcon, ExcelIconSolid, EyeIcon, PeopleIconSquare, PlusIcon, SearchIcon } from "@/icons"
import { Button, Select, TextInput, ActionIcon, Pagination, Checkbox } from "@mantine/core"
import Link from "next/link"

function PersonCompanyFrontTheAccounts() {
    return (
        <BodyCard
            title="طرف حساب ها"
            icon={
                <PeopleIconSquare width={28} height={28} />
            }
            leftSection={
                <div className="flex items-center gap-2 flex-wrap">
                    <Button component={Link} href="/person-company/123/from-the-accounts/create" color="var(--mantine-color-primaryColor-3)" radius="md" fw={400}>
                        <PlusIcon width={20} height={20} className="stroke-white" />&nbsp;
                        ثبت طرف حساب جدید
                    </Button>

                    <Button color="var(--mantine-color-primaryColor-3)" radius="md" fw={400} variant="outline">
                        <ExcelIconSolid width={20} height={20} className="fill-myBlue" />&nbsp;
                        کالا/خدمات اکسل
                    </Button>

                    <Button color="var(--mantine-color-red-5)" radius="md" fw={400} variant="outline">
                        <CancelIconSquare width={20} height={20} className="stroke-red-400" />&nbsp;
                        حذف
                    </Button>

                </div>
            }
        >
            <div className="flex items-center justify-between flex-wrap gap-5">
                <div className="w-full max-w-[10rem] max-md:order-2">
                    <Select
                        defaultValue="بیشترین فروش"
                        data={["بیشترین فروش", "محبوب ترین ها", "کمترین فروش"]}
                        radius="md"
                        classNames={{
                            input: "!bg-zinc-100"
                        }}
                    />
                </div>

                <div className="max-md:order-1 max-md:w-full">
                    <TextInput
                        placeholder="جست و جو"
                        radius="md"
                        className="w-full md:max-w-xs"
                        leftSection={
                            <SearchIcon width={17} height={17} className="stroke-black/50" />
                        }
                        classNames={{
                            input: "!bg-myBlue/10 !placeholder-black/55"
                        }}
                    />
                </div>
            </div>

            <div className="mt-10 space-y-3 overflow-x-auto pb-3 px-0.5">

                <div className="grid w-max grid-cols-[3rem_18rem_8rem_9rem_12rem_7rem_7rem_8rem] bg-myBlue/10 rounded-lg p-2 divide-x divide-black/20 divide-x-reverse">
                    <div></div>

                    <div className="text-sm text-black/60 pr-3">
                        نام طرف حساب
                    </div>

                    <div className="text-sm text-black/60 pr-3">
                        شناسه
                    </div>

                    <div className="text-sm text-black/60 pr-3">
                        کد سیستم حسابداری
                    </div>

                    <div className="text-sm text-black/60 pr-3">
                        کد اقتصادی
                    </div>

                    <div className="text-sm text-black/60 pr-3">
                        نوع
                    </div>

                    <div className="text-sm text-black/60 pr-3">
                        وضعیت
                    </div>

                    <div className="text-sm text-black/60 pr-3">
                        عملیات
                    </div>
                </div>

                {
                    Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className="grid w-max grid-cols-[3rem_18rem_8rem_9rem_12rem_7rem_7rem_8rem] rounded-lg p-2
                            divide-x divide-black/20 divide-x-reverse border border-black/20 odd:border-none
                            odd:bg-zinc-100"
                        >
                            <div className="pr-3 flex items-center">
                                <Checkbox size="sm" />
                            </div>

                            <div className="text-xs text-black/80 pr-3 flex items-center">
                                شرکت زرین حدید اصفهان
                            </div>

                            <div className="text-xs text-black/80 pr-3 flex items-center">
                                68
                            </div>

                            <div className="text-xs text-black/80 pr-3 flex items-center">
                                87654345678
                            </div>

                            <div className="text-xs text-black/80 pr-3 flex items-center">
                                9876543456789
                            </div>

                            <div className="text-xs text-black/80 pr-3 flex items-center">
                                حقوقی
                            </div>

                            <div className="text-xs text-emerald-500/80 pr-3 flex items-center">
                                فعال
                            </div>

                            <div className="pr-3 flex items-center gap-x-2 justify-center">
                                <ActionIcon
                                    component={Link}
                                    href="/person-company/123/from-the-accounts/123/update"
                                    color="var(--mantine-color-yellow-4)"
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
                                    color="var(--mantine-color-red-6)"
                                >
                                    <CancelIconSquare width={18} height={18} className="stroke-white" />
                                </ActionIcon>
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

export default PersonCompanyFrontTheAccounts