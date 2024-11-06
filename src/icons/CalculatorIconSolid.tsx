import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function CalculatorIconSolid(props: Props) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M8.33333 18.3307H11.6667C15.8333 18.3307 17.5 16.6641 17.5 12.4974V7.4974C17.5 3.33073 15.8333 1.66406 11.6667 1.66406H8.33333C4.16667 1.66406 2.5 3.33073 2.5 7.4974V12.4974C2.5 16.6641 4.16667 18.3307 8.33333 18.3307Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.75 6.3125V7.14583C13.75 7.82917 13.1917 8.39583 12.5 8.39583H7.5C6.81667 8.39583 6.25 7.8375 6.25 7.14583V6.3125C6.25 5.62917 6.80833 5.0625 7.5 5.0625H12.5C13.1917 5.0625 13.75 5.62083 13.75 6.3125Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.7801 11.6667H6.78973" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.99592 11.6667H10.0055" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.2117 11.6667H13.2214" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.7801 14.5807H6.78973" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.99592 14.5807H10.0055" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.2117 14.5807H13.2214" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default CalculatorIconSolid