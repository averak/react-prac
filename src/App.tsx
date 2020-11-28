import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

export type Row = {
  name: string;
  age: string;
};

let message: string = "お名前をどうぞ：";
let in_val: string = "";

let doChange = (event: any): void => {
  in_val = event.target.value;
  message = `こんにちは${in_val}さん！！`;
};

let doAction = (): void => {
  let el = (
    <div>
      <p>{message}</p>
      <input type="text" id="input" onChange={doChange} />
      <button onClick={doAction}>Click</button>
    </div>
  );

  ReactDOM.render(el, document.getElementById("root"));
};

export default doAction;
