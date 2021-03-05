import React from "react";
import "./style.css";

function FooterLinksRow1(props) {
  const { about, features, license, help, privacyPolicy } = props;

  return (
    <div className="links-row-2">
      <div className="about manrope-normal-white-16px">{about}</div>
      <div className="features manrope-normal-white-16px">{features}</div>
      <div className="license manrope-normal-white-16px">{license}</div>
      <div className="help manrope-normal-white-16px">{help}</div>
      <div className="privacy-policy manrope-normal-white-16px">
        {privacyPolicy}
      </div>
    </div>
  );
}

export default FooterLinksRow1;
