import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function ExitSolidIcon(props: Props) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M7.41602 6.29922C7.67435 3.29922 9.21602 2.07422 12.591 2.07422H12.6993C16.4243 2.07422 17.916 3.56589 17.916 7.29089V12.7242C17.916 16.4492 16.4243 17.9409 12.6993 17.9409H12.591C9.24102 17.9409 7.69935 16.7326 7.42435 13.7826" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1.66602 10H12.3993" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.541 7.20898L13.3327 10.0007L10.541 12.7923" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default ExitSolidIcon