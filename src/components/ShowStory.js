import { useEffect, useState } from "react";
import my_img from "../images/profile-pic.jpg";
import React from "react";
function ShowStory() {
  const Api_URL = "https://my-json-server.typicode.com/asmaa-elfatayry/Simulated-WhatsApp/messages";
  const [messages, setMSg] = useState([]);

  const getMsg = () => {
    fetch(`${Api_URL}`)
      .then((res) => res.json())
      .then((data) => setMSg(data));
  };

  useEffect(() => {
    getMsg();
  }, []);
  let personHaveStory = messages.filter((el) => el.story === true);
  return (
    <>
      <div className="chat-body">
        <div className="my-status" key={'my-story'}>
          <div className="chat-story my">
            <div className="chat-image ">
              <img src={my_img} alt="my story" />
            </div>
            <div className="story-name-time ">
              <div className="story-name">My Status</div>
              <div className="story-time">No Updates</div>
            </div>
          </div>
          <p className="recent-story">Recent</p>
        </div>
        {personHaveStory.map((msg) => {
          return (
            <>
              <div className="chat-story  " key={msg.id}>
                <div className="chat-image">
                  <img src={msg.image} alt={msg.name} />
                </div>

                <div className="story-name-time ">
                  <div className="story-name">{msg.name}</div>
                  <div className="story-time">{msg.storyTime}</div>
                </div>
              </div>
            </>
          );
        })}

        <div className="end-to-end-story">
          <div>
            <div>
              <svg width="14" height="12" viewBox="0 0 10 12">
                <path
                  d="M5.008 1.6c1.375 0 2.501 1.074 2.586 2.427l.005.164v1.271h.158c.585 0 1.059.48 1.059 1.07v3.351c0 .59-.474 1.07-1.059 1.07h-5.5c-.582 0-1.057-.48-1.057-1.07V6.531c0-.59.474-1.069 1.058-1.069h.158V4.191c0-1.375 1.075-2.501 2.429-2.586l.163-.005Zm0 1.248c-.696 0-1.272.534-1.337 1.214l-.006.129-.002 1.271H6.35l.001-1.271c0-.653-.47-1.2-1.088-1.319l-.126-.018-.129-.006Z"
                  fill="currentColor"
                ></path>
              </svg>
              Your status updates are
              <a
                data-testid="clickable-link"
                role="button"
                rel="noreferrer noopener"
                href="/#"
                target="_blank"
              >
                end-to-end encrypted
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowStory;
