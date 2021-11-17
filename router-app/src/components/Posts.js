import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../style/Posts.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, fetchUsers } from '../actions/actions';
import Spinner from './Spinner'

export const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts);
    const users = useSelector(state => state.users);
    const isLoading = useSelector(state => state.isLoading);

    let postId = [];
    let usersByPosts = [];

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);


    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    for (let item of posts) {
        if (postId.includes(item.userId)) {
            continue;
        }
        else {
            postId.push(item.userId)
        }
    }

    for (let item of users) {
        if (postId.includes(item.id)) {
            usersByPosts.push(item)
        }
    }

    if(isLoading) {
        return <Spinner />
    }

    return (
        <div className="container">
            {usersByPosts.map((user) => (
                <div className="user-card">
                    <Link to={`/posts/${user.id}`}>
                        {user.name}
                    </Link>
                </div>
            ))}
        </div>
    );
}


export default Posts
