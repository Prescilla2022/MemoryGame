import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home.js";
import Game from "./components/Game.js";
import NavBar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Anchor from "../src/images/anchor.png";
import Fish from "../src/images/fish.png";
import Babyboy from "../src/images/baby-boy.png";
import Reindeer from "../src/images/reindeer.png";
import Snowflake from "../src/images/snowflake.png";
import Sunflower from "../src/images/sunflower.png";
import Wheel from "../src/images/wheel.png";
import Christmastree from "../src/images/christmas-tree.png";

import One from "../src/images/one.png";
import Two from "../src/images/Two.png";
import three from "../src/images/three.png";
import four from "../src/images/four.png";
import five from "../src/images/five.png";
import Six from "../src/images/Six.png";
import Seven from "../src/images/Seven.png";
import eight from "../src/images/eight.png";

export const dataContext = createContext();

function App() {
  const [elements2, setElements2] = useState([
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

  const [elements, setElements] = useState([
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
  const data = { elements, setElements, elements2, setElements2 };
  return (
    <div>
      <dataContext.Provider value={data}>
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/play/:n/:gridSize" element={<NavBar />} />
        </Routes>
      </dataContext.Provider>
    </div>
  );
}

export default App;
