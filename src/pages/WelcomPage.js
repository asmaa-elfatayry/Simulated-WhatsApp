import whatsImg from "../images/whatsapp.png";
import "./welcomePage.css";
import "./signIn.css";
import SignIn from "../components/SignIn";
import React from "react";
function WelcomePage() {
  return (
    <>
      <div className="welcome-bg">
        <div className="inner-content">
          <div className="d-flex landing-header">
            <img src={whatsImg} alt="whats-img"/>
            <div className="header-text">WhatsApp Web</div>
          </div>

          <div className="Sign-section  ">
            <SignIn />
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
