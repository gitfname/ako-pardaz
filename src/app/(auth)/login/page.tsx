"use client"

import { EyeIcon, KeyIconSolid, PersonIconSolid } from "@/icons"
import { Button, Checkbox, Divider, PasswordInput, TextInput } from "@mantine/core"
import Link from "next/link"

function Auth() {
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
                        <h1 className="text-3xl font-medium text-black/80 text-center">آکو پرداز</h1>
                        <h2 className="text-sm font-medium text-black/75 text-center mt-3">خوش آمدید! به حساب کاربری خود وارد شوید</h2>
                    </div>

                    <div className="space-y-4 w-[20rem]">
                        <TextInput
                            placeholder="نام کاربری"
                            radius="md"
                            rightSection={
                                <PersonIconSolid width={18} height={18} className="stroke-black/60" />
                            }
                        />

                        <PasswordInput
                            placeholder="رمز عبور"
                            radius="md"
                            visibilityToggleIcon={({ reveal }) => <EyeIcon width={18} height={18} className={reveal ? "stroke-myBlue" : "stroke-black/60"} />}
                            leftSection={
                                <KeyIconSolid width={16} height={16} className="stroke-black/70" />
                            }
                        />

                        <p className="text-xs font-normal text-black/80">
                            رمز عبور خود را فراموش کرده اید ؟ <span className="text-myBlue">بازیابی رمز عبور</span>
                        </p>

                        <Checkbox label="مرا به خاطر بسپار" size="xs" mt="lg" />

                        <Button bg="var(--mantine-color-primaryColor-3)" radius="md" fw={400} w="100%">
                            ورود
                        </Button>

                        <p className="text-xs font-normal text-black/80">
                            حساب کاربری ندارید ؟ <span className="text-myBlue">ثبت نام کنید</span>
                        </p>

                        <Divider label="یا" />

                        <Button component={Link} href="/login-via-otp" color="var(--mantine-color-primaryColor-3)" variant="outline" radius="md" fw={400} w="100%">
                            ورود با رمز یک بار مصرف
                        </Button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth