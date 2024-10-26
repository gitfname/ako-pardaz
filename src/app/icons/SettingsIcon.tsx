import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function SettingsIcon(props: Props) {
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
                d="M2.5 7.59115V12.3995C2.5 14.1661 2.5 14.1661 4.16667 15.2911L8.75 17.9411C9.44167 18.3411 10.5667 18.3411 11.25 17.9411L15.8333 15.2911C17.5 14.1661 17.5 14.1661 17.5 12.4078V7.59115C17.5 5.83281 17.5 5.83281 15.8333 4.70781L11.25 2.05781C10.5667 1.65781 9.44167 1.65781 8.75 2.05781L4.16667 4.70781C2.5 5.83281 2.5 5.83281 2.5 7.59115Z"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default SettingsIcon