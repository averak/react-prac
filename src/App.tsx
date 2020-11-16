import React from "react";
import "./App.css";

export type Row = {
  name: string;
  age: string;
};

const App: React.FC<Row> = (props) => {
  return (
    <p>
      こんにちは，{props.name}
      {props.age}才さん
    </p>
  );
};

export default App
