import React from "react";
import Card  from "./Card";
import "./Main.css"

function Main ({quotes}) {

    const renderedCards = quotes.map((quote) => <Card key={quote.id} quotes={quotes} />)

    return (
        <>
            <main>
                    <div className="card-container">{renderedCards}</div>
            </main>
        </>
    )
}


export default Main;