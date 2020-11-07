import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const dom = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  dom
);

let cnt: number = 0;
setInterval(() => {
  cnt++;
  let el = (
    <div>
      <p>count: {cnt}</p>
    </div>
  );
  ReactDOM.render(el, dom);
}, 1000);
