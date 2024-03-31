"use client";

import { useContext, useEffect, useRef, useState } from "react";
import TextInput from "../text-input";
import { ChatMessagesContext } from "@/providers/chat-messages";
import ChatPlaceHolder from "./chat-placeholder";
import ModelInfo from "../model-info";
import Image from "next/image";

export default function ChatArea() {
    const messageContext = useContext(ChatMessagesContext);

    const [minHeight, setMinHeight] = useState(0);
    const [messages, setMessages] = useState<{ message: string, sender: string, profilePhoto: string }[]>([]); // Initialize messages state with an empty array
    const [displayResponse, setDisplayResponse] = useState('');
    const [completedTyping, setCompletedTyping] = useState(false);

    const scrollToBottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const height = window.innerHeight;
        const reducedHeight = height * 0.87;
        setMinHeight(parseInt(reducedHeight.toString()));
    }, []);


    useEffect(() => {
        if (messages.length === 0) return;
        setCompletedTyping(false);
        messageContext.setAiTyping(true);

        let i = 0;
        const stringResponse = messages[messages.length - 1].message;

        const intervalId = setInterval(() => {
            setDisplayResponse(stringResponse.slice(0, i));

            i++;

            i % 150 === 0 && scrollToBottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });

            if (i > stringResponse.length) {
                clearInterval(intervalId);
                setCompletedTyping(true);
                messageContext.setAiTyping(false);
                scrollToBottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }
        }, 20);

        return () => clearInterval(intervalId);
    }, [messages]);

    // Update messages state when messageContext.messages changes
    useEffect(() => {
        setMessages(messageContext.messages);
        if (messageContext.messages[messageContext.messages.length - 1]?.sender === 'user') {
            setTimeout(() => {
                messageContext.addMessage('lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ', 'ai');
            }, 1000);
        }
        setTimeout(() => {
            if (messageContext.messages.length > 0) {
                scrollToBottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }
        }
            , 100);
    }, [messageContext.messages]);


    const CursorSVG = () => (
        <svg
            viewBox="8 4 8 16"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor"
        >
            <rect x="10" y="6" width="4" height="12" fill="#fff" />
        </svg>
    );

    const Messages = (messages: { message: string, sender: string, profilePhoto: string }[]) => {
        if (messages.length === 0) {
            return <ChatPlaceHolder />
        } else {
            return (
                <div className="flex-v items-start gap-4 w-full h-full grow py-2 " style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex gap-2 ${msg.sender === 'user' ? 'self-end' : 'self-start'}`}>
                            <div className={`p-4 bg-highlight-more rounded-2xl shadow-md ${msg.sender === 'user' ? 'bg-primary' : 'bg-highlight'} flex flex-row gap-2 items-center justify-center`}>
                                <Image src={msg.profilePhoto} width={35} height={35} alt="profile photo" className="rounded-full bg-clip-content bg-white self-start" />
                                {
                                    msg.sender === 'ai' && (!completedTyping && index === messages.length - 1) ? <div className="flex flex-row items-center gap-2">
                                        <p className={`text-lg`}>{displayResponse}{completedTyping ? null : <CursorSVG />}</p>
                                    </div> : <p className={`text-lg`}>{msg.message}</p>
                                }

                            </div>
                        </div>
                    ))}
                    <div ref={scrollToBottomRef} />
                </div>
            )
        }
    }

    return (
        <div className={"flex-v items-center justify-between h-full gap-2 p-2 bg-primary shadow-md mt-[10px] rounded-2xl"} style={{ minHeight: minHeight }}>
            <div className="flex-h gap-4">
                <ModelInfo modelName="GPT-100" modelImage="/static/images/rocket.svg" modelDescription="lol" />
                <ModelInfo modelName="Claude8" modelImage="/static/images/rocket.svg" modelDescription="lol" />
            </div>

            {Messages(messages)}
            <TextInput />
        </div>
    );
}
