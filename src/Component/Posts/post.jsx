import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    console.log(post);
    const {id, title} = post
    const navigate = useNavigate()
    const handleNavigate = () =>{
        navigate(`/posts/${id}`)
    }


    const postStyle = {
        border: '2px solid lightgreen',
        borderRadius: '20px',
        padding: '10px',
        margin: '10px auto',
        width: '80%',
    }
    return (
        <div style={postStyle}>
            <h3>{title}</h3>
            <Link to={`/posts/${id}`} >
            <button>Show Details</button>
            </Link>
            <button onClick={handleNavigate}>Details of: {id}</button>
        </div>
    );
};

export default Post;