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
                                        w={{ base: "100%", xs: "22rem" }}
                                        placeholder="کلمه عبور قبلی"
                                        radius="md"
                                    />

                                    <PasswordInput
                                        placeholder="کلمه عبور جدید"
                                        w={{ base: "100%", xs: "22rem" }}
                                        visibilityToggleIcon={({ reveal }) => <EyeIcon width={18} height={18} className={reveal ? "stroke-myBlue/90" : "stroke-black/70"} />}
                                        radius="md"
                                    />

                                    <PasswordInput
                                        placeholder="تکرار کلمه عبور جدید"
                                        w={{ base: "100%", xs: "22rem" }}
                                        visibilityToggleIcon={({ reveal }) => <EyeIcon width={18} height={18} className={reveal ? "stroke-myBlue/90" : "stroke-black/70"} />}
                                        radius="md"
                                    />
                                </div>

                                <div className="sm:w-max sm:mr-auto flex items-center gap-x-3 mt-10">
                                    <Link href="/" className="max-sm:flex-1">
                                        <button className="btn btn--bordered w-full">
                                            <CancelIconSquare width={18} height={18} />
                                            لغو
                                        </button>
                                    </Link>

                                    <button className="btn btn--primary max-sm:flex-[3]">
                                        <TickIconSquare width={18} height={18} />
                                        ثبت و تغییر کلمه رمز عبور
                                    </button>
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