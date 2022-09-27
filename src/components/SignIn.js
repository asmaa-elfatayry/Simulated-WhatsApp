import React from "react";
import qrImg from "../images/qr.png";
import screenv from "../images/screenvideo.png";
import { BsGearWideConnected } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { settings } from '@fortawesome/free-solid-svg-icons'
function SignIn() {
  return (
    <>
      <div className="top-scan-section row ">
        <div className="col-md-8  col-sm-12">
          <div className="landing-title ">
            To use WhatsApp on your computer:
          </div>
          <ol>
            <li>Open WhatsApp on your phone</li>

            <li>
              Tap <strong>Menue</strong>
              <span className="react-icon">
                <BsThreeDotsVertical />
              </span>
              or <strong> settings </strong>
              <span className="react-icon">
                <BsGearWideConnected />
              </span>
              and select <strong> Linked devices.</strong>
            </li>

            <li>Point your phone to this screen to capture the code</li>
          </ol>

          <span className="need-help">Need help to get started ?</span>
          <Link to={"/signed"} className="signed">
            Signed
          </Link>
        </div>

        <div className="qr-img col-md-4 col-sm col-sm-auto  ">
          <img src={qrImg} alt="qr-pic" />
        </div>
      </div>

      <div className="bottom-scan-section ">
        <div className="img-connect">
          <img src={screenv}  alt="screen-video"/>
        </div>
      </div>
    </>
  );
}
export default SignIn;
