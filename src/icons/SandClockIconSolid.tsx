import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function SandClockIconSolid(props: Props) {
    return (
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M10.1594 1.33203H5.83937C3.33271 1.33203 3.13937 3.58536 4.49271 4.81203L11.506 11.1854C12.8594 12.412 12.666 14.6654 10.1594 14.6654H5.83937C3.33271 14.6654 3.13937 12.412 4.49271 11.1854L11.506 4.81203C12.8594 3.58536 12.666 1.33203 10.1594 1.33203Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default SandClockIconSolid