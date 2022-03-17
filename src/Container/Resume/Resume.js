import React, { useState } from "react";
import "./Resume.css";

export default function Resume() {
  const [activeOption, setActiveOption] = useState(1);

  return (
    <div className="resume-container">
      <div className="row">
        <div className="col-4">
          <ul>
            <li
              onClick={() => setActiveOption(1)}
              className={activeOption === 1 ? "active" : ""}
            >
              <i className="fa fa-book" aria-hidden="true"></i>Education
            </li>
            <li
              onClick={() => setActiveOption(2)}
              className={activeOption === 2 ? "active" : ""}
            >
              <i className="fa fa-history" aria-hidden="true"></i>Work History
            </li>
            <li
              onClick={() => setActiveOption(3)}
              className={activeOption === 3 ? "active" : ""}
            >
              <i className="fa fa-laptop" aria-hidden="true"></i>Programming
              Skills
            </li>
            <li
              onClick={() => setActiveOption(4)}
              className={activeOption === 4 ? "active" : ""}
            >
              <i className="fa fa-bar-chart" aria-hidden="true"></i>Projects
            </li>
            <li
              onClick={() => setActiveOption(5)}
              className={activeOption === 5 ? "active" : ""}
            >
              <i className="fa fa-motorcycle" aria-hidden="true"></i>Interests
            </li>
          </ul>
        </div>
        <div className="col-8">
          {activeOption === 1 && (
            <div className="main">
              <div className="main-heading-container">
                <div className="main-heading">
                  <div className="bullet"></div>
                  <div className="title">Vardhaman Collage of Engineering</div>
                  <div className="date">2014-2018</div>
                </div>
                <div className="main-subheading">
                  <div className="subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam etcorporis suscipit mollitia explicabo vitae nisi?
                    Voluptate, quaerat.
                  </div>
                </div>
              </div>
              <div className="main-heading-container">
                <div className="main-heading">
                  <div className="bullet"></div>
                  <div className="title">Kakatiya Juniour Collage</div>
                  <div className="date">2012-2014</div>
                </div>
                <div className="main-subheading">
                  <div className="subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
              </div>
              <div className="main-heading-container">
                <div className="main-heading">
                  <div className="bullet"></div>
                  <div className="title">Vishwa Bharathi High School </div>
                  <div className="date">2007-2012</div>
                </div>
                <div className="main-subheading">
                  <div className="subtitle">
                    optio quis, ipsa et soluta labore autem laudantium corporis
                    suscipit mollitia explicabo vitae nisi? Voluptate, quaerat.
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeOption === 2 && (
            <div className="main">
              <div className="main-heading-container">
                <div className="main-heading">
                  <div className="bullet"></div>
                  <div className="title">
                    Berkadia Services India Private Limited
                  </div>
                  <div className="date">2018-2022</div>
                </div>
                <div className="main-subheading">
                  <div className="subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam etcorporis suscipit mollitia explicabo vitae nisi?
                    Voluptate, quaerat.
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeOption === 3 && (
            <div className="main">
              <div className="main-heading-container">
                <div className="main-heading">
                  <div className="bullet"></div>
                  <div className="title">Programming Skills</div>
                  <div className="date">2018-2022</div>
                </div>
                <div className="main-subheading">
                  <div className="subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam etcorporis suscipit mollitia explicabo vitae nisi?
                    Voluptate, quaerat.
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeOption === 4 && (
            <div className="main">
              <div className="main-heading-container">
                <div className="main-heading">
                  <div className="bullet"></div>
                  <div className="title">Financial Analysis</div>
                  <div className="date">2018-2022</div>
                </div>
                <div className="main-subheading">
                  <div className="subtitle">
                    Lotam etcorporis suscipit mollitia explicabo vitae nisi?
                    Voluptate, quaerat.
                  </div>
                </div>
              </div>
              <div className="main-heading-container">
                <div className="main-heading">
                  <div className="bullet"></div>
                  <div className="title">Global Production Operations</div>
                  <div className="date">2018-2022</div>
                </div>
                <div className="main-subheading">
                  <div className="subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam etcorpo
                  </div>
                </div>
              </div>
              <div className="main-heading-container">
                <div className="main-heading">
                  <div className="bullet"></div>
                  <div className="title">Ticketing Workflow</div>
                  <div className="date">2018-2022</div>
                </div>
                <div className="main-subheading">
                  <div className="subtitle">
                    Lotam etcorporis suscipit mollitia explicabo vitae nisi?
                    Voluptate, quaerat.
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeOption === 5 && (
            <div className="main">
              <div className="main-heading-container">
                <div className="main-heading">
                  <div className="bullet"></div>
                  <div className="title">Playing Games</div>
                  {/* <div className="date">2018-2022</div> */}
                </div>
                <div className="main-subheading">
                  <div className="subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam etcorporis suscipit mollitia explicabo vitae nisi?
                    Voluptate, quaerat.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
