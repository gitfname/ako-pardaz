"use client"

import { CopyIconSolid } from "@/icons"
import { TextInput, Modal, Button } from "@mantine/core"
import { atom, useAtom } from "jotai"

const inviteFriendsModalAtom = atom(false)

export const InviteFriendsModalMolecule = {
    isOpen: inviteFriendsModalAtom
}

function InviteFriendsModal() {
    const [isOpen, setIsOpen] = useAtom(inviteFriendsModalAtom)

    return (

        <Modal
            opened={isOpen}
            onClose={() => setIsOpen(false)}
            title="دعوت از دوستان"
            radius="lg"
            classNames={{ header: "border-b border-b-gray-100" }}
        >
            <Modal.Body>
                <div>
                    <p className="text-xs mb-2 text-black/80">دعوت از طریق کد معرف</p>

                    <div className="relative">
                        <TextInput
                            value="453635"
                            readOnly
                            radius="md"
                            dir="rtl"
                            classNames={{
                                input: "!bg-myBlue/10 !text-left"
                            }}
                        />

                        <div className="absolute top-1/2 -translate-y-1/2 right-0.5">
                            <Button
                                size="xs"
                                fw={400}
                                radius="md"
                                bg="var(--mantine-color-primaryColor-3)"
                                leftSection={
                                    <CopyIconSolid width={17} height={17} className="stroke-white" />
                                }
                            >
                                کپی لینک
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <p className="text-xs mb-2 text-black/80">دعوت از طریق لینک</p>

                    <div className="relative">
                        <TextInput
                            value="invite.akopardaz.com/fhw27gsf49c2s"
                            readOnly
                            radius="md"
                            dir="rtl"
                            classNames={{
                                input: "!bg-myBlue/10 !text-left !line-clamp-1"
                            }}
                        />

                        <div className="absolute top-1/2 -translate-y-1/2 right-0.5">
                            <Button
                                size="xs"
                                fw={400}
                                radius="md"
                                bg="var(--mantine-color-primaryColor-3)"
                                leftSection={
                                    <CopyIconSolid width={17} height={17} className="stroke-white" />
                                }
                            >
                                کپی لینک
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default InviteFriendsModal