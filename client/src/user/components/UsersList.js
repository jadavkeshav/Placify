import React from 'react';
import './UsersList.css';
import UserItem from './UserItem';
function UsersList(props) {
    if (props.items.lenght === 0) {
        return (
            <div className="center">
                <h2>No Users Found</h2>
            </div>
        )
    }
    else {
        return (
            <ul className='users-list'>
                {props.items.map(user => (
                    <UserItem key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.places} />
                ))}
            </ul>
        )
    }
}

export default UsersList
