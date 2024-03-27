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
    return (
        <div className="rounded-lg p-6 w-1/3 h-[100px] bg-highlight flex flex-center">
            <p className="">{text}</p>
        </div>
    )
}