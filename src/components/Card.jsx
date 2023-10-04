import React from "react";
import "./Card.css"

function Card({data}) {

    const {id, quote, work, author, category} = data


    function handleDelete () {
        fetch(`http://localhost:4000/data${id}`, {
          method: "DELETE"
        })
        .then(onDeleteQuote(id))
      }
    

    return (
        
        <div className="card">
            <p>{quote}</p>
            <br/>
            <p>{work}</p>
            <br/>
            <p>{author}</p>
            <br/>
            <p>{category}</p>
            <br/>
            <button className="card-btn" onClick={handleDelete}>Remove</button>
        </div>
    )
}

export default Card