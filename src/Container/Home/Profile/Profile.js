import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <>
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <div className="colz-icon">
                <a href="./">
                  <i className="fa fa-facebook-square"></i>
                </a>
                <a href="./">
                  <i className="fa fa-google-plus-square"></i>
                </a>
                <a href="./">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="./">
                  <i className="fa fa-youtube-square"></i>
                </a>
                <a href="./">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="profile-details-name">
              <div className="primary-name-text">
                {" "}
                Hello, I'm
                <span className="highlighted-text">
                  <div className="ball">S</div>
                  <div className="ball">h</div>
                  <div className="ball">r</div>
                  <div className="ball">a</div>
                  <div className="ball">v</div>
                  <div className="ball">a</div>
                  <div className="ball">n</div>
                </span>
              </div>
            </div>
            <div className="profile-details-role">
              <span className="primary-role-text">
                {" "}
                <h1>
                  {" "}
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Ethusiastic Dev 😊",
                      2000,
                      "Full Stack Developer 😍",
                      2000,
                      "MEAN Stack Dev 😁",
                      2000,
                      "React Dev 👌",
                      2000,
                      "Cross Platform Dev 🙌",
                      2000,
                    ]}
                  ></Typical>
                </h1>
                <span className="profile-role-tagline">
                  Knack of building applications with front and back end
                  operations.
                </span>
              </span>
            </div>
            <div className="profile-options">
              <button className="btn primary-btn">
                {""} Hire Me{""}
              </button>
              <a href="./Profile.js" download="abc.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
      <div className="wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </>
  );
}
