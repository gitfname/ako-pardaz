"use client"

import { BranchCodeIconSolid, BulbIconSolid, EyeIcon, NationalCardIconSolid, SandClockIconSolid, ThreeDotsIconSolid } from "@/icons";
import { Button } from "@mantine/core"
import Image from "next/image";
import Link from "next/link";

interface Props {
    title: string;
    subTitle: string;
    image: string;
    level: string;
    nationalCode: string;
    branchCode: string;
    willExpireInDays: number;
    status: string;
    statusColor: string;
}

function CompanyPersonOverviewCard(props: Props) {
    return (
        <div className="w-full bg-white rounded-xl shadow-md overflow-hidden p-3 z-10 relative">
            <div className="absolute top-0 left-[26%] -translate-y-4 w-20 aspect-square rounded-full bg-myBlue/15 -z-10"></div>
            <div className="absolute top-1.5 left-[57%] w-3 aspect-square rounded-full bg-myBlue/15 -z-10"></div>

            {/* top section */}
            <div className="relative min-h-32">
                <button className="text-xs absolute top-0 right-0 bg-myBlue/20 rounded-full py-1 px-3 text-black/80">{props.level}</button>

                <div className="text-center">
                    <Image
                        alt={props.title}
                        src={props.image}
                        width={200}
                        height={200}
                        className="w-14 h-14 aspect-square object-center object-cover rounded-full mx-auto"
                    />

                    <h2 className="mt-2 text-sm font-medium text-black/80">
                        {props.title}
                    </h2>

                    <h3 className="mt-1 text-xs font-normal text-black/55">
                        {props.subTitle}
                    </h3>
                </div>

                <Button color="var(--mantine-color-primaryColor-3)" variant="outline" size="sm" radius="md" className="!absolute !top-0 !left-0" px="xs">
                    <ThreeDotsIconSolid width={19} height={19} className="stroke-myBlue" />
                </Button>
            </div>

            <div className="w-full rounded-xl bg-myBlue/15 p-2 mt-3">
                <div className="space-y-2.5">
                    <div className="flex flex-col xl:flex-row xl:items-center gap-y-2 xl:justify-between">
                        <div className="flex items-center gap-x-1">
                            <NationalCardIconSolid width={17} height={17} className="stroke-myBlue flex-shrink-0" />
                            <span className="text-xs text-black/60 flex-shrink-0">شناسه ملی :</span>
                            <span className="text-xs text-black/90 flex-shrink-0">{props.nationalCode}</span>
                        </div>

                        <div className="flex items-center gap-x-1">
                            <SandClockIconSolid width={16} height={16} className="stroke-myBlue flex-shrink-0" />
                            <span className="text-xs text-black/60 flex-shrink-0">اعتبار :</span>
                            <span className="text-xs text-black/90 flex-shrink-0">{props.willExpireInDays} روز</span>
                        </div>
                    </div>

                    <div className="flex flex-col xl:flex-row xl:items-center gap-y-2 xl:justify-between">
                        <div className="flex items-center gap-x-1">
                            <BranchCodeIconSolid width={16} height={16} className="stroke-myBlue flex-shrink-0" />
                            <span className="text-xs text-black/60 flex-shrink-0">کد شعبه :</span>
                            <span className="text-xs text-black/90 flex-shrink-0">{props.branchCode}</span>
                        </div>

                        <div className="flex items-center gap-x-1">
                            <BulbIconSolid width={16} height={16} className="stroke-myBlue flex-shrink-0" />
                            <span className="text-xs text-black/60 flex-shrink-0">وضعیت :</span>
                            <span className="text-xs text-black/90 flex-shrink-0" style={{ color: props.statusColor }}>{props.status}</span>
                        </div>
                    </div>
                </div>
            </div>

            <Button component={Link} href="/person-company/123" fw={400} color="var(--mantine-color-primaryColor-3)" radius="md" fullWidth mt="lg">
                <EyeIcon width={18} height={18} className="stroke-white" />&nbsp;
                مشاهده
            </Button>

        </div>
    );
}

export default CompanyPersonOverviewCard