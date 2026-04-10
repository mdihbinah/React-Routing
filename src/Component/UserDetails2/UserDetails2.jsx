import React, { use } from 'react';

const UserDetails2 = ({usersPromise}) => {
    const user = use(usersPromise)
    return (
        <div>
            <p><small>{user.name}</small></p>
            <p><small>{user.username}</small></p>
            <h5>{user.email}</h5>
            <h5>{user.website}</h5>
        </div>
    );
};

export default UserDetails2;