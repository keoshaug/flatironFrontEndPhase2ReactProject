import React from "react";
import { ReactDOM } from "react";
import App from "../App";
import Card  from "./Card";

const Main = () => {
    return (
        <>
            <main>
                <h1></h1>
                    <div className="card">
                        <Card/>
                    </div>
                {/* fetch() */}
                {/* .then(res => res.json())
                .then(data =>{}) */}
                <nav>
                    <ul>

                    </ul>
                </nav>
            </main>
        
        
        
        </>

    )
}


export default Main;