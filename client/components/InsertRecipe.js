import {useState} from 'react';
import React from "react";
import { json } from 'react-router-dom';

const InsertRecipe = () => {
  const [url, setUrl] = useState();
  const [name, setName] = useState();
  const handleClick = (event) => {
    event.preventDefault()
  // Send data to the backend via POST
  fetch('/insertRecipe', {  // 
    method: 'POST', 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({name, url}), 
  });
}
    return (
        <div className="insertRecipeBox">
          <form onSubmit={handleClick}>
            <label>Insert your recipe</label>
            <br></br>
            <div className=""></div>
            <input text = "text" className="recipeForm" style={{width: 500, borderRadius:5}} onChange={(e) => setName(e.target.value)}/>
            <input text = "text" className="recipeForm" style={{width: 500, borderRadius:5}} onChange={(e) => setUrl(e.target.value)}/>
            <button>Add Recipe</button>
            <div className="lineBreak">
            <hr
            style=  {{
            color: "lightgrey",
            width: 1000
                    }}
                />
            </div>
          </form>
        </div>
    )
}
export default InsertRecipe;