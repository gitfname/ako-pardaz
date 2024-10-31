"use client"

import Image from "next/image"
import { BodyCard, Input } from "@/components"
import TopNavigationBar from "@/components/TopNavigationBar"
import { CancelIconSquare, CreditCardSolidIcon, EyeIcon, KeyIconSquare, PersonSolidIcon, TickIconSquare } from "@/icons"
import Link from "next/link"
import { AlertInfo } from "@/components/alerts"
import { PasswordInput, TextInput } from "@mantine/core"

function UpdatePassword() {
    return (
        <div>
            <TopNavigationBar />
            <div className="w-full p-2 md:p-5">
                <div className="-translate-y-24">
                    <BodyCard
                        title="ویرایش رمز عبور"
                        icon={
                            <KeyIconSquare width={26} height={26} />
                        }
                        children={
                            <div>
                                <div className="space-y-6">
                                    <TextInput
                                        placeholder="کلمه عبور قبلی"
                                        className="w-full max-w-xs"
                                        radius="md"
                                    />

                                    <PasswordInput
                                        placeholder="کلمه عبور جدید"
                                        visibilityToggleIcon={({ reveal }) => <EyeIcon width={18} height={18} className={reveal ? "stroke-myBlue/90" : "stroke-black/70"} />}
                                        className="w-full max-w-xs"
                                        radius="md"
                                    />

                                    <PasswordInput
                                        placeholder="تکرار کلمه عبور جدید"
                                        visibilityToggleIcon={({ reveal }) => <EyeIcon width={18} height={18} className={reveal ? "stroke-myBlue/90" : "stroke-black/70"} />}
                                        className="w-full max-w-xs"
                                        radius="md"
                                    />
                                </div>

                                <div className="w-max mr-auto flex items-center gap-x-3 mt-10">
                                    <div className="w-max mr-auto flex items-center gap-x-3 mt-10">
                                        <Link href="/">
                                            <button className="btn btn--bordered">
                                                <CancelIconSquare width={18} height={18} />
                                                لغو
                                            </button>
                                        </Link>

                                        <button className="btn btn--primary">
                                            <TickIconSquare width={18} height={18} />
                                            ثبت و تغییر کلمه رمز عبور
                                        </button>
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

export default UpdatePassword