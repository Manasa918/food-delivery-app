import React from 'react';

const FoodItem = ({ food }) => (
  <div className="food-item">
    <img src={food.image} alt={food.name} />
    <h3>{food.name}</h3>
    <p>${food.price}</p>
    <button>Add to Cart</button>
  </div>
);

export default FoodItem;