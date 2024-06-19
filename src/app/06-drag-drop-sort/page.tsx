'use client'
import React, { useState } from 'react';
import './style.css';

interface Item {
  id: string;
  content: string;
}

const initialItems: Item[] = [
  { id: '1', content: 'Item 1' },
  { id: '2', content: 'Item 2' },
  { id: '3', content: 'Item 3' },
  { id: '4', content: 'Item 4' },
];

const DDSort: React.FC = () => {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [draggingItem, setDraggingItem] = useState<string | null>(null);

  const handleDragStart = (id: string) => {
    setDraggingItem(id);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (id: string) => {
    if (draggingItem === null) return;

    const draggingIndex = items.findIndex(item => item.id === draggingItem);
    const dropIndex = items.findIndex(item => item.id === id);

    const updatedItems = [...items];
    const [removed] = updatedItems.splice(draggingIndex, 1);
    updatedItems.splice(dropIndex, 0, removed);

    setItems(updatedItems);
    setDraggingItem(null);
  };

  return (
    <div className="DDSort">
      <div className="list">
        {items.map(item => (
          <div
            key={item.id}
            className="list-item"
            draggable
            onDragStart={() => handleDragStart(item.id)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(item.id)}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DDSort;
