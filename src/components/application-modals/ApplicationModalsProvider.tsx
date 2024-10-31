import { ReactNode } from "react"
import InviteFriendsModal from "./InviteFriendsModal";

interface Props {
    children: ReactNode;
}

function ApplicationModalsProvider({ children }: Props) {
    return (
        <>
            <InviteFriendsModal />
            
            {children}
        </>
    )
}

export default ApplicationModalsProvider