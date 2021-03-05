import React from "react";
import "./style.css";

function HeroSubText(props) {
  const { spanText, spanText2, spanText3 } = props;

  return (
    <h1 className="text-1 manrope-extra-bold-white-28px">
      <span className="span">{spanText}</span>
      <span className="span1">{spanText2}</span>
      <span className="span">{spanText3}</span>
    </h1>
  );
}

export default HeroSubText;
