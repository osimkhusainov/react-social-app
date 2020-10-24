const   USER_POST = 'USER-POST',
        UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'Hi, how are you', likesCount: 20}
        ],
    newPostData: 'Hi'
}
const profileReducer = (state = initialState, action) => {
    if(action.type === USER_POST){
        let body = state.newPostData;
        return {
            ...state,
            postData: [...state.postData, {id: 5, message: body, likesCount: 2}],
            newPostData: ''
        };
    }
    if(action.type === UPDATE_NEW_POST){
        return {
            ...state,
            newPostData: action.newpost
        };
    }
    return state;
}
export const userPostActionCreator = () => ({type: USER_POST});
export const updateNewPostActionCreator = (text) => 
({type: UPDATE_NEW_POST, newpost: text});
export default profileReducer;