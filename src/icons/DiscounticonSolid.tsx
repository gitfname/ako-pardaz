import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function DiscountIconSolid(props: Props) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M16.2493 10.4193C16.2493 9.26927 17.1827 8.33594 18.3327 8.33594V7.5026C18.3327 4.16927 17.4993 3.33594 14.166 3.33594H5.83268C2.49935 3.33594 1.66602 4.16927 1.66602 7.5026V7.91927C2.81602 7.91927 3.74935 8.8526 3.74935 10.0026C3.74935 11.1526 2.81602 12.0859 1.66602 12.0859V12.5026C1.66602 15.8359 2.49935 16.6693 5.83268 16.6693H14.166C17.4993 16.6693 18.3327 15.8359 18.3327 12.5026C17.1827 12.5026 16.2493 11.5693 16.2493 10.4193Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.5 12.2891L12.5 7.28906" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.4961 12.2917H12.5036" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.49607 7.70573H7.50356" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default DiscountIconSolid