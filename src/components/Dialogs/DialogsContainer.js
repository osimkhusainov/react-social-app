import React from 'react';
import {messagePostActionCreator, updateNewPostActionCreator} from './../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';





function mapStateToProps(state) {
    return {
        dialogsData: state.dialogsPages.dialogsData,
        messageData: state.dialogsPages.messageData
    }
}
function mapDispatchToProps(dispatch){
    return{
        messagePostAction: () => {
            dispatch(messagePostActionCreator());
        },
        updateNewPostAction: (text) => {
            const action = updateNewPostActionCreator(text)
            dispatch(action);
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;