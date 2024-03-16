import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import data from "./assets/data/data.json";
import { useState } from "react";

import "./App.css";
import "./assets/css/responsive.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faFileArrowDown,
  faDesktop,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3,
  faJs,
  faNodeJs,
  faReact,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faHtml5,
  faCss3,
  faJs,
  faNodeJs,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
  faFileArrowDown,
  faDesktop,
  faBars
);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Expo from "./assets/img/Expo.png";
import MongoDB from "./assets/img/MongoDB-orange.svg";
import ExpressJS from "./assets/img/Expressjs-orange.png";
import Profile from "./assets/img/Profile.png";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header>
        <div className="wrapper">
          <div>
            <a href="/">HOME</a>
          </div>
          <nav>
            <div>
              <a href="#projects">Projects</a>
            </div>
            <div>
              <a href="#aboutMe">About Me</a>
            </div>
            <div>
              <a href="#contact">Contact</a>
            </div>
          </nav>
          <div className="visibleXs" onClick={() => setShowMenu(!showMenu)}>
            <FontAwesomeIcon icon="fa-bars" />
          </div>
        </div>
        <div className={`menu ${showMenu ? "visible" : "hidden"}`}>
          <div>
            <a href="#projects" onClick={() => setShowMenu(!showMenu)}>
              Projects
            </a>
          </div>
          <div>
            <a href="#aboutMe" onClick={() => setShowMenu(!showMenu)}>
              About Me
            </a>
          </div>
          <div>
            <a href="#contact" onClick={() => setShowMenu(!showMenu)}>
              Contact
            </a>
          </div>
        </div>
      </header>
      <main>
        {/* INTRODUCTION SECTION */}

        <section id="introduction">
          <div className="wrapper">
            <div>
              <h1>
                Hello, I'm <span>Adrien Frischknecht</span>
              </h1>
              <h4>Recently trained web developer seeking internship.</h4>
            </div>
            <a href="mailto:frischknecht.adrien@gmail.com" className="btn">
              <div>Let's get in touch !</div>
            </a>
            <img src={Profile} alt="My profile picture" />
            <div className="shape"></div>
          </div>
        </section>

        {/* PROJECTS SECTION */}

        <section id="projects">
          <div className="wrapper">
            <h2>Projects_</h2>
            <p>
              This section showcases the projects I've worked on, highlighting
              my skills and competencies. Each project includes links to a live
              demo and its code repository for your exploration.
            </p>
            <Projects />
          </div>
        </section>

        {/* ABOUT ME SECTION */}

        <section id="aboutMe">
          <div className="wrapper">
            <h2>About me_</h2>
            <div className="skills">
              <div>
                <h3>Technologies</h3>
                <div className="skillsContainer">
                  <div className="skill">
                    <FontAwesomeIcon icon="fa-brands fa-html5" />
                    <div>HTML</div>
                  </div>
                  <div className="skill">
                    <FontAwesomeIcon icon="fa-brands fa-css3" />
                    <div>CSS</div>
                  </div>
                  <div className="skill">
                    <FontAwesomeIcon icon="fa-brands fa-js" />
                    <div>JavaScript</div>
                  </div>
                  <div className="skill">
                    <FontAwesomeIcon icon="fa-brands fa-react" />
                    <div>React</div>
                  </div>
                  <div className="skill">
                    <FontAwesomeIcon icon="fa-brands fa-react" />
                    <div>React Native</div>
                  </div>
                  <div className="skill">
                    <img src={Expo} alt="Expo logo" />
                    <div>Expo</div>
                  </div>
                  <div className="skill">
                    <img src={ExpressJS} alt="MongDB logo" />
                    <div>Express</div>
                  </div>
                  <div className="skill">
                    <FontAwesomeIcon icon="fa-brands fa-node-js" />
                    <div>Node.js</div>
                  </div>
                  <div className="skill">
                    <img src={MongoDB} alt="MongDB logo" />
                    <div>MongoDB</div>
                  </div>
                  <div className="skill">
                    <FontAwesomeIcon icon="fa-brands fa-github" />
                    <div>GitHub</div>
                  </div>
                </div>
              </div>
              <div>
                <h3>Languages</h3>
                <div className="languagesContainer">
                  <div>
                    <div>FR</div>
                    <div>French</div>
                  </div>
                  <div>
                    <div>EN</div>
                    <div>English</div>
                  </div>
                  <div>
                    <div>DE</div>
                    <div>German</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3>Education</h3>
              <div className="experiences">
                <div className="timeline">
                  <div>2024</div>
                  <div>2006</div>
                </div>
                {data.education.map((exp, index) => {
                  return (
                    <Experience
                      key={index}
                      title={exp.title}
                      from={exp.from}
                      to={exp.to}
                      city={exp.city}
                      where={exp.where}
                      position={exp.position}
                    />
                  );
                })}
              </div>
            </div>
            <div>
              <h3>Work experience</h3>
              <div className="experiences">
                <div className="timeline">
                  <div>2024</div>
                  <div>2010</div>
                </div>
                {data.workExperience.map((exp, index) => {
                  return (
                    <Experience
                      key={index}
                      title={exp.title}
                      from={exp.from}
                      to={exp.to}
                      city={exp.city}
                      where={exp.where}
                      position={exp.position}
                    />
                  );
                })}
              </div>
            </div>
            <div className="resume">
              <h4>Still curious? Then get my resume!</h4>
              <a
                href="https://drive.google.com/file/d/1_oHwGTYM-t6Vy0B_n5GNPDK5Z_YpCIRW/view"
                target="_blank"
                className="btnResume"
              >
                MY RESUME <FontAwesomeIcon icon="fa-file-arrow-down" />
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}

        <section id="contact">
          <div className="wrapper">
            <h2>Contact_</h2>
            <div className="contactContainer">
              <a href="mailto:frischknecht.adrien@gmail.com">
                <FontAwesomeIcon icon="fa-envelope" />
                <div>Email</div>
              </a>
              <a
                href="https://www.linkedin.com/in/adrien-frischknecht/"
                target="_blank"
              >
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                <div>LinkedIn</div>
              </a>
              <a href="https://github.com/frischknechta" target="_blank">
                <FontAwesomeIcon icon="fa-brands fa-github" />
                <div>Github</div>
              </a>
            </div>
          </div>
        </section>
        <div className="bigShape1"></div>
        <div className="bigShape2"></div>
      </main>
      <footer>
        <div className="wrapper">Adrien Frischknecht - 2024</div>
      </footer>
    </>
  );
}

export default App;
