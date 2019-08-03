import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Life from "./Life";

function App() {
  return (
    <div className="App">
      <Life />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
