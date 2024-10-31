import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function PersonIconSolid(props: Props) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M10.1341 9.05768C10.0508 9.04935 9.95078 9.04935 9.85911 9.05768C7.87578 8.99102 6.30078 7.36602 6.30078 5.36602C6.30078 3.32435 7.95078 1.66602 10.0008 1.66602C12.0424 1.66602 13.7008 3.32435 13.7008 5.36602C13.6924 7.36602 12.1174 8.99102 10.1341 9.05768Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.96758 12.134C3.95091 13.484 3.95091 15.684 5.96758 17.0257C8.25924 18.559 12.0176 18.559 14.3092 17.0257C16.3259 15.6757 16.3259 13.4757 14.3092 12.134C12.0259 10.609 8.26758 10.609 5.96758 12.134Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default PersonIconSolid