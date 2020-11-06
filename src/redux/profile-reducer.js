const   USER_POST = 'USER-POST',
        UPDATE_NEW_POST = 'UPDATE-NEW-POST',
        SET_PROFILE_USERS = 'SET_PROFILE_USERS';

let initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'Hi, how are you', likesCount: 20}
        ],
    newPostData: 'Hi',
    profile: null
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
    if(action.type === SET_PROFILE_USERS){
        return {
            ...state,
            profile: action.profile
        };
    }
    return state;
}
export const userPostActionCreator = () => ({type: USER_POST});
export const updateNewPostActionCreator = (text) => 
({type: UPDATE_NEW_POST, newpost: text});
export const setProfileUsers = (profile) => ({type: SET_PROFILE_USERS, profile});
export default profileReducer;