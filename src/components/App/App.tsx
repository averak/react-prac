import React from "react";
import "./App.css";

const App: React.FC<{ title: string; message: string }> = ({
  title,
  message,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
};

export default App;
