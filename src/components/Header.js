import React from "react";
//css
import "../css/Header.css";
//components
import GhostButton from "./GhostButton";
import User from "./User";

const Header = (props) => {
  return (
    <>
      <div className="header">
        <div className="header__logo">
          <h3>
            My<span className="logo__jobs">Jobs</span>
          </h3>
        </div>
        {!props.user ? (
          !props.isLogin ? (
            <div className="header__login_btn">
              <GhostButton link="/login" />
            </div>
          ) : (
            <div></div>
          )
        ) : (
          <div className="header__login_btn">
            <User postJob={props.postJob} />
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
