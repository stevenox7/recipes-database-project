import React from 'react';
import { Link } from 'react-router-dom';
import InsertRecipe  from './components/InsertRecipe';

export function App() {
    return (
        <div className='header'>
            <h1>ReciPal</h1>
            <InsertRecipe/>
        </div>
    )
}