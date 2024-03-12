import React, { useState, useEffect } from 'react';
import Item from './item';

const ItemList = ({ items = [], onItemSelect }) => { 
  const [sortBy, setSortBy] = useState('name');
  const [sortedItems, setSortedItems] = useState([]);

  useEffect(() => {
    if (Array.isArray(items)) {
      const sorted = [...items].sort((a, b) => {
        if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
          return a.category.localeCompare(b.category);
        }
      });
      setSortedItems(sorted);
    }
  }, [items, sortBy]);

  return (
    <div>
      <button style={{ backgroundColor: sortBy === 'name' ? 'lightblue' : 'white' }} onClick={() => setSortBy('name')}>Sort by Name</button>
      <button style={{ backgroundColor: sortBy === 'category' ? 'lightblue' : 'white' }} onClick={() => setSortBy('category')}>Sort by Category</button>
      <ul>
        {sortedItems.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} onSelect={() => onItemSelect(item)} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
