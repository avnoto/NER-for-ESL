import React from "react";
import "./Frame.css";

function Frame(props) {
  const { copyright } = props;

  return (
    <div className="frame">
      <p className="copyright manrope-normal-alto-14px">{copyright}</p>
    </div>
  );
}

export default Frame;
