import React from "react";
import "../App.css";

class Monster extends React.Component { 

  render() {
    return (
      <div className="boss">
          <img alt="monster" src={this.props.img} height="110px" width="95px" />
      </div>
    );
  }
}

export default Monster;

