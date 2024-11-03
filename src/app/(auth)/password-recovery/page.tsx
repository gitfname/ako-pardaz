"use client"

import { PinInput, Progress } from "@mantine/core"

function PasswordRecovery() {
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
                        <h2 className="text-lg mt-2 font-medium text-black/80 text-center">تایید شماره همراه</h2>
                        <h3 className="text-xs font-medium text-black/65 text-center mt-3">کد ارسال شده به شماره همراه را وارد کنید</h3>
                    </div>

                    <div className="space-y-4 w-[20rem]">
                        <div className="w-max mx-auto">
                            <PinInput
                                radius="md"
                                gap="xs"
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
                            شماره تلفن همراه را اشتباه وارد کرده اید ؟ <span className="text-myBlue">اصلاح شماره تماس</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasswordRecovery