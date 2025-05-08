import React from 'react';

const lunchItems = [
  {
    id: 1,
    name: 'Grilled Chicken Salad',
    description: 'Tender grilled chicken on a bed of mixed greens with seasonal vegetables and balsamic vinaigrette',
    price: '$15.99'
  },
  {
    id: 2,
    name: 'Classic Cheeseburger',
    description: 'Angus beef patty with aged cheddar, lettuce, tomato, and special sauce on a brioche bun',
    price: '$17.50'
  },
  {
    id: 3,
    name: 'Mediterranean Wrap',
    description: 'Hummus, roasted vegetables, feta cheese, and olives in a warm spinach wrap',
    price: '$14.99'
  }
];

const Lunch = () => {
  return (
    <div>
      <h2>Lunch Menu</h2>
      <p>Perfect midday meals to keep you energized!</p>
      
      <div>
        {lunchItems.map(item => (
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

export default Lunch;