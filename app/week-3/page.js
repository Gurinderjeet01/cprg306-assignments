import React from 'react';
import ItemList from './item-list'; // Assuming the ItemList component is in the same directory

const Page = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
