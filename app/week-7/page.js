"use client"

import { useState } from 'react';

import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';

export default function Page() {

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState()

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const clean = item.name.split(',')[0].trim();
    setSelectedItemName(clean);
  }

  return (
    <main >
      <h1 className='font-bold text-4xl p-2'>Shopping list</h1>
      <NewItem NewItem={handleAddItem} />
      <ItemList items={items} onItemSelect={handleItemSelect}/>
      <MealIdeas ingredient={selectedItemName}/>
    </main>
  );
}
