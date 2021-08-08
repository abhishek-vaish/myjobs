import React from "react";
//css
import "../css/Homepage.css";
//components
import Card from "../components/Card";

const Homepage = () => {
  return (
    <>
      <div className="why__us">
        <p className="head">Why Us</p>
        <div className="card__row">
          <Card heading="Get More Visibility" />
          <Card heading="Organize Your Candidates" />
          <Card heading="Verify Their Abilities" />
        </div>
      </div>
    </>
  );
};

export default Homepage;
