---
title: Our People
id: people
---

import {fabrizioCafolla, danieleDapuzzo, edoardoRolle, sergioVagni, skenderMoglica, andreaPregnolato, nicholasRoscino} from '@site/src/components/people';
import ItemList from '@site/src/components/ItemList';
import UserCard from '@site/src/components/UserCard';



export const userCards1 = [
<UserCard item={andreaPregnolato} />,
<UserCard item={fabrizioCafolla} />,
<UserCard item={danieleDapuzzo} />,
<UserCard item={skenderMoglica} />,
];


export const userCards2 = [
<UserCard item={sergioVagni} />,
<UserCard item={nicholasRoscino} />,
<UserCard item={edoardoRolle} />,
];

<ItemList items={userCards1} />

<div style={{ margin: '50px 0' }}></div>

<ItemList items={userCards2} />
