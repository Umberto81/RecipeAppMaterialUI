import React from "react";
import ReactDOM from "react-dom";
import CenteredGrid from "./grid";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <CenteredGrid />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
