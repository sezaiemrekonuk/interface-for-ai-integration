"use client";

import NAVROUTES from "@/utils/nav-routes";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "./theme-switch";
import Logo from "@/static/logo.png";
import Profile from "./profile";
import NavbarDropdown from "./navbar-dropdown";
import useMedia from "@/hooks/use-media";
import { useEffect, useRef, useState } from "react";
import { BottomSheet, BottomSheetRef } from "react-spring-bottom-sheet";
import 'react-spring-bottom-sheet/dist/style.css';

export default function Navbar() {
    const media = useMedia({ query: 768 });

    const [isOpen, setIsOpen] = useState(false);
    const bottomSheetRef = useRef<BottomSheetRef>(null);

    // get theme info and listen for theme changes in local storage
    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme) {
            if (theme === "dark") {
                document.documentElement.style.setProperty("--rsbs-bg", "#2c2c2e");
            } else {
                document.documentElement.style.setProperty("--rsbs-bg", "#f9f9f9");
            }
        }
    }, []);

    const pages: React.ReactNode = (
        NAVROUTES.map((page, index) => {
            return page.submenus ?
                (
                    <NavbarDropdown key={index} page={page} />
                )
                : (<li key={index} className="text-sm hover:bg-highlight transition-all duration-200 p-2 hover:px-5 rounded-xl text-hover-bright">
                    <Link href={page.path
                    }>
                        {page.name}
                    </Link>
                </li>)
        })
    )

    return (<>
        <nav className="flex-h flex-center px-6 shadow-md py-1">
            <Image
                src={Logo}
                alt="Logo"
                width={150}
                height={100}
                className="invert dark:invert-0 lg:me-auto"
            />
            {media ? (
                <>
                    <ul className="flex-h gap-10 me-auto">
                        {pages}
                    </ul>
                    <div id="profile" className="flex-h flex-center gap-x-6 bg-highlight p-2 rounded-full">
                        <Profile />
                        <ThemeSwitch />
                    </div>
                </>
            ) : (
                <>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="ms-auto"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                    <BottomSheet
                        open={isOpen}
                        ref={bottomSheetRef}
                        onDismiss={() => setIsOpen(false)}
                        header={<Image
                            src={Logo}
                            alt="Logo"
                            width={150}
                            height={100}
                            className="invert dark:invert-0 mx-auto"
                        />}
                        footer={<div className="flex-h flex-center gap-x-6 bg-highlight p-2 rounded-full">
                            <Profile />
                            <ThemeSwitch />
                        </div>}
                        className="bg-slate-800 dark:bg-slate-300"
                    >
                        <ul className="flex-v flex-center gap-4">
                            {pages}
                        </ul>
                    </BottomSheet>
                </>
            )}

        </nav>
    </>);
}