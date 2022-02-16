import React from "react";
import "./Header.css";
import naturePhoto from "../../Assets/oc-gonzalez-xg8z_KhSorQ-unsplash.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"> React & Node</span>
        <span className="headerTitleLg"> Blog</span>
      </div>
      <img className="headerImg" src={naturePhoto} alt="personal phtono" />
    </div>
  );
};

export default Header;
