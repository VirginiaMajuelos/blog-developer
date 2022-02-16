import React from "react";
import "./Write.css";
import imageZen from "../../../Assets/panuson-norkaew-3ot8O0t5beE-unsplash.jpg";

const Write = () => {
  return (
    <div className="write">
      <img className="writeImg" src={imageZen} alt="imagezen" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
