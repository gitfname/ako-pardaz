import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function ClockIconSolid(props: Props) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M18.3332 9.99935C18.3332 14.5993 14.5998 18.3327 9.99984 18.3327C5.39984 18.3327 1.6665 14.5993 1.6665 9.99935C1.6665 5.39935 5.39984 1.66602 9.99984 1.66602C14.5998 1.66602 18.3332 5.39935 18.3332 9.99935Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.0914 12.6495L10.5081 11.1078C10.0581 10.8411 9.69141 10.1995 9.69141 9.67448V6.25781" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default ClockIconSolid