import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function ExclamationMarkIcon(props: Props) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M9.99935 18.3346C14.5827 18.3346 18.3327 14.5846 18.3327 10.0013C18.3327 5.41797 14.5827 1.66797 9.99935 1.66797C5.41602 1.66797 1.66602 5.41797 1.66602 10.0013C1.66602 14.5846 5.41602 18.3346 9.99935 18.3346Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 6.66797V10.8346" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.99414 13.332H10.0016" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default ExclamationMarkIcon