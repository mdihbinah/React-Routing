import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData()
    console.log(user);
    const {website, phone} = user
    return (
        <div>
            <h1>User Details here</h1>
            <h2>{website}</h2>
            <h2>{phone}</h2>
        </div>
    );
};

export default UserDetails;