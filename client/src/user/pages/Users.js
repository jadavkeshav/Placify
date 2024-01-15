import React from 'react'
import UsersList from '../components/UsersList'

export default function Users() {
  const USERS = [{ id: 'u1', name: 'Keshav', image: 'https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-750-20151104113424.jpg', places: 3 }];
  return (
    <div>
      <UsersList items={USERS} />
    </div>
  )
}
