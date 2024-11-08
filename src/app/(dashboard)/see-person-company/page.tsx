
"use client"

import CompanyPersonOverviewCard from "@/components/CompanyPersonOverviewCard"
import TopNavigationBar from "@/components/TopNavigationBar"
import { Portal, Select } from "@mantine/core"

function SeePersonCompany() {
    return (
        <div>
            <TopNavigationBar />

            <Portal target="#top-navigation-bar-left-section">
                <Select
                    radius="md"
                    classNames={{
                        input: "!bg-zinc-100"
                    }}
                    defaultValue="شرکت های حقوقی"
                    data={["شرکت های حقوقی", "شرکت های حقیقی"]}
                />
            </Portal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-3 -translate-y-16">
                <CompanyPersonOverviewCard
                    title="فولاد تدبیر اصفهان"
                    subTitle="شخص حقوقی"
                    level="سطح یک"
                    image="https://fakeimg.pl/200x200"
                    branchCode="765323456"
                    nationalCode="765432345678"
                    willExpireInDays={129}
                    status="فعال"
                    statusColor="green"
                />

                <CompanyPersonOverviewCard
                    title="فولاد تدبیر اصفهان"
                    subTitle="شخص حقوقی"
                    level="سطح یک"
                    image="https://fakeimg.pl/200x200"
                    branchCode="765323456"
                    nationalCode="765432345678"
                    willExpireInDays={129}
                    status="فعال"
                    statusColor="green"
                />

                <CompanyPersonOverviewCard
                    title="فولاد تدبیر اصفهان"
                    subTitle="شخص حقوقی"
                    level="سطح یک"
                    image="https://fakeimg.pl/200x200"
                    branchCode="765323456"
                    nationalCode="765432345678"
                    willExpireInDays={129}
                    status="فعال"
                    statusColor="green"
                />

                <CompanyPersonOverviewCard
                    title="فولاد تدبیر اصفهان"
                    subTitle="شخص حقوقی"
                    level="سطح یک"
                    image="https://fakeimg.pl/200x200"
                    branchCode="765323456"
                    nationalCode="765432345678"
                    willExpireInDays={129}
                    status="فعال"
                    statusColor="green"
                />

                <CompanyPersonOverviewCard
                    title="فولاد تدبیر اصفهان"
                    subTitle="شخص حقوقی"
                    level="سطح یک"
                    image="https://fakeimg.pl/200x200"
                    branchCode="765323456"
                    nationalCode="765432345678"
                    willExpireInDays={129}
                    status="فعال"
                    statusColor="green"
                />

                <CompanyPersonOverviewCard
                    title="فولاد تدبیر اصفهان"
                    subTitle="شخص حقوقی"
                    level="سطح یک"
                    image="https://fakeimg.pl/200x200"
                    branchCode="765323456"
                    nationalCode="765432345678"
                    willExpireInDays={129}
                    status="فعال"
                    statusColor="green"
                />

                <CompanyPersonOverviewCard
                    title="فولاد تدبیر اصفهان"
                    subTitle="شخص حقوقی"
                    level="سطح یک"
                    image="https://fakeimg.pl/200x200"
                    branchCode="765323456"
                    nationalCode="765432345678"
                    willExpireInDays={129}
                    status="فعال"
                    statusColor="green"
                />

                <CompanyPersonOverviewCard
                    title="فولاد تدبیر اصفهان"
                    subTitle="شخص حقوقی"
                    level="سطح یک"
                    image="https://fakeimg.pl/200x200"
                    branchCode="765323456"
                    nationalCode="765432345678"
                    willExpireInDays={129}
                    status="فعال"
                    statusColor="green"
                />
            </div>
        </div>
    )
}

export default SeePersonCompany