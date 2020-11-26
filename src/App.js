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

const App = () => {
  //second 체크
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />
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
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={csss}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <Skills />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      {/* experience section */}
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <Experience />
          </Slide>
        </Container>
      </div>
    </div>
  );
}

export default App;
