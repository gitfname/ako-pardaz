import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function PersonalIcon(props: Props) {
    return (
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M12 12.5732H11.4933C10.96 12.5732 10.4533 12.7798 10.08 13.1532L8.93998 14.2798C8.41998 14.7932 7.57334 14.7932 7.05334 14.2798L5.91333 13.1532C5.54 12.7798 5.02667 12.5732 4.5 12.5732H4C2.89333 12.5732 2 11.6865 2 10.5932V3.31982C2 2.22649 2.89333 1.33984 4 1.33984H12C13.1067 1.33984 14 2.22649 14 3.31982V10.5932C14 11.6798 13.1067 12.5732 12 12.5732Z" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.00061 6.6672C8.85849 6.6672 9.55396 5.97173 9.55396 5.11385C9.55396 4.25597 8.85849 3.56055 8.00061 3.56055C7.14273 3.56055 6.44727 4.25597 6.44727 5.11385C6.44727 5.97173 7.14273 6.6672 8.00061 6.6672Z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.6673 10.4409C10.6673 9.24088 9.47398 8.26758 8.00065 8.26758C6.52732 8.26758 5.33398 9.24088 5.33398 10.4409" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default PersonalIcon 