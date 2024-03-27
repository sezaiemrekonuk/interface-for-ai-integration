"use client";

import { useContext, useEffect, useState } from "react";
import ModelInfo from "../model-info";
import TextInput from "../text-input";
import { ChatMessagesContext, ChatMessagesProvider } from "@/providers/chat-messages";
import ChatPlaceHolder from "./chat-placeholder";

export default function ChatArea() {
    const messageContext = useContext(ChatMessagesContext);


    // calculate height of the screen and set min-height to 80% of the screen
    const [minHeight, setMinHeight] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<{ message: string, sender: string }[]>(messageContext.messages);



    useEffect(() => {
        const height = window.innerHeight;
        const reducedHeight = height * 0.9;
        setMinHeight(parseInt(reducedHeight.toString()));
    }
        , []);


    const Messages = () => {
        if (messages.length === 0) {
            return <ChatPlaceHolder />
        }
    }

    return minHeight !== 0 && (
        <ChatMessagesProvider>
            <div className={"flex-v items-center justify-between h-full gap-2 p-2 bg-primary shadow-md mt-[10px] rounded-2xl"} style={{ minHeight: minHeight }}>
                {/* <ModelInfo modelName="GPT-0" modelDescription="Highly efficient math model" modelImage="/static/images/rocket.svg" /> */}
                <Messages />
                <TextInput value={inputValue} onChange={setInputValue} />
            </div>
        </ChatMessagesProvider>
    );
}