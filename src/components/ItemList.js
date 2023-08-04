import React from 'react';

const ItemList = ({ items }) => {
  const itemsPerRow = 4; // Number of items to display per row

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: items.length === 4 ? 'flex-start' : 'space-between',
  };

  const itemStyle = {
    width: 'calc(25% - 10px)', // Adjust the width as per your design, subtracting the required space
    flex: '1 1 auto', // Equal spacing between items
    margin: '10px', // Adjust the margin as per your design
  };

  return (
    <div style={containerStyle}>
      {items.map((item, index) => (
        <div key={index} style={itemStyle}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
