import React, {useState, useEffect} from "react";
import Cards from "./cards"
const recipesArray = await fetch('/recipes').then(res => res.json())
const RecipesContainer = (props) => {
    const [state, setState] = useState([]);
    useEffect(() => {
        setState(recipesArray);
    })
    // console.log(state)
    let cards = []
    for(let i = 0; i < state.length; i++) {
        // const {name, ingredients, instructions} = state[i]
        cards.push(<Cards data={state[i]}/>)
    }
    
    return (
        <div className="recipesContainer">
            <h1>Your Recipes</h1>
            <hr/>
            <div className="cards-grid">
            {cards}
            </div>
        </div>
    )
}
export default RecipesContainer;