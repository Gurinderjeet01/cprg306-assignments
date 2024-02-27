import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-gray-100 border border-gray-200 p-4 rounded-md shadow-md mb-4">
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 mb-1">Quantity: {quantity}</p>
      <p className="text-gray-600">Category: {category}</p>
    </li>
  );
};

export default Item;
