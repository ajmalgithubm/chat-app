import React from 'react';
import './Message.css';
import { useContext, useRef } from 'react';
import { userContext } from '../../App';

function Message({id, avatar, name,text}) {
    const {user} = useContext(userContext);
    return (
        <div>
            <div className={(user.uid == id)?"message-container-right":"message-container-left"}>
                <div className="message-profile-photo">
                    <img width={50} height={50} style={{ borderRadius: '50%' }} src={avatar} alt="" />
                </div>
                <div className="name-chat-container">
                    <div className="name">
                        <p>{name}</p>
                    </div>
                    <div className="chat">
                        <p>{text}.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
