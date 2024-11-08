import { BodyCard } from "@/components"
import TopNavigationBar from "@/components/TopNavigationBar"
import { BillInquiryIconSquare } from "@/icons"
import { Button, TextInput } from "@mantine/core"
import Link from "next/link"

function BillInquiry() {
    return (
        <div>
            <TopNavigationBar />

            <div className="w-full p-2 md:p-5 -translate-y-24">
                <BodyCard
                    title="استعلام صورت حساب"
                    icon={
                        <BillInquiryIconSquare width={30} height={30} />
                    }
                >
                    <div className="w-full max-w-xl">
                        <p className="text-sm text-black/80">
                            برای گرفتن استعلام صورت حساب, شناسه استعلام یا شماره منحصر به فرد مالیاتی صورت حساب را وارد کنید.
                        </p>

                        <TextInput
                            radius="md"
                            placeholder="شناسه استعلام یا شماره منحصر به فرد مالیاتی"
                            className="mt-5"
                            rightSectionProps={{
                                className: "!w-20 !justify-end !pl-0.5"
                            }}
                            rightSection={
                                <Button
                                    visibleFrom="xs"
                                    component={Link}
                                    href="/bill-inquiry/123"
                                    color="var(--mantine-color-primaryColor-3)"
                                    radius="md"
                                    fw={400}
                                    size="xs"
                                >
                                    استعلام
                                </Button>
                            }
                        />

                        <Button
                            mt={82}
                            w="100%"
                            display="block"
                            hiddenFrom="xs"
                            component={Link}
                            href="/bill-inquiry/123"
                            color="var(--mantine-color-primaryColor-3)"
                            radius="md"
                            fw={400}
                            size="xs"
                        >
                            استعلام
                        </Button>
                    </div>
                </BodyCard>
            </div>
        </div>
    )
}

export default BillInquiry