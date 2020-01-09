import React from "react";
// import logo from "./logo.svg";
import Heart from "../image/Heart.png";
import Force from "../image/motivation.png";

const Stats = (props) => {
  
    return (
      <div className="left">
        <div className="user">
          <h2>Joueur</h2>
          {props.player.pv}
          <div className="HpHero">
            <img alt="heart" src={Heart} height="25px" width="25px" />
          </div>
          {props.player.force}
          <div className="HpHero">
            <img alt="str" src={Force} height="25px" width="25px" />
          </div>
        </div>
      </div>
    );
  
}

export default Stats