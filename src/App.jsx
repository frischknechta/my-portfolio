import { useState } from "react";
import "./App.css";
import Experience from "./components/Experience/Experience";

import Marvel from "./assets/img/Marvel.png";
import Vinted from "./assets/img/Vinted.png";
import Deliveroo from "./assets/img/Deliveroo.png";
import Tripadvisor from "./assets/img/Tripadvisor.png";
import Airbnb from "./assets/img/Airbnb.jpg";

function App() {
  const [isActive, setIsActive] = useState([0, 0, 0, 0, 0]);

  return (
    <>
      <header>
        <div className="wrapper">
          <div>
            <a href="#introduction">LOGO</a>
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
        </div>
      </header>
      <main>
        <section id="introduction">
          <div className="wrapper">
            <div>
              <h1>Hello, I'm Adrien Frischknecht</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                consectetur voluptatibus impedit, consequatur officiis dolor!
              </p>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="wrapper">
            <h2>Projects</h2>
            <div className="projectsContainer">
              <div
                className={`vinted ${
                  isActive[0] === 1 ? "active" : "inactive"
                }`}
                onClick={() => {
                  const newTab = [1, 0, 0, 0, 0];
                  setIsActive(newTab);
                }}
              >
                <div className="descriptionContainer">
                  <h3>Vinted</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                    odit deleniti aperiam aliquam mollitia quia dicta dolorem
                    illum veniam ipsam sint ut, neque reprehenderit ipsum
                    voluptatem nihil quaerat eius temporibus!
                  </p>
                  <div className="btnLink">DEMO</div>
                </div>
                <img src={Vinted} alt="Vinted homepage" />
              </div>
              <div
                className={`marvel ${
                  isActive[1] === 1 ? "active" : "inactive"
                }`}
                onClick={() => {
                  const newTab = [0, 1, 0, 0, 0];
                  setIsActive(newTab);
                }}
              >
                <div className="descriptionContainer">
                  <h3>Marvel</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                    odit deleniti aperiam aliquam mollitia quia dicta dolorem
                    illum veniam ipsam sint ut, neque reprehenderit ipsum
                    voluptatem nihil quaerat eius temporibus!
                  </p>
                </div>
                <img src={Marvel} alt="Marvel homepage" />
              </div>
              <div
                className={`airbnb ${
                  isActive[2] === 1 ? "active" : "inactive"
                }`}
                onClick={() => {
                  const newTab = [0, 0, 1, 0, 0];
                  setIsActive(newTab);
                }}
              >
                <div className="descriptionContainer">
                  <h3>Airbnb App</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                    odit deleniti aperiam aliquam mollitia quia dicta dolorem
                    illum veniam ipsam sint ut, neque reprehenderit ipsum
                    voluptatem nihil quaerat eius temporibus!
                  </p>
                </div>
                <img src={Airbnb} alt="Airbnb app" />
              </div>
              <div
                className={`deliveroo ${
                  isActive[3] === 1 ? "active" : "inactive"
                }`}
                onClick={() => {
                  const newTab = [0, 0, 0, 1, 0];
                  setIsActive(newTab);
                }}
              >
                <div className="descriptionContainer">
                  <h3>Deliveroo</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                    odit deleniti aperiam aliquam mollitia quia dicta dolorem
                    illum veniam ipsam sint ut, neque reprehenderit ipsum
                    voluptatem nihil quaerat eius temporibus!
                  </p>
                </div>
                <img src={Deliveroo} alt="Deliveroo homepage" />
              </div>
              <div
                className={`tripadvisor ${
                  isActive[4] === 1 ? "active" : "inactive"
                }`}
                onClick={() => {
                  const newTab = [0, 0, 0, 0, 1];
                  setIsActive(newTab);
                }}
              >
                <div className="descriptionContainer">
                  <h3>Tripadvisor</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                    odit deleniti aperiam aliquam mollitia quia dicta dolorem
                    illum veniam ipsam sint ut, neque reprehenderit ipsum
                    voluptatem nihil quaerat eius temporibus!
                  </p>
                </div>
                <img src={Tripadvisor} alt="Tripadvisor homepage" />
              </div>
            </div>
          </div>
        </section>

        <section id="aboutMe">
          <div className="wrapper">
            <h2>About me</h2>
            <div>
              <h3>Skills</h3>
              <div>
                <h4>Technologies</h4>
                <div className="skillsContainer">
                  <div>HTML</div>
                  <div>CSS</div>
                  <div>JavaScript</div>
                  <div>React</div>
                  <div>React Native</div>
                  <div>Expo</div>
                  <div>Node.js</div>
                  <div>Express</div>
                  <div>MongoDB</div>
                  <div>GitHub</div>
                </div>
              </div>
              <div>
                <h4>Languages</h4>
                <div className="skillsContainer">
                  <div>French</div>
                  <div>English</div>
                  <div>German</div>
                </div>
              </div>
            </div>
            <div>
              <h3>Education</h3>
              <div className="experiences">
                <Experience
                  title="Web and Mobile Developer"
                  from="2023"
                  to="2024"
                  city="Paris"
                  where="Le Reacteur"
                  position="left"
                />
                <Experience
                  title="Business Coordinator"
                  from="2018"
                  to="2019"
                  city="Neuchâtel"
                  where="CEFCO"
                  position="right"
                />
                <Experience
                  title="Polymechanic CFC"
                  from="2006"
                  to="2010"
                  city="Bienne"
                  where="Rolex SA"
                  position="left"
                />
              </div>
            </div>
            <div>
              <h3>Work experience</h3>
              <div className="experiences">
                <Experience
                  title="R&D Project Manager and Key Account Sales Manager"
                  from="2020"
                  to="Present"
                  city="Bienne"
                  where="Walca SA and Doxa SA"
                  position="left"
                />
                <Experience
                  title="First Level Manager - Sevice Desk"
                  from="2019"
                  to="2020"
                  city="Bern"
                  where="KAIO Kanton Bern"
                  position="right"
                />
                <Experience
                  title="R&D Project Manager and Key Account Sales Manager"
                  from="2020"
                  to="2024"
                  city="Bienne"
                  where="Walca SA and Doxa SA"
                  position="left"
                />
                <Experience
                  title="Global Customer Care coordinator"
                  from="2017"
                  to="2019"
                  city="Bienne"
                  where="Bien-Air Dental SA"
                  position="right"
                />
                <Experience
                  title="After sales technical support coordinator"
                  from="2013"
                  to="2017"
                  city="Bienne"
                  where="Bien-Air Dental SA"
                  position="left"
                />
                <Experience
                  title="Tooling mechanic"
                  from="2012"
                  to="2013"
                  city="Bienne"
                  where="Bien-Air Dental SA"
                  position="right"
                />
                <Experience
                  title="Tooling mechanic"
                  from="2010"
                  to="2011"
                  city="Bienne"
                  where="Rolex"
                  position="left"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="wrapper">
            <h2>Contact</h2>
            <div>Email</div>
            <div>Phone</div>
            <div>LinkedIn</div>
            <div>Github</div>
            <div>Autre</div>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrapper">Realized by me</div>
      </footer>
    </>
  );
}

export default App;
