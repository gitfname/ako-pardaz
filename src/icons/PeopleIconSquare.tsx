import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function PeopleIconSquare(props: Props) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect width={32} height={32} rx={10} fill="#E3E9FD" />
            <path d="M13.5013 7.66602C11.318 7.66602 9.54297 9.44102 9.54297 11.6243C9.54297 13.766 11.218 15.4993 13.4013 15.5743C13.468 15.566 13.5346 15.566 13.5846 15.5743C13.6013 15.5743 13.6096 15.5743 13.6263 15.5743C13.6346 15.5743 13.6346 15.5743 13.643 15.5743C15.7763 15.4993 17.4513 13.766 17.4596 11.6243C17.4596 9.44102 15.6846 7.66602 13.5013 7.66602Z" fill="#7389FF" />
            <path d="M17.7328 17.7914C15.4078 16.2414 11.6161 16.2414 9.27448 17.7914C8.21615 18.4997 7.63281 19.4581 7.63281 20.4831C7.63281 21.5081 8.21615 22.4581 9.26615 23.1581C10.4328 23.9414 11.9661 24.3331 13.4995 24.3331C15.0328 24.3331 16.5661 23.9414 17.7328 23.1581C18.7828 22.4497 19.3661 21.4997 19.3661 20.4664C19.3578 19.4414 18.7828 18.4914 17.7328 17.7914Z" fill="#7389FF" />
            <path d="M22.6578 12.1171C22.7911 13.7337 21.6411 15.1504 20.0495 15.3421C20.0411 15.3421 20.0411 15.3421 20.0328 15.3421H20.0078C19.9578 15.3421 19.9078 15.3421 19.8661 15.3587C19.0578 15.4004 18.3161 15.1421 17.7578 14.6671C18.6161 13.9004 19.1078 12.7504 19.0078 11.5004C18.9495 10.8254 18.7161 10.2087 18.3661 9.68374C18.6828 9.52541 19.0495 9.42541 19.4245 9.39208C21.0578 9.25041 22.5161 10.4671 22.6578 12.1171Z" fill="#7389FF" />
            <path d="M24.3249 19.8247C24.2582 20.633 23.7415 21.333 22.8749 21.808C22.0415 22.2663 20.9915 22.483 19.9499 22.458C20.5499 21.9163 20.8999 21.2413 20.9665 20.5247C21.0499 19.4913 20.5582 18.4997 19.5749 17.708C19.0165 17.2663 18.3665 16.9163 17.6582 16.658C19.4999 16.1247 21.8165 16.483 23.2415 17.633C24.0082 18.2497 24.3999 19.0247 24.3249 19.8247Z" fill="#7389FF" />
        </svg>
    )
}

export default PeopleIconSquare