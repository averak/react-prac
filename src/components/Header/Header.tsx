import React from "react";
import "./Header.css";

const Header: React.FC<{ title?: string }> = ({ title = "MEMO" }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
