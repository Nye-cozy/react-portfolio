import React from 'react'
import './App.css';
import TitleMessage from './components/title-message/title-message.component'
import Container from "react-bootstrap/Container";
//components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import About from './pages/about/about.component';

import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import csss from './assets/img/parallex/background.webp'
import Skills from './pages/skills/skills.component'
import Experience from './pages/experience/experience.component';
import ProjectTimeLine from './components/projects-timeline/projects-timeline.components';
import ContactForm from './pages/contact-form/contact-form.component';
import FooterPanel from './components/footer/footer.component';

import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOption";

const App = () => {
  //second 체크하자
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />
      <Particles
        className="particles particles-box"
        params={particlesOptions}
      />
      {/* About me Section */}
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={csss}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>

      {/* skills section */}
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <Skills />
          </Fade>
        </Container>
      </div >

      {/* experience section */}
      < div >
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <Experience />
          </Slide>
        </Container>
      </div >

      {/* Project TimeLine */}
      < div >
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <ProjectTimeLine />
          </Fade>
        </Container>
      </div >

      {/* Contact */}
      < div >
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <ContactForm />
          </Fade>
        </Container>
      </div >
      <hr />
      <FooterPanel />
    </div >
  );
}

export default App;
