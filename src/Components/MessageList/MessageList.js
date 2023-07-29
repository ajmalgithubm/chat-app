import React, { useState } from 'react'
import './MessageList.css';
import Message from '../Message/Message';
function MessageList() {
    const [messageList, setMessageList] = useState([]);
    return (
        <div>
            <div className="message-list">
                <div className="message">
                    <Message/>
                </div>
            </div>
        </div>
    )
}

export default MessageList
