import React from "react";
import "./style.css";

function HeroText(props) {
  const { text1 } = props;
  return (
    <h1 className="text-1 manrope-extra-bold-eerie-black-72px">{text1}</h1>
  );
}

export default HeroText;
