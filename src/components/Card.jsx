import React from "react";
import "./Card.css"

const card = () => {
    return (
        <div className="card-container">
            <br />
            <h2 className="card-quote">quote: Lorem Ipsum</h2>
            <h3 className="card-author">author</h3>
            <h3 className="card-work">work</h3>
            <h3 className="card-category">category</h3>
            <br/>
            <br/>
            <button className="card-btn">Remove</button>
        </div>
    )
}

export default card