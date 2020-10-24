import React from 'react';
import './Dialogs.scss';
import './Message/MessageSent.scss'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';



const Dialogs = (props) => {
    //Map
    let dialogsElement = props.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messageElements = props.messageData.map( message => <Message message={message.message} name={message.name} />);
    const newMessageElement = React.createRef();
    const addMessage = () => {
        props.messagePostAction();
        newMessageElement.current.value = "";
    };
    const sentNewMessage = () => {
        const text = newMessageElement.current.value;
        props.updateNewPostAction(text);
    }
    return (

        <div className="dialogs"> 
            <div className="dialogs__items">
                {dialogsElement}
            </div>
            <div className="dialogs__messages">
                {messageElements}
            </div>
            <div className="messent">
                <textarea ref={newMessageElement} onChange={sentNewMessage} value={props.messagePostData} className="messent__textarea" />
                <button onClick={ addMessage } className="messent__btn">Sent</button>
            </div>
            
        </div>
    )
}

export default Dialogs;