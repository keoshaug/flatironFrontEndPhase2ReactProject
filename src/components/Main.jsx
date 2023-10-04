import React from "react";
import Card  from "./Card";
import "./Main.css"

function Main ({quotes, onDeleteQuote}) {

    const renderedCards = quotes.map((quote) => <Card key={quote.id} quotes={quotes} onDeleteQuote={onDeleteQuote}/>)

    return (
            <div className="container">{renderedCards}</div>
    );
}

export default Main;