---
title: Our People
id: people
slug: /organization/people
---

Working in progress...

import ItemList from '@site/src/components/ItemList';
import UserCard from '@site/src/components/UserCard';
import allUsers from '@site/src/components/common/people';

export const teamUsers = allUsers;



export const userCards = teamUsers.map((user, index) => (
        <UserCard item={user} />
      ));

<ItemList items={userCards} />
