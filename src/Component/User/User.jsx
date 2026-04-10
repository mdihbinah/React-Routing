import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {name, email, phone, id} = user
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
        </div>
    );
};

export default User;