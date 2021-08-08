import React from "react";
import "../css/HeroSection.css";
import PrimaryButton from "./PrimaryButton";
import TopBar from "./TopBar";
import Homepage from "../images/homepage.jpg";

const HeroSection = () => {
  const maxHeight = "464px";
  return (
    <>
      <TopBar isLogin={false} maxHeight={maxHeight}>
        <div className="heroSection">
          <div className="content">
            <div className="heading">
              <p className="heading__welcome">Welcome to</p>
              <h2 className="heading__welcome">
                My<span className="heading__jobs">Jobs</span>
              </h2>
            </div>
            <div className="action__btn">
              <PrimaryButton title="Get Started" />
            </div>
          </div>
          <img src={Homepage} alt="homepage_image" />
        </div>
      </TopBar>
    </>
  );
};

export default HeroSection;
