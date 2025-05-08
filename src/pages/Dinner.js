import React from 'react';

const dinnerItems = [
  {
    id: 1,
    name: 'Herb-Crusted Salmon',
    description: 'Wild-caught salmon with an herb crust, served with roasted vegetables and lemon butter sauce',
    price: '$24.99'
  },
  {
    id: 2,
    name: 'Filet Mignon',
    description: '8oz prime filet with garlic mashed potatoes and seasonal vegetables',
    price: '$32.50'
  },
  {
    id: 3,
    name: 'Vegetable Risotto',
    description: 'Creamy arborio rice with seasonal vegetables, white wine, and parmesan cheese',
    price: '$19.99'
  }
];

const Dinner = () => {
  return (
    <div>
      <h2>Dinner Menu</h2>
      <p>Elegant evening options to complete your day!</p>
      
      <div>
        {dinnerItems.map(item => (
          <div key={item.id}>
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dinner;