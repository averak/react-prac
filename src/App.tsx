import React from "react";
import "./App.css";

type Props = {
  title: string;
  message: string;
};

const App: React.FC<Props> = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.message}</p>
    </div>
  );
};

export default App;
