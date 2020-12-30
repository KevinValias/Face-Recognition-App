import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3"></p>
      {"This magic Brain will detect faces in your pictures. Give it a try"}
      <div className="center">
        <div className=" form center pa3 br3 shadow-5">
          <input
            className="f4 pa2 w-80 center"
            type="tex"
            onChange={onInputChange}
          />
          <button
            className="w-30grow f5 link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
