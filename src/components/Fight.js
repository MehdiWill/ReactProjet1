import React from "react";
import Ruby from "../image/ruby.png";
import FightImg from "../image/fight.png";
import Monster from "../components/Monster";

export default class Fight extends React.Component {

  attaque() { 
      this.props.atk()
  }

  render() {
      console.log("toto", this.props)
    return (
      <div className="center">
        <div className="money">
          rubis: <span id="cookies">0 </span>
          <img alt="ruby" src={Ruby} height="25px" width="25px" />
        </div>
        <div className="background">
          <Monster 
            pv={this.props.monster.pv} 
            img={this.props.monster.img} />
        </div>
        <div className="fight" onClick={() => this.attaque()}>
            <img alt="fight" src={FightImg} height="55px" width="165px" />
        </div>
      </div>
    );
  }
}