import React from "react";
import "./Header7.css";

function Header7(props) {
  const { untitledDesign81, text2, labelI551367, labelI551646, labelI551365, labelI551357, vector } = props;

  return (
    <div className="header-7">
      <img className="untitled-design-8-12" src={untitledDesign81} />
      <div className="text-2 manrope-bold-black-20px">{text2}</div>
      <div className="overlap-group4">
        <div className="right-nav"></div>
        <div className="nav-items">
          <div className="label-i551367 manrope-bold-eerie-black-14px">{labelI551367}</div>
          <div className="label-i551646 manrope-bold-eerie-black-14px">{labelI551646}</div>
          <div className="label-i551365 manrope-bold-eerie-black-14px">{labelI551365}</div>
          <div className="header-menu-dropdown">
            <div className="label-i551357 manrope-bold-eerie-black-14px">{labelI551357}</div>
            <div className="essential-icons-chevron-down">
              <img className="vector" src={vector} />
            </div>
          </div>
          <div className="menu-item-default"></div>
        </div>
      </div>
    </div>
  );
}

export default Header7;
