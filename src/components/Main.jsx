import React from "react";
import Card  from "./Card";
import "./Main.css"

function Main ({quotes}) {

    const renderedCards = quotes.map((quote) => <Card key={quote.id} quotes={quotes}/>)

    return (
            <div className="container">{renderedCards}</div>
    );
}

export default Main;