"use client";

import { ReactNode } from "react"
import TopNavigationBar from "@/components/TopNavigationBar"
import Image from "next/image";
import { useState } from "react"
import { Button } from "@mantine/core"
import { BillIconSolid, CubeIconSolid, ExclamationMarkIcon, PersonPlusIconSolid, ReportsIconSolid, ThreePersonIconSolid } from "@/icons";
import { useSetAtom } from "jotai";
import { MoveCompanyOwnerModalMolecule } from "@/components/application-modals/MoveCompanyOwnerModal";
import Link from "next/link";

function PersonCompanyLayout({ children }: { children: ReactNode }) {
    const [currentTab, setCurrentTab] = useState<number>(1)
    const setIsCompanyOwnerModalOpen = useSetAtom(MoveCompanyOwnerModalMolecule.isOpen)
    return (
        <div>
            <TopNavigationBar />

            <div className="w-full p-2 md:p-5 -translate-y-24 space-y-6">

                {/* top section */}
                <div className="w-full p-4 bg-white rounded-2xl shadow-md">
                    <div className="flex items-start justify-between">
                        {/* right section */}
                        <div className="flex items-center gap-x-2">
                            <Image
                                alt=""
                                src="https://fakeimg.pl/300x300"
                                width={300}
                                height={300}
                                loading="lazy"
                                className="w-14 aspect-square rounded-full object-cover object-center"
                            />

                            <div>
                                <h2 className="text-base text-black/90">فولاد تدبیر اصفهان</h2>
                                <h3 className="text-xs text-black/60 mt-1">شخص حقوقی</h3>
                            </div>
                        </div>

                        {/* left section */}
                        <Button onClick={() => setIsCompanyOwnerModalOpen(true)} color="var(--mantine-color-primaryColor-3)" fw={400} radius="md">
                            <PersonPlusIconSolid width={18} height={18} className="stroke-white" />&nbsp;
                            انتقال
                        </Button>
                    </div>

                    {/* tabs */}
                    <div className="mt-9 flex items-center flex-wrap gap-2 gap-y-2.5 p-2 bg-myBlue/10 rounded-xl">
                        <Button component={Link} href="/person-company/123" onClick={() => setCurrentTab(1)} color="var(--mantine-color-primaryColor-3)" fw={400} radius="md" variant={currentTab === 1 ? "filled" : "light"} flex={1}>
                            <ExclamationMarkIcon width={18} height={18} className={"flex-shrink-0 " + (currentTab === 1 ? "stroke-white" : "stroke-myBlue")} />&nbsp;
                            داشبورد اطلاعات
                        </Button>

                        <Button component={Link} href="/person-company/123/products-and-services" onClick={() => setCurrentTab(2)} color="var(--mantine-color-primaryColor-3)" fw={400} radius="md" variant={currentTab === 2 ? "filled" : "light"} flex={1}>
                            <CubeIconSolid width={18} height={18} className={"flex-shrink-0 " + (currentTab === 2 ? "stroke-white" : "stroke-myBlue")} />&nbsp;
                            محصولات و خدمات
                        </Button>

                        <Button component={Link} href="/person-company/123/from-the-accounts" onClick={() => setCurrentTab(3)} color="var(--mantine-color-primaryColor-3)" fw={400} radius="md" variant={currentTab === 3 ? "filled" : "light"} flex={1}>
                            <ThreePersonIconSolid width={18} height={18} className={"flex-shrink-0 " + (currentTab === 3 ? "stroke-white" : "stroke-myBlue")} />&nbsp;
                            طرف حساب ها
                        </Button>

                        <Button onClick={() => setCurrentTab(4)} color="var(--mantine-color-primaryColor-3)" fw={400} radius="md" variant={currentTab === 4 ? "filled" : "light"} flex={1}>
                            <BillIconSolid width={18} height={18} className={"flex-shrink-0 " + (currentTab === 4 ? "stroke-white" : "stroke-myBlue")} />&nbsp;
                            صورت حساب ها
                        </Button>

                        <Button onClick={() => setCurrentTab(5)} color="var(--mantine-color-primaryColor-3)" fw={400} radius="md" variant={currentTab === 5 ? "filled" : "light"} flex={1}>
                            <ReportsIconSolid width={18} height={18} className={"flex-shrink-0 " + (currentTab === 5 ? "stroke-white" : "stroke-myBlue")} />&nbsp;
                            گزارشات
                        </Button>
                    </div>
                </div>

                {children}

            </div>
        </div>
    )
}

export default PersonCompanyLayout