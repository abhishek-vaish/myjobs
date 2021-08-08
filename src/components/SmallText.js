import React from "react";

const SmallText = (props) => {
  return (
    <>
      <small
        style={{
          color: "red",
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "-12px",
        }}
      >
        {props.small}
      </small>
    </>
  );
};

export default SmallText;
