"use client"

import { BodyCard, Input } from "@/components"
import TopNavigationBar from "@/components/TopNavigationBar"
import { Chat } from "@/components/chat"
import { ChatContext } from "@/components/chat/context"
import { DocumentIconSquare } from "@/icons"
import Link from "next/link"
import { useContext, useEffect } from "react"

function TicketDetails() {
    const chats = useContext(ChatContext.ChatsContext)

    // set fake chats
    useEffect(
        () => {
            chats.setChats([
                {
                    id: 1,
                    isMe: true,
                    text: "سلام",
                    createdAt: "2024/03/09 - 16:38",
                },
                {
                    id: 2,
                    isMe: true,
                    text: "یه مشکلی در بخش مالی داشتم",
                    createdAt: "2024/03/09 - 16:39",
                },
                {
                    id: 3,
                    isMe: true,
                    text: "هرچقدر دکمه خرید رو میزنم باز هم خطای 'توکن نا معتبر است ' است رو میگیرم",
                    createdAt: "2024/03/09 - 16:39",
                },
                {
                    id: 4,
                    isMe: true,
                    text: "اینو لطفا راهنمایی کنید الان 2 روز هست به خاطر این مشکل نمیتونم خرید هامو نهایی کنم",
                    createdAt: "2024/03/09 - 16:40",
                },
                {
                    id: 5,
                    isMe: false,
                    text: "با سلام وقتتون بخیر",
                    createdAt: "2024/03/09 - 16:59",
                },
                {
                    id: 6,
                    isMe: false,
                    text: "مشکلی که عرض کردین خارج از بخش مالی هست و برای بخش فنی مرتبط میباشد. ما اطلاعات حساب شما و مشکلی که باهاش مواجه شدنی رو به بخش فنی اطلاع دادیم و از بخش فنی در سریع ترین زمان ممکن باهاتون تماس گرفته خواهد شد",
                    createdAt: "2024/03/09 - 16:59",
                },
                {
                    id: 7,
                    isMe: false,
                    text: "اگر هر مشکلی دیگری در مورد مالی دارید بفرمایید. ما همیشه در خدمتتون هستیم",
                    createdAt: "2024/03/09 - 17:02",
                }
            ])
        }, []
    )

    return (
        <div>
            <TopNavigationBar />
            <div className="w-full p-2 md:p-5">
                <div className="-translate-y-24">
                    <BodyCard
                        title="جزییات تیکت"
                        icon={
                            <DocumentIconSquare width={26} height={26} />
                        }
                        children={<>
                            <div className="grid lg:grid-cols-2 gap-5">
                                {/* chat section */}
                                <div className="h-[27rem] overflow-y-auto max-lg:order-2">
                                    <Chat.ChatBox />
                                </div>

                                {/* details section */}
                                <div className="flex flex-col gap-y-9 max-lg:order-1">
                                    <Input.TextInput
                                        readOnly
                                        floatLabel="عنوان تیکت"
                                        value="تکست فیلد"
                                        className="text-input--bordered"
                                    />

                                    <Input.TextInput
                                        readOnly
                                        floatLabel="دسته بندی"
                                        value="مالی"
                                        className="text-input--bordered"
                                    />

                                    <div className="w-full relative">
                                        <Input.TextInput
                                            readOnly
                                            floatLabel="فایل"
                                            value="hello-world.png"
                                            className="text-input--bordered"
                                        />

                                        <button className="btn btn--primary absolute min-h-8 top-1 bottom-1  left-0.5">
                                            مشاهده فایل
                                        </button>
                                    </div>

                                    <Link href="/support" className="mt-auto mr-auto w-max">
                                        <button className="btn btn--primary px-4">
                                            بازگشت
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </>}
                    />
                </div>
            </div>
        </div>
    )
}

export default TicketDetails