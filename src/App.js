
import { useRef } from "react";
import './App.css';
import { Controller, Scene } from "react-scrollmagic";
import SequenceOne from "./Components/SequenceOne";
import SequenceTwo from "./Components/SequenceTwo";
import SequenceThree from "./Components/SequenceThree";
// import { Container, Row, Col } from "react-bootstrap";

import LogoTop from "./headerimages/toplogo.png"
import Logo from "./headerimages/TAMARIND.png"

console.clear()

function App() {
  const ref = useRef();




  return (
    <div className="App">
      <div className="hedaer__area">
        <div className="container">
          <div className="row">
            <div className="col-lg-1">
                <img src={LogoTop} alt="" />
            </div>
            <div className="col-lg-11">
              <ul>
                <li> Laptop </li>
                <li> Desktop </li>
                <li> All In One </li>
                <li> Monitor </li>
                <li> Keyboard </li>
                <li> Mouse </li>
                <li> Pendrive </li>
                <li> Headphone </li>
                <li> Accessories </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hedaer__area_bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <img src={Logo} alt="" />
              </div>
              <div className="col-lg-9">
                <ul>
                  <li> Overview </li>
                  <li> Tech Specs </li>
                  <li> Picture Gallery </li>
                  <li> Buy Now </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="screen_one">
        <Controller>
          <Scene duration="200%" triggerHook="onLeave" pin>
            {progress => (
              <div style={{ height: "100vh", position: "relative" }}>
                <SequenceOne ref={ref} progress={progress} />
              </div>
            )}
          </Scene>
        </Controller>
      </div>
      <div className="screen_one screen_two">
        <Controller>
          <Scene duration="200%" triggerHook="onLeave" pin>
            {progress => (
              <div style={{ height: "100vh", position: "relative" }}>
                <SequenceTwo ref={ref} progress={progress} />
              </div>
            )}
          </Scene>
        </Controller>
      </div>
      <div className="screen_one screen_two">
        <Controller>
          <Scene duration="200%" triggerHook="onLeave" pin>
            {progress => (
              <div style={{ height: "100vh", position: "relative" }}>
                <SequenceThree ref={ref} progress={progress} />
              </div>
            )}
          </Scene>
        </Controller>
      </div>

    </div>
  );
}

export default App;
