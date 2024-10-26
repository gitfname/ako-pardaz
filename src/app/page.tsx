import Image from "next/image";
import TopNavigationBar from "./components/TopNavigationBar";
import { PlusIcon } from "./icons";
import { NoTickets, TicketCard } from "./components";

export default function Home() {
  return <div>
    <TopNavigationBar />

    <div className="w-full p-2 md:p-5">
      <div className="w-full bg-white rounded-xl min-h-screen -translate-y-24 box-shadow-sm p-3">

        {/* top section */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-x-2">
            <Image
              src="/images/tickets.png"
              width={48}
              height={48}
              className="w-7 h-auto object-center object-cover"
              alt=""
            />
            <span className="text-sm text-black/80">تکیت ها</span>
          </div>

          <button className="btn btn--primary">
            <PlusIcon width={19} height={19} />
            ایجاد تیکت
          </button>

        </div>

        {/* body */}
        <div className="mt-7">

          {/* analytics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <TicketCard
              color="#DBE9FF"
              img="/images/all-tickets.png"
              title="کل تیکت های شما"
              count={0}
            />

            <TicketCard
              color="#D5F4EB"
              img="/images/answered-tickets.png"
              title="تیکت های پاسخ داده شده"
              count={0}
            />

            <TicketCard
              color="#FBEFD8"
              img="/images/in-progress-tickets.png"
              title="تیکت های در حال بررسی"
              count={0}
            />
          </div>

          {/* tickets */}
          <div className="mt-20 grid place-items-center">
            <NoTickets />
          </div>
        </div>

      </div>
    </div>
  </div>
}