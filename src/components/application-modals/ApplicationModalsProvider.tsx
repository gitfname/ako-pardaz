import { ReactNode } from "react"
import InviteFriendsModal from "./InviteFriendsModal";
import MoveCompanyOwnerModal from "./MoveCompanyOwnerModal";

interface Props {
    children: ReactNode;
}

function ApplicationModalsProvider({ children }: Props) {
    return (
        <>
            <InviteFriendsModal />
            <MoveCompanyOwnerModal />
            
            {children}
        </>
    )
}

export default ApplicationModalsProvider