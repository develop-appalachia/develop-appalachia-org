import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Headroom from "react-headroom";
import FooterPage from "./footer";
function App() {
  return (
    <div className="App">
      <body>
        <Headroom>
          {" "}
          <h1>Develop Appalachia</h1>
        </Headroom>
        <div className="BigBox">
          <img
            className="banner"
            src="https://www.google.com/logos/doodles/2019/2019-womens-world-cup-day-5-5578446944600064-law.gif"
          />
          <br />
          hello world
        </div>
        <FooterPage />
      </body>
    </div>
  );
}

export default App;
