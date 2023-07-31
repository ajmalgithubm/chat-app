import React from 'react';
import './Message.css';
import { useContext, useRef } from 'react';
import { userContext } from '../../App';

function Message({ id, avatar, name, text, imageUrl }) {

    const { user } = useContext(userContext);
    return (
        <div>
            <div className={(user.uid == id) ? "message-container-right" : "message-container-left"}>
                <div className="main-head-top">
                    <div className="message-profile-photo">
                        <img width={30} height={30} style={{ borderRadius: '50%' }} src={avatar} alt="" />
                    </div>
                    <div className="name ml-2">
                        <p>{name}</p>
                    </div>
                </div>
                <div className="name-chat-container">
                    {
                        (<div className="name-chat-container-img">
                            <img src={imageUrl ? imageUrl : ''} />
                        </div>) 
                    }
                    <div className="chat">
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
