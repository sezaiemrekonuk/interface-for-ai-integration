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
          </div>
        </div>
      </ChatContainer>
    </ChatMessagesProvider>
  </HomeLayout>;
}