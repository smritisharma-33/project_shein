import React from 'react';
import '../styles/MealPage.css';

const lunchItems = [
  {
    id: 1,
    name: 'Grilled Chicken Salad',
    description: 'Tender grilled chicken on a bed of mixed greens with seasonal vegetables and balsamic vinaigrette',
    image: '/images/lunch/chicken-salad.jpg',
    price: '$15.99'
  },
  {
    id: 2,
    name: 'Classic Cheeseburger',
    description: 'Angus beef patty with aged cheddar, lettuce, tomato, and special sauce on a brioche bun',
    image: '/images/lunch/cheeseburger.jpg',
    price: '$17.50'
  },
  {
    id: 3,
    name: 'Mediterranean Wrap',
    description: 'Hummus, roasted vegetables, feta cheese, and olives in a warm spinach wrap',
    image: '/images/lunch/mediterranean-wrap.jpg',
    price: '$14.99'
  }
];

const Lunch = () => {
  return (
    <div className="meal-page lunch-page">
      <h2 className="page-title">Lunch Menu</h2>
      <p className="page-description">Perfect midday meals to keep you energized!</p>
      
      <div className="meal-grid">
        {lunchItems.map(item => (
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

export default Lunch;