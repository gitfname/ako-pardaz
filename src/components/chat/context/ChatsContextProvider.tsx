
"use client"

import { type ReactNode, useState } from "react"
import { ChatsContext } from "./ChatsContext"
import { IChat } from "../types"

function ChatsContextProvider({ children }: { children: ReactNode }) {
    const [chats, setChats] = useState<IChat[]>([])

    return (
        <ChatsContext.Provider
            value={{
                chats,
                setChats
            }}
        >
            {children}
        </ChatsContext.Provider>
    )
}

export default ChatsContextProvider