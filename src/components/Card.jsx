import React from "react";
import "./Card.css"


function card ({quotes}) {
    return (
        <div className="card">
            <p>{quotes.quote}</p>
            <p>{quotes.work}</p>
            <p>{quotes.author}</p>
            <p>{quotes.category}</p>
            <br/>
            <button className="card-btn">Remove</button>
        </div>
    )
}

export default card