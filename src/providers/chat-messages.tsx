// chat messages provider

import { createContext, useState } from "react";

export const ChatMessagesContext = createContext({
    messages: [] as { message: string, sender: string }[],
    addMessage: (message: string, sender: string) => { },
    placeholder: '',
    setPlaceholder: (placeholder: string) => { }
});

export function ChatMessagesProvider({ children }: { children: React.ReactNode }) {
    const [messages, setMessages] = useState<{ message: string, sender: string }[]>([]);
    const [placeholder, setPlaceholder] = useState('');

    const addMessage = (message: string, sender: string) => {
        setMessages([...messages, { message, sender }]);
    };

    return <ChatMessagesContext.Provider value={{ messages, addMessage, placeholder, setPlaceholder }}>
        {children}
    </ChatMessagesContext.Provider>
}