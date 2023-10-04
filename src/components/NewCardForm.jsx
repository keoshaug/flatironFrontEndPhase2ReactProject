import React, { useState} from "react";
import Card  from "./Card";

function NewCardForm () {
    const [formData, setFormData] = useState({
        quote: "",
        author: "",
        work: "",
        category: ""
    })

    function handleSubmit(e) {
        e.preventDefault()
    }


    return (
            <div className="new-card-form">
                <h3>Add New Quote</h3>
                <form name="new-card-form" id="cardForm">
                    <input type="text" quote="quote" value={formData.quote} placeholder="Quote" onChange={handleChange}/>
                    <input type="text" author="author"  value={formData.author} placeholder="Author" onChange={handleChange}/>
                    <input type="text" work="work"  value={formData.work} placeholder="Work" onChange={handleChange} />
                    <input type="text" work="category"  value={formData.category} placeholder="Category" onChange={handleChange} />
                    <button type="submit" onClick={handleSubmit}>Add Quote</button>
                </form>
            </div>
    );
}


export default NewCardForm;