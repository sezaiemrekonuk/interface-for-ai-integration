// this is a sidebar that containts the recents chats of the user
"use client"
import React from 'react';
import useMedia from '@/hooks/use-media';

export default function Chatbar({ recentChats }: { recentChats: string[] }) {
    const isDesktop = useMedia({ query: 768 });
    return isDesktop ? (
        <div className="flex flex-col w-1/4 h-full">
            <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Chats</h1>
                <button className="p-2 rounded-full bg-gray-300 dark:bg-gray-700">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-800 dark:text-gray-200"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 2a8 8 0 0 0-5.3 14.3L2 18l1.7-2.7A8 8 0 0 0 10 2zm0 2a6 6 0 0 1 3.9 11.1L16 18l1.1-1.9A6 6 0 0 1 10 4zm0 2a4 4 0 0 0-2.6 7.4L7.4 14 8 14.6A4 4 0 0 0 10 6zm0 2a2 2 0 0 1 1.3 3.7L12 10l.6.6A2 2 0 0 1 10 8z"
                        />
                    </svg>
                </button>
            </div>
            <div className="flex flex-col p-4 space-y-4 overflow-y-auto">
                {recentChats.map((chat, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                        <div className="flex flex-col">
                            <h1 className="text-sm font-semibold text-gray-800 dark:text-gray-200">{chat}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ) : null;
}