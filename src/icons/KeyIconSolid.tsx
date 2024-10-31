import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function KeyIconSolid(props: Props) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M16.4932 12.4406C14.7765 14.149 12.3182 14.674 10.1598 13.999L6.23484 17.9156C5.95151 18.2073 5.39317 18.3823 4.99317 18.324L3.17651 18.074C2.57651 17.9906 2.01817 17.424 1.92651 16.824L1.67651 15.0073C1.61817 14.6073 1.80984 14.049 2.08484 13.7656L6.00151 9.84896C5.33484 7.68229 5.85151 5.22396 7.56817 3.51563C10.0265 1.05729 14.0182 1.05729 16.4848 3.51563C18.9515 5.97396 18.9515 9.98229 16.4932 12.4406Z" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.74219 14.5742L7.65885 16.4909" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.084 9.16602C12.7743 9.16602 13.334 8.60637 13.334 7.91602C13.334 7.22566 12.7743 6.66602 12.084 6.66602C11.3936 6.66602 10.834 7.22566 10.834 7.91602C10.834 8.60637 11.3936 9.16602 12.084 9.16602Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default KeyIconSolid