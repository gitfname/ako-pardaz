import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function CopyIconSolid(props: Props) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M13.3337 10.7493V14.2493C13.3337 17.166 12.167 18.3327 9.25033 18.3327H5.75033C2.83366 18.3327 1.66699 17.166 1.66699 14.2493V10.7493C1.66699 7.83268 2.83366 6.66602 5.75033 6.66602H9.25033C12.167 6.66602 13.3337 7.83268 13.3337 10.7493Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.3337 5.74935V9.24935C18.3337 12.166 17.167 13.3327 14.2503 13.3327H13.3337V10.7493C13.3337 7.83268 12.167 6.66602 9.25033 6.66602H6.66699V5.74935C6.66699 2.83268 7.83366 1.66602 10.7503 1.66602H14.2503C17.167 1.66602 18.3337 2.83268 18.3337 5.74935Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default CopyIconSolid