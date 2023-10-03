import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";
import App from "../App";
import Card  from "./Card";

const Main = () => {
    const [quotes, setQuotes] = useState([])


    useEffect(()=>{
        fetch('http://localhost:4000/data')
        .then(r=>r.json())
        .then(data => setQuotes(data))
    }, [])

    const renderedCards = quotes.map((quote)=> <Card />)
    console.log(renderedCards)

    return (
        <>
            <main>
                    <div className="card">
                        {renderedCards}
                    </div>
            </main>
        
        
        
        </>

    )
}


export default Main;