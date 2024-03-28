"use client";

import { useContext, useEffect, useState } from "react";
import TextInput from "../text-input";
import { ChatMessagesContext, ChatMessagesProvider } from "@/providers/chat-messages";
import ChatPlaceHolder from "./chat-placeholder";

export default function ChatArea() {
    const messageContext = useContext(ChatMessagesContext);

    const [minHeight, setMinHeight] = useState(0);
    const [messages, setMessages] = useState<{ message: string, sender: string }[]>([]); // Initialize messages state with an empty array

    useEffect(() => {
        const height = window.innerHeight;
        const reducedHeight = height * 0.9;
        setMinHeight(parseInt(reducedHeight.toString()));
    }, []);

    // Update messages state when messageContext.messages changes
    useEffect(() => {
        setMessages(messageContext.messages);
        console.log(messageContext.messages);

    }, [messageContext.messages]);

    const Messages = (messages: { message: string, sender: string }[]) => {
        if (messages.length === 0) {
            return <ChatPlaceHolder />
        } else {
            return (
                <div className="flex-v items-start gap-4 w-full h-full overflow-y-auto">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`p-4 bg-highlight rounded-2xl shadow-md ${msg.sender === 'user' ? 'bg-primary' : 'bg-highlight'}`}>
                                <p className="text-lg">{msg.message}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )
        }
    }

    return (
        <div className={"flex-v items-center justify-between h-full gap-2 p-2 bg-primary shadow-md mt-[10px] rounded-2xl"} style={{ minHeight: minHeight }}>
            {Messages(messages)}
            <TextInput />
        </div>
    );
}
