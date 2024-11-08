import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function ReportsIconSquare(props: Props) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect width={32} height={32} rx={10} fill="#E3E9FD" />
            <path d="M23.5 24.9609H8.5C8.15833 24.9609 7.875 24.6776 7.875 24.3359C7.875 23.9943 8.15833 23.7109 8.5 23.7109H23.5C23.8417 23.7109 24.125 23.9943 24.125 24.3359C24.125 24.6776 23.8417 24.9609 23.5 24.9609Z" fill="#7389FF" />
            <path d="M10.6667 12.9844H9.33333C8.875 12.9844 8.5 13.3594 8.5 13.8177V21.001C8.5 21.4594 8.875 21.8344 9.33333 21.8344H10.6667C11.125 21.8344 11.5 21.4594 11.5 21.001V13.8177C11.5 13.351 11.125 12.9844 10.6667 12.9844Z" fill="#7389FF" />
            <path d="M16.6667 10.3281H15.3333C14.875 10.3281 14.5 10.7031 14.5 11.1615V21.0031C14.5 21.4615 14.875 21.8365 15.3333 21.8365H16.6667C17.125 21.8365 17.5 21.4615 17.5 21.0031V11.1615C17.5 10.7031 17.125 10.3281 16.6667 10.3281Z" fill="#7389FF" />
            <path d="M22.6667 7.66406H21.3333C20.875 7.66406 20.5 8.03906 20.5 8.4974V20.9974C20.5 21.4557 20.875 21.8307 21.3333 21.8307H22.6667C23.125 21.8307 23.5 21.4557 23.5 20.9974V8.4974C23.5 8.03906 23.125 7.66406 22.6667 7.66406Z" fill="#7389FF" />
        </svg>
    )
}

export default ReportsIconSquare