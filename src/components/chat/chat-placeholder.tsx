import ChatSuggestions from "./suggestion"

export default function ChatPlaceHolder() {
    const suggestions = [
        "I want to get help about coding",
        "How to design using AutoCAD",
        "How can I manage my time?",
        "How to get started with React?",
    ]

    return (
        <div className="lg:px-24 flex items-center justify-evenly flex-v flex-grow">
            <section id="text-area">
                <h1 className="bg-gradient-to-r from-pink-700 via-purple-700 to-green-500 text-transparent bg-clip-text text-7xl font-bold">Hello User,</h1>
                <h1 className="text-5xl text-[#424242]">How can I help you today?</h1>
            </section>
            <section id="suggestions" className="my-auto">
                <div className="flex flex-wrap gap-4">
                    <ChatSuggestions suggestions={suggestions} />
                </div>
            </section>
        </div>
    )
}