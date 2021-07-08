import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onSubmit, reset }) => {
  return (
    <div>
      <p className="f3 center">
        {"This magic Brain will detect faces in pictures. Give it a try"}
      </p>
      <div className="center">
        <div className="center form pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link pv2 dib white bg-light-purple "
            onClick={onSubmit}
          >
            Detect
          </button>
          {/* <button
            className="w-30 grow f4 link pv2 dib white bg-light-blue "
            onClick={reset}
          >
            Reset
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;