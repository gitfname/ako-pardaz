"use client"

import TopNavigationBar from "@/components/TopNavigationBar";
import {
  ArrowLeftSolidIcon, CancelIconSquare, DocumentIcon, EditIcon, Icon123, LayersIconSquare, MailIcon,
  PeopleIcon, PersonalIcon, PhoneIcon, PlusIcon, SearchIcon, ShoppingCarIconSquare, UserIconSquare
} from "@/icons";
import { BodyCard, DataStack } from "@/components";
import DoughnutChart from "@/components/DoughnutChart";
import Link from "next/link";
import { Select, TextInput, Table, Pagination } from "@mantine/core"
import { useSetAtom } from "jotai"
import { InviteFriendsModalMolecule } from "@/components/application-modals/InviteFriendsModal";

export default function Home() {
  const setIsInviteFriendsModalOpen = useSetAtom(InviteFriendsModalMolecule.isOpen)

  return <div>
    <TopNavigationBar />

    <div className="w-full p-2 md:p-5">
      <div className="-translate-y-24 grid lg:grid-cols-2 xl:grid-cols-3 gap-5 gap-y-7">
        <BodyCard
          title="اطلاعات کاربری"
          icon={<UserIconSquare width={22} height={22} />}
          children={<>
            <div className="h-36">
              <DataStack
                data={[
                  { text: "نام", value: "احمد کرمی", icon: <PersonalIcon width={16} height={16} /> },
                  { text: "شماره تماس", value: "09787655676", icon: <PhoneIcon width={16} height={16} /> },
                  { text: "ایمیل", value: "helloworld@gmail.com", icon: <MailIcon width={16} height={16} /> },
                  { text: "شماره مشتری", value: "09887877234", icon: <Icon123 width={16} height={16} /> },
                ]}
              />
            </div>

            <button className="btn btn--primary mt-4">
              <EditIcon width={18} height={18} />
              ویرایش اطلاعات
            </button>
          </>}
        />

        <BodyCard
          title="تعداد کل دعوت شده ها"
          icon={<PeopleIcon width={22} height={22} />}
          leftSection={
            <Link href="/invited-users" className="text-xs text-myBlue">
              مشاهده&nbsp;&nbsp;
              <ArrowLeftSolidIcon width={18} height={18} className="inline-block stroke-myBlue" />
            </Link>
          }
          children={<>
            <div className="h-36">
              <p className="text-center leading-none text-4xl font-semibold text-black/90">
                0
              </p>

              <p className="text-xs font-normal text-black/50 mt-3 text-center max-w-[40ch] mx-auto">
                هنوز کسی را دعوت نکرده اید
                با ارسال لینک زیر دوستان خود را دعوت کنید
              </p>
            </div>

            <button onClick={() => setIsInviteFriendsModalOpen(true)} className="btn btn--primary mt-4">
              <PersonalIcon width={18} height={18} />
              دعوت از دوستان
            </button>
          </>}
        />

        <BodyCard
          title="تعداد شخص/شرکت"
          icon={<LayersIconSquare width={22} height={22} />}
          leftSection={
            <Link href="/" className="text-xs text-myBlue">
              مشاهده&nbsp;&nbsp;
              <ArrowLeftSolidIcon width={18} height={18} className="inline-block stroke-myBlue" />
            </Link>
          }
          children={<>
            <div className="h-36">
              <p className="text-center leading-none text-4xl font-semibold text-black/90">
                24
              </p>

              <div className="flex items-center gap-x-2 justify-center mt-6">
                <div className="flex items-center gap-x-1 bg-emerald-500/15 rounded-md py-1 px-2">
                  <CancelIconSquare width={16} height={16} className="stroke-emerald-500" />
                  <span className="text-xs text-black/90">فعال</span>
                  <span className="text-xs text-black/90 p-1 px-1.5 rounded bg-white leading-none">18</span>
                </div>

                <div className="flex items-center gap-x-1 bg-red-500/15 rounded-md py-1 px-2">
                  <CancelIconSquare width={16} height={16} className="stroke-red-500" />
                  <span className="text-xs text-black/90">غیرفعال</span>
                  <span className="text-xs text-black/90 p-1 px-1.5 rounded bg-white leading-none">6</span>
                </div>
              </div>
            </div>

            <button className="btn btn--primary mt-4">
              <PlusIcon width={18} height={18} />
              ثبت شخص/شرکت  جدید
            </button>
          </>}
        />

        <div className="xl:order-2">
          <BodyCard
            title="تعداد کل فاکتور ها به تفکیک شخص/شرکت"
            icon={<LayersIconSquare width={22} height={22} />}
            children={<>
              <div className="min-h-36">
                <div className="w-40 mx-auto">
                  <DoughnutChart />
                </div>
              </div>
            </>}
          />
        </div>

        <div className="col-span-2 xl:order-1">
          <BodyCard
            title="توضیع صورت حساب ها به تفکیک شخص/فروش"
            icon={<LayersIconSquare width={22} height={22} />}
            children={<>
              <div className="min-h-36">
                <div className="flex items-center justify-between">
                  <Select
                    defaultValue="بیشترین فروش"
                    data={["بیشترین فروش", "کمترین فروش", "فروش های بزرگ"]}
                    className="w-full max-w-[16rem]"
                  />

                  <TextInput
                    placeholder="جست و جو"
                    leftSection={<SearchIcon width={18} height={18} className="fill-black/50" />}
                    className="w-full max-w-md"
                  />
                </div>

                <Table
                  className="mt-10"
                  classNames={{
                    th: "last:rounded-tl-xl first:rounded-tr-xl text-black/60 font-normal"
                  }}
                  striped="even"
                >
                  <Table.Thead className="bg-myBlue/10">
                    <Table.Tr>
                      <Table.Th>شخص شرکت</Table.Th>
                      <Table.Th>حقیقی/حقوقی</Table.Th>
                      <Table.Th>تعداد کل فاکتور ها</Table.Th>
                      <Table.Th>جمع فروش</Table.Th>
                    </Table.Tr>
                  </Table.Thead>

                  <Table.Tbody>
                    <Table.Tr>
                      <Table.Td>فولاد تدبیر اصفهان</Table.Td>
                      <Table.Td>حقوقی</Table.Td>
                      <Table.Td>68</Table.Td>
                      <Table.Td>1,119,460,743,224 تومان</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                      <Table.Td>فولاد تدبیر اصفهان</Table.Td>
                      <Table.Td>حقوقی</Table.Td>
                      <Table.Td>68</Table.Td>
                      <Table.Td>1,119,460,743,224 تومان</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                      <Table.Td>فولاد تدبیر اصفهان</Table.Td>
                      <Table.Td>حقوقی</Table.Td>
                      <Table.Td>68</Table.Td>
                      <Table.Td>1,119,460,743,224 تومان</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                      <Table.Td>فولاد تدبیر اصفهان</Table.Td>
                      <Table.Td>حقوقی</Table.Td>
                      <Table.Td>68</Table.Td>
                      <Table.Td>1,119,460,743,224 تومان</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                      <Table.Td>فولاد تدبیر اصفهان</Table.Td>
                      <Table.Td>حقوقی</Table.Td>
                      <Table.Td>68</Table.Td>
                      <Table.Td>1,119,460,743,224 تومان</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                      <Table.Td>فولاد تدبیر اصفهان</Table.Td>
                      <Table.Td>حقوقی</Table.Td>
                      <Table.Td>68</Table.Td>
                      <Table.Td>1,119,460,743,224 تومان</Table.Td>
                    </Table.Tr>
                  </Table.Tbody>
                </Table>

                <div className="w-max mx-auto mt-4">
                  <Pagination defaultValue={1} total={7} size="sm" gap={3} />
                </div>
              </div>
            </>}
          />
        </div>

        <div className="col-span-full">
          <BodyCard
            title="لیست خرید های کاربر"
            icon={<ShoppingCarIconSquare width={22} height={22} />}
            leftSection={
              <Link href="/users/123/purchases" className="text-xs text-myBlue">
                مشاهده&nbsp;&nbsp;
                <ArrowLeftSolidIcon width={18} height={18} className="inline-block stroke-myBlue" />
              </Link>
            }
            children={<>
              <div className="min-h-36">
                <div className="flex items-center justify-between">
                  <Select
                    defaultValue="بیشترین فروش"
                    data={["بیشترین فروش", "کمترین فروش", "فروش های بزرگ"]}
                    className="w-full max-w-[16rem]"
                  />

                  <TextInput
                    placeholder="جست و جو"
                    leftSection={<SearchIcon width={18} height={18} className="fill-black/50" />}
                    className="w-full max-w-md"
                  />
                </div>

                <Table
                  className="mt-10"
                  classNames={{
                    th: "last:rounded-tl-xl first:rounded-tr-xl text-black/60 font-normal"
                  }}
                  striped="even"
                >
                  <Table.Thead className="bg-myBlue/10">
                    <Table.Tr>
                      <Table.Th>محصول</Table.Th>
                      <Table.Th>مبلغ پرداختی</Table.Th>
                      <Table.Th>وضعیت</Table.Th>
                      <Table.Th>تاریخ پرداخت</Table.Th>
                      <Table.Th>عملیات</Table.Th>
                    </Table.Tr>
                  </Table.Thead>

                  <Table.Tbody>
                    <Table.Tr>
                      <Table.Td>شخص/شرکت سطح یک ( یکساله )</Table.Td>
                      <Table.Td>11,904 تومان</Table.Td>
                      <Table.Td c="red">ناموفق</Table.Td>
                      <Table.Td>02/08/01_16:05:34</Table.Td>
                      <Table.Td>
                        <button className="btn btn--primary">
                          <DocumentIcon width={18} height={18} />
                          صدور فاکتور رسمی
                        </button>
                      </Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                      <Table.Td>شخص/شرکت سطح یک ( یکساله )</Table.Td>
                      <Table.Td>11,904 تومان</Table.Td>
                      <Table.Td c="red">ناموفق</Table.Td>
                      <Table.Td>02/08/01_16:05:34</Table.Td>
                      <Table.Td>
                        <button className="btn btn--primary">
                          <DocumentIcon width={18} height={18} />
                          صدور فاکتور رسمی
                        </button>
                      </Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                      <Table.Td>شخص/شرکت سطح یک ( یکساله )</Table.Td>
                      <Table.Td>11,904 تومان</Table.Td>
                      <Table.Td c="green">موفق</Table.Td>
                      <Table.Td>02/08/01_16:05:34</Table.Td>
                      <Table.Td>
                        <button className="btn btn--primary">
                          <DocumentIcon width={18} height={18} />
                          صدور فاکتور رسمی
                        </button>
                      </Table.Td>
                    </Table.Tr>
                  </Table.Tbody>
                </Table>

                <div className="w-max mx-auto mt-4">
                  <Pagination defaultValue={1} total={7} size="sm" gap={3} />
                </div>
              </div>
            </>}
          />
        </div>

      </div>
    </div>
  </div>
}