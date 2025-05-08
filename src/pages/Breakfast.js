import React from 'react';
import '../styles/MealPage.css';

const breakfastItems = [
  {
    id: 1,
    name: 'Avocado Toast',
    description: 'Creamy avocado on artisan sourdough with a sprinkle of sea salt and red pepper flakes',
    image: '/images/breakfast/avocado-toast.jpg',
    price: '$12.99'
  },
  {
    id: 2,
    name: 'Belgian Waffles',
    description: 'Crispy outside, fluffy inside, topped with fresh berries and maple syrup',
    image: '/images/breakfast/waffles.jpg',
    price: '$14.50'
  },
  {
    id: 3,
    name: 'Classic Eggs Benedict',
    description: 'Poached eggs and Canadian bacon on English muffins, topped with hollandaise sauce',
    image: '/images/breakfast/eggs-benedict.jpg',
    price: '$16.99'
  }
];

const Breakfast = () => {
  return (
    <div className="meal-page breakfast-page">
      <h2 className="page-title">Breakfast Menu</h2>
      <p className="page-description">Start your day with our delicious breakfast options!</p>
      
      <div className="meal-grid">
        {breakfastItems.map(item => (
          <div className="meal-card" key={item.id}>
            <div className="meal-image">
              <img src={process.env.PUBLIC_URL + item.image} alt={item.name} />
            </div>
            <div className="meal-content">
              <h3 className="meal-title">{item.name}</h3>
              <p className="meal-description">{item.description}</p>
              <span className="meal-price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breakfast;