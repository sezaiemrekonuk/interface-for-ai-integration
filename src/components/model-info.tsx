import Image from "next/image"

export default function ModelInfo({ modelName, modelDescription, modelImage }: { modelName: string, modelDescription: string, modelImage: string }) {
    return (
        <div className="w-[120px] flex flex-center gap-2 bg-highlight p-2 rounded-full shadow-lg shadow-violet-600 mb-3 border-2 border-violet-600 cursor-pointer">
            <Image src={modelImage} alt="Model Image" width={30} height={30} className="rounded-full" />

            <div id="text-area flex flex-center">
                <h1 className="text-sm">{modelName}</h1>
                {/* <p className="text-xs">{modelDescription}</p> */}
            </div>
        </div>
    );
}