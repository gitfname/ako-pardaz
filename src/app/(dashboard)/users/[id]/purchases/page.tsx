"use client"

import { BodyCard } from "@/components"
import TopNavigationBar from "@/components/TopNavigationBar"
import { Pagination, Select, TextInput } from "@mantine/core"
import { SearchIcon, ShoppingCarIconSquare, DocumentIcon } from "@/icons"

function UserPurchases() {
    return (
        <div>
            <TopNavigationBar />
            <div className="w-full p-2 md:p-5">
                <div className="-translate-y-24">
                    <BodyCard
                        title="لیست خرید های کاربر"
                        icon={
                            <ShoppingCarIconSquare width={24} height={24} />
                        }
                        children={
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <Select
                                        defaultValue="بیشترین فروش"
                                        data={["بیشترین فروش", "کمترین فروش", "فروش های بزرگ"]}
                                        className="w-full max-w-xs"
                                    />

                                    <TextInput
                                        leftSection={<SearchIcon width={16} height={16} className="stroke-black/50" />}
                                        placeholder="جست و جو"
                                        className="w-full max-w-xs"
                                        classNames={{
                                            input: "!bg-myBlue/5"
                                        }}
                                        radius="md"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <div className="grid lg:grid-cols-[15rem_1fr_1fr_1fr_10rem] xl:grid-cols-[18rem_1.3fr_1.3fr_1.3fr_1fr] bg-myBlue/10 rounded-lg p-2 divide-x divide-black/20 divide-x-reverse">
                                        <div className="text-sm text-black/60 pr-3">
                                            محصول
                                        </div>

                                        <div className="text-sm text-black/60 pr-3">
                                            مبلغ پرداختی
                                        </div>

                                        <div className="text-sm text-black/60 pr-3">
                                            وضعیت
                                        </div>

                                        <div className="text-sm text-black/60 pr-3">
                                            تاریخ پرداخت
                                        </div>

                                        <div className="text-sm text-black/60 pr-3">
                                            عملیات
                                        </div>
                                    </div>

                                    <div className="grid lg:grid-cols-[15rem_1fr_1fr_1fr_10rem] xl:grid-cols-[18rem_1.3fr_1.3fr_1.3fr_1fr] rounded-lg p-2 divide-x divide-black/20 divide-x-reverse border border-black/20 odd:border-none odd:bg-zinc-100">
                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            شخص/شرکت سطح یک ( یک ساله )
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            119,404 تومان
                                        </div>

                                        <div className="text-xs text-red-500/80 pr-3 flex items-center">
                                            ناموفق
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            02/08/01_16:05:34
                                        </div>

                                        <div className=" pr-3 flex items-center">
                                            <button className="btn btn--primary text-xs">
                                                <DocumentIcon width={18} height={18} />
                                                صدور فاکتور رسمی
                                            </button>
                                        </div>
                                    </div>

                                    <div className="grid lg:grid-cols-[15rem_1fr_1fr_1fr_10rem] xl:grid-cols-[18rem_1.3fr_1.3fr_1.3fr_1fr] rounded-lg p-2 divide-x divide-black/20 divide-x-reverse border border-black/20 odd:border-none odd:bg-zinc-100">
                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            شخص/شرکت سطح یک ( یک ساله )
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            119,404 تومان
                                        </div>

                                        <div className="text-xs text-emerald-500/80 pr-3 flex items-center">
                                            موفق
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            02/08/01_16:05:34
                                        </div>

                                        <div className=" pr-3 flex items-center">
                                            <button className="btn btn--primary text-xs">
                                                <DocumentIcon width={18} height={18} />
                                                صدور فاکتور رسمی
                                            </button>
                                        </div>
                                    </div>

                                    <div className="grid lg:grid-cols-[15rem_1fr_1fr_1fr_10rem] xl:grid-cols-[18rem_1.3fr_1.3fr_1.3fr_1fr] rounded-lg p-2 divide-x divide-black/20 divide-x-reverse border border-black/20 odd:border-none odd:bg-zinc-100">
                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            شخص/شرکت سطح یک ( یک ساله )
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            119,404 تومان
                                        </div>

                                        <div className="text-xs text-red-500/80 pr-3 flex items-center">
                                            ناموفق
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            02/08/01_16:05:34
                                        </div>

                                        <div className=" pr-3 flex items-center">
                                            <button className="btn btn--primary text-xs">
                                                <DocumentIcon width={18} height={18} />
                                                صدور فاکتور رسمی
                                            </button>
                                        </div>
                                    </div>

                                    <div className="grid lg:grid-cols-[15rem_1fr_1fr_1fr_10rem] xl:grid-cols-[18rem_1.3fr_1.3fr_1.3fr_1fr] rounded-lg p-2 divide-x divide-black/20 divide-x-reverse border border-black/20 odd:border-none odd:bg-zinc-100">
                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            شخص/شرکت سطح یک ( یک ساله )
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            119,404 تومان
                                        </div>

                                        <div className="text-xs text-red-500/80 pr-3 flex items-center">
                                            ناموفق
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            02/08/01_16:05:34
                                        </div>

                                        <div className=" pr-3 flex items-center">
                                            <button className="btn btn--primary text-xs">
                                                <DocumentIcon width={18} height={18} />
                                                صدور فاکتور رسمی
                                            </button>
                                        </div>
                                    </div>

                                    <div className="grid lg:grid-cols-[15rem_1fr_1fr_1fr_10rem] xl:grid-cols-[18rem_1.3fr_1.3fr_1.3fr_1fr] rounded-lg p-2 divide-x divide-black/20 divide-x-reverse border border-black/20 odd:border-none odd:bg-zinc-100">
                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            شخص/شرکت سطح یک ( یک ساله )
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            119,404 تومان
                                        </div>

                                        <div className="text-xs text-emerald-500/80 pr-3 flex items-center">
                                            موفق
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            02/08/01_16:05:34
                                        </div>

                                        <div className=" pr-3 flex items-center">
                                            <button className="btn btn--primary text-xs">
                                                <DocumentIcon width={18} height={18} />
                                                صدور فاکتور رسمی
                                            </button>
                                        </div>
                                    </div>

                                    <div className="grid lg:grid-cols-[15rem_1fr_1fr_1fr_10rem] xl:grid-cols-[18rem_1.3fr_1.3fr_1.3fr_1fr] rounded-lg p-2 divide-x divide-black/20 divide-x-reverse border border-black/20 odd:border-none odd:bg-zinc-100">
                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            شخص/شرکت سطح یک ( یک ساله )
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            119,404 تومان
                                        </div>

                                        <div className="text-xs text-emerald-500/80 pr-3 flex items-center">
                                            موفق
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            02/08/01_16:05:34
                                        </div>

                                        <div className=" pr-3 flex items-center">
                                            <button className="btn btn--primary text-xs">
                                                <DocumentIcon width={18} height={18} />
                                                صدور فاکتور رسمی
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-max mx-auto">
                                    <Pagination defaultValue={1} total={4} size="sm" gap={3} />
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default UserPurchases