import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function MdIcon(props: Props) {
    return (
        <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M14.1667 17.0833H5.83335C3.33335 17.0833 1.66669 15.8333 1.66669 12.9167V7.08333C1.66669 4.16666 3.33335 2.91666 5.83335 2.91666H14.1667C16.6667 2.91666 18.3334 4.16666 18.3334 7.08333V12.9167C18.3334 15.8333 16.6667 17.0833 14.1667 17.0833Z"
                strokeWidth="1.25"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M5 6.66667V13.3333"
                strokeWidth="1.25"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.5 6.66667V10"
                strokeWidth="1.25"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.5 12.5V13.3333"
                strokeWidth="1.25"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.5 6.66667V7.5"
                strokeWidth="1.25"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10 6.66667V13.3333"
                strokeWidth="1.25"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.5 10V13.3333"
                strokeWidth="1.25"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15 6.66667V13.3333"
                strokeWidth="1.25"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default MdIcon