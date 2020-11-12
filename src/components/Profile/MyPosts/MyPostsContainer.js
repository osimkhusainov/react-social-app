import React from 'react';
import { connect } from 'react-redux';
import { updateNewPostActionCreator, userPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


let mapStateToProps = (state) => {
    return {
        postData: state.profilePages.postData,
        newPostData: state.profilePages.newPostData
    }
};
let mapDispatchToProps = (dispatch) => {
    return{
        sentNewPost: (text) => {
            let action = updateNewPostActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(userPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;