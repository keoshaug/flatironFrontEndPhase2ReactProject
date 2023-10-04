import React, { useState} from "react";
import Card  from "./Card";

function NewCardForm () {
    const [formData, setFormData] = useState({
        quote: "",
        author: "",
        work: "",
        category: ""
    })

    function handleChange(e) {
            setFormData({...formData, [e.target.name]: e.target.value}) 
    }

    
    function handleSubmit(e) {
        e.preventDefault()

        const configOBj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }

        fetch('http://localhost:4000/data', configOBj)
        .then(r => r.json())
        .then(setQuotes)
    }

    return (
            <div className="new-card-form">
                <h3>Add New Quote</h3>
                <form name="new-card-form" id="cardForm">
                    <input type="text" name="quote" value={formData.quote} placeholder="Quote" onChange={handleChange}/>
                    <input type="text" name="author"  value={formData.author} placeholder="Author" onChange={handleChange}/>
                    <input type="text" name="work"  value={formData.work} placeholder="Work" onChange={handleChange} />
                    <input type="text" name="category"  value={formData.category} placeholder="Category" onChange={handleChange} />
                    <button type="submit" onClick={handleSubmit}>Add Quote</button>
                </form>
            </div>
    );
}


export default NewCardForm;