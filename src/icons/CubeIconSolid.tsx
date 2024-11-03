import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function CubeIconSolid(props: Props) {
    return (
        <svg width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M3.27148 7.44141L12.1015 12.5514L20.8715 7.47141" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.1016 21.6091V12.5391" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.0322 2.48126L4.69219 5.44126C3.48219 6.11126 2.49219 7.79126 2.49219 9.17126V14.8213C2.49219 16.2013 3.48219 17.8813 4.69219 18.5513L10.0322 21.5213C11.1722 22.1513 13.0422 22.1513 14.1822 21.5213L19.5222 18.5513C20.7322 17.8813 21.7222 16.2013 21.7222 14.8213V9.17126C21.7222 7.79126 20.7322 6.11126 19.5222 5.44126L14.1822 2.47126C13.0322 1.84126 11.1722 1.84126 10.0322 2.48126Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default CubeIconSolid