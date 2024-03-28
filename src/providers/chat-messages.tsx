// chat messages provider

import { createContext, useEffect, useState } from "react";

export const ChatMessagesContext = createContext({
    messages: [] as { message: string, sender: string, profilePhoto: string }[],
    addMessage: (message: string, sender: string) => { },
    placeholder: '',
    setPlaceholder: (placeholder: string) => { },
    aiTyping: false,
    setAiTyping: (aiTyping: boolean) => { }

});

export function ChatMessagesProvider({ children }: { children: React.ReactNode }) {
    const [messages, setMessages] = useState<{ message: string, sender: string, profilePhoto: string }[]>([]);
    const [placeholder, setPlaceholder] = useState('');
    const [aiTyping, setAiTyping] = useState(null);

    const addMessage = (message: string, sender: string) => {
        var profilePhoto = "";
        sender === 'user' ? profilePhoto = "/static/images/profile.svg" : profilePhoto = "/static/images/rocket.svg";
        setMessages([...messages, { message, sender, profilePhoto }]);
    };

    return <ChatMessagesContext.Provider value={{ messages, addMessage, placeholder, setPlaceholder, aiTyping, setAiTyping }}>
        {children}
    </ChatMessagesContext.Provider>
}