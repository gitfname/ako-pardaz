import { TicketCard } from "."

function MyTicketsList() {
    return (
        <div className="space-y-9 w-full">
            <TicketCard
                icon="/images/tickets.png"
                title="مشکل در پرداخت"
                category="مشکل مالی"
            />

            <TicketCard
                icon="/images/tickets.png"
                title="مشکل در پرداخت"
                category="مشکل مالی"
            />

            <TicketCard
                icon="/images/tickets.png"
                title="مشکل در پرداخت"
                category="مشکل مالی"
            />

            <TicketCard
                icon="/images/tickets.png"
                title="مشکل در پرداخت"
                category="مشکل مالی"
            />

            <TicketCard
                icon="/images/tickets.png"
                title="مشکل در پرداخت"
                category="مشکل مالی"
            />
        </div>
    )
}

export default MyTicketsList