const  UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE',
       MESSAGE_POST = 'MESSAGE-POST';

let initialDialog = {
    dialogsData: [
        {id: 1, name: 'Igor'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Osim'},
        {id: 5, name: 'Kris'}
        ],
    messageData: [
        {id: 1, message: 'Hi', name: 'Osim'},
        {id: 2, message: 'How are you?', name: 'Me'},
        {id: 3, message: 'Good', name: 'Osim'}
        ],
    messagePostData: 'Hello'
}
const dialogsReducer = (state = initialDialog, action) => {
    if(action.type === MESSAGE_POST){
        let body = state.messagePostData;
        return {
            ...state,
            messageData: [...state.messageData, {id: 4, message: body, name: 'Osim'}],
            messagePostData: ''
        
        };
    };
    if(action.type === UPDATE_NEW_MESSAGE){
        return {
            ...state,
            messagePostData: action.newpost
        
        };
    };
    return state;
};

export const messagePostActionCreator = () => ({type: MESSAGE_POST});
export const updateNewPostActionCreator = (text) => 
({type: UPDATE_NEW_MESSAGE, newpost: text});
export default dialogsReducer;