import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function SendIcon(props: Props) {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M14.4927 4.22867L5.93267 8.50867C2.09267 10.4287 2.09267 13.5687 5.93267 15.4887L14.4927 19.7687C20.2527 22.6487 22.6027 20.2887 19.7227 14.5387L18.8527 12.8087C18.6327 12.3687 18.6327 11.6387 18.8527 11.1987L19.7227 9.45867C22.6027 3.70867 20.2427 1.34867 14.4927 4.22867Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.5625 12H13.1625" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default SendIcon 