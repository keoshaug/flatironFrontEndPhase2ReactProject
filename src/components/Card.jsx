import React from "react";
import "./Card.css"

const card = () => {
    return (
        <div className="card-container">
            <h2>quote</h2>
            <h3>author</h3>
            <h3>work</h3>
            <h3>category</h3>
            <button className="card-btn">Remove</button>
        </div>
    )
}

export default card