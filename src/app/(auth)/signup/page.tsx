"use client"

import { useState } from "react"
import { KeyIconSolid, PersonIconSolid, PhoneIcon } from "@/icons"
import { Button, Divider, PinInput, TextInput, Progress, PasswordInput } from "@mantine/core"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { twMerge } from "tailwind-merge"

enum ESignUpStep {
    GetPhoneNumber = "get-phone-number",
    VerifyPhoneNumber = "verify-phone-number",
    GetUserDetails = "get-user-details",
    GetPassword = "get-password",
    CompleteSignUp = "complete-sign-up"
}

function Stepper({ step }: { step: ESignUpStep }) {
    return <div className="flex items-center gap-x-1.5">
        <div className={twMerge(
            `w-10 h-10 rounded-full bg-myBlue/10 grid place-items-center stroke-myBlue/80`,
            (step === ESignUpStep.GetPhoneNumber || step === ESignUpStep.VerifyPhoneNumber) ? "bg-myBlue/35 stroke-myBlue" : "",
            step !== ESignUpStep.GetPhoneNumber ? "bg-myBlue stroke-white" : ""
        )}>
            <PhoneIcon width={20} height={20} />
        </div>

        <div className="w-12 h-px bg-myBlue/40"></div>

        <div className={twMerge(
            `w-10 h-10 rounded-full bg-myBlue/10 grid place-items-center stroke-myBlue/80`,
            step === ESignUpStep.GetUserDetails ? "bg-myBlue/35 stroke-myBlue" : "",
            step !== ESignUpStep.GetUserDetails && step !== ESignUpStep.GetPhoneNumber && step !== ESignUpStep.VerifyPhoneNumber ? "bg-myBlue stroke-white" : ""
        )}>
            <PersonIconSolid width={20} height={20} />
        </div>

        <div className="w-12 h-px bg-myBlue/40"></div>

        <div className={twMerge(
            `w-10 h-10 rounded-full bg-myBlue/10 grid place-items-center stroke-myBlue/80`,
            step === ESignUpStep.GetPassword ? "bg-myBlue/35 stroke-myBlue" : "",
            step === ESignUpStep.CompleteSignUp ? "bg-myBlue stroke-white" : ""
        )}>
            <KeyIconSolid width={20} height={20} />
        </div>
    </div>
}

function SignUp() {
    const [signUpStep, setSignUpStep] = useState<ESignUpStep>(ESignUpStep.GetPhoneNumber)
    const router = useRouter()

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
                    {
                        signUpStep === ESignUpStep.GetPhoneNumber
                            ?
                            <>
                                <div>
                                    <h1 className="text-3xl font-medium text-myBlue text-center">آکو پرداز</h1>
                                    <h2 className="text-lg mt-2 font-medium text-black/80 text-center">ایجاد حساب کاربری</h2>
                                    <div className="w-max mx-auto mt-4">
                                        <Stepper step={signUpStep} />
                                    </div>
                                </div>

                                <div className="space-y-4 w-[20rem]">
                                    <TextInput
                                        description="شماره تلفن همراه"
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

                                    <Button onClick={() => setSignUpStep(ESignUpStep.VerifyPhoneNumber)} bg="var(--mantine-color-primaryColor-3)" radius="md" fw={400} w="100%">
                                        دریافت کد
                                    </Button>

                                    <p className="text-xs font-normal text-black/80">
                                        قبلا ثبت نام کرده اید ؟ <Link href="/login" className="text-myBlue">وارد شوید</Link>
                                    </p>
                                </div>
                            </>
                            :
                            signUpStep === ESignUpStep.VerifyPhoneNumber
                                ?
                                <div className="flex flex-col gap-y-8">
                                    <div>
                                        <h1 className="text-3xl font-medium text-myBlue text-center">آکو پرداز</h1>
                                        <h2 className="text-lg mt-2 font-medium text-black/80 text-center">تایید شماره همراه</h2>
                                        <div className="w-max mx-auto mt-4">
                                            <Stepper step={signUpStep} />
                                        </div>
                                        <h3 className="text-xs font-medium text-black/65 text-center mt-4">کد ارسال شده به شماره همراه را وارد کنید</h3>
                                    </div>

                                    <div className="space-y-4 w-[20rem]">
                                        <div className="w-max mx-auto">
                                            <PinInput
                                                radius="md"
                                                gap="xs"
                                                onComplete={() => setSignUpStep(ESignUpStep.GetUserDetails)}
                                            />
                                        </div>

                                        <button className="py-2.5 px-3 rounded-xl bg-myBlue/10 text-myBlue text-center block w-full">
                                            ارسال دوباره کد
                                        </button>


                                        <Progress
                                            value={73}
                                            size="sm"
                                            dir="ltr"
                                            color="var(--mantine-color-primaryColor-3)"
                                        />

                                        <p className="text-xs font-normal text-black/80">
                                            شماره تلفن همراه را اشتباه وارد کرده اید ؟ <button onClick={() => setSignUpStep(ESignUpStep.GetPhoneNumber)} className="text-myBlue">اصلاح شماره تماس</button>
                                        </p>
                                    </div>
                                </div>
                                :
                                signUpStep === ESignUpStep.GetUserDetails
                                    ?
                                    <div className="flex flex-col gap-y-8">
                                        <div>
                                            <h1 className="text-3xl font-medium text-myBlue text-center">آکو پرداز</h1>
                                            <h2 className="text-lg mt-2 font-medium text-black/80 text-center">اطلاعات حساب کاربری</h2>
                                            <div className="w-max mx-auto mt-4">
                                                <Stepper step={signUpStep} />
                                            </div>
                                            <h3 className="text-xs font-medium text-black/65 text-center mt-4">اطلاعات خود را وارد کنید</h3>
                                        </div>

                                        <div className="space-y-4 w-[20rem]">
                                            <TextInput
                                                placeholder="نام کاربری"
                                                radius="md"
                                            />

                                            <TextInput
                                                placeholder="نام"
                                                radius="md"
                                            />

                                            <TextInput
                                                placeholder="نام خانوداگی"
                                                radius="md"
                                            />

                                            <TextInput
                                                placeholder="کد معرف"
                                                radius="md"
                                            />

                                            <Button onClick={() => setSignUpStep(ESignUpStep.GetPassword)} mt="lg" fw={400} w="100%" color="var(--mantine-color-primaryColor-3)" radius="md">
                                                تایید
                                            </Button>
                                        </div>
                                    </div>
                                    :
                                    signUpStep === ESignUpStep.GetPassword
                                    &&
                                    <div className="flex flex-col gap-y-8">
                                        <div>
                                            <h1 className="text-3xl font-medium text-myBlue text-center">آکو پرداز</h1>
                                            <h2 className="text-lg mt-2 font-medium text-black/80 text-center">رمز عبور</h2>
                                            <div className="w-max mx-auto mt-4">
                                                <Stepper step={signUpStep} />
                                            </div>
                                            <h3 className="text-xs font-medium text-black/65 text-center mt-4">برای حساب کاربری یک رمز عبور تعیین کنید</h3>
                                        </div>

                                        <div className="space-y-4 w-[20rem]">
                                            <PasswordInput
                                                placeholder="رمز عبور"
                                                radius="md"
                                                leftSection={
                                                    <KeyIconSolid width={20} height={20} className="stroke-black/60" />
                                                }
                                            />

                                            <PasswordInput
                                                placeholder="تکرار رمز عبور"
                                                radius="md"
                                                leftSection={
                                                    <KeyIconSolid width={20} height={20} className="stroke-black/60" />
                                                }
                                            />

                                            <Button onClick={() => router.replace("/")} mt="lg" fw={400} w="100%" color="var(--mantine-color-primaryColor-3)" radius="md">
                                                تایید
                                            </Button>
                                        </div>
                                    </div>

                    }
                </div>
            </div>
        </div>
    )
}

export default SignUp