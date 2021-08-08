import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
//css
import "../css/Login.css";
//component
import Input from "../components/Input";
import FormText from "../components/FormText";
import Form from "../components/Form";
import { signin } from "../helper/helper";
import SmallText from "../components/SmallText";
import TopBar from "../components/TopBar";

const Login = () => {
  const maxHeight = "464px";
  const [token, setToken] = useState("");
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
    error: "",
    userRole: 0,
    didRedirect: false,
  });

  const { email, password } = userLogin;

  const hangleChange = (value) => (e) => {
    setUserLogin({ ...userLogin, [value]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setUserLogin({ ...userLogin, error: "", didRedirect: false });
    signin({ email, password })
      .then((data) => {
        if (!data) {
          setUserLogin({ ...userLogin, error: "Something went wrong!!" });
        } else if (data.code !== 200) {
          setUserLogin({
            ...userLogin,
            error: "Something went wrong!!",
            didRedirect: false,
          });
        } else {
          if (data.data.userRole === 1) {
            setUserLogin({
              ...userLogin,
              error: "",
              userRole: 1,
              didRedirect: true,
            });
            console.log(data);
            setToken(data.data.token);
          }
          setUserLogin({ ...userLogin, error: "", didRedirect: true });
          setToken(data.data.token);
        }
      })
      .catch((err) => {
        console.log("Something went wrong!!");
      });
  };
  return (
    <>
      {userLogin.didRedirect && userLogin.userRole === 1 ? (
        <Redirect to={`/postJob`} />
      ) : userLogin.didRedirect ? (
        <Redirect to="/userpostjob" />
      ) : (
        <TopBar isLogin={true} maxHeight={{ maxHeight }}>
          <Form
            title="Login"
            question="New to MyJobs?"
            link="Create an account"
            link_address="/signup"
            title_btn="Login"
            isLogin={true}
            maxHeight="464px"
            onClick={onSubmit}
          >
            <FormText text="Email address" />
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={hangleChange("email")}
              border={userLogin.error ? "1px solid red" : ""}
            />

            <div className="password">
              <FormText text="Password" />
              <a href="/forgotyourpassword">
                <FormText text="Forgot your password?" />
              </a>
            </div>
            <Input
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={hangleChange("password")}
              border={userLogin.error ? "1px solid red" : ""}
            />
            {userLogin.error ? (
              <SmallText small="Incorrect email address or password" />
            ) : (
              <></>
            )}
          </Form>
        </TopBar>
      )}
    </>
  );
};

export default Login;
