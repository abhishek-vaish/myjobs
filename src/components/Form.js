import React from "react";
//css
import "../css/Form.css";
//component
import PrimaryButton from "./PrimaryButton";

const Form = ({
  title,
  children,
  question,
  link,
  link_address,
  title_btn,
  description,
  onClick,
}) => {
  return (
    <>
      <div className="login__form">
        <form className="login">
          <p className="title">{title}</p>
          <p className="description">{description}</p>
          {children}
          <div className="form__submit">
            <PrimaryButton type="submit" title={title_btn} onClick={onClick} />
            <div className="new__account">
              <p>{question}</p>
              <a href={link_address}>{link}</a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
