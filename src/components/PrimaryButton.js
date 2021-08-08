import React from "react";
//css
import "../css/PrimaryButton.css";

const PrimaryButton = (props) => {
  return (
    <>
      <div className="primary_button">
        <button
          className="primarybtn"
          type={props.type}
          onClick={props.onClick}
        >
          {props.title}
        </button>
      </div>
    </>
  );
};

export default PrimaryButton;
