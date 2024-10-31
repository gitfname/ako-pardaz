import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> { }

function PhoneIcon(props: Props) {
    return (
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M14.6473 12.2207C14.6473 12.4607 14.594 12.7073 14.4807 12.9473C14.3673 13.1873 14.2207 13.414 14.0273 13.6273C13.7007 13.9873 13.3407 14.2473 12.934 14.414C12.534 14.5807 12.1007 14.6673 11.634 14.6673C10.954 14.6673 10.2273 14.5073 9.46065 14.1807C8.69398 13.854 7.92732 13.414 7.16732 12.8607C6.40065 12.3007 5.67398 11.6807 4.98065 10.994C4.29398 10.3007 3.67398 9.57398 3.12065 8.81398C2.57398 8.05398 2.13398 7.29398 1.81398 6.54065C1.49398 5.78065 1.33398 5.05398 1.33398 4.36065C1.33398 3.90732 1.41398 3.47398 1.57398 3.07398C1.73398 2.66732 1.98732 2.29398 2.34065 1.96065C2.76732 1.54065 3.23398 1.33398 3.72732 1.33398C3.91398 1.33398 4.10065 1.37398 4.26732 1.45398C4.44065 1.53398 4.59398 1.65398 4.71398 1.82732L6.26065 4.00732C6.38065 4.17398 6.46732 4.32732 6.52732 4.47398C6.58732 4.61398 6.62065 4.75398 6.62065 4.88065C6.62065 5.04065 6.57398 5.20065 6.48065 5.35398C6.39398 5.50732 6.26732 5.66732 6.10732 5.82732L5.60065 6.35398C5.52732 6.42732 5.49398 6.51398 5.49398 6.62065C5.49398 6.67398 5.50065 6.72065 5.51398 6.77398C5.53398 6.82732 5.55398 6.86732 5.56732 6.90732C5.68732 7.12732 5.89398 7.41398 6.18732 7.76065C6.48732 8.10732 6.80732 8.46065 7.15398 8.81398C7.51398 9.16732 7.86065 9.49398 8.21398 9.79398C8.56065 10.0873 8.84732 10.2873 9.07398 10.4073C9.10732 10.4207 9.14732 10.4407 9.19398 10.4607C9.24732 10.4807 9.30065 10.4873 9.36065 10.4873C9.47398 10.4873 9.56065 10.4473 9.63398 10.374L10.1407 9.87398C10.3073 9.70732 10.4673 9.58065 10.6207 9.50065C10.774 9.40732 10.9273 9.36065 11.094 9.36065C11.2207 9.36065 11.354 9.38732 11.5007 9.44732C11.6473 9.50732 11.8007 9.59398 11.9673 9.70732L14.174 11.274C14.3473 11.394 14.4673 11.534 14.5407 11.7006C14.6073 11.8673 14.6473 12.034 14.6473 12.2207Z" strokeMiterlimit={10} />
        </svg>
    )
}

export default PhoneIcon 