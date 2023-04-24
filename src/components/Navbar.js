import { React, useEffect, useState } from "react";
import "../styles/home.css";

import Click from "../sounds/click.wav";

import { dataContext } from "../App.js";
import { useContext } from "react";

import { useNavigate, useParams } from "react-router-dom";

export default function NavBar() {
  const { n, gridSize } = useParams();
  const myContext = useContext(dataContext);

  const elements = myContext.elements;
  const elements2 = myContext.elements2;
  const setElements = myContext.setElements;
  const setElements2 = myContext.setElements2;

  let type = "numbers";

  let players = [];
  let turns = [];

  const navigate = useNavigate();
  const audio = document.getElementById("audio");

  const [background, setBackground] = useState({
    background0: "none",
    background1: "none",
    background2: "none",
    background3: "none",
    background4: "none",
    background5: "none",
    background6: "none",
    background7: "none",
    background8: "none",
    background9: "none",
    background10: "none",
    background11: "none",
    background12: "none",
    background13: "none",
    background14: "none",
    background15: "none",
    background16: "none",
    background17: "none",
    background18: "none",
    background19: "none",
    background20: "none",
    background21: "none",
    background22: "none",
    background23: "none",
    background24: "none",
    background25: "none",
    background26: "none",
    background27: "none",
    background28: "none",
    background29: "none",
    background30: "none",
    background31: "none",
    background32: "none",
    background33: "none",
    background34: "none",
    background35: "none",
  });

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [id1, setId1] = useState(null);
  const [id2, setId2] = useState(null);
  const [click1, setClick1] = useState(null);
  const [click2, setClick2] = useState(null);

  const [score, setscore] = useState({
    score1: 0,
    score2: 0,
    score3: 0,
    score4: 0,
  });
  const [visible, setVisibility] = useState(false);
  const [turn, setTurn] = useState({
    turn1: false,
    turn2: false,
    turn3: false,
    turn4: false,
  });

  const [scorebg, setscorebg] = useState({
    score1: false,
    score2: false,
    score3: false,
    score4: false,
  });

  const [bgcolor, setBgcolor] = useState({
    color0: "rgb(211, 209, 209)",
    color1: "rgb(211, 209, 209)",
    color2: "rgb(211, 209, 209)",
    color3: "rgb(211, 209, 209)",
    color4: "rgb(211, 209, 209)",
    color5: "rgb(211, 209, 209)",
    color6: "rgb(211, 209, 209)",
    color7: "rgb(211, 209, 209)",
    color8: "rgb(211, 209, 209)",
    color9: "rgb(211, 209, 209)",
    color10: "rgb(211, 209, 209)",
    color11: "rgb(211, 209, 209)",
    color12: "rgb(211, 209, 209)",
    color13: "rgb(211, 209, 209)",
    color14: "rgb(211, 209, 209)",
    color15: "rgb(211, 209, 209)",
    color16: "rgb(211, 209, 209)",
    color17: "rgb(211, 209, 209)",
    color18: "rgb(211, 209, 209)",
    color19: "rgb(211, 209, 209)",
    color20: "rgb(211, 209, 209)",
    color21: "rgb(211, 209, 209)",
    color22: "rgb(211, 209, 209)",
    color23: "rgb(211, 209, 209)",
    color24: "rgb(211, 209, 209)",
    color25: "rgb(211, 209, 209)",
    color26: "rgb(211, 209, 209)",
    color27: "rgb(211, 209, 209)",
    color28: "rgb(211, 209, 209)",
    color29: "rgb(211, 209, 209)",
    color30: "rgb(211, 209, 209)",
    color31: "rgb(211, 209, 209)",
    color32: "rgb(211, 209, 209)",
    color33: "rgb(211, 209, 209)",
    color34: "rgb(211, 209, 209)",
    color35: "rgb(211, 209, 209)",
  });

  const [isdisabled, setValue] = useState({
    value0: "auto",
    value1: "auto",
    value2: "auto",
    value3: "auto",
    value4: "auto",
    value5: "auto",
    value6: "auto",
    value7: "auto",
    value8: "auto",
    value9: "auto",
    value10: "auto",
    value11: "auto",
    value12: "auto",
    value13: "auto",
    value14: "auto",
    value15: "auto",
    value16: "auto",
    value17: "auto",
    value18: "auto",
    value19: "auto",
    value20: "auto",
    value21: "auto",
    value22: "auto",
    value23: "auto",
    value24: "auto",
    value25: "auto",
    value26: "auto",
    value27: "auto",
    value28: "auto",
    value29: "auto",
    value30: "auto",
    value31: "auto",
    value32: "auto",
    value33: "auto",
    value34: "auto",
    value35: "auto",
  });

  const [count, setCount] = useState(0);
  const [winner, setWinner] = useState(null);
  const [successPair, setSuccessPair] = useState(0);
  const [showWinner, setShowWinner] = useState(false);

  for (let i = 0; i < n; i++) {
    //console.log(scorebg[`score${i + 1}`]);
    players.push(
      <div
        key={i}
        style={{
          backgroundColor: scorebg[`score${i + 1}`]
            ? "orange"
            : "rgb(174, 162, 162)",
        }}
      >
        <p>Player{i + 1} </p>
        <p>{score["score" + (i + 1)]}</p>
      </div>
    );
    turns.push(
      <div>
        <p
          key={i}
          style={{ visibility: turn["turn" + (i + 1)] ? "visible" : "hidden" }}
        >
          Player{i + 1} turn
        </p>
      </div>
    );
  }
  useEffect(() => {
    console.log("hi");
    console.log(myContext.elements);
  }, []);

  useEffect(() => {
    if (showWinner === true) {
      if (n === "1") {
        setWinner("Player1 is the winner");
      } else if (n === "3") {
        console.log(score.score1, score.score2, score.score3);
        if (score.score1 > score.score2 && score.score1 > score.score3) {
          console.log("yes");
          setWinner("Player1 is the winner");
        } else if (score.score1 > score.score3 || score.score1 > score.score2) {
          if (score.score1 == score.score2 || score.score1 == score.score3) {
            setWinner("It's a tie");
          }
        } else if (score.score2 > score.score1 && score.score2 > score.score3) {
          console.log("yes");
          setWinner("Player2 is the winner");
        } else if (score.score2 > score.score3 || score.score2 > score.score1) {
          if (score.score2 == score.score3 || score.score2 == score.score1) {
            setWinner("It's a tie");
          }
        } else if (score.score3 > score.score1 && score.score3 > score.score2) {
          console.log("yes");
          setWinner("Player3 is the winner");
        } else if (score.score3 > score.score1 || score.score3 > score.score1) {
          if (score.score3 == score.score2 || score.score3 == score.score1) {
            setWinner("It's a tie");
          }
        }
      } else if (n === "2") {
        if (score.score1 > score.score2) {
          setWinner("Player1 is the winner");
        } else if (score.score2 > score.score1) {
          setWinner("Player2 is the winner");
        } else if (score.score1 == score.score2) {
          setWinner("It's a draw");
        }
      } else if (n === "4") {
        if (
          score.score1 > score.score2 &&
          score.score1 > score.score3 &&
          score.score1 > score.score4
        ) {
          setWinner("Player1 is the winner");
          console.log(winner);
        } else if (
          score.score2 > score.score1 &&
          score.score2 > score.score3 &&
          score.score2 > score.score4
        ) {
          setWinner("Player2 is the winner");
        } else if (
          score.score3 > score.score1 &&
          score.score3 > score.score2 &&
          score.score3 > score.score4
        ) {
          setWinner("Player3 is the winner");
        } else if (
          score.score4 > score.score2 &&
          score.score4 > score.score3 &&
          score.score4 > score.score1
        ) {
          setWinner("Player4 is the winner");
        } else if (
          score.score1 > score.score3 ||
          score.score1 > score.score2 ||
          score.score1 > score.score4
        ) {
          if (
            score.score1 == score.score2 ||
            score.score1 == score.score3 ||
            score.score1 == score.score4
          ) {
            setWinner("It's a tie");
          }
        } else if (
          score.score2 > score.score1 ||
          score.score2 > score.score3 ||
          score.score2 > score.score4
        ) {
          if (
            score.score2 == score.score3 ||
            score.score2 == score.score1 ||
            score.score2 == score.score4
          ) {
            setWinner("It's a tie");
          }
        } else if (
          score.score3 > score.score1 ||
          score.score3 > score.score2 ||
          score.score3 > score.score4
        ) {
          if (
            score.score3 == score.score1 ||
            score.score3 == score.score2 ||
            score.score3 == score.score4
          ) {
            setWinner("It's a tie");
          }
        } else if (
          score.score4 > score.score3 ||
          score.score4 > score.score2 ||
          score.score4 > score.score1
        ) {
          if (
            score.score4 == score.score1 ||
            score.score4 == score.score2 ||
            score.score4 == score.score3
          ) {
            setWinner("It's a tie");
          }
        }
      }
    }
  }, [score.score1, score.score2, score.score3, score.score4, showWinner]);

  useEffect(() => {
    shuffle();
  }, [elements[35], elements2[15]]);

  useEffect(() => {
    if (`${id1}` === `${id2}`) {
      setId2(null);
    }
  }, [id1]);

  useEffect(() => {
    if (
      `${background["background" + id1]}` !== "none" &&
      `${background["background" + id2]}` !== "none" &&
      id1 !== id2 &&
      click1 < click2
    ) {
      if (
        `${background["background" + id1]}` ===
        `${background["background" + id2]}`
      ) {
        setSuccessPair((prev) => ++prev);
        setTimeout(() => {
          if (gridSize === "6 X 6") {
            console.log(id1, id2);
            setBackground({
              ...background,
              ["background" + id1]: `url(${elements[id1]})`,
              ["background" + id2]: `url(${elements[id2]})`,
            });
          } else if (gridSize === "4 X 4") {
            setBackground({
              ...background,
              ["background" + id1]: `url(${elements2[id1]})`,
              ["background" + id2]: `url(${elements2[id2]})`,
            });
          }
          setId1(null);
          setId2(null);

          setBgcolor({
            ...bgcolor,
            ["color" + id1]: "rgb(232, 226, 226)",
            ["color" + id2]: "rgb(232, 226, 226)",
          });
          setValue({
            value0: "auto",
            value1: "auto",
            value2: "auto",
            value3: "auto",
            value4: "auto",
            value5: "auto",
            value6: "auto",
            value7: "auto",
            value8: "auto",
            value9: "auto",
            value10: "auto",
            value11: "auto",
            value12: "auto",
            value13: "auto",
            value14: "auto",
            value15: "auto",
            value16: "auto",
            value17: "auto",
            value18: "auto",
            value19: "auto",
            value20: "auto",
            value21: "auto",
            value22: "auto",
            value23: "auto",
            value24: "auto",
            value25: "auto",
            value26: "auto",
            value27: "auto",
            value28: "auto",
            value29: "auto",
            value30: "auto",
            value31: "auto",
            value32: "auto",
            value33: "auto",
            value34: "auto",
            value35: "auto",
          });
          setValue({
            ...isdisabled,
            ["value" + id1]: "none",
            ["value" + id2]: "none",
          });
          if (n === "1") {
            setscore({ ...score, score1: score.score1 + 10 });
            //setWinner(1);
          } else if (n === "2") {
            if (`${count}` == 2 || `${count}` % 4 == 2) {
              setscore({ ...score, score1: score.score1 + 10 });
            } else if (`${count}` == 0) {
            } else {
              setscore({ ...score, score2: score.score2 + 10 });
            }
          } else if (n === "3") {
            if (`${count}` % 3 == 2) {
              setscore({ ...score, score1: score.score1 + 10 });
            } else if (`${count}` % 3 == 1) {
              setscore({ ...score, score2: score.score2 + 10 });
            } else if (`${count}` % 3 == 0) {
              setscore({ ...score, score3: score.score3 + 10 });
            }
          } else if (n === "4") {
            if (`${count}` % 8 == 2) {
              setscore({ ...score, score1: score.score1 + 10 });
            } else if (`${count}` % 8 == 4) {
              setscore({ ...score, score2: score.score2 + 10 });
            } else if (`${count}` % 8 == 6) {
              setscore({ ...score, score3: score.score3 + 10 });
            } else if (`${count}` % 8 == 0) {
              setscore({ ...score, score4: score.score4 + 10 });
            }
          }
        }, 500);
        if (
          (gridSize === "4 X 4" && successPair == 7) ||
          (gridSize === "6 X 6" && successPair == 17)
        ) {
          console.log(n);
          setShowWinner(true);
          /* if (n === "1") {
            setWinner("Player1 is the winner");
          } else if (n === "3") {
            if (score.score1 > (score.score2 && score.score3)) {
              setWinner("Player1 is the winner");
            } else if (score.score2 > (score.score1 && score.score2)) {
              setWinner("Player2 is the winner");
            } else if (score.score3 > (score.score1 && score.score2)) {
              setWinner("Player3 is the winner");
            }
          } else if (n === "2") {
            console.log(score.score1, score.score2);
            if (score.score1 > score.score2) {
              setWinner("Player1 is the winner");
            } else if (score.score2 > score.score1) {
              setWinner("Player2 is the winner");
            } else if (score.score1 == score.score2) {
              setWinner("It's a draw");
            }
          } else if (n === "4") {
            if (score.score1 > (score.score2 && score.score3 && score.score4)) {
              setWinner("Player1 is the winner");
              console.log(winner);
            } else if (
              score.score2 > (score.score1 && score.score4 && score.score3)
            ) {
              setWinner("Player2 is the winner");
            } else if (
              score.score3 > (score.score1 && score.score2 && score.score4)
            ) {
              setWinner("Player3 is the winner");
            } else if (
              score.score4 > (score.score1 && score.score2 && score.score3)
            ) {
              setWinner("Player4 is the winner");
            } else {
            }
          }*/
        } /*else {
          if (gridSize === "6 X 6") {
            if (successPair == 17) {
              setShowWinner(true);
            }
            if (n === "1") {
              setWinner(1);
            }
            if (n === "3") {
              if (score.score1 > (score.score2 && score.score3)) {
                setWinner(1);
              } else if (score.score2 > (score.score1 && score.score2)) {
                setWinner(2);
              } else if (score.score3 > (score.score1 && score.score2)) {
                setWinner(3);
              }
            }
            if (n === "2") {
              if (score.score1 > score.score2) {
                setWinner(1);
              } else {
                setWinner(2);
              }
            }
            if (n === "4") {
              if (score.score1 > (score.score2 && score.score3)) {
                setWinner(1);
              } else if (score.score2 > (score.score1 && score.score2)) {
                setWinner(2);
              } else if (score.score3 > (score.score1 && score.score2)) {
                setWinner(3);
              } else {
                setWinner(4);
              }
            }
          }
        }*/
      } else if (
        `${background["background" + id1]}` !==
        `${background["background" + id2]}`
      ) {
        console.log(id1, id2);
        setTimeout(() => {
          setBackground({
            ...background,
            ["background" + id1]: "none",
            ["background" + id2]: "none",
          });

          setBgcolor({
            ...bgcolor,
            ["color" + id1]: "rgb(6, 6, 35)",
            ["color" + id2]: "rgb(6, 6, 35)",
          });
          setValue({
            ...isdisabled,
            ["value" + id1]: "auto",
            ["value" + id2]: "auto",
          });
        }, 500);
      }
    } else {
      console.log(
        background["background" + id1],
        background["background" + id2]
      );
      console.log(click1, click2);
    }
  }, [background["background" + id2], background["background" + id1]]);

  function shuffle() {
    let shuffled = [];
    console.log(gridSize);
    if (gridSize === "4 X 4") {
      shuffled = [...elements2];
    } else {
      shuffled = [...elements];
    }

    for (let i = 0; i < shuffled.length; i++) {
      let random = Math.floor(Math.random() * 15);
      let t = shuffled[i];
      if (random !== i) {
        shuffled[i] = shuffled[random];
        shuffled[random] = t;
      }
    }
    if (gridSize === "4 X 4") {
      setElements2(shuffled);
      console.log(elements2);
    } else {
      setElements(shuffled);
      console.log(elements);
    }
    setBackground({
      background0: "none",
      background1: "none",
      background2: "none",
      background3: "none",
      background4: "none",
      background5: "none",
      background6: "none",
      background7: "none",
      background8: "none",
      background9: "none",
      background10: "none",
      background11: "none",
      background12: "none",
      background13: "none",
      background14: "none",
      background15: "none",
      background16: "none",
      background17: "none",
      background18: "none",
      background19: "none",
      background20: "none",
      background21: "none",
      background22: "none",
      background23: "none",
      background24: "none",
      background25: "none",
      background26: "none",
      background27: "none",
      background28: "none",
      background29: "none",
      background30: "none",
      background31: "none",
      background32: "none",
      background33: "none",
      background34: "none",
      background35: "none",
    });
    setCount(0);
    setValue({
      value0: "auto",
      value1: "auto",
      value2: "auto",
      value3: "auto",
      value4: "auto",
      value5: "auto",
      value6: "auto",
      value7: "auto",
      value8: "auto",
      value9: "auto",
      value10: "auto",
      value11: "auto",
      value12: "auto",
      value13: "auto",
      value14: "auto",
      value15: "auto",
      value16: "auto",
      value17: "auto",
      value18: "auto",
      value19: "auto",
      value20: "auto",
      value21: "auto",
      value22: "auto",
      value23: "auto",
      value24: "auto",
      value25: "auto",
      value26: "auto",
      value27: "auto",
      value28: "auto",
      value29: "auto",
      value30: "auto",
      value31: "auto",
      value32: "auto",
      value33: "auto",
      value34: "auto",
      value35: "auto",
    });
    setBgcolor({
      color0: "rgb(211, 209, 209)",
      color1: "rgb(211, 209, 209)",
      color2: "rgb(211, 209, 209)",
      color3: "rgb(211, 209, 209)",
      color4: "rgb(211, 209, 209)",
      color5: "rgb(211, 209, 209)",
      color6: "rgb(211, 209, 209)",
      color7: "rgb(211, 209, 209)",
      color8: "rgb(211, 209, 209)",
      color9: "rgb(211, 209, 209)",
      color10: "rgb(211, 209, 209)",
      color11: "rgb(211, 209, 209)",
      color12: "rgb(211, 209, 209)",
      color13: "rgb(211, 209, 209)",
      color14: "rgb(211, 209, 209)",
      color15: "rgb(211, 209, 209)",
      color16: "rgb(211, 209, 209)",
      color17: "rgb(211, 209, 209)",
      color18: "rgb(211, 209, 209)",
      color19: "rgb(211, 209, 209)",
      color20: "rgb(211, 209, 209)",
      color21: "rgb(211, 209, 209)",
      color22: "rgb(211, 209, 209)",
      color23: "rgb(211, 209, 209)",
      color24: "rgb(211, 209, 209)",
      color25: "rgb(211, 209, 209)",
      color26: "rgb(211, 209, 209)",
      color27: "rgb(211, 209, 209)",
      color28: "rgb(211, 209, 209)",
      color29: "rgb(211, 209, 209)",
      color30: "rgb(211, 209, 209)",
      color31: "rgb(211, 209, 209)",
      color32: "rgb(211, 209, 209)",
      color33: "rgb(211, 209, 209)",
      color34: "rgb(211, 209, 209)",
      color35: "rgb(211, 209, 209)",
    });
    setClick1(0);
    setClick2(0);
    setCount(0);
    setTurn({ turn1: false, turn2: false, turn3: false, turn4: false });
  }

  function flip(e) {
    let newCount = count;
    let press1 = click1;
    console.log(newCount);

    setCount(++newCount);

    if (newCount % 2 !== 0) {
      setId1(e.target.id);

      setClick1(newCount);
      console.log(click1, click2);

      setBgcolor({
        ...bgcolor,
        ["color" + e.target.id]: "orange",
      });
      if (gridSize === "6 X 6") {
        setBackground({
          ...background,
          ["background" + e.target.id]: `url(${elements[e.target.id]})`,
        });
      } else if (gridSize === "4 X 4") {
        setBackground({
          ...background,
          ["background" + e.target.id]: `url(${elements2[e.target.id]})`,
        });
      }

      audio.play();

      setImage1(`${background["background" + e.target.id]}`);
    } else if (newCount % 2 == 0) {
      setId2(e.target.id);
      setClick2(newCount);

      setBgcolor({
        ...bgcolor,
        ["color" + e.target.id]: "orange",
      });
      if (gridSize === "6 X 6") {
        setBackground({
          ...background,
          ["background" + e.target.id]: `url(${elements[e.target.id]})`,
        });
      } else if (gridSize === "4 X 4") {
        setBackground({
          ...background,
          ["background" + e.target.id]: `url(${elements2[e.target.id]})`,
        });
      }
      audio.play();

      setImage2(`${background["background" + e.target.id]}`);
    }

    if (n == 1) {
      setTurn({ ...turn, turn1: true });

      setscorebg({ ...scorebg, score1: false });
    }

    if (n == 2) {
      if (newCount % 4 == 1 || newCount % 4 == 2) {
        setTurn({ ...turn, turn1: true, turn2: false });

        setscorebg({ ...scorebg, score1: true, score2: false });
      } else if (`${count}` == 0) {
      } else {
        setTurn({ ...turn, turn1: false, turn2: true });

        setscorebg({ ...scorebg, score1: false, score2: true });
      }
    }
    if (n == 3) {
      if (newCount % 2 !== 0) press1 = newCount;
      else {
        press1 = newCount;
      }

      if (
        (newCount % 3 == 1 && press1 % 2 == 1) ||
        (newCount % 3 == 2 && press1 % 2 == 0)
      ) {
        setTurn({ turn1: true, turn2: false, turn3: false });

        setscorebg({ ...scorebg, score1: true, score2: false, score3: false });
      } else if (
        (newCount % 3 == 0 && press1 % 2 == 1) ||
        (newCount % 3 == 1 && press1 % 2 == 0)
      ) {
        setTurn({ turn1: false, turn2: true, turn3: false });

        setscorebg({ ...scorebg, score1: false, score2: true, score3: false });
      } else if (
        (newCount % 3 == 2 && press1 % 2 == 1) ||
        (newCount % 3 == 0 && press1 % 2 == 0)
      ) {
        setTurn({ turn1: false, turn2: false, turn3: true });

        setscorebg({ ...scorebg, score1: false, score2: false, score3: true });
      }
    }
    if (n == 4) {
      if (newCount % 2 !== 0) press1 = newCount;
      else {
        press1 = newCount;
      }

      if (
        (newCount % 8 == 1 && press1 % 2 == 1) ||
        (newCount % 8 == 2 && press1 % 2 == 0)
      ) {
        setTurn({ turn1: true, turn2: false, turn3: false, turn4: false });

        setscorebg({
          ...scorebg,
          score1: true,
          score2: false,
          score3: false,
          score4: false,
        });
      } else if (
        (newCount % 8 == 3 && press1 % 2 == 1) ||
        (newCount % 8 == 4 && press1 % 2 == 0)
      ) {
        setTurn({ turn1: false, turn2: true, turn3: false, turn4: false });

        setscorebg({
          ...scorebg,
          score1: false,
          score2: true,
          score3: false,
          score4: false,
        });
      } else if (
        (newCount % 8 == 5 && press1 % 2 == 1) ||
        (newCount % 8 == 6 && press1 % 2 == 0)
      ) {
        setTurn({ turn1: false, turn2: false, turn3: true, turn4: false });

        setscorebg({
          ...scorebg,
          score1: false,
          score2: false,
          score3: true,
          score4: false,
        });
      } else if (
        (newCount % 8 == 7 && press1 % 2 == 1) ||
        (newCount % 8 == 0 && press1 % 2 == 0)
      ) {
        setTurn({ turn1: false, turn2: false, turn3: false, turn4: true });

        setscorebg({
          ...scorebg,
          score1: false,
          score2: false,
          score3: false,
          score4: true,
        });
      }
    }

    setValue({
      ...isdisabled,
      ["value" + e.target.id]: "none",
    });
  }

  function restart() {
    //shuffle();
    setShowWinner(false);
    setWinner(null);
    setSuccessPair(0);
    setBackground({
      background0: "none",
      background1: "none",
      background2: "none",
      background3: "none",
      background4: "none",
      background5: "none",
      background6: "none",
      background7: "none",
      background8: "none",
      background9: "none",
      background10: "none",
      background11: "none",
      background12: "none",
      background13: "none",
      background14: "none",
      background15: "none",
      background16: "none",
      background17: "none",
      background18: "none",
      background19: "none",
      background20: "none",
      background21: "none",
      background22: "none",
      background23: "none",
      background24: "none",
      background25: "none",
      background26: "none",
      background27: "none",
      background28: "none",
      background29: "none",
      background30: "none",
      background31: "none",
      background32: "none",
      background33: "none",
      background34: "none",
      background35: "none",
    });
    setCount(0);
    setValue({
      value0: "auto",
      value1: "auto",
      value2: "auto",
      value3: "auto",
      value4: "auto",
      value5: "auto",
      value6: "auto",
      value7: "auto",
      value8: "auto",
      value9: "auto",
      value10: "auto",
      value11: "auto",
      value12: "auto",
      value13: "auto",
      value14: "auto",
      value15: "auto",
      value16: "auto",
      value17: "auto",
      value18: "auto",
      value19: "auto",
      value20: "auto",
      value21: "auto",
      value22: "auto",
      value23: "auto",
      value24: "auto",
      value25: "auto",
      value26: "auto",
      value27: "auto",
      value28: "auto",
      value29: "auto",
      value30: "auto",
      value31: "auto",
      value32: "auto",
      value33: "auto",
      value34: "auto",
      value35: "auto",
    });

    setBgcolor({
      color0: "rgb(211, 209, 209)",
      color1: "rgb(211, 209, 209)",
      color2: "rgb(211, 209, 209)",
      color3: "rgb(211, 209, 209)",
      color4: "rgb(211, 209, 209)",
      color5: "rgb(211, 209, 209)",
      color6: "rgb(211, 209, 209)",
      color7: "rgb(211, 209, 209)",
      color8: "rgb(211, 209, 209)",
      color9: "rgb(211, 209, 209)",
      color10: "rgb(211, 209, 209)",
      color11: "rgb(211, 209, 209)",
      color12: "rgb(211, 209, 209)",
      color13: "rgb(211, 209, 209)",
      color14: "rgb(211, 209, 209)",
      color15: "rgb(211, 209, 209)",
      color16: "rgb(211, 209, 209)",
      color17: "rgb(211, 209, 209)",
      color18: "rgb(211, 209, 209)",
      color19: "rgb(211, 209, 209)",
      color20: "rgb(211, 209, 209)",
      color21: "rgb(211, 209, 209)",
      color22: "rgb(211, 209, 209)",
      color23: "rgb(211, 209, 209)",
      color24: "rgb(211, 209, 209)",
      color25: "rgb(211, 209, 209)",
      color26: "rgb(211, 209, 209)",
      color27: "rgb(211, 209, 209)",
      color28: "rgb(211, 209, 209)",
      color29: "rgb(211, 209, 209)",
      color30: "rgb(211, 209, 209)",
      color31: "rgb(211, 209, 209)",
      color32: "rgb(211, 209, 209)",
      color33: "rgb(211, 209, 209)",
      color34: "rgb(211, 209, 209)",
      color35: "rgb(211, 209, 209)",
    });
    setscore({ score1: 0, score2: 0, score3: 0, score4: 0 });
    setClick1(0);
    setClick2(0);
    setTurn({ turn1: false, turn2: false, turn3: false, turn4: false });
  }

  return (
    <div style={{ position: "relative" }}>
      <div className="navContainer">
        <p>memory</p>
        <div className="linkContainer">
          <button onClick={restart}>Restart</button>
          <button onClick={() => navigate("/")}>New Game</button>
        </div>
      </div>
      <div className="container">
        {gridSize === "4 X 4" ? (
          <div className="gameContainer">
            <div style={{ backgroundColor: `${bgcolor.color0}` }}>
              <div
                id="0"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background0}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value0}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color1}` }}>
              <div
                id="1"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background1}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value1}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color2}` }}>
              <div
                id="2"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background2}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value2}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color3}` }}>
              <div
                id="3"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background3}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value3}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color4}` }}>
              <div
                id="4"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background4}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value4}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color5}` }}>
              <div
                id="5"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background5}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value5}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color6}` }}>
              <div
                id="6"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background6}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value6}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color7}` }}>
              <div
                id="7"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background7}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value7}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color8}` }}>
              <div
                id="8"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background8}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value8}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color9}` }}>
              <div
                id="9"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background9}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value9}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color10}` }}>
              <div
                id="10"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background10}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value10}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color11}` }}>
              <div
                id="11"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background11}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value11}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color12}` }}>
              <div
                id="12"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background12}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value12}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color13}` }}>
              <div
                id="13"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background13}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",

                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value13}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color14}` }}>
              <div
                id="14"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background14}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value14}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color15}` }}>
              <div
                id="15"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background15}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value15}`,
                }}
              ></div>
            </div>
          </div>
        ) : (
          <div className="gameContainer2">
            <div style={{ backgroundColor: `${bgcolor.color0}` }}>
              <div
                id="0"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background0}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value0}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color1}` }}>
              <div
                id="1"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background1}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value1}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color2}` }}>
              <div
                id="2"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background2}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value2}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color3}` }}>
              <div
                id="3"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background3}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value3}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color4}` }}>
              <div
                id="4"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background4}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value4}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color5}` }}>
              <div
                id="5"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background5}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value5}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color6}` }}>
              <div
                id="6"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background6}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value6}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color7}` }}>
              <div
                id="7"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background7}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value7}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color8}` }}>
              <div
                id="8"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background8}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value8}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color9}` }}>
              <div
                id="9"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background9}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value9}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color10}` }}>
              <div
                id="10"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background10}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value10}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color11}` }}>
              <div
                id="11"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background11}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value11}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color12}` }}>
              <div
                id="12"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background12}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value12}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color13}` }}>
              <div
                id="13"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background13}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",

                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value13}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color14}` }}>
              <div
                id="14"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background14}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value14}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color15}` }}>
              <div
                id="15"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background15}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value15}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color16}` }}>
              <div
                id="16"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background16}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value16}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color17}` }}>
              <div
                id="17"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background17}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value17}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color18}` }}>
              <div
                id="18"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background18}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value18}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color19}` }}>
              <div
                id="19"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background19}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value19}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color20}` }}>
              <div
                id="20"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background20}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value20}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color21}` }}>
              <div
                id="21"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background21}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value21}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color22}` }}>
              <div
                id="22"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background22}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value22}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color23}` }}>
              <div
                id="23"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background23}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value23}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color24}` }}>
              <div
                id="24"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background24}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value24}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color25}` }}>
              <div
                id="25"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background25}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value25}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color26}` }}>
              <div
                id="26"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background26}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value26}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color27}` }}>
              <div
                id="27"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background27}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value27}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color28}` }}>
              <div
                id="28"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background28}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value28}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color29}` }}>
              <div
                id="29"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background29}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value29}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color30}` }}>
              <div
                id="30"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background30}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value30}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color31}` }}>
              <div
                id="31"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background31}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value31}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color32}` }}>
              <div
                id="32"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background32}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value32}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color33}` }}>
              <div
                id="33"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background33}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value33}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color34}` }}>
              <div
                id="34"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background34}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value34}`,
                }}
              ></div>
            </div>
            <div style={{ backgroundColor: `${bgcolor.color35}` }}>
              <div
                id="35"
                onClick={flip}
                style={{
                  backgroundImage: `${background.background35}`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundColor: `transparent`,
                  pointerEvents: `${isdisabled.value35}`,
                }}
              ></div>
            </div>
          </div>
        )}

        <audio id="audio" src={Click}></audio>
        <p
          className="points"
          style={{ visibility: visible ? "visible" : "hidden" }}
        >
          +10
        </p>
        <div className="score">{players}</div>
        <div className="turn">{turns}</div>
      </div>
      <p
        className="Gameresult"
        style={{
          visibility: showWinner ? "Visible" : "Hidden",
          backgroundColor: "Orange",
          opacity: "0.9",
          color: "white",
          textAlign: "center",
          padding: "1em",
        }}
      >
        {winner}
      </p>
    </div>
  );
}
