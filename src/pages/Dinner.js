import React from 'react';
import '../styles/MealPage.css';

const dinnerItems = [
  {
    id: 1,
    name: 'Herb-Crusted Salmon',
    description: 'Wild-caught salmon with an herb crust, served with roasted vegetables and lemon butter sauce',
    image: '/images/dinner/salmon.jpg',
    price: '$24.99'
  },
  {
    id: 2,
    name: 'Filet Mignon',
    description: '8oz prime filet with garlic mashed potatoes and seasonal vegetables',
    image: '/images/dinner/filet.jpg',
    price: '$32.50'
  },
  {
    id: 3,
    name: 'Vegetable Risotto',
    description: 'Creamy arborio rice with seasonal vegetables, white wine, and parmesan cheese',
    image: '/images/dinner/risotto.jpg',
    price: '$19.99'
  }
];

const Dinner = () => {
  return (
    <div className="meal-page dinner-page">
      <h2 className="page-title">Dinner Menu</h2>
      <p className="page-description">Elegant evening options to complete your day!</p>
      
      <div className="meal-grid">
        {dinnerItems.map(item => (
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

export default Dinner;