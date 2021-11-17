import React from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Posts } from '../components/Posts'

export const PostDetails = () => {
    const { id } = useParams();
    const posts = useSelector(state => state.posts)
    let postsByUsersId = [];

    for (let item of posts) {
        if (item.userId === +id) {
            postsByUsersId.push(item)
        }
    }

    return (
        <div>
            <Posts />
            {postsByUsersId.map((post) => (
                <div className="container-posts">
                    <div key={post.id} className="post-details">
                        <p><strong>{post.title}</strong></p>
                        <p>{post.body}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostDetails
