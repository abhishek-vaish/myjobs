import React from "react";
import TopBar from "../components/TopBar";
import Home from "../images/icons8-home.svg";
import "../css/PostedJob.css";
import JobCard from "../components/JobCard";

const UserPostedJob = (props) => {
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
          <p className="title">Jobs posted</p>
          <JobCard />
        </div>
      </TopBar>
    </>
  );
};

export default UserPostedJob;
