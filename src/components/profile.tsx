"use client";

import useMedia from "@/hooks/use-media";
import Image from "next/image";
import { useState } from "react";

export default function Profile() {
    const [isOpened, setIsOpened] = useState(false);

    const media = useMedia({ query: 768 });

    return media ? (
        <div
            onMouseEnter={() => setIsOpened(true)}
            onMouseLeave={() => setIsOpened(false)}
        >
            <Image
                src={"/static/images/profile.svg"}
                alt="Profile"
                width={30}
                height={30}
                className="rounded-full dark:invert p-1 hover:scale-110 transition-all duration-200 relative cursor-pointer"
            />
            <div className={"absolute top-12 bg-highlight p-2 rounded-xl right-16 overflow-hidden border border-slate-800 dark:border-slate-300 shadow-xl" + (isOpened ? " openProfile" : " closeProfile")}>
                <div className="flex-v gap-2 items-center h-full">
                    <Image
                        src={"/static/images/profile.svg"}
                        alt="Profile"
                        width={70}
                        height={70}
                        className="rounded-full dark:invert py-4"
                    />
                    <hr className="w-full border-1 border-gray-500" />
                    <div id="buttons" className="flex-v gap-2 my-auto">
                        <button>Details</button>
                        <button>Payment</button>
                        <button>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div
            onMouseEnter={() => setIsOpened(true)}
            onMouseLeave={() => setIsOpened(false)}
        >
            <Image
                src={"/static/images/profile.svg"}
                alt="Profile"
                width={30}
                height={30}
                className="rounded-full dark:invert p-1 hover:scale-110 transition-all duration-200 relative cursor-pointer"
            />
            <div className="flex-v gap-2 items-center h-full">
                <div className={"absolute flex flex-col items-center bottom-16 bg-highlight p-2 rounded-xl right-24 overflow-hidden border border-slate-800 dark:border-slate-300 shadow-xl" + (isOpened ? " openProfile" : " closeProfile")}>
                    <Image
                        src={"/static/images/profile.svg"}
                        alt="Profile"
                        width={70}
                        height={70}
                        className="rounded-full dark:invert py-4"
                    />
                    <hr className="w-full border-1 border-gray-500" />
                    <div id="buttons" className="flex-v gap-2 flex-center my-auto">
                        <button>Details</button>
                        <button>Payment</button>
                        <button>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );

}