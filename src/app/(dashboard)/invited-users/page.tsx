"use client"

import Image from "next/image"
import { BodyCard } from "@/components"
import TopNavigationBar from "@/components/TopNavigationBar"
import { Pagination, TextInput } from "@mantine/core"
import { PeopleIconSquare, SearchIcon, PersonPlusIconSolid } from "@/icons"
import { useSetAtom } from "jotai"
import { InviteFriendsModalMolecule } from "@/components/application-modals/InviteFriendsModal"

function InvitedUsers() {
    const setIsInviteFriendModalOpen = useSetAtom(InviteFriendsModalMolecule.isOpen)

    return (
        <div>
            <TopNavigationBar />
            <div className="w-full p-2 md:p-5">
                <div className="-translate-y-24">
                    <BodyCard
                        title="فهرست دعوت شده ها"
                        icon={
                            <PeopleIconSquare width={24} height={24} />
                        }
                        leftSection={
                            <button onClick={() => setIsInviteFriendModalOpen(true)} className="btn btn--primary">
                                <PersonPlusIconSolid width={18} height={18} />
                                <span className="max-sm:hidden">دعوت از دوستان</span>
                            </button>
                        }
                        children={
                            <div className="space-y-6">
                                <TextInput
                                    leftSection={<SearchIcon width={16} height={16} className="stroke-black/50" />}
                                    placeholder="جست و جو"
                                    className="w-full max-w-xs"
                                    classNames={{
                                        input: "!bg-myBlue/5"
                                    }}
                                    radius="md"
                                />

                                <div className="space-y-3 overflow-x-auto">
                                    <div className="grid min-w-full w-max max-sm:grid-cols-[10rem_10rem_10rem] sm:grid-cols-3 bg-myBlue/10 rounded-lg p-2 divide-x divide-black/20 divide-x-reverse">
                                        <div className="text-sm text-black/60 pr-3">
                                            کاربر
                                        </div>

                                        <div className="text-sm text-black/60 pr-3">
                                            معرف
                                        </div>

                                        <div className="text-sm text-black/60 pr-3">
                                            تاریخ معرفی
                                        </div>
                                    </div>

                                    <div className="grid min-w-full w-max max-sm:grid-cols-[10rem_10rem_10rem] sm:grid-cols-3 rounded-lg p-2 divide-x divide-black/20 divide-x-reverse border border-black/20 odd:border-none odd:bg-zinc-100">
                                        <div className="pr-3 flex items-center gap-x-1.5">
                                            <Image
                                                src="https://fakeimg.pl/180x180/"
                                                loading="lazy"
                                                width={180}
                                                height={180}
                                                alt=""
                                                className="w-9 h-9 object-center object-cover rounded-full"
                                            />
                                            <p className="text-xs text-black/80">صحر رستمی</p>
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            ساسان حرب
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            02/08/01_16:05:34
                                        </div>
                                    </div>

                                    <div className="grid min-w-full w-max max-sm:grid-cols-[10rem_10rem_10rem] sm:grid-cols-3 rounded-lg p-2 divide-x divide-black/20 divide-x-reverse border border-black/20 odd:border-none odd:bg-zinc-100">
                                        <div className="pr-3 flex items-center gap-x-1.5">
                                            <Image
                                                src="https://fakeimg.pl/180x180/"
                                                loading="lazy"
                                                width={180}
                                                height={180}
                                                alt=""
                                                className="w-9 h-9 object-center object-cover rounded-full"
                                            />
                                            <p className="text-xs text-black/80">صحر رستمی</p>
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            ساسان حرب
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            02/08/01_16:05:34
                                        </div>
                                    </div>

                                    <div className="grid min-w-full w-max max-sm:grid-cols-[10rem_10rem_10rem] sm:grid-cols-3 rounded-lg p-2 divide-x divide-black/20 divide-x-reverse border border-black/20 odd:border-none odd:bg-zinc-100">
                                        <div className="pr-3 flex items-center gap-x-1.5">
                                            <Image
                                                src="https://fakeimg.pl/180x180/"
                                                loading="lazy"
                                                width={180}
                                                height={180}
                                                alt=""
                                                className="w-9 h-9 object-center object-cover rounded-full"
                                            />
                                            <p className="text-xs text-black/80">صحر رستمی</p>
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            ساسان حرب
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            02/08/01_16:05:34
                                        </div>
                                    </div>

                                    <div className="grid min-w-full w-max max-sm:grid-cols-[10rem_10rem_10rem] sm:grid-cols-3 rounded-lg p-2 divide-x divide-black/20 divide-x-reverse border border-black/20 odd:border-none odd:bg-zinc-100">
                                        <div className="pr-3 flex items-center gap-x-1.5">
                                            <Image
                                                src="https://fakeimg.pl/180x180/"
                                                loading="lazy"
                                                width={180}
                                                height={180}
                                                alt=""
                                                className="w-9 h-9 object-center object-cover rounded-full"
                                            />
                                            <p className="text-xs text-black/80">صحر رستمی</p>
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            ساسان حرب
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            02/08/01_16:05:34
                                        </div>
                                    </div>

                                    <div className="grid min-w-full w-max max-sm:grid-cols-[10rem_10rem_10rem] sm:grid-cols-3 rounded-lg p-2 divide-x divide-black/20 divide-x-reverse border border-black/20 odd:border-none odd:bg-zinc-100">
                                        <div className="pr-3 flex items-center gap-x-1.5">
                                            <Image
                                                src="https://fakeimg.pl/180x180/"
                                                loading="lazy"
                                                width={180}
                                                height={180}
                                                alt=""
                                                className="w-9 h-9 object-center object-cover rounded-full"
                                            />
                                            <p className="text-xs text-black/80">صحر رستمی</p>
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            ساسان حرب
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            02/08/01_16:05:34
                                        </div>
                                    </div>

                                    <div className="grid min-w-full w-max max-sm:grid-cols-[10rem_10rem_10rem] sm:grid-cols-3 rounded-lg p-2 divide-x divide-black/20 divide-x-reverse border border-black/20 odd:border-none odd:bg-zinc-100">
                                        <div className="pr-3 flex items-center gap-x-1.5">
                                            <Image
                                                src="https://fakeimg.pl/180x180/"
                                                loading="lazy"
                                                width={180}
                                                height={180}
                                                alt=""
                                                className="w-9 h-9 object-center object-cover rounded-full"
                                            />
                                            <p className="text-xs text-black/80">صحر رستمی</p>
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            ساسان حرب
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            02/08/01_16:05:34
                                        </div>
                                    </div>

                                    <div className="grid min-w-full w-max max-sm:grid-cols-[10rem_10rem_10rem] sm:grid-cols-3 rounded-lg p-2 divide-x divide-black/20 divide-x-reverse border border-black/20 odd:border-none odd:bg-zinc-100">
                                        <div className="pr-3 flex items-center gap-x-1.5">
                                            <Image
                                                src="https://fakeimg.pl/180x180/"
                                                loading="lazy"
                                                width={180}
                                                height={180}
                                                alt=""
                                                className="w-9 h-9 object-center object-cover rounded-full"
                                            />
                                            <p className="text-xs text-black/80">صحر رستمی</p>
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            ساسان حرب
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            02/08/01_16:05:34
                                        </div>
                                    </div>

                                    <div className="grid min-w-full w-max max-sm:grid-cols-[10rem_10rem_10rem] sm:grid-cols-3 rounded-lg p-2 divide-x divide-black/20 divide-x-reverse border border-black/20 odd:border-none odd:bg-zinc-100">
                                        <div className="pr-3 flex items-center gap-x-1.5">
                                            <Image
                                                src="https://fakeimg.pl/180x180/"
                                                loading="lazy"
                                                width={180}
                                                height={180}
                                                alt=""
                                                className="w-9 h-9 object-center object-cover rounded-full"
                                            />
                                            <p className="text-xs text-black/80">صحر رستمی</p>
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            ساسان حرب
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            02/08/01_16:05:34
                                        </div>
                                    </div>

                                    <div className="grid min-w-full w-max max-sm:grid-cols-[10rem_10rem_10rem] sm:grid-cols-3 rounded-lg p-2 divide-x divide-black/20 divide-x-reverse border border-black/20 odd:border-none odd:bg-zinc-100">
                                        <div className="pr-3 flex items-center gap-x-1.5">
                                            <Image
                                                src="https://fakeimg.pl/180x180/"
                                                loading="lazy"
                                                width={180}
                                                height={180}
                                                alt=""
                                                className="w-9 h-9 object-center object-cover rounded-full"
                                            />
                                            <p className="text-xs text-black/80">صحر رستمی</p>
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            ساسان حرب
                                        </div>

                                        <div className="text-xs text-black/80 pr-3 flex items-center">
                                            02/08/01_16:05:34
                                        </div>
                                    </div>

                                    <div className="w-max mx-auto">
                                        <Pagination defaultValue={1} total={4} size="sm" gap={3} />
                                    </div>
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default InvitedUsers