import React from "react";
import "./style.css";

function FooterLinksRow2(props) {
  const { copyright } = props;

  return (
    <div className="frame">
      <p className="copyright manrope-normal-alto-14px">{copyright}</p>
    </div>
  );
}

export default FooterLinksRow2;
