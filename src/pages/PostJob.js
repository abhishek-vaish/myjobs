import React from "react";
import Form from "../components/Form";
import FormText from "../components/FormText";
import Input from "../components/Input";
import TopBar from "../components/TopBar";
import "../css/PostedJob.css";
import Home from "../images/icons8-home.svg";

const JobPost = () => {
  const maxHeight = "362px";
  return (
    <>
      <TopBar
        user={true}
        isLogin={false}
        maxHeight={{ maxHeight }}
        postJob={true}
      >
        <div className="navigation__dashboard">
          <div className="navigation">
            <img src={Home} alt="home" />
            <p>Home</p>
            &gt;
            <p>Post a job</p>
          </div>
        </div>
        <Form title="Post a Job" title_btn="Post">
          <FormText text="Job Title*" />
          <Input type="text" placeholder="Enter job title" />
          <FormText text="Description*" />
          <textarea
            style={{
              minWidth: "487px",
              minHeight: "110px",
              border: "1px solid #C6C6C6",
              borderRadius: "5px",
              padding: "15px",
              fontFamily: "Helvetica Neue, sans-serif",
              fontSize: "14px",
              resize: "none",
            }}
            placeholder="Enter job description"
          />
          <FormText text="Location*" />
          <Input type="text" placeholder="Enter location" />
        </Form>
      </TopBar>
    </>
  );
};

export default JobPost;
