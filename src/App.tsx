import React from "react";
import "./App.css";

function App() {
  let title: string = "テストタイトル";
  let message: string = "テストメッセージ";

  return (
    <div>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default App;
