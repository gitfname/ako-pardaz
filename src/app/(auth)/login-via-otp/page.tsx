"use client"

import { PhoneIcon } from "@/icons"
import { Button, Divider, TextInput } from "@mantine/core"
import Link from "next/link"

function LoginViaOtp() {
    return (
        <div className="w-full grid grid-cols-2 h-screen overflow-hidden">

            {/* right section */}
            <div className="bg-gradient-to-b from-[#7389FF] to-[#455299] grid place-items-center">
                <div className="w-3/5 h-[90%] bg-white rounded-2xl shadow-md shadow-black/10">
                </div>
            </div>

            {/* left section */}
            <div className="grid place-items-center overflow-y-auto px-3 py-8">
                <div className="flex flex-col gap-y-8">
                    <div>
                        <h1 className="text-3xl font-medium text-myBlue text-center">آکو پرداز</h1>
                        <h2 className="text-lg mt-2 font-medium text-black/80 text-center">ورود با رمز یکبار مصرف</h2>
                        <h3 className="text-xs font-medium text-black/65 text-center mt-3">برای دریافت رمز یکبار مصرف,شماره همراه خود را وارد کنید</h3>
                    </div>

                    <div className="space-y-4 w-[20rem]">
                        <TextInput
                            placeholder="شماره تلفن"
                            radius="md"
                            classNames={{
                                section: "!w-16"
                            }}
                            rightSection={
                                <div className="flex items-center gap-x-1">
                                    <span className="text-xs text-black/60">98 +</span>
                                    <PhoneIcon width={18} height={18} className="stroke-black/60" />
                                </div>
                            }
                        />

                        <Button bg="var(--mantine-color-primaryColor-3)" radius="md" fw={400} w="100%">
                            ارسال رمز
                        </Button>

                        <p className="text-xs font-normal text-black/80">
                            حساب کاربری ندارید ؟ <Link href="/login" className="text-myBlue">ثبت نام کنید</Link>
                        </p>

                        <Divider label="یا" />

                        <Button component={Link} href="/login" color="var(--mantine-color-primaryColor-3)" variant="outline" radius="md" fw={400} w="100%">
                            ورود با نام کاربری و رمز عبور
                        </Button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginViaOtp