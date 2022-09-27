import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
function ChatTopInfo() {
  const params = useParams();
  const [messages, setMessages] = useState([]);
  const Api_URL = "http://localhost:3004/messages";
  useEffect(() => {
    fetch(`${Api_URL}/${params.chatID}`)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
      });
  }, []);
  return (
    <>
      <div className="top-msg-info">
        <div className="name-and-image">
          <img className="profile-image" src={messages.image} alt="profile"/>
          <div>{messages.name}</div>
        </div>

        <div className="icons">
          <div className="search-icon">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                fill="currentColor"
                d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"
              ></path>
            </svg>
          </div>

          <div className="menue-navbar" title="Menu" aria-label="Menu">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                fill="currentColor"
                d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
export default ChatTopInfo;
