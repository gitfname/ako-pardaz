import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function ArrowLeftSolidIcon(props: Props) {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M9.57 5.92969L3.5 11.9997L9.57 18.0697" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.4999 12H3.66992" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default ArrowLeftSolidIcon