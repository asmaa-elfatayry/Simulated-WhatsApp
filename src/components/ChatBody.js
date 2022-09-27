import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
function ChatBody() {
  const Api_URL = "http://localhost:3004/messages";
  const [messages, setMSg] = useState([]);

  const getMsg = () => {
    fetch(`${Api_URL}`)
      .then((res) => res.json())
      .then((data) => setMSg(data));
  };

  useEffect(() => {
    getMsg();
  }, []);

  return (
    <>
      <div className="chat-body">
        {messages.map((msg) => {
          return (
            <>
              <Link className="link-each-msg" to={`/messages/${msg.id}`}>
                <div className="chat-msg " key={msg.id}>
                  <div className="chat-image">
                    <img src={msg.image} alt={msg.name} />
                  </div>

                  <div className="msg-body">
                    <div className="msg-name-time ">
                      <div className="msg-name">{msg.name}</div>
                      <div className="msg-time">{msg.time}</div>
                    </div>

                    <div className="content-msg">
                      <svg viewBox="0 0 18 18" width="18" height="18">
                        <path
                          fill="currentColor"
                          d="m17.394 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"
                        ></path>
                      </svg>

                      <p>{msg.description.slice(0, 30)}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}

export default ChatBody;
