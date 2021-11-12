import { useState, useEffect } from 'react';
import PostItem from './PostItem';

const API_URL = 'http://localhost:5000/origami';


const PostList = () => {

    const [homes, setPosts] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/homes`)
        .then(res => res.json())
        .then(result => setPosts(result))
    });

    return (
        <>
        <ul>
        {homes.map(x => <PostItem color='blue'>{x.post}</PostItem>)}
        </ul>
        </>
    );
};

export default PostList;
