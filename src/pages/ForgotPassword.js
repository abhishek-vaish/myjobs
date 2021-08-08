import React, { useState } from "react";
import { Redirect } from "react-router";
import Form from "../components/Form";
import FormText from "../components/FormText";
import Input from "../components/Input";
import SmallText from "../components/SmallText";
import TopBar from "../components/TopBar";
import { getResetToken, verfiyToken } from "../helper/helper";

const ForgotPassword = () => {
  const maxHeight = "364px";
  const [email, setEmail] = useState({
    email: "",
    error: "",
  });
  const [token, setToken] = useState("");

  const hangleChange = (value) => (e) => {
    setEmail({ ...email, [value]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setEmail({ ...email, error: "" });
    getResetToken(email).then((res) => {
      if (res.success) {
        setToken(res.data.token);
        verfiyToken(token).then((res) => {
          if (res.success) {
            <Redirect to="/resetpassword" />;
          } else {
            setEmail({ ...email, error: "Something went wrong!!" });
          }
        });
      }
      setEmail({ ...email, error: "Something went wrong!!" });
    });
  };

  return (
    <>
      <TopBar isLogin={false} maxHeight={{ maxHeight }}>
        <Form
          title="Forgot your password?"
          description="Enter the email associated with your account and we'll send you instructions to reset your password."
          title_btn="Submit"
          onClick={onSubmit}
        >
          <FormText text="Email address" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email.email}
            onChange={hangleChange("email")}
            border={email.error ? "1px solid red" : ""}
          />
          {email.error ? <SmallText small="Invalid email address" /> : ""}
        </Form>
      </TopBar>
    </>
  );
};

export default ForgotPassword;
