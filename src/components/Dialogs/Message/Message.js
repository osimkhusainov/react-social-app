import React from 'react';
import './../Dialogs.scss';



const Message = ({message, name}) => {

    return (
            <div className="dialogs__window">
                <div className="dialogs__message">{message}</div>
                <div className="dialogs__usname">
                        <div className="dialogs__umessage">{name}</div>
                </div>
            </div>

    )
}

export default Message;