import { useState, useEffect } from 'react';
import PostItem from './PostItem';

const API_URL = 'http://localhost:5000/';


const PostList = () => {

    const [homes, setPosts] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}`)
        .then(res => res.json())
        .then(result => setPosts(result))
    });

    return (
        <>
        <ul>
            {homes.map(x => <PostItem color='blue' key={x._id}>{x.post}</PostItem>)}
        </ul>
        </>
    );
};

export default PostList;
