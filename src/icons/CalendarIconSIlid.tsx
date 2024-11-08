import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function CalendarIconSolid(props: Props) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M6.66602 1.66406V4.16406" strokeWidth="1.25" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.334 1.66406V4.16406" strokeWidth="1.25" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.91602 7.57812H17.0827" strokeWidth="1.25" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.5 7.08073V14.1641C17.5 16.6641 16.25 18.3307 13.3333 18.3307H6.66667C3.75 18.3307 2.5 16.6641 2.5 14.1641V7.08073C2.5 4.58073 3.75 2.91406 6.66667 2.91406H13.3333C16.25 2.91406 17.5 4.58073 17.5 7.08073Z" strokeWidth="1.25" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.0781 11.4167H13.0856" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.0781 13.9167H13.0856" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.99607 11.4167H10.0036" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.99607 13.9167H10.0036" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.91209 11.4167H6.91957" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.91209 13.9167H6.91957" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default CalendarIconSolid