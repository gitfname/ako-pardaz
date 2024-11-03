import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function BulbIconSolid(props: Props) {
    return (
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M5.53357 12.0281V11.2548C4.00023 10.3281 2.74023 8.52142 2.74023 6.60142C2.74023 3.30142 5.77357 0.714752 9.20023 1.46142C10.7069 1.79475 12.0269 2.79475 12.7136 4.17475C14.1069 6.97475 12.6402 9.94809 10.4869 11.2481V12.0214C10.4869 12.2148 10.5602 12.6614 9.8469 12.6614H6.17357C5.44023 12.6681 5.53357 12.3814 5.53357 12.0281Z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.66602 14.6648C7.19268 14.2315 8.80602 14.2315 10.3327 14.6648" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default BulbIconSolid