import { useContext, useEffect, useState } from 'react';
import './text-input.css';
import { ChatMessagesContext } from '@/providers/chat-messages';

export default function TextInput() {
    const [value, onChange] = useState('');
    const messageContext = useContext(ChatMessagesContext);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        messageContext.addMessage(value, 'user');
        onChange('');
    }

    useEffect(() => {
        onChange(messageContext.placeholder);
    }
        , [messageContext.placeholder]);

    return <form className="relative w-full" onSubmit={e => onSubmit(e)}>
        <input type="text" defaultValue={value} onChange={e => onChange(e.target.value)} className="h-[50px] rounded-full w-full bg-highlight bg-opacity-70 outline-none p-4 text-lg border shadow-sm focus:shadow-lg transition-all duration-300 dark:border-slate-600 dark:focus:shadow-gray-700" placeholder='Give us a prompt' />
        <button className="absolute flex flex-center bg-yellow-500 rounded-full p-2 px-3 right-[5px] top-[5px] overflow-hidden formula-container"><p className="formula__animation">-{'>'}</p></button>
    </form>
} 