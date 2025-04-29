import React, { useEffect, useState } from 'react';
import FoodItem from '../components/FoodItem';
import axios from 'axios';

const Home = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/foods')
      .then(res => setFoods(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="home">
      <h2>Menu</h2>
      <div className="food-list">
        {foods.map(food => (
          <FoodItem key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Home;