import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function CancelIconSquare(props: Props) {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M7.64062 12.3612L12.3573 7.64453" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.3573 12.3612L7.64062 7.64453" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.49935 18.3346H12.4993C16.666 18.3346 18.3327 16.668 18.3327 12.5013V7.5013C18.3327 3.33464 16.666 1.66797 12.4993 1.66797H7.49935C3.33268 1.66797 1.66602 3.33464 1.66602 7.5013V12.5013C1.66602 16.668 3.33268 18.3346 7.49935 18.3346Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default CancelIconSquare 