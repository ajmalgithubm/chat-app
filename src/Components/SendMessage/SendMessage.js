import React from 'react';
import './SendMessage.css';
function SendMessage() {
  return (
    <div>
      <div className="send-message">
        <div className="send-message-input">
            <input type="text" placeholder='text the messages...'/>
        </div>
        <div className="send-message-btn">
            <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default SendMessage
