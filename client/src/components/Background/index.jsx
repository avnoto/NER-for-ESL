import React from "react";
import Group1 from "../Group1";
import "./Background.css";

function Background(props) {
  const { purpleCircle, turquoiseCircle, bg, group1Props } = props;

  return (
    <div className="background">
      <div className="overlap-group1">
        <img className="purple-circle" src={purpleCircle} />
        <img className="turquoise-circle" src={turquoiseCircle} />
        <img className="bg" src={bg} />
        <Group1
          leftBand2={group1Props.leftBand2}
          leftBand1={group1Props.leftBand1}
          rightBand1={group1Props.rightBand1}
          rightBand2={group1Props.rightBand2}
          rightBand3={group1Props.rightBand3}
        />
      </div>
    </div>
  );
}

export default Background;
