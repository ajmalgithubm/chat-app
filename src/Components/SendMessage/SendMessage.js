import React, { useState } from 'react';
import './SendMessage.css';
import {db} from '../../Firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useContext } from 'react';
import { userContext } from '../../App';
import addImg from '../../Assets/download (1).png'
function SendMessage({scroll}) {
  const [message, setMessage] = useState('');
  const [image, setImage] = useState();
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
        <div className="send-message-image" style={{padding:'0 10px'}}>
          <label for="inputTag">
            <img src={addImg} width={30} height={30} alt="" />
            <input accept="image/png, image/jpg, image/gif, image/jpeg" id="inputTag" type="file"  onChange={(e) => setImage(() => {
              console.log(e.target.files[0]);
              setImage(e.target.files[0]);
            })}/>
          </label>
        </div>
        <div className="send-message-btn">
            <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default SendMessage
