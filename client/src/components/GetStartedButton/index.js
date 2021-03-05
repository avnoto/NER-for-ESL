import React from "react";
import "./style.css";

function GetStartedButton(props) {
  const { labelI541147 } = props;

  return (
    <div className="adjustable-primary-large">
      <div className="label-i541147 manrope-bold-white-20px">
        {labelI541147}
      </div>
    </div>
  );
}

export default GetStartedButton;
