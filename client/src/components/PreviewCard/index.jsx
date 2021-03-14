import React from "react";
import "./PreviewCard.css";

function PreviewCard(props) {
  const { line1, namedentityextraction1 } = props;

  return (
    <div className="preview-card">
      <div className="content">
        <div className="feedback-person-details"></div>
      </div>
      <img className="line-1" src={line1} />
      <img className="namedentityextraction-1" src={namedentityextraction1} />
    </div>
  );
}

export default PreviewCard;
