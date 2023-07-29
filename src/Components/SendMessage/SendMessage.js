import React, { useState } from 'react';
import './SendMessage.css';
import {db} from '../../Firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useContext } from 'react';
import { userContext } from '../../App';
function SendMessage() {
  const [message, setMessage] = useState('');
  const {user} = useContext(userContext);
  const addMessage = async () => {
    if(message.trim() === ''){
      alert('Enter the text');
      return
    }
    await addDoc(collection(db, 'messages'), {
      text:message,
      id:user.uid,
      name: user.displayName,
      avatar:user.photoURL,
      createdAt : serverTimestamp()
    })
  }
  return (
    <div>
      <div className="send-message">
        <div className="send-message-input">
            <input type="text" placeholder='text the messages...' onChange={(e) => setMessage(e.target.value)}/>
        </div>
        <div className="send-message-btn">
            <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default SendMessage
