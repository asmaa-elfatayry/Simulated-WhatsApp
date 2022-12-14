import { Link } from "react-router-dom";
import profilePic from "../images/profile-pic.jpg";
import React from "react";
import "../pages/light-dark-theme.css";
function ChatNavbar() {
  function showOption() {
    let options = document.querySelector(".option-menue-navbar");
    options.classList.toggle("d-none");
  }

  function Mode() {
    const toggleSwitch = document.querySelector(
      '.theme-switch input[type="checkbox"]'
    );
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);

      if (currentTheme === "light") {
        toggleSwitch.checked = false;
      }
    }

    function switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      }
    }

    toggleSwitch.addEventListener("change", switchTheme, false);
  }

  return (
    <>
      <div className="top-navbar d-flex justify-content-between">
        <div className="profile-image">
          <img src={profilePic} alt="profile pic" />
        </div>

        <div className="options-navbar d-flex  align-items-center">
          <div title="status" aria-label="Status">
            <Link className="status" to={"/status"}>
              <svg
                version="1.1"
                x="0"
                y="0"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill="currentColor"
                  d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"
                ></path>
                <path
                  fill="#009588"
                  d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
                ></path>
              </svg>
            </Link>
          </div>

          <div title="New chat" aria-label="New chat">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                fill="currentColor"
                d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"
              ></path>
            </svg>
          </div>

          <div
            className="menue-navbar"
            title="Menu"
            aria-label="Menu"
            onClick={showOption}
          >
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                fill="currentColor"
                d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="option-menue-navbar d-none">
        <ul>
          <li key={"theme mode"} className="theme-mode">
            <div className="theme-switch-wrapper">
              <em>Dark Mode</em>
              <label className="theme-switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" onChange={Mode} />
                <div className="slider round"></div>
              </label>
            </div>
          </li>

          <li key={"new group"}>
            <a href="#">New group</a>
          </li>
          <li key={"new message"}>
            <a href="#">Started messages</a>
          </li>
          <li key={"setting"}>
            <a href="#">Settings</a>
          </li>
          <li key={"log out"}>
            <Link className="link-out" to={"/"}>
              Log out
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ChatNavbar;
