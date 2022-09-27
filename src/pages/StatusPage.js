import AddStory from "../components/AddStory";
import ShowStory from "../components/ShowStory";
import "./storyPage.css";
import React from "react";
function StatusPage() {
  return (
    <>
      <div className="main-container-afterSign story">
        <div className="inner-container-afterSign d-flex story">
          <div className=" left-chat-section">
            <ShowStory />
          </div>

          <div className=" right-img-section">
            <div className="content-right-story-section  ">
              <AddStory />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatusPage;
