import React from 'react';
import InsertRecipe  from './components/InsertRecipe';
import RecipesContainer from './components/recipesContainer';
export function App() {
    return (
        <div className='header'>
            <h1>ReciPal</h1>
            <InsertRecipe/>
            <RecipesContainer/>
        </div>
    )
}