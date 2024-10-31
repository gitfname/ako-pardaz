import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function PlusIcon(props: Props) {
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
                d="M6.66797 10H13.3346"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10 13.3307V6.66406"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.5013 18.3307H12.5013C16.668 18.3307 18.3346 16.6641 18.3346 12.4974V7.4974C18.3346 3.33073 16.668 1.66406 12.5013 1.66406H7.5013C3.33464 1.66406 1.66797 3.33073 1.66797 7.4974V12.4974C1.66797 16.6641 3.33464 18.3307 7.5013 18.3307Z"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default PlusIcon