import React, { useState } from "react";
//css
import "../css/Signup.css";
//component
import Form from "../components/Form";
import FormText from "../components/FormText";
import Input from "../components/Input";
import { signup } from "../helper/helper";
import SmallText from "../components/SmallText";
import TopBar from "../components/TopBar";

const Signup = () => {
  const maxHeight = "464px";
  const minWidth = "238px";
  const [userSignup, setUserSignup] = useState({
    email: "",
    userRole: 0,
    password: "",
    confirmPassword: "",
    name: "",
    skills: "",
    error: "",
    empty: false,
  });

  const { email, userRole, password, confirmPassword, name, skills } =
    userSignup;

  const hangleChange = (value) => (e) => {
    setUserSignup({ ...userSignup, [value]: e.target.value });
  };

  const validateEmail = (email) => {
    var regEx = new RegExp("[a-z]+@gmail.com");
    return regEx.test(email);
  };

  const onSubmit = (e) => {
    if (userSignup.password !== userSignup.confirmPassword) {
      setUserSignup({ ...userSignup, error: "Error" });
    }
    e.preventDefault();
    if (email || password || confirmPassword || name || skills) {
      signup({ email, userRole, password, confirmPassword, name, skills })
        .then((data) => {
          if (!data) {
            setUserSignup({ ...userSignup, error: "Error" });
          }
        })
        .catch((err) => console.log("Something went wrong!!"));
    }
    setUserSignup({ ...userSignup, empty: true });
  };

  return (
    <>
      <TopBar isLogin={true} maxHeight={{ maxHeight }}>
        <Form
          title="Signup"
          link="Login"
          question="Have an account?"
          title_btn="Signup"
          link_address="/login"
          onClick={onSubmit}
        >
          <FormText text="I'm a*" />
          <button
            style={{
              minWidth: "136px",
              minHeight: "46px",
              backgroundColor: "#43AFFF",
              border: "none",
              color: "white",
              borderRadius: "5px",
            }}
          >
            Recruiters
          </button>
          <button
            style={{
              minWidth: "136px",
              minHeight: "46px",
              backgroundColor: "white",
              border: "1px solid #C6C6C6",
              color: "#303F60",
              borderRadius: "5px",
              marginLeft: "20px",
            }}
          >
            Candidate
          </button>

          <FormText text="Full Name*" />
          <Input
            type="text"
            placeholder="Enter your full name"
            onChange={hangleChange("name")}
            border={userSignup.empty ? "1px solid red" : ""}
          />
          {userSignup.empty ? <SmallText small="The field is mandatory" /> : ""}
          <FormText text="Email Address*" />
          <Input
            type="email"
            placeholder="Enter your email"
            onChange={hangleChange("email")}
            border={
              userSignup.empty || validateEmail(email) ? "1px solid red" : ""
            }
          />
          {userSignup.empty ? (
            <SmallText small="The field is mandatory" />
          ) : validateEmail(email) ? (
            <SmallText small="Invalid email address" />
          ) : (
            ""
          )}
          <div className="signup__password">
            <div className="create_password">
              <FormText text="Create Password*" />
              <Input
                minWidth={minWidth}
                type="password"
                placeholder="Enter your password"
                onChange={hangleChange("password")}
                border={userSignup.empty ? "1px solid red" : ""}
              />
            </div>
            <div style={{ marginLeft: "21px" }} className="confirm_password">
              <FormText text="Confirm Password*" />
              <Input
                type="password"
                minWidth={minWidth}
                placeholder="Enter your password"
                onChange={hangleChange("confirmPassword")}
                border={userSignup.empty ? "1px solid red" : ""}
              />
            </div>
          </div>
          {userSignup.empty ? <SmallText small="The field is mandatory" /> : ""}
          <FormText text="Skills" />
          <Input
            type="text"
            placeholder="Enter comma seperated skills"
            onChange={hangleChange("skills")}
          />
        </Form>
      </TopBar>
    </>
  );
};

export default Signup;
