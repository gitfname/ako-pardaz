"use client"

import { BodyCard, NoReports } from "@/components"
import { CalendarIconSolid, CloudsIconSolid, ReportsIconSolid2, ReportsIconSquare } from "@/icons"
import { Button, Select } from "@mantine/core"

function SinglePersonCompanyReport() {
    return (
        <BodyCard
            title="گزارشات"
            icon={
                <ReportsIconSquare width={28} height={28} />
            }
        >
            <div className="flex gap-x-3 items-end">
                <div className="w-full max-w-xs">
                    <Select
                        description="سال مالی"
                        radius="md"
                        data={["1395", "1396", "1397", "1398", "1399", "1400", "1401", "1402", "1403"]}
                        leftSection={
                            <CalendarIconSolid width={20} height={20} className="stroke-black/45" />
                        }
                    />
                </div>

                <div className="w-full max-w-xs">
                    <Select
                        description="دوره مالی"
                        radius="md"
                        data={["تابستان", "زمستان", "پاییز"]}
                        leftSection={
                            <CloudsIconSolid width={20} height={20} className="stroke-black/45" />
                        }
                    />
                </div>

                <Button
                    radius="md"
                    fw={400}
                    color="var(--mantine-color-primaryColor-3)"
                >
                    <ReportsIconSolid2 width={20} height={20} className="stroke-white" />&nbsp;
                    تهیه گزارش
                </Button>
            </div>

            <div className="grid place-items-center py-16">
                <NoReports />
            </div>
        </BodyCard>
    )
}

export default SinglePersonCompanyReport