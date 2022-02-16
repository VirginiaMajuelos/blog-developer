import React from "react";
import "./Settings.css";
import Sidebar from "../../Sidebar/Sidebar";
import picSett from "../../../Assets/panuson-norkaew-3ot8O0t5beE-unsplash.jpg";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={picSett} alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
            ></input>
          </div>
          <label>UserName</label>
          <input type="text" placeholder="Anthony"></input>
          <label>Email</label>
          <input type="email" placeholder="anthony1993@gmail.com"></input>
          <label>Password</label>
          <input type="text"></input>
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
