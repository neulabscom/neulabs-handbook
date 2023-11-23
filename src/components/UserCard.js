import React from 'react';
import SocialBadge from './SocialBadge';  

const UserCard = ({ item }) => {
  const linkTeamPage = `/teams/${item.team}-team`;
  return (
    <div style={{ display: 'flex' }}>
        <div key={item.id} style={{ textAlign: 'center', margin: '0 10px' }}>
          <img src={item.imageSrc} alt={item.name} style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%' }} />
          <div style={{ marginTop: '10px' }}>
            <h3>{item.name}</h3>
            <a href={linkTeamPage}><p>{item.jobTitle}</p></a>
            <SocialBadge github={item.socialLinks.find(link => link.name === 'github').link} 
             linkedin={item.socialLinks.find(link => link.name === 'linkedin').link} />
          </div>
        </div>
    </div>
  );
};

export default UserCard;
