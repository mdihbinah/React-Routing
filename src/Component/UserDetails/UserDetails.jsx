import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData()
    console.log(user);
    const {website, phone} = user
    const id = useParams().userId;
    console.log(id);
    
    return (
        <div>
            <h1>User Details of {id} here</h1>
            <h2>{website}</h2>
            <h2>{phone}</h2>
        </div>
    );
};

export default UserDetails;