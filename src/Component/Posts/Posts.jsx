import React from 'react';
import { useLoaderData } from 'react-router';
import Post from './post';

const Posts = () => {
    const posts = useLoaderData()
    
    return (
        <div>
            <h1>There are my posts: {posts.length}</h1>
            <div className="">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;