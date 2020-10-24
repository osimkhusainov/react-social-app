import React from 'react';
import './Post.scss';

const Post = ({message, likesCount}) => {
    return (
        <div className="post">
            <img className="post__img" src="https://img.icons8.com/material/4ac144/256/user-male.png" alt="post" />
            <div className="post__text"> {message}
            </div>
            <span className="post__like">Like {likesCount}</span>
            
        </div>
    )
}

export default Post;