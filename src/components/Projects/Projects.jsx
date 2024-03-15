import "./Projects.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Marvel from "../../assets/img/Marvel.png";
import Vinted from "../../assets/img/Vinted.png";
import Deliveroo from "../../assets/img/Deliveroo.png";
import Tripadvisor from "../../assets/img/Tripadvisor.png";
import Airbnb from "../../assets/img/Airbnb.jpg";

const Projects = () => {
  const [isActive, setIsActive] = useState([0, 0, 0, 0, 0]);

  return (
    <div className="projectsContainer">
      <div
        className={`vinted ${isActive[0] === 1 ? "active" : "inactive"}`}
        onClick={() => {
          const newTab = [1, 0, 0, 0, 0];
          setIsActive(newTab);
        }}
      >
        <div className="descriptionContainer">
          <div>
            <h3>Vinted</h3>
            <p>A reproduction of Vinted's main pages and functionnalities.</p>
          </div>
          <div className="projectLinks">
            <a
              href="https://vinted-af.netlify.app/"
              target="_blank"
              className="btnLink"
            >
              <FontAwesomeIcon icon="fa-desktop" /> DEMO
            </a>
            <a
              href="https://github.com/frischknechta/vinted-front-app"
              target="_blank"
              className="btnLink"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
          </div>
          <div className="descriptionBackground"></div>
        </div>
        <img src={Vinted} alt="Vinted homepage" />
      </div>
      <div
        className={`marvel ${isActive[1] === 1 ? "active" : "inactive"}`}
        onClick={() => {
          const newTab = [0, 1, 0, 0, 0];
          setIsActive(newTab);
        }}
      >
        <div className="descriptionContainer">
          <div>
            <h3>Marvel</h3>
            <p>
              A Marvel page to look for your favorite characters and comics!
            </p>
          </div>
          <div className="projectLinks">
            <a
              href="https://marvel-af.netlify.app/"
              target="_blank"
              className="btnLink"
            >
              <FontAwesomeIcon icon="fa-desktop" /> DEMO
            </a>
            <a
              href="https://github.com/frischknechta/marvel-frontend"
              target="_blank"
              className="btnLink"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
          </div>
          <div className="descriptionBackground"></div>
        </div>
        <img src={Marvel} alt="Marvel homepage" />
      </div>
      <div
        className={`airbnb ${isActive[2] === 1 ? "active" : "inactive"}`}
        onClick={() => {
          const newTab = [0, 0, 1, 0, 0];
          setIsActive(newTab);
        }}
      >
        <div className="descriptionContainer">
          <div>
            <h3>Airbnb App</h3>
            <p>
              A reproduction of the Airbnb app, working both on iOS and Android,
              built with React Native / Expo.
            </p>
          </div>
          <div className="projectLinks">
            <a
              href="https://vinted-af.netlify.app/"
              target="_blank"
              className="btnLink"
            >
              <FontAwesomeIcon icon="fa-desktop" /> DEMO
            </a>
            <a
              href="https://github.com/frischknechta/Airbnb-app"
              target="_blank"
              className="btnLink"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
          </div>
          <div className="descriptionBackground"></div>
        </div>
        <img src={Airbnb} alt="Airbnb app" />
      </div>
      <div
        className={`deliveroo ${isActive[3] === 1 ? "active" : "inactive"}`}
        onClick={() => {
          const newTab = [0, 0, 0, 1, 0];
          setIsActive(newTab);
        }}
      >
        <div className="descriptionContainer">
          <div>
            <h3>Deliveroo</h3>
            <p>
              A reproduction of the popular food delivery website, Deliveroo.
            </p>
          </div>
          <div className="projectLinks">
            <a
              href="https://deliveroo-af.netlify.app/"
              target="_blank"
              className="btnLink"
            >
              <FontAwesomeIcon icon="fa-desktop" /> DEMO
            </a>
            <a
              href="https://github.com/frischknechta/deliveroo-frontend"
              target="_blank"
              className="btnLink"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
          </div>
          <div className="descriptionBackground"></div>
        </div>
        <img src={Deliveroo} alt="Deliveroo homepage" />
      </div>
      <div
        className={`tripadvisor ${isActive[4] === 1 ? "active" : "inactive"}`}
        onClick={() => {
          const newTab = [0, 0, 0, 0, 1];
          setIsActive(newTab);
        }}
      >
        <div className="descriptionContainer">
          <div>
            <h3>Tripadvisor</h3>
            <p>A reproduction of a city page on Tripavisor.</p>
          </div>
          <div className="projectLinks">
            <a
              href="https://mytripadvisor-berlin.netlify.app/"
              target="_blank"
              className="btnLink"
            >
              <FontAwesomeIcon icon="fa-desktop" /> DEMO
            </a>
            <a
              href="https://github.com/frischknechta/TripAdvisor-front"
              target="_blank"
              className="btnLink"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
          </div>
          <div className="descriptionBackground"></div>
        </div>
        <img src={Tripadvisor} alt="Tripadvisor homepage" />
      </div>
    </div>
  );
};

export default Projects;
