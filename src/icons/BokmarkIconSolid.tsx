import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function BookmarkIconSolid(props: Props) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M5.60768 16.4141C6.29102 15.6807 7.33268 15.7391 7.93268 16.5391L8.77435 17.6641C9.44935 18.5557 10.541 18.5557 11.216 17.6641L12.0577 16.5391C12.6577 15.7391 13.6993 15.6807 14.3827 16.4141C15.866 17.9974 17.0743 17.4724 17.0743 15.2557V5.86406C17.0827 2.50573 16.2993 1.66406 13.1493 1.66406H6.84935C3.69935 1.66406 2.91602 2.50573 2.91602 5.86406V15.2474C2.91602 17.4724 4.13268 17.9891 5.60768 16.4141Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.66602 5.83594H13.3327" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.5 9.16406H12.5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default BookmarkIconSolid