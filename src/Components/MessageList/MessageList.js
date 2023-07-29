import React from 'react'
import './MessageList.css';
import Message from '../Message/Message';
function MessageList() {
    return (
        <div>
            <div className="message-list">
                <div className="message">
                    <Message />
                    <Message isRight/>
                    <Message />
                    <Message />
                    <Message  isRight/>
                    <Message isRight />
                    <Message  />
                    <Message  />

                </div>
            </div>
        </div>
    )
}

export default MessageList
