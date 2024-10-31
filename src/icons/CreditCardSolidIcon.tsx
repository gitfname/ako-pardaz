import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function CreditCardSolidIcon(props: Props) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M1.66602 7.08789H18.3327" strokeWidth="1.25" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 13.7539H6.66667" strokeWidth="1.25" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.75 13.7539H12.0833" strokeWidth="1.25" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.36602 2.91992H14.6243C17.591 2.91992 18.3327 3.65326 18.3327 6.57826V13.4199C18.3327 16.3449 17.591 17.0783 14.6327 17.0783H5.36602C2.40768 17.0866 1.66602 16.3533 1.66602 13.4283V6.57826C1.66602 3.65326 2.40768 2.91992 5.36602 2.91992Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default CreditCardSolidIcon