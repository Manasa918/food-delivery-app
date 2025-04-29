const FoodItem = require('../models/FoodItem');

const getFoods = async (req, res) => {
  try {
    const foods = await FoodItem.find();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { getFoods };
