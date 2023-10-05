import React from "react";
import Card  from "./Card";
import "./Main.css"

function Main ({quotes, setQuotes}) {

    function handleDelete (id) {
        const filteredQuotes = quotes.filter(quote => quote.id !==id)
        setQuotes(filteredQuotes)
    }


    const renderedCards = quotes.map((quote) => <Card key={quote.id} data={quote} onDeleteQuote={handleDelete}/>)


    return (
            <div className="outer-container">
                <div className="card-container">{renderedCards}</div>
            </div>
    );
    }

export default Main;