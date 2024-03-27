export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return <div className="flex-v flex-center overflow-scroll">
        {children}
    </div>;
}