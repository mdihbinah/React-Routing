import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const data = useLoaderData()
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/posts`)
    }

    const sty = {
        border: '2px solid green',
        borderRadius: '20px',
        padding: '10px',
        margin: '30px'
    }

    return (
        <div style={sty}>
            <h3>{data.title}</h3>
            <p><small>{data.body}</small></p>
            <button onClick={handleNavigate}>Go Back</button>
        </div>
    );
};

export default PostDetails;