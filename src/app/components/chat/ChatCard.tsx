
"use client"

import { twMerge } from "tailwind-merge";

interface Props {
    id: number;
    text: string;
    isMe: boolean;
    createdAt: string;
}

function ChatCard({ createdAt, id, isMe, text }: Props) {
    // for the linting issues
    const temp = id;

    return (
        <div className={twMerge("flex items-end gap-x-1 max-w-[90%]", !isMe ? "mr-auto flex justify-end" : "")}>
            <div className={twMerge(isMe ? "order-2" : "order-1")}>
                {/* text */}
                <p
                    className={twMerge(
                        `w-full p-2 rounded-lg text-black text-xs`,
                        isMe ? "bg-myBlue/20" : "bg-zinc-200"
                    )}
                >
                    {text}
                </p>

                {/* date */}
                <p className={twMerge("text-[0.7rem] text-black/60 mt-0.5", !isMe ? "text-left" : "")}>{createdAt}</p>
            </div>

            {/* circle */}
            <div className={twMerge("w-[6px] h-[6px] mb-5 rounded-full flex-shrink-0", isMe ? "bg-myBlue/70 order-1" : "bg-zinc-300 order-2")}></div>
        </div>
    )
}

export default ChatCard