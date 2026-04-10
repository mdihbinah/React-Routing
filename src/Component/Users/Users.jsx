import React from 'react';
import { Link, useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {

    const userData = useLoaderData()

    console.log(userData);
    return (
        <div>
            <h1>Hello Users....</h1>
            <ul>
                {
                    userData.map(user => <User key={user.id} user={user}></User>)
                }
            </ul>
        </div>
    );
};

export default Users;