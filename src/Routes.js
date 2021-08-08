import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import UserPostedJob from "./pages/UserPostedJob";
import PostedJob from "./pages/PostedJob";
import Signup from "./pages/Signup";
import JobPost from "./pages/PostJob";
import ResetPassword from "./pages/ResetPassword";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgotyourpassword" component={ForgotPassword} />
        <Route path="/userpostJob" component={UserPostedJob} />
        <Route path="/postJob" component={PostedJob} />
        <Route path="/createjob" component={JobPost} />
        <Route path="/resetpassword" component={ResetPassword} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
