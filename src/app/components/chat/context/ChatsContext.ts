"use client"

import { createContext, SetStateAction, Dispatch } from "react"
import { IChat } from "../types";

interface Props {
    chats: IChat[];
    setChats: Dispatch<SetStateAction<IChat[]>>
}

export const ChatsContext = createContext<Props>({
    chats: [],
    setChats: () => { }
})