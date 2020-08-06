import React from 'react';
import style from './recipe.module.css'

const Recipe = ({data}) => {
    return (
        <div className={style.recipe}>
            <h1>{data.label}</h1>
            <ul>
                <h3>Ingredients:</h3>
                {data.ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>Total Calories: <strong>{Math.trunc(data.calories)}</strong></p>
            <img src={data.image} alt="" className={style.image}></img>
        </div>
    );
};

export default Recipe;