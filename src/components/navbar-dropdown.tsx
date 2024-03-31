"use client";

import { useState } from "react";

export default function NavbarDropdown({ page }: { page: any }) {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <div className="relative"
            onMouseEnter={() => setIsOpened(true)}
            onMouseLeave={() => setIsOpened(false)}
        >
            <button type="button" className="flex-h text-sm hover:bg-highlight transition-all duration-200 p-2 hover:px-5 rounded-xl text-hover-bright" id="menu-button">
                <p>{page.name}</p>
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </button>
            <div className={"absolute right-0 z-10 origin-top rounded-md bg-highlight shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" + (isOpened ? " w-56" : " w-0 hidden")} role="menu">
                <div className="py-1" role="none">
                    {
                        page.submenus.map((submenu: any, index: number) => {
                            return (
                                <a key={index} href={submenu.path} className="block px-4 py-2 text-sm bg-highlight-hover" role="menuitem" tabIndex={-1} id={`menu-item-${index}`}>{submenu.name}</a>
                            );
                        }
                        )}
                </div>
            </div>
        </div>
    );
}