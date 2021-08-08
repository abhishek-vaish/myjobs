import React from "react";
//css
import "../css/Input.css";

const Input = (props) => {
  const border = props.border ? props.border : "1px solid #C6C6C6";
  const minWidth = props.minWidth ? props.minWidth : "497px";
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="email__input"
        onChange={props.onChange}
        value={props.value}
        style={{ border: `${border}`, minWidth: `${minWidth}` }}
      />
    </>
  );
};

export default Input;
