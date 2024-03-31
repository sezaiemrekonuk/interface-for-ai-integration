"use client";

import ChatArea from "@/components/chat/chat-area";
import ChatContainer from "@/components/chat/chat-container";
import HomeLayout from "@/layouts/home";
import { ChatMessagesProvider } from "@/providers/chat-messages";

export default function Home() {

  return <HomeLayout>
    <ChatMessagesProvider>

      <ChatContainer>
        <div className="container flex items-center flex-v min-h-dvh">
          <div className="w-4/5 ">
            <ChatArea />
            <a className="block underline text-xs text-center mt-[5px] text-slate-600">Made by HAGIA</a>
          </div>
        </div>
      </ChatContainer>
    </ChatMessagesProvider>
  </HomeLayout>;
}