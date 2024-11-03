"use client"

import { CopyIconSolid, SearchIcon, TickIconSquare } from "@/icons"
import { TextInput, Modal, Button, Select } from "@mantine/core"
import { atom, useAtom } from "jotai"
import Image from "next/image"

const moveCompanyOwnerModalAtom = atom(false)

export const MoveCompanyOwnerModalMolecule = {
    isOpen: moveCompanyOwnerModalAtom
}

function MoveCompanyOwnerModal() {
    const [isOpen, setIsOpen] = useAtom(moveCompanyOwnerModalAtom)

    return (

        <Modal
            opened={isOpen}
            onClose={() => setIsOpen(false)}
            title="انتقال مالکیت"
            radius="lg"
            classNames={{ header: "border-b border-b-gray-100" }}
        >
            <Modal.Body>
                <TextInput
                    classNames={{
                        input: "!bg-zinc-100"
                    }}
                    placeholder="جست و جوی کاربر"
                    radius="md"
                    leftSection={
                        <SearchIcon width={18} height={18} className="stroke-black/60" />
                    }
                />

                <div className="mt-4 space-y-3">
                    <div className="p-2 px-3 rounded-lg bg-myBlue/15 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Image
                                alt=""
                                loading="lazy"
                                src="https://fakeimg.pl/200x200"
                                width={200}
                                height={200}
                                className="w-12 aspect-square rounded-full object-center object-cover"
                            />

                            <div>
                                <h2 className="text-sm text-black/90">صحر رستمی</h2>
                                <h3 className="text-xs text-black/60 mt-0.5">Sahar Rostami</h3>
                            </div>
                        </div>

                        <div className="w-full max-w-[9rem]">
                            <Select
                                defaultValue="دسترسی کامل"
                                data={["دسترسی کامل", "دسترسی نیمه کامل", "دسترسی اولیه"]}
                                size="xs"
                                radius="md"
                                classNames={{
                                    input: "!border-myBlue !text-myBlue"
                                }}
                            />
                        </div>
                    </div>

                    <div className="p-2 px-3 rounded-lg bg-myBlue/15 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Image
                                alt=""
                                loading="lazy"
                                src="https://fakeimg.pl/200x200"
                                width={200}
                                height={200}
                                className="w-12 aspect-square rounded-full object-center object-cover"
                            />

                            <div>
                                <h2 className="text-sm text-black/90">صحر رستمی</h2>
                                <h3 className="text-xs text-black/60 mt-0.5">Sahar Rostami</h3>
                            </div>
                        </div>

                        <div className="w-full max-w-[9rem]">
                            <Select
                                defaultValue="دسترسی کامل"
                                data={["دسترسی کامل", "دسترسی نیمه کامل", "دسترسی اولیه"]}
                                size="xs"
                                radius="md"
                                classNames={{
                                    input: "!border-myBlue !text-myBlue"
                                }}
                            />
                        </div>
                    </div>

                    <div className="p-2 px-3 rounded-lg bg-myBlue/15 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Image
                                alt=""
                                loading="lazy"
                                src="https://fakeimg.pl/200x200"
                                width={200}
                                height={200}
                                className="w-12 aspect-square rounded-full object-center object-cover"
                            />

                            <div>
                                <h2 className="text-sm text-black/90">صحر رستمی</h2>
                                <h3 className="text-xs text-black/60 mt-0.5">Sahar Rostami</h3>
                            </div>
                        </div>

                        <div className="w-full max-w-[9rem]">
                            <Select
                                defaultValue="دسترسی کامل"
                                data={["دسترسی کامل", "دسترسی نیمه کامل", "دسترسی اولیه"]}
                                size="xs"
                                radius="md"
                                classNames={{
                                    input: "!border-myBlue !text-myBlue"
                                }}
                            />
                        </div>
                    </div>

                    <div className="w-max mr-auto">
                        <Button color="var(--mantine-color-primaryColor-3)" fw={400} radius="md" mt="xl">
                            <TickIconSquare width={18} height={18} className="stroke-white" />&nbsp;
                            ثبت انتقال دسترسی
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default MoveCompanyOwnerModal