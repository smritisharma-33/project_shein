import React from 'react';

const breakfastItems = [
  {
    id: 1,
    name: 'Avocado Toast',
    description: 'Creamy avocado on artisan sourdough with a sprinkle of sea salt and red pepper flakes',
    price: '$12.99'
  },
  {
    id: 2,
    name: 'Belgian Waffles',
    description: 'Crispy outside, fluffy inside, topped with fresh berries and maple syrup',
    price: '$14.50'
  },
  {
    id: 3,
    name: 'Classic Eggs Benedict',
    description: 'Poached eggs and Canadian bacon on English muffins, topped with hollandaise sauce',
    price: '$16.99'
  }
];

const Breakfast = () => {
  return (
    <div>
      <h2>Breakfast Menu</h2>
      <p>Start your day with our delicious breakfast options!</p>
      
      <div>
        {breakfastItems.map(item => (
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

export default Breakfast;