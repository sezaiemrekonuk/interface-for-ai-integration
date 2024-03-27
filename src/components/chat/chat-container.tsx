export default function ChatContainer({ children }: { children: React.ReactNode }) {
    return <div className="flex-v flex-center gap-y-4 min-h-dvh overflow-auto w-full">
        {children}
    </div>;
}