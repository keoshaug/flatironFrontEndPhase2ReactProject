import React from "react";
import "./Card.css"

const card = () => {
    return (
        <div className="card-container">
            <br />
            <h2>quote: Lorem Ipsum</h2>
            <h3>author</h3>
            <h3>work</h3>
            <h3>category</h3>
            <br/>
            <br/>
            <button className="card-btn">Remove</button>
        </div>
    )
}

export default card