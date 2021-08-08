import React from "react";
import Form from "../components/Form";
import FormText from "../components/FormText";
import Input from "../components/Input";

const ResetPassword = () => {
  return (
    <>
      <Form
        title="Reset Your Password"
        description="Enter your new password below."
        title_btn="Reset"
        isLogin={false}
      >
        <FormText text="New password" />
        <Input type="password" placeholder="Enter your password" />
        <FormText text="Confirm new password" />
        <Input type="password" placeholder="Enter your password" />
      </Form>
    </>
  );
};

export default ResetPassword;
