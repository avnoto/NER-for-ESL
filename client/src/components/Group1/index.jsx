import React from "react";
import "./Group1.css";

function Group1(props) {
  const { leftBand2, leftBand1, rightBand1, rightBand2, rightBand3 } = props;

  return (
    <div className="group-1">
      <div className="overlap-group2">
        <img className="left-band-2" src={leftBand2} />
        <img className="left-band-1" src={leftBand1} />
      </div>
      <div className="overlap-group3">
        <img className="right-band-1" src={rightBand1} />
        <img className="right-band-2" src={rightBand2} />
        <img className="right-band-3" src={rightBand3} />
      </div>
    </div>
  );
}

export default Group1;
