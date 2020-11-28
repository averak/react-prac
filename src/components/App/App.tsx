import React from "react";
import "./App.css";

const App: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default App;
