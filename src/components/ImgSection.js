import React from "react";
function ImgSection() {
  return (
    <>
      <div className=" right-img-section">
        <div className="content-right-img-section ">
          <div className="image-intro"></div>

          <div>
            <div>
              <h1 className="intro-title">WhatsApp Web</h1>
            </div>
            <div className="intro-text">
              Send and receive messages without keeping your phone online.
              <br />
              Use WhatsApp on up to 4 linked devices and 1 phone at the same
              time.
            </div>
          </div>

          <div className="end-to-end">
            <svg width="14" height="12" viewBox="0 0 10 12">
              <path
                d="M5.008 1.6c1.375 0 2.501 1.074 2.586 2.427l.005.164v1.271h.158c.585 0 1.059.48 1.059 1.07v3.351c0 .59-.474 1.07-1.059 1.07h-5.5c-.582 0-1.057-.48-1.057-1.07V6.531c0-.59.474-1.069 1.058-1.069h.158V4.191c0-1.375 1.075-2.501 2.429-2.586l.163-.005Zm0 1.248c-.696 0-1.272.534-1.337 1.214l-.006.129-.002 1.271H6.35l.001-1.271c0-.653-.47-1.2-1.088-1.319l-.126-.018-.129-.006Z"
                fill="currentColor"
              ></path>
            </svg>
            <span>End-to-end encrypted</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImgSection;
