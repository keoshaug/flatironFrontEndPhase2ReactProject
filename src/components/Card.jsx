import React from "react";
import "./Card.css"
import data from "/home/kevinshau/flatironFrontEndPhase2ReactProject/db.json"

function card ({cards}) {
    
    return (
        <div className="card-container">
            <ul className="cards">{cards}</ul>
            <br/>
            <button className="card-btn">Remove</button>
        </div>
    )
}

export default card