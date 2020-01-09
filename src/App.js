import React, { useState } from "react";
import "./App.css";
import PlayerStats from "./components/PlayerStats";
import Fight from "./components/Fight";
import MonsterStats from "./components/MonsterStats";
import Monster1 from "./image/monster1.png";
import Monster2 from "./image/monster2.png";
import Monster3 from "./image/monster3.jpg";

const monsterDefault = [
  {
    name: 'raoul',
    pv: 20,
    force: 1,
    img: Monster1
  },
  {
    name: 'pablo',
    pv: 50,
    force: 5,
    img: Monster2
  },
  {
    name:"Elbouzakhti",
    pv: 80,
    force: 7,
    img: Monster3
  }
];

const playerDefault = {
  pv: 100,
  force: 10
};

let indexMonsters = 0;

const App = () => {
  const [monster, setMonster] = useState(monsterDefault[indexMonsters]);
  const [player, setPlayer] = useState(playerDefault);

  function atk() {
    setMonster({
      ...monster,
      pv: monster.pv - player.force
    });

    if (monster.pv <= 0) {
      indexMonsters++;
      console.log('m',monsterDefault[indexMonsters]);
      if (monsterDefault[indexMonsters] !== undefined) {
        setMonster(monsterDefault[indexMonsters]);
      } else {
        // fin du combat...
      }
    }

    setPlayer({
      ...player,
      pv: player.pv - monster.force
    });

    console.log("attaque", monster.pv);
  }

  return (
    <div className="App">
      <div className="container">
        <PlayerStats player={player} />
        <Fight atk={atk} monster={monster} />
        <MonsterStats monster={monster} />
      </div>
    </div>
  );
};

export default App;
