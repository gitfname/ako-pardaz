import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function ApartmentIcon(props: Props) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M1.66797 18.3359H18.3346" strokeWidth="1.25" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.1667 1.66406H5.83333C3.33333 1.66406 2.5 3.15573 2.5 4.9974V18.3307H17.5V4.9974C17.5 3.15573 16.6667 1.66406 14.1667 1.66406Z" strokeWidth="1.25" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.83203 13.75H8.33203" strokeWidth="1.25" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.668 13.75H14.168" strokeWidth="1.25" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.83203 10H8.33203" strokeWidth="1.25" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.668 10H14.168" strokeWidth="1.25" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.83203 6.25H8.33203" strokeWidth="1.25" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.668 6.25H14.168" strokeWidth="1.25" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export default ApartmentIcon