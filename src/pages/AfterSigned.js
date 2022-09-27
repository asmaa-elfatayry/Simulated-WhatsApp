import "./afterSigned.css";
import ChatSection from "../components/ChatSection";
import ImgSection from "../components/ImgSection";
import React from "react";
function AfterSigned() {
  return (
    <>
      <div className="main-container-afterSign">
        <div className="inner-container-afterSign d-flex">
          <ChatSection />

          <ImgSection />
        </div>
      </div>
    </>
  );
}

export default AfterSigned;
