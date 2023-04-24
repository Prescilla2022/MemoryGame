import React from "react";
import { useContext } from "react";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../App.js";
import One from "../images/one.png";
import Two from "../images/Two.png";
import three from "../images/three.png";
import four from "../images/four.png";
import five from "../images/five.png";
import Six from "../images/Six.png";
import Seven from "../images/Seven.png";
import eight from "../images/eight.png";
import Anchor from "../images/anchor.png";
import Fish from "../images/fish.png";
import Babyboy from "../images/baby-boy.png";
import Reindeer from "../images/reindeer.png";
import Snowflake from "../images/snowflake.png";
import Sunflower from "../images/sunflower.png";
import Wheel from "../images/wheel.png";
import Christmastree from "../images/christmas-tree.png";

export default function Game() {
  const navigate = useNavigate();
  let n = 0;
  let gridSize = null;
  let type = null;
  const myContext = useContext(dataContext);
  console.log(myContext);

  function setPlayers(e) {
    n = e.target.id;
    console.log(n);
  }
  function setGridSize(e) {
    gridSize = e.target.innerText;
    console.log(gridSize);
  }
  function setType(e) {
    type = e.target.innerText;
    console.log(type);
  }

  function setGame() {
    console.log(type);
    if (type === "Numbers" && gridSize === "6 X 6") {
      myContext.setElements([
        One,
        Two,
        three,
        four,
        five,
        Six,
        Seven,
        eight,
        One,
        Two,
        three,
        four,
        five,
        Six,
        Seven,
        eight,
        One,
        Two,
        three,
        four,
        five,
        Six,
        Seven,
        eight,
        One,
        Two,
        three,
        four,
        five,
        Six,
        Seven,
        eight,
        One,
        One,
        Two,
        Two,
      ]);
    } else if (type === "Numbers" && gridSize === "4 X 4") {
      myContext.setElements2([
        One,
        Two,
        three,
        four,
        five,
        Six,
        Seven,
        eight,
        One,
        Two,
        three,
        four,
        five,
        Six,
        Seven,
        eight,
      ]);
    } else if (type === "Icons" && gridSize === "6 X 6") {
      myContext.setElements([
        Anchor,
        Fish,
        Babyboy,
        Reindeer,
        Snowflake,
        Sunflower,
        Wheel,
        Christmastree,
        Anchor,
        Fish,
        Babyboy,
        Reindeer,
        Snowflake,
        Sunflower,
        Christmastree,
        Wheel,
        Anchor,
        Fish,
        Babyboy,
        Reindeer,
        Snowflake,
        Sunflower,
        Christmastree,
        Wheel,
        Anchor,
        Fish,
        Babyboy,
        Reindeer,
        Snowflake,
        Sunflower,
        Christmastree,
        Wheel,
        Christmastree,
        Christmastree,
        Christmastree,
        Christmastree,
      ]);
    } else if (type === "Icons" && gridSize === "4 X 4") {
      myContext.setElements2([
        Anchor,
        Fish,
        Babyboy,
        Reindeer,
        Snowflake,
        Sunflower,
        Wheel,
        Christmastree,
        Anchor,
        Fish,
        Babyboy,
        Reindeer,
        Snowflake,
        Sunflower,
        Christmastree,
        Wheel,
      ]);
    }
    navigate(`/play/${n}/${gridSize}`);
  }

  return (
    <div className="optionsContainer">
      <div className="options">
        <div className="innerContainer">
          <div className="theme">
            <h2>Select theme</h2>

            <button onClick={setType}>Numbers</button>

            <button onClick={setType}>Icons</button>
          </div>
          <div className="persons">
            <h2>Number of Players</h2>
            <button id="1" onClick={setPlayers}>
              1
            </button>
            <button id="2" onClick={setPlayers}>
              2
            </button>
            <button id="3" onClick={setPlayers}>
              3
            </button>
            <button id="4" onClick={setPlayers}>
              4
            </button>
          </div>
          <div className="size">
            <h2>Grid Size</h2>
            <button onClick={setGridSize}>4 X 4</button>
            <button onClick={setGridSize}>6 X 6</button>
          </div>
          <button className="start" onClick={setGame}>
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
}
