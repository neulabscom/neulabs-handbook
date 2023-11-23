---
title: Our People
id: people
---

import {fabrizioCafolla, danieleDapuzzo, edoardoRolle, sergioVagni, skenderMoglica, andreaPregnolato, nicholasRoscino, simoneSquillace, giuseppeSchipani, filippoLocoro} from '@site/src/components/people';
import ItemList from '@site/src/components/ItemList';
import UserCard from '@site/src/components/UserCard';



export const userCards1 = [
    <UserCard item={giuseppeSchipani} />,
    <UserCard item={andreaPregnolato} />,
];

export const userCards2 = [
    <UserCard item={fabrizioCafolla} />,
    <UserCard item={skenderMoglica} />,
    <UserCard item={sergioVagni} />,
    <UserCard item={filippoLocoro} />,
];


export const userCards3 = [
    <UserCard item={danieleDapuzzo} />,
    <UserCard item={edoardoRolle} />,
    <UserCard item={nicholasRoscino} />,
    <UserCard item={simoneSquillace} />,
];

<ItemList items={userCards1} />

<div style={{ margin: '50px 0' }}></div>

<ItemList items={userCards2} />

<div style={{ margin: '50px 0' }}></div>

<ItemList items={userCards3} />
