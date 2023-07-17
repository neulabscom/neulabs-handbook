import React from 'react';

const ImageList = ({ items }) => {
  return (
    <div style={{ display: 'flex' }}>
      {items.map((item, index) => (
        <div key={index} style={{ textAlign: 'center', margin: '0 10px' }}>
          <img src={item.imageSrc} alt={item.title} style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%' }} />
          <div style={{ marginTop: '10px' }}>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
