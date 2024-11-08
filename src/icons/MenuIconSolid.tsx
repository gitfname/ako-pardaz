import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function MenuIconSolid(props: Props) {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M22 6L13.25 6" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M22 12L2 12" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M22 18L8.25 18" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    )
}

export default MenuIconSolid