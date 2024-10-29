
"use client"

import { SendIcon } from "@/app/icons"
import { ChatContext } from "./context"
import { useContext } from "react"
import ChatCard from "./ChatCard"

function ChatBox() {
    const chats = useContext(ChatContext.ChatsContext)

    return (
        <div className="w-full h-max bg-myBlue/10 border border-myBlue/20 rounded-xl p-1 space-y-4">
            {
                chats.chats?.map(chat => (
                    <ChatCard
                        key={chat.id}
                        id={+chat.id}
                        text={chat.text}
                        isMe={chat.isMe}
                        createdAt={chat.createdAt}
                    />
                ))
            }

            <div className="w-full sticky bottom-0.5 left-0 right-0 flex items-center gap-3 bg-white py-1 px-1.5 rounded-lg">
                <input
                    type="text"
                    placeholder="پیام خود را بنویسید"
                    className="text-input text-input--bordered"
                />

                <button className="btn btn--primary">
                    <SendIcon width={20} height={20} />
                </button>

            </div>
        </div>
    )
}

export default ChatBox