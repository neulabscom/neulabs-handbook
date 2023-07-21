import React from 'react';

const UserCard = ({ item }) => {
  return (
    <div style={{ display: 'flex' }}>
        <div key={item.id} style={{ textAlign: 'center', margin: '0 10px' }}>
          <img src={item.imageSrc} alt={item.name} style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%' }} />
          <div style={{ marginTop: '10px' }}>
            <h3>{item.name}</h3>
            <p>{item.jobTitle}</p>
          </div>
        </div>
    </div>
  );
};

export default UserCard;