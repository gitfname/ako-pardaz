import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function KeySolidIcon(props: Props) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M16.4912 12.4426C14.7746 14.1509 12.3162 14.6759 10.1579 14.0009L6.23289 17.9176C5.94955 18.2092 5.39122 18.3842 4.99122 18.3259L3.17455 18.0759C2.57455 17.9926 2.01622 17.4259 1.92455 16.8259L1.67455 15.0092C1.61622 14.6092 1.80789 14.0509 2.08289 13.7676L5.99955 9.85091C5.33289 7.68424 5.84955 5.22591 7.56622 3.51758C10.0246 1.05924 14.0162 1.05924 16.4829 3.51758C18.9496 5.97591 18.9496 9.98425 16.4912 12.4426Z" strokeWidth="1.25" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.74219 14.5742L7.65885 16.4909" strokeWidth="1.25" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.084 9.16602C12.7743 9.16602 13.334 8.60637 13.334 7.91602C13.334 7.22566 12.7743 6.66602 12.084 6.66602C11.3936 6.66602 10.834 7.22566 10.834 7.91602C10.834 8.60637 11.3936 9.16602 12.084 9.16602Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default KeySolidIcon