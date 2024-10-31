import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function EditIcon(props: Props) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M9.16602 1.66797H7.49935C3.33268 1.66797 1.66602 3.33464 1.66602 7.5013V12.5013C1.66602 16.668 3.33268 18.3346 7.49935 18.3346H12.4993C16.666 18.3346 18.3327 16.668 18.3327 12.5013V10.8346" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.3656 2.51639L6.79892 9.08306C6.54892 9.33306 6.29892 9.82472 6.24892 10.1831L5.89059 12.6914C5.75726 13.5997 6.39892 14.2331 7.30726 14.1081L9.81559 13.7497C10.1656 13.6997 10.6573 13.4497 10.9156 13.1997L17.4823 6.63306C18.6156 5.49972 19.1489 4.18306 17.4823 2.51639C15.8156 0.849722 14.4989 1.38306 13.3656 2.51639Z" strokeWidth="1.3" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.4238 3.45703C12.9822 5.4487 14.5405 7.00703 16.5405 7.5737" strokeWidth="1.3" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default EditIcon 