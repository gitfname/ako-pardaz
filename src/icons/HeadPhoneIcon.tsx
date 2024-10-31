import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function HeadPhoneIcon(props: Props) {
    return (
        <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g>
                <path
                    d="M2.29249 15.5443C1.95083 15.5443 1.66749 15.2609 1.66749 14.9193V10.1693C1.62583 7.91094 2.46749 5.7776 4.03416 4.1776C5.60083 2.58594 7.70082 1.71094 9.95916 1.71094C14.5758 1.71094 18.3342 5.46927 18.3342 10.0859V14.8359C18.3342 15.1776 18.0508 15.4609 17.7092 15.4609C17.3675 15.4609 17.0842 15.1776 17.0842 14.8359V10.0859C17.0842 6.16094 13.8925 2.96094 9.95916 2.96094C8.03416 2.96094 6.25083 3.7026 4.92583 5.0526C3.59249 6.41094 2.88416 8.21927 2.91749 10.1526V14.9109C2.91749 15.2609 2.64249 15.5443 2.29249 15.5443Z"
                    fill="inherit"
                />
                <path
                    d="M4.94935 10.375H4.84102C3.09102 10.375 1.66602 11.8 1.66602 13.55V15.1167C1.66602 16.8667 3.09102 18.2917 4.84102 18.2917H4.94935C6.69935 18.2917 8.12435 16.8667 8.12435 15.1167V13.55C8.12435 11.8 6.69935 10.375 4.94935 10.375Z"
                    fill="inherit"
                />
                <path
                    d="M15.1583 10.3752H15.05C13.3 10.3752 11.875 11.8002 11.875 13.5502V15.1168C11.875 16.8668 13.3 18.2918 15.05 18.2918H15.1583C16.9083 18.2918 18.3333 16.8668 18.3333 15.1168V13.5502C18.3333 11.8002 16.9083 10.3752 15.1583 10.3752Z"
                    fill="inherit"
                />
            </g>
            <defs>
                <clipPath id="clip0_1_379">
                    <rect width={20} height={20} fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}

export default HeadPhoneIcon