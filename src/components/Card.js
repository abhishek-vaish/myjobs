import React from "react";
import "../css/Card.css";

const Card = (props) => {
    return(
        <>
        <div className="card">
            <p className="heading">{props.heading}</p>
            <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        </>
    )
}

export default Card;