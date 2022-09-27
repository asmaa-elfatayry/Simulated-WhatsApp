import ChatNavbar from "./ChatNavbar";
import ChatSearch from "./ChatSearch";
import ChatBody from "./ChatBody";
import React from "react";
function ChatSection() {
  return (
    <>
      <div className=" left-chat-section">
        <ChatNavbar />

        <ChatSearch />

        <ChatBody />
      </div>
    </>
  );
}

export default ChatSection;
