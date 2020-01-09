import React from "react";
import Heart from "../image/Heart.png";
import Force from "../image/motivation.png";

const MonsterStats = props => {
  return (
    <div className="right">
      <div className="user">
        <h2>{props.monster.name}</h2>
        {props.monster.pv}
        <div className="HpHero">
          <img alt="heart" src={Heart} height="25px" width="25px" />
        </div>
        {props.monster.force}
        <div className="HpHero">
          <img alt="str" src={Force} height="25px" width="25px" />
        </div>
      </div>
    </div>
  );
};

export default MonsterStats;
