import './text-input.css';

export default function TextInput({ value, onChange }: { value: string, onChange: (value: string) => void }) {
    return <div className="relative w-full">
        <input type="text" value={value} onChange={e => onChange(e.target.value)} className="h-[50px] rounded-full w-full bg-highlight bg-opacity-70 outline-none p-4 text-lg border shadow-sm focus:shadow-lg transition-all duration-300 dark:border-slate-600 dark:focus:shadow-gray-700" placeholder='Give us a prompt' />
        <button className="absolute flex flex-center bg-yellow-500 rounded-full p-2 px-3 right-[5px] top-[5px] overflow-hidden formula-container"><p className="formula__animation">-{'>'}</p></button>
    </div>
} 