import React from "react";
import "./Card.css"


function card ({renderedCards}) {
    
    return (
        <div className="card-container">
            <ul className="cards">{renderedCards}</ul>
            <br/>
            <button className="card-btn">Remove</button>
        </div>
    )
}

export default card