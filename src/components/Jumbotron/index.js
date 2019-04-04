import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron">
      <h1>DC Universe Clicky Game</h1>
      <p>
        Click on each character exactly once to win the game. But don't click on a character twice, or it's game over
        for you! Once you get to 12 you win, but don't worry if you don't make to 12 because the "Top Score" section in
        the top corner will track your best attempt so you know the number that you have to beat the next time around.
      </p>
    </div>
  );
}

export default Jumbotron;
