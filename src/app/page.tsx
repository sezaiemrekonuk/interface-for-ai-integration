

import ChatArea from "@/components/chat/chat-area";
import ChatContainer from "@/components/chat/chat-container";
import TextInput from "@/components/text-input";
import HomeLayout from "@/layouts/home";
import { useState } from "react";

export default function Home() {

  return <HomeLayout>
    <ChatContainer>
      <div className="container flex items-center flex-v min-h-dvh">
        <div className="w-3/4 ">
          <ChatArea />
        </div>
      </div>
    </ChatContainer>
  </HomeLayout>;
}