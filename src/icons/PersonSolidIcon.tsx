import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function PersonSolidIcon(props: Props) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"{...props}>
            <path d="M10.1322 9.05768C10.0488 9.04935 9.94883 9.04935 9.85716 9.05768C7.87383 8.99102 6.29883 7.36602 6.29883 5.36602C6.29883 3.32435 7.94883 1.66602 9.99883 1.66602C12.0405 1.66602 13.6988 3.32435 13.6988 5.36602C13.6905 7.36602 12.1155 8.99102 10.1322 9.05768Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.96563 12.134C3.94896 13.484 3.94896 15.684 5.96563 17.0257C8.25729 18.559 12.0156 18.559 14.3073 17.0257C16.324 15.6757 16.324 13.4757 14.3073 12.134C12.024 10.609 8.26562 10.609 5.96563 12.134Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default PersonSolidIcon