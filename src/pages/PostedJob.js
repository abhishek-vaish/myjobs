import React from "react";
import TopBar from "../components/TopBar";
import Home from "../images/icons8-home.svg";
import "../css/PostedJob.css";
import PrimaryButton from "../components/PrimaryButton";

const PostedJob = (props) => {
  console.log(props.match.params.token);
  const maxHeight = "270px";
  return (
    <>
      <TopBar isLogin={true} maxHeight={{ maxHeight }} user={true}>
        <div className="navigation__dashboard">
          <div className="navigation">
            <img src={Home} alt="home" />
            <p>Home</p>
          </div>
          <p className="title">Jobs posted by you</p>
        </div>
      </TopBar>
      <div
        style={{
          maxWidth: "max-content",
          margin: "0px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "187px",
          color: "#303F60",
          opacity: "0.8",
        }}
      >
        <p style={{ fontSize: "20px", marginBottom: "40px" }}>
          Your posted job will show here!
        </p>
        <form action="/createjob">
          <PrimaryButton title="Post a Job" type="submit" />
        </form>
      </div>
    </>
  );
};

export default PostedJob;
