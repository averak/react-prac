import React from "react";
import ReactDOM from "react-dom";
import { App, Footer } from "./components";

ReactDOM.render(
  <React.StrictMode>
    <App title="App" message="This is App Component!" />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
