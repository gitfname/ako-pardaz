"use client"

import { BodyCard, NotificationCard } from "@/components"
import TopNavigationBar from "@/components/TopNavigationBar"
import { Pagination } from "@mantine/core"
import { PeopleIconSquare } from "@/icons"
import { useSetAtom } from "jotai"
import { InviteFriendsModalMolecule } from "@/components/application-modals/InviteFriendsModal"

function Notifications() {
    const setIsInviteFriendModalOpen = useSetAtom(InviteFriendsModalMolecule.isOpen)

    return (
        <div>
            <TopNavigationBar />
            <div className="w-full p-2 md:p-5">
                <div className="-translate-y-24">
                    <BodyCard
                        title="اعلانات"
                        icon={
                            <PeopleIconSquare width={24} height={24} />
                        }
                        children={
                            <div className="space-y-6">
                                <NotificationCard
                                    createdAt="09:42 - 1402/11/14"
                                    title="تغییر وضعیت صورتحساب"
                                    category="وضعیت صورتحساب"
                                    description="صورت حساب شما در وضعیت معلق قرار گرفت"
                                />

                                <NotificationCard
                                    createdAt="09:42 - 1402/11/14"
                                    title="تغییر وضعیت صورتحساب"
                                    category="وضعیت صورتحساب"
                                    description="صورت حساب شما در وضعیت معلق قرار گرفت"
                                />

                                <NotificationCard
                                    createdAt="09:42 - 1402/11/14"
                                    title="تغییر وضعیت صورتحساب"
                                    category="وضعیت صورتحساب"
                                    description="صورت حساب شما در وضعیت معلق قرار گرفت"
                                />

                                <NotificationCard
                                    createdAt="09:42 - 1402/11/14"
                                    title="تغییر وضعیت صورتحساب"
                                    category="وضعیت صورتحساب"
                                    description="صورت حساب شما در وضعیت معلق قرار گرفت"
                                />

                                <NotificationCard
                                    createdAt="09:42 - 1402/11/14"
                                    title="تغییر وضعیت صورتحساب"
                                    category="وضعیت صورتحساب"
                                    description="صورت حساب شما در وضعیت معلق قرار گرفت"
                                />

                                <div className="w-max mx-auto">
                                    <Pagination defaultValue={1} total={6} gap={3} size="sm" />
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default Notifications