
"use client";

import TopNavigationBar from "@/components/TopNavigationBar"
import Image from "next/image";
import { useState } from "react"
import { Button } from "@mantine/core"
import { BillIconSolid, CubeIconSolid, EditIcon, ExclamationMarkIcon, PersonPlusIconSolid, ReportsIconSolid, ReportsSandClockIconSquare, ThreePersonIconSolid, UserIconSquare } from "@/icons";
import { BodyCard, Input } from "@/components";
import { useSetAtom } from "jotai";
import { MoveCompanyOwnerModalMolecule } from "@/components/application-modals/MoveCompanyOwnerModal";
import Link from "next/link";

function PersonCompanyDetails() {
    const [currentTab, setCurrentTab] = useState<number>(1)
    const setIsCompanyOwnerModalOpen = useSetAtom(MoveCompanyOwnerModalMolecule.isOpen)

    return (
        <div className="grid xl:grid-cols-[2fr_1fr] gap-5">
            {/* right section */}
            <div>
                <BodyCard
                    title="اطلاعات شخصی"
                    icon={
                        <UserIconSquare width={24} height={24} />
                    }
                >
                    <>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <Input.TextInput
                                value="1345678909876"
                                readOnly
                                rightSection="شناسه ملی"
                                className="text-input--bordered"
                            />

                            <Input.TextInput
                                value="Ag2524D"
                                readOnly
                                rightSection="شناسه یکتای حافظه"
                                className="text-input--bordered"
                            />

                            <Input.TextInput
                                value="Ag2524D"
                                readOnly
                                rightSection="کد شعبه"
                                className="text-input--bordered"
                            />

                            <Input.TextInput
                                value="فعال"
                                readOnly
                                rightSection="وضعیت"
                                className="text-input--bordered text-green-500"
                            />

                            <Input.TextInput
                                value="09021702103"
                                readOnly
                                rightSection="شماره تلفن"
                                className="text-input--bordered"
                            />

                            <Input.TextInput
                                value="09021702103"
                                readOnly
                                rightSection="کد پستی"
                                className="text-input--bordered"
                            />

                            <div className="col-span-full">
                                <Input.TextInput
                                    value="تهران بلوار مرزداران خیابان ابراهیمی برج الوند طبقه 5 واحد 506"
                                    readOnly
                                    rightSection="آدرس"
                                    className="text-input--bordered"
                                />
                            </div>
                        </div>

                        <Button w={{base: "100%", xs: "max-content"}} component={Link} href="/person-company/123/update" fw={400} color="var(--mantine-color-primaryColor-3)" radius="md" mt={62}>
                            <EditIcon width={18} height={18} className="stroke-white" />&nbsp;
                            ویرایش اطلاعات
                        </Button>
                    </>
                </BodyCard>
            </div>

            {/* left section */}
            <div>
                <BodyCard
                    title="اعتبار حساب کاربری"
                    icon={<ReportsSandClockIconSquare width={24} height={24} />}
                >
                    <div className="w-full h-28 rounded-xl bg-myBlue/20"></div>

                    <div className="space-y-3 mt-5">
                        <div className="flex items-center justify-between bg-myBlue/15 p-1.5 rounded-xl px-3">
                            <p className="text-sm text-black/90 rounded-md">
                                تاریخ انقضا
                            </p>

                            <p className="text-sm text-black/90 py-2 px-3 leading-none rounded-md bg-white">1403/03/21</p>
                        </div>

                        <div className="flex items-center justify-between bg-myBlue/15 p-1.5 rounded-xl px-3">
                            <p className="text-sm text-black/90 rounded-md">
                                مانده اعتبار
                            </p>

                            <p className="text-sm text-black/90 py-2 px-3 leading-none rounded-md bg-white">196 روز</p>
                        </div>
                    </div>
                </BodyCard>
            </div>
        </div>
    )
}

export default PersonCompanyDetails