import React from 'react';
import Post from './Post/Post';
import './Myposts.scss';



const MyPosts = (props) => {
    const postElements = props.postData.map( post => <Post message={post.message} likesCount={post.likesCount} />);
    const newPostElement = React.createRef();
    const addPost = () => {
        props.addPost();
        newPostElement.current.value = '';

    };
    const sentNewPost = () => {
        let text = newPostElement.current.value;
        props.sentNewPost(text);
    }
    return (
        <div className="sent">
            <div className="sent__title">New Post</div>
            <div className="sent__block">
                <textarea ref={newPostElement} value={props.newPostData} onChange={sentNewPost} className="sent__input" />
                <button onClick={ addPost } className="sent__btn">Sent</button>
            </div>
            {postElements}
        </div>
    )
}

export default MyPosts;