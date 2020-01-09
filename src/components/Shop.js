import React from "react";
import Ruby from "../image/ruby.png";
import Sword from "../image/mastersword.jpg";
import WoodShield from "../image/WoodShield.png";
import PotionHp from "../image/potionHP.png";

export default class Shop extends React.Component {
  render() {
    return (
      <div className="right">
        <h2>Echoppe :</h2>
        <div className="shop">

          <div className="column1">
            <img alt="sword" src={Sword} height="55px" width="45px" />
            <div className="price">
              150 <img alt="ruby" src={Ruby} height="15px" width="15px" />
            </div>
            <img alt="shield" src={WoodShield} height="55px" width="55px" />
            <div className="price">
              50 <img alt="ruby" src={Ruby} height="15px" width="15px" />
            </div>
          </div>

          <div className="column2">
            <img alt="potion" src={PotionHp} height="55px" width="35px" />
            <div className="price">
              25 <img alt="ruby" src={Ruby} height="15px" width="15px" />
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}
