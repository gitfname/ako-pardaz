import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function MenuIcon(props: Props) {
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
                d="M4.16669 8.33334H5.83335C7.50002 8.33334 8.33335 7.5 8.33335 5.83334V4.16667C8.33335 2.50001 7.50002 1.66667 5.83335 1.66667H4.16669C2.50002 1.66667 1.66669 2.50001 1.66669 4.16667V5.83334C1.66669 7.5 2.50002 8.33334 4.16669 8.33334Z"
                strokeWidth="1.25"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14.1667 8.33334H15.8334C17.5 8.33334 18.3334 7.5 18.3334 5.83334V4.16667C18.3334 2.50001 17.5 1.66667 15.8334 1.66667H14.1667C12.5 1.66667 11.6667 2.50001 11.6667 4.16667V5.83334C11.6667 7.5 12.5 8.33334 14.1667 8.33334Z"
                strokeWidth="1.25"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14.1667 18.3333H15.8334C17.5 18.3333 18.3334 17.5 18.3334 15.8333V14.1667C18.3334 12.5 17.5 11.6667 15.8334 11.6667H14.1667C12.5 11.6667 11.6667 12.5 11.6667 14.1667V15.8333C11.6667 17.5 12.5 18.3333 14.1667 18.3333Z"
                strokeWidth="1.25"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.16669 18.3333H5.83335C7.50002 18.3333 8.33335 17.5 8.33335 15.8333V14.1667C8.33335 12.5 7.50002 11.6667 5.83335 11.6667H4.16669C2.50002 11.6667 1.66669 12.5 1.66669 14.1667V15.8333C1.66669 17.5 2.50002 18.3333 4.16669 18.3333Z"
                strokeWidth="1.25"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>

    )
}

export default MenuIcon