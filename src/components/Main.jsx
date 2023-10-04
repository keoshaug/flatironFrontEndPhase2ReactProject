import React from "react";
import Card  from "./Card";
import "./Main.css"

function Main ({quotes}) {


    const renderedCards = quotes.map((quote) => <Card key={quote.id} data={quote}/>)

    

    return (
            <div>
            <div className="card-container">{renderedCards}</div>
            </div>
    );
    }

export default Main;