import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({user}) => {
    const {name, email, phone, id} = user
    const [showInfo, setShowInfo] = useState(false)


    const usersPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())

    const userStyle = {
        border: '2px solid lightgreen',
        borderRadius: '20px',
        padding: '5px',
        margin: '10px'
    }
    return (
        <div style={userStyle}>
            <h2>Name:{name}</h2>
            <h4>Email:{email}</h4>
            <h4><small>Phone:{phone}</small></h4>
            <Link to={`/users/${id}`}>Details</Link>
            <button onClick={() => setShowInfo(!showInfo)} >{showInfo? 'Hide' : 'Show'} info</button>
            {
                showInfo && <Suspense fallback={<span>Loading.....</span>} >
                    <UserDetails2 usersPromise={usersPromise}></UserDetails2>
                </Suspense>
            }
        </div>
    );
};

export default User;