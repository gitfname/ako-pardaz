import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function BillIconSolid(props: Props) {
    return (
        <svg width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M22.4004 6V8.42C22.4004 10 21.4004 11 19.8204 11H16.4004V4.01C16.4004 2.9 17.3104 2 18.4204 2C19.5104 2.01 20.5104 2.45 21.2304 3.17C21.9504 3.9 22.4004 4.9 22.4004 6Z" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.40039 7V21C2.40039 21.83 3.34039 22.3 4.00039 21.8L5.71039 20.52C6.11039 20.22 6.67039 20.26 7.03039 20.62L8.69039 22.29C9.08039 22.68 9.72039 22.68 10.1104 22.29L11.7904 20.61C12.1404 20.26 12.7004 20.22 13.0904 20.52L14.8004 21.8C15.4604 22.29 16.4004 21.82 16.4004 21V4C16.4004 2.9 17.3004 2 18.4004 2H7.40039H6.40039C3.40039 2 2.40039 3.79 2.40039 6V7Z" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.40039 13.0117H12.4004" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.40039 9.01172H12.4004" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.39648 13H6.40547" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.39648 9H6.40547" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default BillIconSolid