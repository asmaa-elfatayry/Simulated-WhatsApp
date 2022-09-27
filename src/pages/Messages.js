import ChatSection from "../components/ChatSection";
import AfterClickedChat from "../components/AfterClickedChat";

import "./messages.css";
import React from "react";
function Messages() {
  return (
    <>
      <div className="after-clicked-chat">
        <div className="main-container-afterSign">
          <div className="inner-container-afterSign d-flex">
            <ChatSection />

            <AfterClickedChat />
          </div>
        </div>
      </div>
    </>
  );
}

export default Messages;
