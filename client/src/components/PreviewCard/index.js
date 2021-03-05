import React from "react";
import "./style.css";

function PreviewCard(props) {
  const { line1, namedentityextraction1 } = props;

  return (
    <div className="preview-card">
      <div className="content">
        <div className="feedback-person-details"></div>
      </div>
      <img className="line-1" alt="line shape" src={line1} />
      <img
        className="namedentityextraction-1"
        alt="example display"
        src={namedentityextraction1}
      />
    </div>
  );
}

export default PreviewCard;
