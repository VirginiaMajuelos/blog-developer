import React from "react";
import "./Sidebar.css";
import aboutme from "../../Assets/aboutme.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img src={aboutme} alt="aboutme" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sideBarTitle">FOLLOW US</span>
      </div>
      <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-linkedin"></i>
        <i className="sidebarIcon fa-brands fa-github-square"></i>
        <i className="sidebarIcon fa-brands fa-instagram-square"></i>
      </div>
    </div>
  );
};

export default Sidebar;
