---
title: Our People
id: people
---

import { danieleDapuzzo, edoardoRolle, sergioVagni, skenderMoglica, nicholasRoscino, giuseppeSchipani } from '@site/src/components/people';
import ItemList from '@site/src/components/ItemList';
import UserCard from '@site/src/components/UserCard';



export const userCards1 = [
    <UserCard item={giuseppeSchipani} />,
];

export const userCards2 = [
    <UserCard item={skenderMoglica} />,
    <UserCard item={sergioVagni} />,
    <UserCard item={nicholasRoscino} />,
];


export const userCards3 = [
    <UserCard item={danieleDapuzzo} />,
    <UserCard item={edoardoRolle} />,
];

<ItemList items={userCards1} />

<div style={{ margin: '50px 0' }}></div>

<ItemList items={userCards2} />

<div style={{ margin: '50px 0' }}></div>

<ItemList items={userCards3} />
