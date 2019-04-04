import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="Nav">
      <p>DC Universe Clicky Game</p>
      <p>{props.rightWrong}</p>
      <p>Score: {props.score}</p>
      <p>Top Score: {props.topScore}</p>
    </nav>
  );
}

export default Nav;
