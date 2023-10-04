import React from "react";
import Card  from "./Card";

function NewCardForm () {
    return (
            <div className="new-card-form">
                <h3>Add New Quote</h3>
                <form name="new-card-form" id="cardForm">
                    <input type="text" quote="quote" placeholder="Quote" />
                    <input type="text" author="author" placeholder="Author" />
                    <input type="text" work="work" placeholder="Work" />
                    <button type="submit">Add Quote</button>
                </form>
            </div>
    );
}


export default NewCardForm;