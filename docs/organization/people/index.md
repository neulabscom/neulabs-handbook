---
title: Our People
---

import ItemList from '@site/src/components/ItemList';
import UserCard from '@site/src/components/UserCard';
export const teamMember1 = {
  id: 1,
  imageSrc: 'https://via.placeholder.com/150',
  name: 'Image 1',
  jobTitle: 'Subtitle 1',
  socialLinks: [
    {name: 'github', link: 'https://github.com/username'},
    {name: 'linkedin', link: 'https://linkedin.com/in/username'},
  ]
};

export const teamMember2 = {
  id: 2,
  imageSrc: 'https://via.placeholder.com/150',
  name: 'Image 2',
  jobTitle: 'Subtitle 2',
  socialLinks: [
    {name: 'github', link: 'https://github.com/username'},
    {name: 'linkedin', link: 'https://linkedin.com/in/username'},
  ]
};

export const teamMember3 = {
  id: 3,
  imageSrc: 'https://via.placeholder.com/150',
  name: 'Image 1',
  jobTitle: 'Subtitle 1',
  socialLinks: [
    {name: 'github', link: 'https://github.com/username'},
    {name: 'linkedin', link: 'https://linkedin.com/in/username'},
  ]
};

export const teamMember4 = {
  id: 4,
  imageSrc: 'https://via.placeholder.com/150',
  name: 'Image 2',
  jobTitle: 'Subtitle 2',
  socialLinks: [
    {name: 'github', link: 'https://github.com/username'},
    {name: 'linkedin', link: 'https://linkedin.com/in/username'},
  ]
};

export const teamMember5 = {
  id: 5,
  imageSrc: 'https://via.placeholder.com/150',
  name: 'Image 1',
  jobTitle: 'Subtitle 1',
  socialLinks: [
    {name: 'github', link: 'https://github.com/username'},
    {name: 'linkedin', link: 'https://linkedin.com/in/username'},
  ]
};


export const userCards = [
<UserCard item={teamMember1} />,
<UserCard item={teamMember2} />,
<UserCard item={teamMember3} />,
<UserCard item={teamMember4} />,
<UserCard item={teamMember5} />,
];

<ItemList items={userCards} />

<div style={{ margin: '50px 0' }}></div>

<ItemList items={userCards} />
