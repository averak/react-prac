import React from "react";
import ReactDOM from "react-dom";
import { App, Layout } from "./components";

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <App message="This is App Component!" />
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);
