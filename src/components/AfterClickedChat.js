import ChatTopInfo from "./ChatTopInfo";
import DetailsChatMsg from "./DetialsChatMsg";
import InputSendMsg from "./InputSendMsg";
import React from "react";
function AfterClickedChat() {
  return (
    <>
      <div className="container-of-msgDetails">
        <ChatTopInfo />

        <DetailsChatMsg />

        <InputSendMsg />
      </div>
    </>
  );
}

export default AfterClickedChat;
