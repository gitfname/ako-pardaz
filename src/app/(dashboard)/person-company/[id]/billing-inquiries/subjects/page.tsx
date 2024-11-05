import { BodyCard } from "@/components"
import { BillIconSquare, CancelIconSquare, EditIcon, ExcelIconSolid, ExclamationMarkIcon, ExclamationMarkIconSquare, EyeIcon, Icon123, PlusIcon, SearchIcon } from "@/icons"
import Link from "next/link"
import { Button, Select, TextInput, ActionIcon, Pagination } from "@mantine/core"
import Image from "next/image"

function BillingInquiries() {
    return (
        <BodyCard
            title="موضوعات صورت حساب الکترونیکی"
            icon={
                <ExclamationMarkIconSquare width={30} height={30} />
            }
        >
            <p className="text-sm text-black/90 font-medium">
                توضیحات در مورد صورت حساب الکترونیکی اصلی
            </p>

            <Image
                alt=""
                src="/images/subject-image.png"
                width={1126}
                height={380}
                className="w-full h-auto rounded-xl mt-6"
            />

            <div className="w-full max-w-4xl mx-auto mt-6 space-y-6">
                <p className="text-sm text-black/80 leading-6">
                    چنانچه پس از صدور صورتحساب الکترونیکی (اصلی/اصلاحی) بخشی از کالا/خدمت کاهش یافته باشد، فروشنده نسبت به صدور صورتحساب الکترونیکی برگشت از فروش اقدام مینماید. صادرکننده صورتحساب الکترونیکی میبایست صورتحساب برگشت از فروش که از نظر نوع و الگوی صورتحساب مطابق صورتحساب اصلی مرجع و حاوی شماره منحصر به فرد مالیاتی صورتحساب مرجع بوده و شامل اقلام کالا/خدمت فروخته شده منهای اقلام برگشتی است را در صورتحساب درج و در سامانه مؤدیان ثبت نماید؛
                    توجه به نکات زیر در مورد صورتحساب الکترونیکی اصلاحی ضروری است:
                </p>

                <div className="text-sm text-black/80 space-y-1.5">
                    <p>1. اقلام اطلاعاتی مربوط به خریدار غیر قابل اصلاح می باشد.</p>
                    <p>2. تعداد/ مقدار یا ردیف کالا/خدمت میبایست نسبت به صورتحساب مرجع کاهش یافته باشد.</p>
                    <p>3. در صورتی که تمام اقلام کالا/خدمت برگشت داده شده باشد میبایست صورتحساب ابطالی صادر شود.</p>
                    <p>4. مبالغ مربوط به کالا/خدمت در صورتحساب برگشت از فروش نسبت به صورتحساب اصلی نمیتواند تغییر یابد.</p>
                </div>
            </div>

            <div className="w-max mr-auto mt-10">
                <Button radius="md" color="var(--mantine-color-primaryColor-3)" fw={400} component={Link} href="/person-company/123/billing-inquiries/">
                    بازگشت
                </Button>
            </div>
        </BodyCard>
    )
}

export default BillingInquiries