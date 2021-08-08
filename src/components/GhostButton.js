import React from "react";
import "../css/GhostButton.css";

const GhostButton = (props) => {
    return(
        <>
            <a className="ghost_button" href={props.link}>
                <button className="login__button">Login/Signup</button>
            </a>
        </>
    )
}

export default GhostButton;