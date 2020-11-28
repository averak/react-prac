import React from "react";
import "./Rect.css";

type Props = {
  title: string;
  message: string;
};

const Rect: React.FC<Props> = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.message}</p>
    </div>
  );
};

export default Rect;