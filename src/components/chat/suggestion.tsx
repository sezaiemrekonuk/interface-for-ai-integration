import { ChatMessagesContext } from "@/providers/chat-messages";
import { useContext } from "react"

export default function ChatSuggestions({ suggestions }: { suggestions: string[] }) {
    return (
        <div className="flex-wrap flex gap-6 flex-center">
            {suggestions.map((suggestion, index) => (
                <Suggestion key={index} text={suggestion} />
            ))}
        </div>
    )
}

function Suggestion({ text }: { text: string }) {
    const { setPlaceholder } = useContext(ChatMessagesContext);

    return (
        <div className="flex grow rounded-lg p-6 w-3/5 lg:w-1/3 min-h-[70px] max-h-[300px] bg-highlight flex-center bg-highlight-hover hover:cursor-pointer border dark:border-slate-600" onClick={() => setPlaceholder(text)}>
            <p className="">{text}</p>
        </div>
    )
}