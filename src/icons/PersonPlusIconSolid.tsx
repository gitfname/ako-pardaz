import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function PersonPlusIconSolid(props: Props) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M10.0002 9.99935C12.3013 9.99935 14.1668 8.13387 14.1668 5.83268C14.1668 3.5315 12.3013 1.66602 10.0002 1.66602C7.69898 1.66602 5.8335 3.5315 5.8335 5.83268C5.8335 8.13387 7.69898 9.99935 10.0002 9.99935Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.8418 18.3333C2.8418 15.1083 6.05013 12.5 10.0001 12.5C10.8001 12.5 11.5751 12.6083 12.3001 12.8083" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.3332 14.9993C18.3332 15.266 18.2998 15.5243 18.2332 15.7743C18.1582 16.1077 18.0248 16.4327 17.8498 16.716C17.2748 17.6827 16.2165 18.3327 14.9998 18.3327C14.1415 18.3327 13.3665 18.0077 12.7832 17.4743C12.5332 17.2577 12.3165 16.9993 12.1498 16.716C11.8415 16.216 11.6665 15.6243 11.6665 14.9993C11.6665 14.0993 12.0248 13.2744 12.6082 12.6744C13.2165 12.0494 14.0665 11.666 14.9998 11.666C15.9832 11.666 16.8748 12.091 17.4748 12.7744C18.0082 13.366 18.3332 14.1493 18.3332 14.9993Z" strokeWidth="1.25" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.2387 14.9844H13.7554" strokeWidth="1.25" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.999 13.7676V16.2592" strokeWidth="1.25" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default PersonPlusIconSolid