import React from "react";
import "./Card.css"

function Card({quotes, onDeleteQuote}) {

    const {id, quote, work, author, category} = quotes


    function handleDelete () {
        fetch(`http://localhost:4000/data${id}`, {
          method: "DELETE"
        })
        .then(onDeleteQuote(id))
      }
    

    return (
        <div className="card">
            <p>{quote}</p>
            <p>{work}</p>
            <p>{author}</p>
            <p>{category}</p>
            <br/>
            <button className="card-btn" onClick={handleDelete}>Remove</button>
        </div>
    )
}

export default Card