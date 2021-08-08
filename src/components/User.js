import React from "react";
import "../css/User.css";
import Down from "../images/icons8-expand-arrow-24.png";

const User = (props) => {
  return (
    <>
      <div className="user">
        <div className="job_button">
          <a className="job_link" href="/createjob">
            Post a job
          </a>
          {props.postJob ? (
            <div
              style={{
                minHeight: "3px",
                maxWidth: "75px",
                backgroundColor: "#43AFFF",
                position: "relative",
                bottom: "-15px",
              }}
            ></div>
          ) : (
            ""
          )}
        </div>

        <div className="userprofile">R</div>
        <button className="dropdown">
          <img src={Down} alt="down-arrow" />
        </button>
      </div>
    </>
  );
};

export default User;
