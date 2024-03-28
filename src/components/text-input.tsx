import { useContext, useEffect, useRef, useState } from 'react';
import './text-input.css';
import { ChatMessagesContext } from '@/providers/chat-messages';

export default function TextInput() {
    const messageContext = useContext(ChatMessagesContext);

    const [value, onChange] = useState('');
    const [lastMessage, setLastMessage] = useState<{ message: string, sender: string } | null>(null);
    const [canDisable, setCanDisable] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        messageContext.addMessage(value, 'user');
        onChange('');
    }

    useEffect(() => {
        if (messageContext.messages.length > 0) {
            setLastMessage(messageContext.messages[messageContext.messages.length - 1]);
        }
    }, [messageContext.messages]);

    useEffect(() => {
        onChange(messageContext.placeholder);
    }
        , [messageContext.placeholder]);

    useEffect(() => {
        console.log(lastMessage?.sender, messageContext.aiTyping);


        if (lastMessage?.sender === 'user' && messageContext.aiTyping) { setCanDisable(true) } else { setCanDisable(false); inputRef.current?.focus(); }
    }
        , [messageContext.aiTyping]);

    return <form className="relative w-full" onSubmit={e => onSubmit(e)} style={{ opacity: lastMessage?.sender === 'user' ? '70%' : 1 }} >
        <input type="text" value={value} onChange={e => onChange(e.target.value)} className="h-[50px] rounded-full w-full bg-highlight bg-opacity-70 outline-none p-4 text-lg border shadow-sm focus:shadow-lg transition-all duration-300 dark:border-slate-600 dark:focus:shadow-gray-700" placeholder={(messageContext.aiTyping) ? 'AI is thinking...' : 'Give us a prompt'} disabled={messageContext.aiTyping} ref={inputRef} />
        <button className="absolute flex flex-center bg-yellow-500 rounded-full p-2 px-3 right-[5px] top-[5px] overflow-hidden formula-container"><p className="formula__animation">-{'>'}</p></button>
    </form>
} 