import React from "react";
//css
import "../css/TopBar.css";
//components
import Header from "./Header";

const TopBar = ({ isLogin, children, maxHeight, user, postJob }) => {
  const height = maxHeight ? maxHeight : "464px";
  return (
    <>
      <div className="topBar" style={{ maxHeight: `${height.maxHeight}` }}>
        <Header isLogin={isLogin} user={user} postJob={postJob} />
        {children}
      </div>
    </>
  );
};

export default TopBar;
