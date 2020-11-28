import React from "react";
import ReactDOM from "react-dom";
import { App, Footer, Header } from "./components";

ReactDOM.render(
  <React.StrictMode>
    <Header title="MEMO"/>
    <App message="This is App Component!" />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
