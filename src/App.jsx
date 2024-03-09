import "./App.css";
import Experience from "./components/Experience/Experience";
import Project from "./components/Project";

function App() {
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
              <Project
                title="Vinted"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  odit deleniti aperiam aliquam mollitia quia dicta dolorem
                  illum veniam ipsam sint ut, neque reprehenderit ipsum
                  voluptatem nihil quaerat eius temporibus!"
              />
              <Project
                title="Marvel"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  odit deleniti aperiam aliquam mollitia quia dicta dolorem
                  illum veniam ipsam sint ut, neque reprehenderit ipsum
                  voluptatem nihil quaerat eius temporibus!"
              />
              <Project
                title="Airbnb App"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  odit deleniti aperiam aliquam mollitia quia dicta dolorem
                  illum veniam ipsam sint ut, neque reprehenderit ipsum
                  voluptatem nihil quaerat eius temporibus!"
              />
              <Project
                title="Deliveroo"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  odit deleniti aperiam aliquam mollitia quia dicta dolorem
                  illum veniam ipsam sint ut, neque reprehenderit ipsum
                  voluptatem nihil quaerat eius temporibus!"
              />
              <Project
                title="Tripadvisor"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  odit deleniti aperiam aliquam mollitia quia dicta dolorem
                  illum veniam ipsam sint ut, neque reprehenderit ipsum
                  voluptatem nihil quaerat eius temporibus!"
              />
            </div>
          </div>
        </section>

        <section id="aboutMe">
          <div className="wrapper">
            <h2>About me</h2>
            <div>
              <h3>Skills</h3>
              <div>Technologies</div>
              <div>Languages</div>
              <div>French</div>
              <div>English</div>
              <div>German</div>
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
