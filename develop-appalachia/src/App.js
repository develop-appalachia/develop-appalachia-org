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
        <div className="BigBox">hello world</div>
        <FooterPage />
      </body>
    </div>
  );
}

export default App;
