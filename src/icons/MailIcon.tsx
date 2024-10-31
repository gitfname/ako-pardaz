import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function MailIcon(props: Props) {
    return (
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M11.332 13.6654H4.66536C2.66536 13.6654 1.33203 12.6654 1.33203 10.332V5.66536C1.33203 3.33203 2.66536 2.33203 4.66536 2.33203H11.332C13.332 2.33203 14.6654 3.33203 14.6654 5.66536V10.332C14.6654 12.6654 13.332 13.6654 11.332 13.6654Z" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.3346 6L9.24797 7.66667C8.5613 8.21333 7.43463 8.21333 6.74797 7.66667L4.66797 6" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default MailIcon 