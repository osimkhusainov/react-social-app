import React from 'react';
import { connect } from 'react-redux';
import { updateNewPostActionCreator, userPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';



// const MyPostsContainer = (props) => {
//     let state = props.store.getState();
//     const addPost = () => {
//         props.store.dispatch(userPostActionCreator());


//     };
//     const sentNewPost = (text) => {
//         let action = updateNewPostActionCreator(text);
//         props.store.dispatch(action);
//     };

//     return (
//         <MyPosts 
//         postData={state.profilePages.postData}
//         newPostData={state.profilePages.newPostData}
//         sentNewPost={sentNewPost} 
//         addPost={addPost} />
//     )
// }
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