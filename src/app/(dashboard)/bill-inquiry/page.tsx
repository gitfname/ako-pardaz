import { BodyCard } from "@/components"
import TopNavigationBar from "@/components/TopNavigationBar"
import { Button, TextInput } from "@mantine/core"
import Link from "next/link"

function BillInquiry() {
    return (
        <div>
            <TopNavigationBar />

            <BodyCard
                title="استعلام صورت حساب"
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
                </div>
            </BodyCard>
        </div>
    )
}

export default BillInquiry