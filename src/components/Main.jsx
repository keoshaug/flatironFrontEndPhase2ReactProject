import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";
import App from "../App";
import Card  from "./Card";

const Main = () => {
    const [cards, setCards] = useState([])

    // useEffect(()=>{
    //     fetch('')
    //     .then(r=>r.json())
    //     .then(data)
    // }, [])


    return (
        <>
            <main>
                    <div className="card">
                        <Card cards={cards}/>
                    </div>
            </main>
        
        
        
        </>

    )
}


export default Main;