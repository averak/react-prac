import React from "react";
import "./App.css";

interface Props {
  name: string;
}

function Welcome(props: Props) {
  return <p>Hello, {props.name}</p>;
}

function App() {
  return (
    <div>
      <Welcome name="Taro" />
      <Welcome name="Hanako" />
    </div>
  );
}

export default App;
