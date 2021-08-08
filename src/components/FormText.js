import React from "react";
import "../css/FormText.css";

const FormText = (props) => {
    return(
        <>
            <p className="email">{props.text}</p>
        </>
    )
}

export default FormText;