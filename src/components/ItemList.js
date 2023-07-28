import React from 'react';

const ItemList = ({ items }) => {
  return (
    <div style={{ display: 'flex' }}>
      {items.map((item, index) => (
            item
      ))}
    </div>
  );
};

export default ItemList;
