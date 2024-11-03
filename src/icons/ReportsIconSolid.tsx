import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function ReportsIconSolid(props: Props) {
    return (
        <svg width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M3.80078 22H21.8008" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.40076 8.37891H4.80078C4.25078 8.37891 3.80078 8.82891 3.80078 9.37891V17.9989C3.80078 18.5489 4.25078 18.9989 4.80078 18.9989H6.40076C6.95076 18.9989 7.40076 18.5489 7.40076 17.9989V9.37891C7.40076 8.82891 6.95076 8.37891 6.40076 8.37891Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.6 5.19141H12C11.45 5.19141 11 5.64141 11 6.19141V18.0014C11 18.5514 11.45 19.0014 12 19.0014H13.6C14.15 19.0014 14.6 18.5514 14.6 18.0014V6.19141C14.6 5.64141 14.15 5.19141 13.6 5.19141Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.8011 2H19.2012C18.6512 2 18.2012 2.45 18.2012 3V18C18.2012 18.55 18.6512 19 19.2012 19H20.8011C21.3511 19 21.8011 18.55 21.8011 18V3C21.8011 2.45 21.3511 2 20.8011 2Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default ReportsIconSolid