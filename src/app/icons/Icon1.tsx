import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function Icon1(props: Props) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect width={32} height={32} rx={10} fill="#E3E9FD" />
            <path d="M21.7824 10.5159L17.4741 8.02422C16.6491 7.54922 15.3574 7.54922 14.5324 8.02422L10.1824 10.5326C8.45742 11.6992 8.35742 11.8742 8.35742 13.7326V18.2576C8.35742 20.1159 8.45742 20.2992 10.2158 21.4826L14.5241 23.9742C14.9408 24.2159 15.4741 24.3326 15.9991 24.3326C16.5241 24.3326 17.0574 24.2159 17.4658 23.9742L21.8158 21.4659C23.5408 20.2992 23.6408 20.1242 23.6408 18.2659V13.7326C23.6408 11.8742 23.5408 11.6992 21.7824 10.5159ZM15.9991 18.7076C14.5074 18.7076 13.2908 17.4909 13.2908 15.9992C13.2908 14.5076 14.5074 13.2909 15.9991 13.2909C17.4908 13.2909 18.7074 14.5076 18.7074 15.9992C18.7074 17.4909 17.4908 18.7076 15.9991 18.7076Z" fill="#7389FF" />
        </svg>
    )
}

export default Icon1