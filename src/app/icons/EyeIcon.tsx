import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function EyeIcon(props: Props) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M12.9842 9.99896C12.9842 11.649 11.6509 12.9823 10.0009 12.9823C8.35091 12.9823 7.01758 11.649 7.01758 9.99896C7.01758 8.34896 8.35091 7.01562 10.0009 7.01562C11.6509 7.01562 12.9842 8.34896 12.9842 9.99896Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.99987 16.8932C12.9415 16.8932 15.6832 15.1599 17.5915 12.1599C18.3415 10.9849 18.3415 9.0099 17.5915 7.8349C15.6832 4.8349 12.9415 3.10156 9.99987 3.10156C7.0582 3.10156 4.31654 4.8349 2.4082 7.8349C1.6582 9.0099 1.6582 10.9849 2.4082 12.1599C4.31654 15.1599 7.0582 16.8932 9.99987 16.8932Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default EyeIcon 