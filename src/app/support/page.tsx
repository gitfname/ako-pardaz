import Image from "next/image"
import { BodyCard, MyTicketsList, TicketOverviewCard } from "../components"
import TopNavigationBar from "../components/TopNavigationBar"
import { PlusIcon } from "../icons"
import Link from "next/link"

function Settings() {
    return (
        <div>
            <TopNavigationBar />
            <div className="w-full p-2 md:p-5">
                <div className="-translate-y-24">
                    <BodyCard
                        title="تیکت ها"
                        icon={
                            <Image
                                src="/images/tickets.png"
                                width={48}
                                height={48}
                                className="w-7 h-auto object-center object-cover"
                                alt=""
                            />
                        }
                        leftSection={
                            <Link href="/support/new-ticket">
                                <button className="btn btn--primary">
                                    <PlusIcon width={19} height={19} />
                                    ایجاد تیکت
                                </button>
                            </Link>
                        }
                        children={<>
                            {/* analytics */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <TicketOverviewCard
                                    color="#DBE9FF"
                                    img="/images/all-tickets.png"
                                    title="کل تیکت های شما"
                                    count={0}
                                />

                                <TicketOverviewCard
                                    color="#D5F4EB"
                                    img="/images/answered-tickets.png"
                                    title="تیکت های پاسخ داده شده"
                                    count={0}
                                />

                                <TicketOverviewCard
                                    color="#FBEFD8"
                                    img="/images/in-progress-tickets.png"
                                    title="تیکت های در حال بررسی"
                                    count={0}
                                />
                            </div>

                            {/* tickets */}
                            <div className="mt-14">
                                <MyTicketsList />
                            </div>
                        </>}
                    />
                </div>
            </div>
        </div>
    )
}

export default Settings