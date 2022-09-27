import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
function DetailsChatMsg() {
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
      <div className="body-chat">
        <div className="warn-msg">
          Use WhatsApp on your phone to see older messages from before
          17/06/2022.
        </div>
        <div className="time-msg">{messages.time}</div>
        <div className="last-msg">
          {messages.description}

          <svg className="seen" viewBox="0 0 18 18" width="14" height="18">
            <path
              fill="currentColor"
              d="m17.394 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
export default DetailsChatMsg;
