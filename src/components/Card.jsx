import React from "react";
import "./Card.css"

function Card({quotes}) {

    const {quote, work, author, category} = quotes
    

    return (
        <div className="card">
            <p>{quote}</p>
            <p>{work}</p>
            <p>{author}</p>
            <p>{category}</p>
            <br/>
            <button className="card-btn">Remove</button>
        </div>
    )
}

export default Card